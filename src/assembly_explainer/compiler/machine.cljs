(ns assembly-explainer.compiler.machine
  [:require [reagent.core :as r]
   [assembly-explainer.compiler.parser :refer [parse]]
   [assembly-explainer.compiler.core :as c]
   [assembly-explainer.compiler.byte-object :as bobj]
   [assembly-explainer.util :as u]
   [assembly-explainer.state]
   [goog.string :as gstr]
   [goog.string.format]])

;; Get the value of the register with the given name

(defn get-register-value [state name]
  (bobj/get-value-at-index (get-in state [:registers (keyword name)]) 0 8))

(defn set-register-value [state name value size] 
  (update-in state [:registers name] bobj/move-into value 0 size))

;; Compute the location an expression like '0x5(%rsp)' points to.
(defn get-indirection-location [state [_ & location]]
  (let [base-value (get-register-value state (first location))]
    (case (count location)
      1 base-value
      #_2 #_(add-offset base-value (second location)))))

;; Take values like 0 or [:register "rax"] and return an array which can be used for
;; get-in and update-in like [:stack :memory 0] or [:registers :rax] respectively
(defn complete-state-path [state arg]
  (cond
    (= (first arg) :register) [:registers (keyword (second arg))]
    (= (first arg) :indirection) (complete-state-path state (get-indirection-location state arg))))

;; [:indirection [:register :rsp]] -> whatever rsp points to

(defn update-path [state path f]
  (update-in state (complete-state-path state path) f))

(defn add-register [state register n]
  (set-register-value state register (u/add-to-last (get-register-value state register) n) 8))
(def inc-register #(add-register %1 %2 1))
(def dec-register #(add-register %1 %2 -1))

;; main processing function
(defmulti process-instruction (fn [_ op] (keyword (first op))))

(defmethod process-instruction :default [_ [op]]
  (js/console.log "Can't recognize " (str op) "."))

(defn resolve [state [type :as arg] size]
  (case type
    :literal arg
    :register (get-register-value state (second arg)) ;; -> [:stack 0]
    :indirection (let [[_ register & rest] arg
                       [_ v] (get-register-value state register)
                       offset (+ v (nth rest 0 0))]
                   (bobj/get-value-at-index (get state :stack) offset size))))

;; src here can only be :register, :literal, :indirection
;; it can't be :stack or :instruction
(defn mov [size [state [_ src dest]]]
  (let [src-val (resolve state src size)]
    (case (first dest)
      :register (set-register-value state (second dest) src-val size)
      :indirection (let [index (+ (second (get-register-value state :rsp)) (nth dest 2 0))]
                     (update state :stack bobj/move-into src-val index size)))))

;; If the src is an indirection, need to process it down to a value
;; If the dest is an indirection, need to make it into bytes and push them
;;  and then update the indices

(defmethod process-instruction :mov [& args] (mov 8 args))
  ;;  (assoc-in state (complete-state-path state dest) (resolve-src state src)))

(defn push [size [state [_ src]]]
  (let [src-val (resolve state src size)
        index (second (get-register-value state :rsp))]
    (-> state
        (update :stack bobj/move-into src-val index size)
        (add-register [:register :rsp] (* size -1)))))

(defmethod process-instruction :push [& args] (push 8 args))
(defmethod process-instruction :pushq [& args] (push 8 args))
(defmethod process-instruction :pushl [& args] (push 4 args))
(defmethod process-instruction :pushw [& args] (push 2 args))

(defn pop [size [state [_ dest]]]
  (mov size [(add-register state [:register :rsp] size) ["mov" [:indirection :rsp 0] dest]]))

(defmethod process-instruction :pop [& args] (pop 8 args))
(defmethod process-instruction :popq [& args] (pop 8 args))
(defmethod process-instruction :popl [& args] (pop 4 args))
(defmethod process-instruction :popw [& args] (pop 2 args))

(defmethod process-instruction :add [state [src dest]] (let [dest-path (complete-state-path state dest)
                                                             src-path  (complete-state-path state src)]
                                                         (update-in state dest-path + (get-in state src-path))))

(defn sub [state [src dest]] (let [dest-path (complete-state-path state dest)
                                   src-path  (complete-state-path state src)]
                               (update-in state dest-path - (get-in state src-path))))

(defmethod process-instruction :sub [state [label]] ())

(defn mul [state [src dest]] (let [dest-path (complete-state-path state dest)
                                   src-path  (complete-state-path state src)]
                               (update-in state dest-path * (get-in state src-path))))

(defmethod process-instruction :mul [state [label]] ())

(defn div [state [src]] (let [dest-path (complete-state-path state [:register :rax])
                              src-path  (complete-state-path state src)]
                          (update-in state dest-path / (get-in state src-path))))

(defmethod process-instruction :div [state [label]] ())

(defmethod process-instruction :jmp [state [label]] ())

;; main stepping function
(defn step [state] (let [[_ ripval] (second (get-register-value state :rip))
                         ins (get-in state [:instructions ripval])]
                     (-> state
                         (process-instruction ins)
                         (inc-register :rip))))

;; initializing the program state
;; Starting register is a byte object with 8 bytes of zeros
(def starting-register (bobj/move-into bobj/empty-object [nil 0] 0 8))

(def starting-registers (assoc (->> c/registers-raw
                                    (map (fn [r] [(keyword r) starting-register]))
                                    (into {}))
                               :rip (bobj/move-into bobj/empty-object [:literal 0] 0 8)
                               :rsp (bobj/move-into bobj/empty-object [:literal 0] 0 8)))

(defn init-program-state [program-input]
  (r/atom {:registers starting-registers
           :flags []
           :instructions (parse program-input)
           :stack bobj/empty-object}))

;; REPL
(comment
  ;; stub!
  (def state (init-program-state (nth assembly-explainer.state/programs 2)))
  @state

  (get-register-value @state :rsp)

  (bobj/get-value-at-index (get-in @state [:registers :rsp]) 0 8)
  (def obj (bobj/move-into bobj/empty-object [:literal 8] 0 8))
  (bobj/has-element obj 0)
  (bobj/move-into bobj/empty-object [:literal 0] 0 8)

  (push 8 [@state ["_" [:literal 8]]])
  
  (set-register-value @state :rsp (u/add-to-last (get-register-value @state :rsp) -1) 8)
  (dec-register @state :rsp)
  
  (swap! state step)
  (process-instruction @state ["push" [:literal 1]])
  (process-instruction @state ["popl" [:register :rax]])
  (process-instruction @state ["mov" [:literal 1] [:indirection :rsp]])

  (-> @state
      (process-instruction ["mov" [:literal 1] [:indirection :rsp 8]])
      (process-instruction ["mov" [:literal 2] [:indirection :rsp 0]])
      (process-instruction ["mov" [:indirection :rsp 0] [:register :rax]])
      (process-instruction ["mov" [:indirection :rsp 8] [:register :rbx]])))

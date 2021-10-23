(ns assembly-explainer.compiler.machine
  [:require [reagent.core :as r]
   [assembly-explainer.compiler.parser :refer [parse]]
   [assembly-explainer.compiler.core :as c]
   [assembly-explainer.util :as u]
   [assembly-explainer.state]
   [goog.string :as gstr]
   [goog.string.format]])

;; Get the value of the register with the given name


(defn get-register-value [state name]
  (get-in state [:registers (keyword name)]))

;; Adds the given offset to the given path
;; 0 -> 0 + offset
;; [:memory :stack 0] -> [:memory :stack 0+offset]
(defn add-offset [path offset]
  (if (number? path)
    (+ path offset)
    (u/add-to-last path offset)))

;; Compute the location an expression like '0x5(%rsp)' points to.
(defn get-indirection-location [state [_ & location]]
  (let [base-value (get-register-value state (first location))]
    (case (count location)
      1 base-value
      2 (add-offset base-value (second location)))))

;; Take values like 0 or [:register "rax"] and return an array which can be used for
;; get-in and update-in like [:stack :memory 0] or [:registers :rax] respectively
(defn complete-state-path [state arg]
  (cond
    (= (first arg) :register) [:registers (keyword (second arg))]
    (= (first arg) :indirection) (complete-state-path state (get-indirection-location state arg))))

;; Take and argument and resolve it to a literal value.
(defn resolve-src [state arg]
  (if (= (first arg) :indirection)
    (get-in state (complete-state-path state arg))
    arg))

;; [:indirection [:register :rsp]] -> whatever rsp points to

(defn resolve-indirection [state [type :as arg]]
  ())

(defn update-path [state path f]
  (update-in state (complete-state-path state path) f))

(defn add-register [state register n]
  (update-path state register #(+ % n)))
(def inc-register #(add-register %1 %2 1))
(def dec-register #(add-register %1 %2 -1))

;; main processing function
(defmulti process-instruction (fn [_ [op]] (keyword op)))

(defmethod process-instruction :default [_ [op]]
  (js/console.log "Can't recognize " (str op) "."))

;; Check if index is in the range of the given stack object
(defn in-stack-object-range [o index] (u/in-range (:range o) index))

;; Get the stack objects asociated with the given index
(defn get-stack-objects [state index]
  (filter #(in-stack-object-range % index) (get-in state [:memory :stack :indices])))

;; Get the first stack object associated with the given index
(defn get-stack-object [state index]
  (first (get-stack-objects state index)))

;; Apply f to the stack object that contains the given index
(defn update-stack-object [state index f]
  (update-in state [:memory :stack :indices]
             (fn [indices] (map (fn [object] (u/update-if object #(in-stack-object-range % index) f))) indices)))

;; Return true if there is a stack object associated with the given index
(defn has-stack-object [state index] (not-empty (count (get-stack-objects state index))))

(defn is-stack-object-invalid [{:keys [range]}]
  (> (first range) (second range)))

(defn remove-invalid-indices [state]
  (update-in state [:memory :stack :indices] #(remove is-stack-object-invalid %)))

(defn remove-stack-conflicts [state range])

(defn set-stack-type [state range type] 
  ())

(defn get-stack-from-state [state]
  (get-in state [:memory :stack]))

(defn get-bytes-from-object [state {:keys [range type]}]
  (let [{:keys [bytes]} (get-stack-from-state state)
        [s e] range
        object-bytes (->> bytes
                          (drop s)
                          (take (- e s)))]
    [type object-bytes]))

(defn get-stack-value [state p]
  (let [object (get-stack-object state p)
        bytes (get-bytes-from-object state object)]
    bytes))

(defn resolve [state [type :as arg]]
  (case type
    :literal arg
    :register (get-register-value state (second arg)) ;; -> [:stack 0]
    :indirection (let [[_ p] (get-register-value state (second arg))]
                   (get-stack-value state (+ p (nth arg 3))))))

;; Need to update the indices list
(defn move-into-stack [state [src index] size] 
  (let [[type value] (resolve state src)]
    (-> state
        (update-in [:memory :stack :bytes] u/ensure-length (+ index size))
        (update-in [:memory :stack :bytes] u/overwrite-range (list index (+ index size)) (u/num-to-bytes value)))))

;; something that was on the stack, this will require reaidng the indices
;; and interpreting them correctly
;; or the literal actual instruction (:mov arg1 arg2) (almost never do..)
;;  -- let's forget about this one 

;; src here can only be :register, :literal, :indirection
;; it can't be :stack or :instruction
(defn mov [state [src dest]]
  (assoc-in state (complete-state-path state dest) (resolve state src)))

;; If the src is an indirection, need to process it down to a value
;; If the dest is an indirection, need to make it into bytes and push them
;;  and then update the indices

(defmethod process-instruction :mov [state [_ src dest]]
  (mov state [src dest]))
  ;;  (assoc-in state (complete-state-path state dest) (resolve-src state src)))

(defn push [size [state [_ src]]]
  (-> state
      ;; write the bytes
      (mov [src [:indirection :rsp]])
      ;; add something to the indeces
      (add-register [:register :rsp] (* size -1))))

(defmethod process-instruction :push [& args] (push 8 args))
(defmethod process-instruction :pushq [& args] (push 8 args))
(defmethod process-instruction :pushl [& args] (push 4 args))
(defmethod process-instruction :pushw [& args] (push 2 args))

#_(defn pop [] ())

(defmethod process-instruction :pop [state [_ dest]] (-> state
                                                         (inc-register [:register :rsp])
                                                         (mov [[:indirection :rsp] dest])))

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
(defn step [state] (let [rip (get-register-value state :rip)
                         ins (resolve state rip)]
                     (-> state
                         (process-instruction ins)
                         (inc-register [:register :rip]))))

;; initializing the program state
(def starting-register nil)

(def starting-registers (assoc (->> c/registers-raw
                                    (map (fn [r] [(keyword r) starting-register]))
                                    (into {}))
                               :rip [:instruction 0]))

(defn init-program-state [program-input]
  (r/atom {:registers starting-registers
           :flags []
           :memory {:program {:instructions (parse program-input)}
                    :stack {:bytes [0 1 2 3 4 5 6 7]
                            :indices [{:range '(3 7)
                                       :type :literal}
                                      {:range '(9 8)
                                       :type :literal}]}}}))

;; REPL
(comment
  ;; stub!
  (def state (init-program-state (first assembly-explainer.state/programs)))

  (remove-invalid-indices @state)

  (update-in @state [:memory :stack :indices] #(remove is-stack-object-invalid %))

  (move-into-stack @state [[:literal 8] 8] 4)

  (u/overwrite-range (get-in @state [:memory :stack :bytes]) '(1, 2) (u/num-to-bytes 8))

  (get-stack-value @state 3)

  (swap! state step)

  (mov @state [[:register :rsp] [:register :rbp]])
  (mov @state [[:literal 1] [:indirection :rsp 1]])
  )

  @state
  


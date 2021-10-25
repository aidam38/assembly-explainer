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

(defn update-path [state path f]
  (update-in state (complete-state-path state path) f))

(defn add-register [state register n]
  (update-path state register #(u/add-to-last % n)))
(def inc-register #(add-register %1 %2 1))
(def dec-register #(add-register %1 %2 -1))

;; main processing function
(defmulti process-instruction (fn [_ op] (keyword (first op))))

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
  (u/is-range-invalid range))

;; Return a list of stack objects which were contained 
(defn uncollide-stack-object [obj a]
  (let [{range :range type :type} obj
        uncollided (u/uncollide-range a range)]
    (case (count uncollided)
      0 (list {:range '(0 0) :type type}) ;; Return with an invalid range that will be removed later
      1 (list {:range (first uncollided) :type type})
      2 (list {:range (first uncollided) :type type}
              {:range (second uncollided) :type type}))))

(defn uncollide-stack-objects [state range]
  (-> state
      (update-in [:memory :stack :indices]
                 (fn [objs] (map #(uncollide-stack-object % range) objs)))
      (update-in [:memory :stack :indices] flatten)))

(defn set-stack-type [state range type]
  (-> state
      (uncollide-stack-objects range)
      (update-in [:memory :stack :indices] conj {:range range :type type})
      (update-in [:memory :stack :indices] #(remove is-stack-object-invalid %))))

(defn get-stack-from-state [state]
  (get-in state [:memory :stack]))

(defn get-bytes-from-object [state {:keys [range type]}]
  (let [{:keys [bytes]} (get-stack-from-state state)
        [s e] range
        object-bytes (->> bytes
                          (drop s)
                          (take (- e s)))]
    [type object-bytes]))

;; Get a value that can be put into a register off of the stack
(defn get-value-from-stack [state index size]
  (let [obj (get-stack-object state index)
        stack (:bytes (get-stack-from-state state))
        bytes (->> stack
                   (drop (first (:range obj)))
                   (take size))]
    [(:type obj) (u/bytes-to-num bytes)]))

(defn resolve [state [type :as arg] size]
  (case type
    :literal arg
    :register (get-register-value state (second arg)) ;; -> [:stack 0]
    :indirection (let [[_ register & offset] arg
                       [_ v] (get-register-value state register)]
                   (get-value-from-stack state (+ v (nth offset 0 0)) size))))

;; Handles converting to bytes and updating the indices
(defn move-into-stack [state [src index] size]
  (let [[type value] (resolve state src size)]
    (-> state
        (update-in [:memory :stack :bytes] u/ensure-length (+ index size))
        (update-in [:memory :stack :bytes] u/overwrite-range (list index (+ index size)) (u/num-to-bytes-padded value size))
        (set-stack-type (list index (+ index size)) type))))

;; something that was on the stack, this will require reaidng the indices
;; and interpreting them correctly
;; or the literal actual instruction (:mov arg1 arg2) (almost never do..)
;;  -- let's forget about this one 

;; src here can only be :register, :literal, :indirection
;; it can't be :stack or :instruction
(defn mov [size [state [_ src dest]]]
  (if (and (= (first dest) :indirection) (= (second dest) :rsp))
    (move-into-stack state [src (+ (second (get-register-value state :rsp)) (nth dest 2 0))] size)
    (assoc-in state (complete-state-path state dest) (resolve state src size))))

;; If the src is an indirection, need to process it down to a value
;; If the dest is an indirection, need to make it into bytes and push them
;;  and then update the indices

(defmethod process-instruction :mov [& args] (mov 8 args))
  ;;  (assoc-in state (complete-state-path state dest) (resolve-src state src)))

(defn push [size [state [_ src]]]
  (-> state
      (move-into-stack [src (second (get-register-value state :rsp))] size)
      (add-register [:register :rsp] (* size -1))))

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
(defn step [state] (let [rip (get-register-value state :rip)
                         ins (get-in state [:memory :program :instructions (second rip)])]
                     (-> state
                         (process-instruction ins)
                         (inc-register [:register :rip]))))

;; initializing the program state
(def starting-register nil)

(def starting-registers (assoc (->> c/registers-raw
                                    (map (fn [r] [(keyword r) starting-register]))
                                    (into {}))
                               :rip [:instruction 0]
                               :rsp [:stack 0]))

(defn init-program-state [program-input]
  (r/atom {:registers starting-registers
           :flags []
           :memory {:program {:instructions (parse program-input)}
                    :stack {:bytes []
                            :indices []}}}))

;; REPL
(comment
  ;; stub!
  (def state (init-program-state (nth assembly-explainer.state/programs 2)))
  (swap! state step)
  (process-instruction @state ["push" [:literal 1]])
  (process-instruction @state ["popl" [:register :rax]])
  (move-into-stack @state [[:register :rsp] (second (get-register-value @state :rsp))] 8)
  (mov 8 [@state ["mov" [:register :rsp] [:indirection :rsp 8]]]))

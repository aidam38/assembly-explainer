(ns assembly-explainer.compiler.machine
  [:require [reagent.core :as r]
   [assembly-explainer.compiler.parser :refer [parse]]
   [assembly-explainer.compiler.core :as c]
   [assembly-explainer.compiler.byte-object :as bobj]
   [assembly-explainer.util :as u]
   [goog.string :as gstr]
   [goog.string.format]])

;; Get the value of the register with the given name and size like :a 8
(defn get-register-value-sized [state reg size]
  (bobj/get-value-at-index (get-in state [:registers reg]) 0 size))

(defn set-register-value-sized [state reg size value]
  (update-in state [:registers reg] bobj/move-into value 0 size))

(defn get-register-name [[name {:keys [meta]}]]
  (let [{:keys [range]} (first meta)]
    (some (fn [[desc {:keys [size reg]}]]
            (when (and (= size (apply - (reverse range)))
                       (= reg name))
              desc)) c/descriptors)))

;; Get the value of the register with the given descriptor like :rax
(defn get-register-value [state descriptor]
  (let [{:keys [reg size]} (get c/descriptors (name descriptor))]
    (get-register-value-sized state reg size)))

(defn set-register-value [state descriptor value]
  (let [{:keys [reg size]} (get c/descriptors (name descriptor))]
    (set-register-value-sized state reg size value)))

(defn get-register-size [register] (:size (get c/descriptors (name register))))

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
  (set-register-value state register (u/add-to-last (get-register-value state register) n)))
(def inc-register #(add-register %1 %2 1))
(def dec-register #(add-register %1 %2 -1))

(defn set-flag [state flag] (update state :flags conj flag))
(defn reset-flag [state flag] (update state :flags disj flag))

(defn is-flag-set [state flag]
  (contains? (:flags state) flag))

(defn is-flag-reset [state flag]
  (not (contains? (:flags state) flag)))

(defn check-even [state val]
  (if (even? val)
    (set-flag state :PF)
    (reset-flag state :PF)))

(defn check-zero [state val]
  (if (zero? val)
    (set-flag state :ZF)
    (reset-flag state :ZF)))

;; main processing function
(defmulti process-instruction (fn [_ op] (keyword (first op))))

(defmethod process-instruction :default [_ [op]]
  (js/console.log "Can't recognize " (str op) "."))

(defn resolve [state [type :as arg] size]
  (case type
    :literal arg
    :register (get-register-value state (second arg))
    :indirection (let [[_ register & rest] arg
                       [_ v] (get-register-value state register)
                       offset (+ v (nth rest 0 0))]
                   (bobj/get-value-at-index (get state :stack) offset size))))

;; When operating with registers, the size is always inferred from the register descriptor.
;; GNU assembler infers only when the instruction does not specify a size.
;; GNU assembler fails to infer when the sizes of the operands are different.
;; In this interepreter, movs will either truncate or extend to meet the size of the dest.
;; This behavior matches x64 for all movs except for from 16 bit spaces to 32 bit ones.
;; This should be fine as long as we only use programs which were written / compiled for 64 bit machines
;;  since it doesn't seem like this behavior will matter on those systems...
(defn mov [size [state [_ src dest]]]
  (let [src-val (resolve state src size)]
    (case (first dest)
      :register (set-register-value state (second dest) src-val)
      :indirection (let [index (+ (second (get-register-value state :rsp)) (nth dest 2 0))]
                     (update state :stack bobj/move-into src-val index size)))))

(defmethod process-instruction :mov [& args] (mov 8 args))
(defmethod process-instruction :movq [& args] (mov 8 args))
(defmethod process-instruction :movl [& args] (mov 4 args))
(defmethod process-instruction :movd [& args] (mov 4 args))
(defmethod process-instruction :movw [& args] (mov 2 args))

(defn push [size [state [_ src]]]
  (let [src-val (resolve state src size)
        index (second (get-register-value state :rsp))]
    (-> state
        (update :stack bobj/move-into src-val index size)
        (add-register :rsp (* size -1)))))

(defmethod process-instruction :push [& args] (push 8 args))
(defmethod process-instruction :pushq [& args] (push 8 args))
(defmethod process-instruction :pushl [& args] (push 4 args))
(defmethod process-instruction :pushw [& args] (push 2 args))

(defn pop [size [state [_ dest]]]
  (-> state
      (add-register :rsp (* size 1))
      (#(set-register-value % (second dest) (resolve % [:indirection :rsp] size)))))

(defmethod process-instruction :pop [& args] (pop 8 args))
(defmethod process-instruction :popq [& args] (pop 8 args))
(defmethod process-instruction :popl [& args] (pop 4 args))
(defmethod process-instruction :popw [& args] (pop 2 args))

(defn jumpif [condition [state [_ rel]]]
  (if condition
    (add-register state :rip (second rel))
    state))

(defmethod process-instruction :jmp [& args] (jumpif true args))

;; https://www.cs.utexas.edu/~byoung/cs429/condition-codes.pdf

(defmethod process-instruction :jo [& [state :as args]] (jumpif (is-flag-set state :O) args))

(defmethod process-instruction :jno [& [state :as args]] (jumpif (is-flag-reset state :O) args))

(defmethod process-instruction :jb [& [state :as args]] (jumpif (is-flag-set state :CF) args))
(defmethod process-instruction :jnae [& [state :as args]] (jumpif (is-flag-set state :CF) args))

(defmethod process-instruction :jnb [& [state :as args]] (jumpif (is-flag-reset state :CF) args))
(defmethod process-instruction :jae [& [state :as args]] (jumpif (is-flag-reset state :CF) args))

(defmethod process-instruction :je [& [state :as args]] (jumpif (is-flag-set state :ZF) args))
(defmethod process-instruction :jz [& [state :as args]] (jumpif (is-flag-set state :ZF) args))

(defmethod process-instruction :jne [& [state :as args]] (jumpif (is-flag-reset state :ZF) args))
(defmethod process-instruction :jnz [& [state :as args]] (jumpif (is-flag-reset state :ZF) args))

(defmethod process-instruction :jbe [& [state :as args]] (jumpif (or (is-flag-set state :CF) (is-flag-set state :ZF)) args))
(defmethod process-instruction :jna [& [state :as args]] (jumpif (or (is-flag-set state :CF) (is-flag-set state :ZF)) args))

(defmethod process-instruction :jnbe [& [state :as args]] (jumpif (or (is-flag-reset state :CF) (is-flag-reset state :ZF)) args))
(defmethod process-instruction :ja [& [state :as args]] (jumpif (or (is-flag-reset state :CF) (is-flag-reset state :ZF)) args))

(defmethod process-instruction :jl [& [state :as args]] (jumpif (not= (is-flag-set state :SF) (is-flag-set state :OF)) args))
(defmethod process-instruction :jnge [& [state :as args]] (jumpif (not= (is-flag-set state :SF) (is-flag-set state :OF)) args))

(defmethod process-instruction :jnl [& [state :as args]] (jumpif (= (is-flag-set state :SF) (is-flag-set state :OF)) args))
(defmethod process-instruction :jge [& [state :as args]] (jumpif (= (is-flag-set state :SF) (is-flag-set state :OF)) args))

(defmethod process-instruction :jle [& [state :as args]] (jumpif (or (not= (is-flag-set state :SF) (is-flag-set state :OF)) (is-flag-set state :ZF)) args))
(defmethod process-instruction :jng [& [state :as args]] (jumpif (or (not= (is-flag-set state :SF) (is-flag-set state :OF)) (is-flag-set state :ZF)) args))

(defmethod process-instruction :jg [& [state :as args]] (jumpif (and (= (is-flag-set state :SF) (is-flag-set state :OF)) (is-flag-reset state :ZF)) args))
(defmethod process-instruction :jnle [& [state :as args]] (jumpif (and (= (is-flag-set state :SF) (is-flag-set state :OF)) (is-flag-reset state :ZF)) args))

(defn set-sub-carry [state a b]
  (if (> a b) (set-flag state :CF) (reset-flag state :CF)))

(defn set-sub-overflow [state a b]
  (if (> a b) (set-flag state :OF) (reset-flag state :OF)))

(defn set-sub-zero [state a b]
  (if (= a b) (set-flag state :ZF) (reset-flag state :ZF)))

(defn set-sub-flags [state a b]
  (-> state
      (set-sub-overflow a b)
      (set-sub-carry a b)
      (set-sub-zero a b)))

(defn cmp [size [state [_ a b]]]
  (let [[_ a-val] (resolve state a size)
        [_ b-val] (resolve state b size)]
    (set-sub-flags state b-val a-val)))

(defn test [size [state [_ a b]]]
  (let [[_ a-val] (resolve state a size)
        [_ b-val] (resolve state b size)
        result (bit-and a-val b-val)]
    (-> state
        (check-even result)
        (check-zero result))))

(defmethod process-instruction :test [& args] (test 8 args))

(defn binary-op [op flag-op size [state [_ src dest]]] (do
                                                         (assert (= (first dest) :register))
                                                         (let [[_ src-val] (resolve state src size)
                                                               [dest-type dest-val] (resolve state dest size)
                                                               result [dest-type (op dest-val src-val)]]
                                                           (-> state
                                                               (set-register-value (second dest) result)
                                                               (flag-op src-val dest-val)))))

(defn max-register-value [size] (Math/pow 2 (* size 8)))
(defn mul [size [state [_ coeff]]] (let [[_ c] (resolve state coeff size)
                                         [a-type a-val] (get-register-value-sized state :a size)
                                         product (* a-val c)
                                         result-high [a-type (int (/ product (max-register-value size)))]
                                         result-low [a-type (int (rem product (max-register-value size)))]]
                                     (set-register-value-sized state :d size result-high)
                                     (set-register-value-sized state :a size result-low)))

;; Multiplies the value in al by the given 8 bit value and stores the result in ax
(defn mulb [[state [_ coeff]]] (let [[_ c] (resolve state coeff 1)
                                     [a-type a-val] (get-register-value state :al)
                                     result [a-type (* a-val c)]]
                                 (set-register-value state :ax result)))

(defmethod process-instruction :add [& args] (binary-op + identity 8 args))
(defmethod process-instruction :sub [& args] (binary-op - set-sub-flags 8 args))
(defmethod process-instruction :cmp [& args] (cmp 8 args))

(defmethod process-instruction :mulq [& args] (mul 8 args))
(defmethod process-instruction :muld [& args] (mul 4 args))
(defmethod process-instruction :mull [& args] (mul 4 args))
(defmethod process-instruction :mulw [& args] (mul 2 args))
(defmethod process-instruction :mulb [& args] (mulb args))

(defmethod process-instruction :imulq [& args] (binary-op * identity 8 args))
(defmethod process-instruction :imuld [& args] (binary-op * identity 4 args))
(defmethod process-instruction :imull [& args] (binary-op * identity 4 args))
(defmethod process-instruction :imulw [& args] (binary-op * identity 2 args))
(defmethod process-instruction :imulb [& args] (binary-op * identity 1 args))

;; main stepping function
(defn step [state] (let [[_ ripval] (get-register-value state :rip)
                         ins (get-in state [:instructions ripval])]
                     (-> state
                         (process-instruction ins)
                         (inc-register :rip))))

;; initializing the program state
;; Starting register is a byte object with 8 bytes of zeros
(def starting-register (bobj/move-into bobj/empty-object [nil 0] 0 8))

(def starting-registers (-> (->> c/registers
                                 (map (fn [r] [r starting-register]))
                                 (into {}))
                            (update :ip bobj/move-into [:ins 0] 0 8)
                            (update :sp bobj/move-into [:stack 100] 0 8)))

(defn init-program-state [program-input]
  (r/atom {:registers starting-registers
           :flags #{}
           :instructions (parse program-input)
           :stack bobj/empty-object}))

;; REPL
(comment
  ;; stub!
  (def state (init-program-state (get assembly-explainer.state/programs "test3")))
  @state

  (get c/descriptors (name :rip))

  (-> @state
      (process-instruction ["mov" [:literal 0] [:register :rax]])
      (process-instruction ["cmp" [:register :rax] [:literal 0]])
      (process-instruction ["je" [:literal 10]])
      (get-register-value :rip))

  (-> @state
      (process-instruction ["jne" [:literal 5]])
      (get-in [:registers :ip]))

  (-> @state
      (process-instruction ["cmp" [:literal 10] [:literal 9]])
      (:flags))

  (test 8 [@state ["test" [:literal 0] [:literal 0]]]))

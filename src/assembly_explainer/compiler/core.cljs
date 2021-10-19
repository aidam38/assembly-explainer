(ns assembly-explainer.compiler.core
  [:require [reagent.core :as r]
   [assembly-explainer.compiler.parser :refer [parse]]])

;; Add the given value to the last element in coll
(defn add-to-last[coll x] (update-in [dec (count coll)] coll (fn [i] (+ i x))))

;; Get the value of the register with the given name
(defn get-register-value [state name] (get-in state [:registers (keyword name)]))

;; Adds the given offset to the given path
;; 0 -> 0 + offset
;; [:memory :stack 0] -> [:memory :stack 0+offset]
(defn add-offset [path offset] (if (number? path) (+ path offset) (add-to-last path offset)))

;; Compute the location an expression like '0x5(%rsp)' points to.
(defn get-indirection-location [state [_ & location]] (case (count location)
                                                        1 (get-register-value state (first location))
                                                        2 (add-offset (get-register-value state (first location)) (second location))))

;; Take values like 0 or [:register "rax"] and return an array which can be used for
;; get-in and update-in like [:stack :memory 0] or [:registers :rax] respectively
(defn complete-state-path [state arg] (cond
                                        (number? arg) [:memory :stack arg]
                                        (= (first arg) :register) [:registers (keyword (second arg))]
                                        (= (first arg) :indirection) (complete-state-path state (get-indirection-location state arg))))

;; Take and argument and resolve it to a literal value.
(defn resolve-src [state arg] (if (= (first arg) :literal)
                                (second arg)
                                (get-in state (complete-state-path state arg))))

(defn update-register [state register f] (update-in state (complete-state-path state register) f))

(defn inc-register [state register] (update-register state register inc))
(defn dec-register [state register] (update-register state register dec))

(defn mov [state [src dest]] (assoc-in state (complete-state-path state dest) (resolve-src state src)))

(defmulti process-instruction (fn [_ [op]] (keyword op)))

(defmethod process-instruction :mov [state [_ src dest]]
  (assoc-in state (complete-state-path state dest) (resolve-src state src)))

(defmethod process-instruction :push [state [_ src]] (-> state
                                                         (mov [src [:indirection :rsp]])
                                                         (dec-register [:register :rsp])))

(defmethod process-instruction :pop [state [_ dest]] (-> state
                                                         (inc-register [:register :rsp])
                                                         (mov [[:indirection :rsp] dest])))

(defmethod process-instruction :add [state [src dest]] (let [dest-path (complete-state-path state dest)
                                                             src-path  (complete-state-path state src)]
                                                         (update-in state dest-path + (get-in state src-path))))

(defn sub [state [src dest]] (let [dest-path (complete-state-path state dest)
                                   src-path  (complete-state-path state src)]
                               (update-in state dest-path - (get-in state src-path))))

(defn mul [state [src dest]] (let [dest-path (complete-state-path state dest)
                                   src-path  (complete-state-path state src)]
                               (update-in state dest-path * (get-in state src-path))))

(defn div [state [src]] (let [dest-path (complete-state-path state [:register :rax])
                              src-path  (complete-state-path state src)]
                               (update-in state dest-path / (get-in state src-path))))

(defn step [state] (let [rip (get-register-value @state :rip)
                         ins (get-in @state [:memory :program :instructions rip])]
                   (-> @state
                       (process-instruction ins)
                       (inc-register [:register :rip]))))

(defn init-program-state [program-input]
  (r/atom {:registers {:rip 0 :rsp 1 :rbp 0 :rax 0 :rbx 0 :rcx 0 :rdx 0 :rsi 0 :rdi 0}
           :memory {:program {:instructions (parse program-input)}
                    :stack []}}))

;; REPL
(comment

  ;; stub!
  (def program-state (r/atom {:registers {:rip 0 :rsp 19 :rbp 0 :rax 0 :rbx 0 :rcx 0 :rdx 0 :rsi 0 :rdi 0 :flags 0}
                              :memory {:program {:instructions [[:mov [:register :rsp] [:register :rbp]]]}
                                       :stack (vec (replicate 20 0))}}))
  
  (step program-state)
  
  (get-indirection-location @program-state [:indirection :rsp])

  (complete-state-path program-state [:indirection :rsp])

  (def v [1 2 3])

  (mov @program-state [[:register :rsp] [:register :rbp]])
  (mov @program-state [[:literal 1] [:indirection :rsp 1]])
  )


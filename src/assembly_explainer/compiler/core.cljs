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
(defn get-indirection-location
  ([state [_ register]] (get-register-value state register))
  ([state [_ register offset]] (add-offset (get-register-value state register) offset)))

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
(defn push [state [src]] (-> state
                             (mov [src [:indirection :rsp]])
                             (dec-register [:register :rsp])))
(defn pop [state [dest]] (-> state
                             (inc-register [:register :rsp])
                             (mov [[:indirection :rsp] dest])))
(defn add [state [src dest]] (let [dest-path (complete-state-path state dest)
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

(defn step [program-state]
  ;;(execute current instruction)
  (update-in program-state [:registers :rip] inc))

(defn init-program-state [program-input]
  (r/atom {:registers {:rip 0 :rsp 1 :rbp 0 :rax 0 :rbx 0 :rcx 0 :rdx 0 :rsi 0 :rdi 0}
           :memory {:program {:instructions (parse program-input)}
                    :stack []}}))

;; REPL
(comment

  ;; stub!
  (def program-state (r/atom {:registers {:rip 0 :rsp 19 :rbp 0 :rax 0 :rbx 0 :rcx 0 :rdx 0 :rsi 0 :rdi 0 :flags 0}
                              :memory {:program {:instructions []}
                                       :stack (vec (replicate 20 0))}}))

  (get-indirection-location @program-state [:indirection :rsp])

  (complete-state-path program-state [:indirection :rsp])

  (def v [1 2 3])

  (mov @program-state [[:register :rsp] [:register :rbp]])
  (mov @program-state [[:literal 1] [:indirection :rsp 1]])
  (push @program-state [[:literal 1]])
  (pop (push @program-state [[:literal 1]]) [[:register :rax]])
  )


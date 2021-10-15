(ns assembly-explainer.compiler.core
  [:require [reagent.core :as r]
   [assembly-explainer.compiler.parser :refer [parse]]])

(defn complete-state-path [state arg] (cond
                                        (number? arg) [:memory :stack arg]
                                        (= (first arg) :register) [:registers (second arg)]
                                        (= (first arg) :indirection) (complete-state-path state (get-in state [:registers (second arg)]))))

(defn resolve-src [state arg] (if (= (first arg) :literal)
                                (second arg)
                                (get-in state (complete-state-path state arg))))

(defn mov [state [src dest]] (assoc-in state (complete-state-path state dest) (resolve-src state src)))

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
  (def program-state (r/atom {:registers {:rip 0 :rsp 1 :rbp 0 :rax 0 :rbx 0 :rcx 0 :rdx 0 :rsi 0 :rdi 0}
                              :memory {:program {:instructions []}
                                       :stack [2 3]}}))

  (def v [1 2 3])

  (mov @program-state ([:register "rsp"] [:register "rbp"])))

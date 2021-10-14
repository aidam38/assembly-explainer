(ns assembly-explainer.parse
  (:require [instaparse.core :as i]
            [reagent.core :as r]))

(def assembly-parser (i/parser
                      "S = ins+
                       ins = ws opcode ws args nl
                       args = ('%' register) | ('$' literal)
                       register = 'rax' | 'rbx'
                       literal = \\d*
                       opcode = 'mov'
                       <ws> = <#'\\s*'>
                       <nl> = <#'(\\n|)'>"))

(def example-input
  "mov rsi
mov rsi")

(def program-state (r/atom {:registers {:rip 0 :rsp 0 :rbp 0 :rax 0 :rbx 0 :rcx 0 :rdx 0 :rsi 0 :rdi 0}
                            :stack []}))

(defn evaluate-arg [arg])

(def test-registers {"rax" 0 "rbx" 0})

(def huge-map-of-instructions
  {"mov" {:fn (fn [state args] ())
          :spec "mov %dst %src = ..."}})

(defn step! []
  (swap! program-state update-in [:registers :rip] inc))
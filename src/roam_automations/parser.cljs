(ns roam-automations.parse
  (:require [instaparse.core :as i]))

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
  "mov $1 %rax")

(def program-state {
  :registers {:rip 0 :rsp 0 :rbp 0 :rax 0 :rbx 0 :rcx 0 :rdx 0 :rsi 0 :rdi 0}
  :stack []
  })

(defn evaluate-arg [arg] )

(def test-registers {"rax" 0 "rbx" 0})

(def huge-map-of-instructions
    {"mov" {:fn (fn [state args] ())
            :spec "mov %dst %src = ..."}})

(rest (assembly-parser example-input))
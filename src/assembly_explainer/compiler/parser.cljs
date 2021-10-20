(ns assembly-explainer.compiler.parser
  (:require [instaparse.core :as i]))

(def assembly-parser (i/parser
                      "S = ins+
                       ins = ws opcode ws args nl
                       args = (arg comma)+
                       arg = register | indirection | literal
                       indirection = literal <'('> register <')'>
                       register = <'%'> ('rax' | 'rbx' | 'rcx' | 'rdx' | 'rsi' | 'rdi' | 'rsp' | 'rbp')
                       literal = <'$'> #'-?\\d+'
                       opcode = 'mov' | 'push' | 'pop' | 'add' | 'sub' 
                       <comma> = <#'\\s*,?\\s*'>
                       <ws> = <#'\\s*'>
                       <nl> = <#'(\\n|)'>"))

(defn get-ast [code-struct]
  (i/transform
   {:ins (fn [[_ opcode] [_ & args]] (concat [opcode] args))
    :arg (fn [type] type)}
   (vec (rest code-struct))))

(defn parse [{:keys [code]}]
  (->> code
       assembly-parser
       get-ast
       vec))

#_(def literal (let [[src dest] (let [[op & args] (first ast)] args)] src))

(comment
  (assembly-parser "mov $42, %rbx
push %rbx
pop %rax"))

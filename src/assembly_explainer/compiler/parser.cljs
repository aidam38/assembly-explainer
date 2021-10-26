(ns assembly-explainer.compiler.parser
  (:require [instaparse.core :as i]
            [clojure.string :as str]
            [assembly-explainer.compiler.core :as c]))

(defn make-or-str [coll]
  (->> coll
       (map #(str "'" % "'"))
       (str/join " | ")))

(def parser-syntax
  (str
   "S = ins+
    ins = ws opcode ws args nl
    args = (arg comma)+
    arg = register | indirection | literal
    indirection = literal <'('> register <')'>
    literal = <'$'> #'-?\\d+'
    register = <'%'> (" (make-or-str c/registers-all) ")
    opcode = " (make-or-str c/instructions) "
    <comma> = <#'\\s*,?\\s*'>
    <ws> = <#'\\s*'>
    <nl> = <#'(\\n|)'>"))

(def assembly-parser (i/parser parser-syntax))

(defn get-ast [code-struct]
  (i/transform
   {:ins (fn [[_ opcode] [_ & args]] (concat [opcode] args))
    :arg (fn [type] type)
    :indirection (fn [[_ offset] [_ register]] [:indirection (keyword register) (js/parseInt offset)])}
   (vec (rest code-struct))))

(defn parse [{:keys [code]}]
  (->> code
       assembly-parser
       get-ast
       vec))

#_(def literal (let [[src dest] (let [[op & args] (first ast)] args)] src))

(comment
  (def test-program {:code 
                     
"mov $42, %rbx
mov %rbx,$0(%rsp)
push %rbx
pop %rax"     
                     
})
  (assembly-parser (:code test-program))
  (parse test-program)

)

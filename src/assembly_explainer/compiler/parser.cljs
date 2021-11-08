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
    indirection = offset? <'('> register <')'>
    offset = #'-?\\d+'
    literal = <'$'> #'-?\\d+'
    register = <'%'> (" (make-or-str (keys c/descriptors)) ")
    opcode = " (make-or-str c/instructions) "
    <comma> = <#'\\s*,?\\s*'>
    <ws> = <#'\\s*'>
    <nl> = <#'(\\n|)'>"))

(def assembly-parser (i/parser parser-syntax))

(defn get-ast [code-struct]
  (i/transform
   {:ins (fn [[_ opcode] [_ & args]] (concat [opcode] args))
    :arg (fn [type] type)
    :literal (fn [value] [:literal (int value)])
    :indirection (fn
                   ([[_ register]] [:indirection (keyword register)])
                   ([[_ offset] [_ register]] [:indirection (keyword register) (js/parseInt offset)]))}
   (vec (rest code-struct))))

(defn parse [{:keys [code]}]
  (->> code
       assembly-parser
       get-ast
       vec))

#_(def literal (let [[src dest] (let [[op & args] (first ast)] args)] src))

(comment
  (def test-program {:code 
                     
"mov $1, %rax
imulq $2, %rax
jmp $-2"
                     
})
  (assembly-parser (:code test-program))
  (parse test-program)

)

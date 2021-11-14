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
   "S = (ins | label-mark)+
    ins = ws opcode ws args nl
    args = (arg comma)+
    arg = register | indirection | literal | label
    label = #'\\w+'
    label-mark = ws label <':'> ws
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

(defn process-labels [code-struct]
  (:result
   (reduce (fn [acc [type first-arg :as item]]
             (if (= type :label-mark)
               (-> acc
                   (update-in [:result :labels] assoc
                              (second first-arg)
                              [:ins (:index acc)]))
               (-> acc
                   (update-in [:result :instructions] conj item)
                   (update :index inc))))
           {:index 0
            :result {:instructions [] :labels {}}}
           code-struct)))

(defn parse [{:keys [code]}]
  (->> code
       assembly-parser
       get-ast
       vec
       process-labels))

#_(def literal (let [[src dest] (let [[op & args] (first ast)] args)] src))


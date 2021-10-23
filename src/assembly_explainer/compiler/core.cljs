(ns assembly-explainer.compiler.core)

(def instructions ["mov" "push" "pushq" "pushl" "pushw" "pop" "add" "sub"])

(def registers-raw ["ax" "bx" "cx" "dx" "si" "di" "sp" "bp" "ip"])

(defn prefix-registers [prefix registers]
  (map #(str prefix %) registers))

(def prefixes ["r" "e" ""])

(def registers-all
  (mapcat #(prefix-registers % registers-raw) prefixes))
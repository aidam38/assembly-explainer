(ns assembly-explainer.util)

;; functions
(defn dectohex [x]
  ())

;; macros
(defmacro expand-programs [names]
  (mapv #(let [path (str "resources/asm/" % ".asm")]
           {:name %
            :path path
            :code (slurp path)}) names))

(defmacro cond+
  "Version of cond that allows assignments in the middle of it:

      (cond+
        check1 ...
        :let [x (f y)]
        :do (println x)
        (and x check2) ...
     "
  [& clauses]
  (when-some [[test expr & rest] clauses]
    (case test
      :let `(let ~expr (cond+ ~@rest))
      :do  `(do ~expr (cond+ ~@rest))
      `(if ~test ~expr (cond+ ~@rest)))))
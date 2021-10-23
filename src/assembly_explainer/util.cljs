(ns assembly-explainer.util)
;; functions
(defn dectohex [x]
  ())

;; Applies f to i if p(i) is true
(defn update-if [i p f] (if (p i) (f i) (i)))

(defn find-first [coll f] (first (filter f coll)))

;; Add the given value to the last element in coll
(defn add-to-last [coll x]
  (update coll (dec (count coll)) #(+ % x)))

;; Check if a value is in the given range
(defn in-range [range x] (and (>= x (first range)) (<= x (second range))))

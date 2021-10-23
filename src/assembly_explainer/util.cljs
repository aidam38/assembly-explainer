(ns assembly-explainer.util)

;; Applies f to i if p(i) is true
(defn update-if [i p f] (if (p i) (f i) (i)))

(defn find-first [coll f] (first (filter f coll)))

;; Add the given value to the last element in coll
(defn add-to-last [coll x]
  (update coll (dec (count coll)) #(+ % x)))

;; Check if a value is in the given range
(defn in-range [range x] (and (>= x (first range)) (<= x (second range))))

;; Little endian bytes to number
(defn bytes-to-num [bytes]
  (let [byte-count (count bytes)]
    (cond
      (= byte-count 0) 0
      (= byte-count 1) (last bytes)
      (> byte-count 1) (+ (* (bytes-to-num (drop-last bytes)) 256) (last bytes)))))

;; Convert number to little endian bytes
(defn num-to-bytes [n]
  (if (= n 0)
    []
    (conj (num-to-bytes (Math/floor (/ n 256))) (mod n 256))))

;; Turn a number into a base 16 string
(def digits "0123456789ABCDEF")
(defn number-to-hex-string [n]
  (if (< n 16)
    (nth digits n)
    (str (number-to-hex-string (Math/floor (/ n 16))) (nth digits (mod n 16)))))

;; Overwrite the indicies specified by range with values
;; specified in b. If b is not long enough, zeros are inserted.
(defn overwrite-range [a range b]
  (map-indexed (fn [idx item]
                 (if (in-range range idx)
                   (nth b (- idx (first range)) 0)
                   item)) a))

(def items (take 20 (repeat (rand))))

(overwrite-range items '(0, 8) [1 1])
(number-to-hex-string 23)

(bytes-to-num [6 103])
(num-to-bytes 1639)
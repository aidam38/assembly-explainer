(ns assembly-explainer.compiler.byte-object
  [:require [assembly-explainer.util :as u]])

(def empty-object {:bytes [] :meta []})

(def test-object {:bytes [0 0 0 0]
                  :meta [{:range '(0 4) :type :literal}]})

;; Check if index is in the range of the given byte object element
(defn in-element-range [o index] (u/in-range (:range o) index))

;; Get the stack objects asociated with the given index
(defn get-elements [{:keys [obj]} index]
  (filter #(in-element-range % index) (:indices obj)))

;; Get the first stack object associated with the given index
(defn get-element [obj index]
  (first (get-elements obj index)))

;; Apply f to the stack object that contains the given index
(defn update-elements-at [obj index f]
  (update obj :meta
          (fn [indices] (map (fn [object] (u/update-if object #(in-element-range % index) f))) indices)))

;; Return true if there is a meta entry associated with the given index
(defn has-element [state index] (not-empty (get-elements state index)))

(defn is-element-invalid [{:keys [range]}]
  (u/is-range-invalid range))

;; Return a list of elements which were contained in e such that none
;;  of them overlap with range a.
(defn uncollide-element [{:keys [range type] :as e} a]
  (let [uncollided (u/uncollide-range a range)]
    (case (count uncollided)
      0 (list {:range '(0 0) :type type}) ;; Return with an invalid range that will be removed later
      1 (list (assoc e :range (first uncollided)))
      2 (list (assoc e :range (first uncollided))
              (assoc e :range (second uncollided))))))

;; Make sure no elements will collide with the given range.
(defn uncollide-elements [obj range]
  (-> obj
      (update :meta
              (fn [elements] (map #(uncollide-element % range) elements)))
      (update :meta flatten)))

;; Set the meta data for the specified range.
(defn set-meta [obj {:keys [range] :as meta}]
  (-> obj
      (uncollide-elements range)
      (update :meta conj meta)
      (update :meta #(remove is-element-invalid %))))

;; Get a value that can be put into a register off of the stack.
;; Basically just includes the type information w/ the requested bytes.
(defn get-value-at-index [obj index size]
  (let [element (get-element obj index)
        target-bytes (->> (:bytes obj)
                          (drop (first (:range element)))
                          (take size))]
    [(:type element) (u/bytes-to-num target-bytes)]))

(defn move-into [obj [type value] index size]
  (let [range [index (+ index size)]]
    (-> obj
        (update :bytes u/ensure-length (second range))
        (update :bytes u/overwrite-range range (u/num-to-bytes-padded value size))
        (set-meta {:range range :type type}))))

(comment
  (set-meta test-object {:range '(2 4) :type :literal})

  (uncollide-elements test-object '(2 4))

  (update test-object :bytes u/overwrite-range '(2 4) [1 2])

  (update test-object :bytes u/ensure-length 16)

  (set-meta test-object {:range '(2 4)})

  (u/num-to-bytes-padded 0 8)

  (move-into test-object [:literal 21821241235] 8 8))


(ns assembly-explainer.subs
  [:require [reagent.core :as r]
   [assembly-explainer.state :refer [app-state]]
   [assembly-explainer.compiler.byte-object :as bobj]])

(def program-state
  (r/track
   (fn _ []
     @(:program-state @app-state))))

(def number-of-instructions
  (r/track
   (fn _ []
     (count (:instructions @program-state)))))

(def current-instruction
  (r/track
   (fn _ []
     (second (get-in @program-state [:registers :rip])))))

(def at-end-of-program?
  (r/track
   (fn _ []
     (= @current-instruction (dec @number-of-instructions)))))

(def at-start-of-program?
  (r/track
   (fn _ []
     (zero? @current-instruction))))

(def get-backlinks-of
  (partial
   r/track
   (fn _ [value]
     (->> (:registers @program-state)
          (filter
           #(let [[name reg] %
                  val (bobj/get-value-at-index reg 0 8)]
              (= value val)))
          (map (fn [[n _]] [:register n]))))))
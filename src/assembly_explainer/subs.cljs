(ns assembly-explainer.subs
  [:require [reagent.core :as r]
   [assembly-explainer.state :refer [app-state]]])

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
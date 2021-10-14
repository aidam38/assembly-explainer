(ns assembly-explainer.keyboard
  [:require [re-frame.core :as rf]
   [re-pressed.core :as rp]])

(def keydown-rules
  {:event-keys [[[:enter-pressed] [{:keyCode 13}]]
                [[:escape-pressed] [{:keyCode 27}]]]
   :always-listen-keys [{:keyCode 13} {:keyCode 27}]})

(defn initialize-keyboard []
  (rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])
  (rf/dispatch-sync [::rp/set-keydown-rules keydown-rules]))


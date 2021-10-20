(ns assembly-explainer.events
  (:require
   [assembly-explainer.state :refer [ctx]]
   [assembly-explainer.compiler.core :as compiler]))

(defmulti handle-event (fn [_ [ev-type]] ev-type))

(defmethod handle-event :initialize-program-state [{:keys [app-state]}]
  (swap! app-state assoc :program-state (compiler/init-program-state (:program-input @app-state))))

(defmethod handle-event :step [{:keys [app-state]}]
  (js/console.log "step!")
  (swap! (:program-state @app-state) compiler/step))

(defn dispatch [event]
  (handle-event ctx event))

(comment
  @(:program-state @(:app-state ctx)))
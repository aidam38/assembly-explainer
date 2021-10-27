(ns assembly-explainer.events
  (:require
   [assembly-explainer.state :refer [ctx]]
   [assembly-explainer.compiler.machine :as compiler]))

(defmulti handle-event (fn [_ [ev-type]] ev-type))

(defn dispatch [event]
  (handle-event ctx event))

(defmethod handle-event :reset-program-state-history [{:keys [app-state]}]
  (swap! app-state assoc :program-state-history [])
  (dispatch [:store-program-state-history]))

(defmethod handle-event :store-program-state-history [{:keys [app-state]}]
  (swap! app-state update :program-state-history #(conj % @(:program-state @app-state))))

(defmethod handle-event :undo-program-state [{:keys [app-state]}]
  (let [last-program-state (last (:program-state-history @app-state))]
    (swap! app-state update :program-state-history (comp vec butlast))
    (reset! (:program-state @app-state) last-program-state)))

(defmethod handle-event :initialize-program-state [{:keys [app-state]}]
  (swap! app-state assoc :program-state (compiler/init-program-state (:program-input @app-state))))

(defmethod handle-event :step-program-state [{:keys [app-state]}]
  (dispatch [:store-program-state-history])
  (swap! (:program-state @app-state) compiler/step))
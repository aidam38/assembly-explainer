(ns assembly-explainer.events
  (:require
   [framework.core :refer [reg-event dispatch]]
   [assembly-explainer.state :as s]
   [assembly-explainer.util :as u]
   [assembly-explainer.router :as router]
   [assembly-explainer.compiler.machine :as machine]))

(reg-event
 :init-app-state
 (fn [app-state _]
   (reset! app-state s/default-app-state)))

(reg-event
 :navigated
 (fn [app-state [_ {{:keys [name on-leave on-enter]} :data
                    {:keys [path]}                   :parameters}]]
   (when-let [old-leave-fn (get-in @app-state [:current-route :leave-fn])]
     (old-leave-fn))
   (swap! app-state assoc :current-route {:name     name
                                          :leave-fn (when on-leave #(on-leave path))})
   (when on-enter (on-enter path))))


(reg-event
 :init-example-state
 (fn [app-state [_ name]]
   (swap! app-state merge (s/starting-example-state name))))

(reg-event
 :destroy-example-state
 (fn [app-state _]
   (swap! app-state dissoc :program-input :program-state :program-state-history)))

(reg-event
 :step-program-state
 (fn [app-state _]
   (dispatch [:store-program-state-history])
   (swap! (:program-state @app-state) machine/step)))

(reg-event
 :reset-program-state-history
 (fn [app-state _]
   (swap! app-state assoc :program-state-history [])
   (dispatch [:store-program-state-history])))

(reg-event
 :store-program-state-history
 (fn [app-state _]
   (swap! app-state update :program-state-history #(conj % @(:program-state @app-state)))))

(reg-event
 :undo-program-state
 (fn [app-state _]
   (let [last-program-state (last (:program-state-history @app-state))]
     (swap! app-state update :program-state-history (comp vec butlast))
     (reset! (:program-state @app-state) last-program-state))))

(reg-event
 :init-playground-state
 (fn [app-state _]
   (swap! app-state merge s/starting-playground-state)))

(reg-event
 :destroy-playground-state
 (fn [app-state _]))

(reg-event
 :update-editor-content
 (fn [app-state [_ new-val]]
   (swap! app-state assoc :editor-content new-val)))

(reg-event
 :run
 (fn [app-state _]
   (swap! app-state assoc :editing? false
          :program-state (machine/init-program-state {:code (:editor-content @app-state)})
          :program-state-history [])))
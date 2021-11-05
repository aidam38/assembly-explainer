(ns framework.events
  (:require [framework.registrar :as reg]
            [framework.state :refer [app-state]]))

(defn reg-event [id handler-fn]
  (reg/register-handler :event id handler-fn))

(defn dispatch [event-v]
  (let [handler-fn (reg/get-handler :event (first event-v))]
    (assert handler-fn)
    (handler-fn app-state event-v)))
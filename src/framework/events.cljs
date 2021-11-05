(ns framework.events
  (:require [framework.registrar :as r]
            [framework.state :refer [app-state]]))

(defn reg-event [id handler-fn]
  (r/register-handler :event id handler-fn))

(defn dispatch [event-v]
  (let [handler-fn (r/get-handler :event (first event-v))]
    (handler-fn app-state event-v)))
(ns framework.core
  (:require [framework.events :as events]
            [framework.subs :as subs]))

(defn reg-event
  ""
  [id handler-fn]
  (events/reg-event id handler-fn))

(defn dispatch
  ""
  [event-v]
  (events/dispatch event-v))

(defn reg-sub
  ""
  [id handler-fn]
  (subs/reg-sub id handler-fn))

(defn subscribe
  ""
  [sub-v]
  (subs/subscribe sub-v))
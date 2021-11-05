(ns framework.subs
  (:require [framework.registrar :as reg]
            [reagent.code :as r]))

(defn reg-sub [id sub-fn]
  (reg/register-handler :sub id (partial r/track sub-fn)))

(defn subscribe [sub-v]
  (let [handler-fn (reg/get-handler :sub (first sub-v))]
    (handler-fn sub-v)))
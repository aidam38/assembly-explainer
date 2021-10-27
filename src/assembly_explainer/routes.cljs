(ns assembly-explainer.routes
  (:require [reitit.frontend :as rtf]
            [reitit.frontend.easy :as rtfe]
            [reitit.coercion.schema :as rtcs]
            [assembly-explainer.events :refer [dispatch]]))

(defn chal-route [chal]
  [chal {:name (keyword chal)
         :controllers [{:start #(dispatch [:initialize-app-state])}]}])

(def routes
  ["/"
   ["" {:name :home}]])

(def router
  (rtf/router
   routes
   {:data {:coercion rtcs/coercion}}))

(defn init-routes! []
  (rtfe/start!
   router
   #(dispatch [:navigated %])
   {:use-fragment true}))
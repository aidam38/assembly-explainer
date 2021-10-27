(ns assembly-explainer.routes
  (:require [reitit.frontend :as rtf]
            [reitit.frontend.easy :as rtfe]
            [reitit.coercion.schema :as rtcs]
            [assembly-explainer.state :refer [app-state] :as s]
            [assembly-explainer.events :refer [dispatch]]))

(defn program-route [name]
  [name {:name (keyword name)
         :controllers [{:start #(dispatch [:initialize-app-state name])}]}])

#_(def routes
    (into []
          (concat ["/"
                   ["" {:name :home}]]
                  (map program-route s/program-names))))

(def routes
  ["/"
   ["" :home]
   [":program" :program]])

(def router
  (rtf/router
   routes
   {:data {:coercion rtcs/coercion}}))

(defn init-routes! []
  (rtfe/start!
   router
   #(let [name (->> % :path-params :program)]
      (swap! app-state assoc :route name)
      (dispatch [:initialize-app-state name]))
   {:use-fragment true}))
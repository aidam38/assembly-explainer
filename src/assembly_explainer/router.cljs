(ns assembly-explainer.router
  (:require [reitit.core :as r]
            [reitit.frontend :as rtf]
            [reitit.frontend.easy :as rtfe]
            [reitit.coercion.schema :as rtcs]
            [framework.core :refer [dispatch]]))

(def routes
  ["/"
   ["" {:name :home}]
   ["example/:example" {:name :example
                        :on-enter (fn [{:keys [example]}]
                                    (dispatch [:init-example-state example]))
                        :on-leave #(dispatch [:destroy-example-state])}]
   ["playground" {:name :playground
                  :on-enter #(dispatch [:init-playground-state])
                  :on-leave #(dispatch [:destroy-playground-state])}]])

(def router
  (rtf/router
   routes
   {:data {:coercion rtcs/coercion}}))

(defn match-by-name [path]
  (apply r/match-by-name router path))

(defn match-by-path [url]
  (r/match-by-path router url))


(defn init-routes! []
  (rtfe/start!
   router
   #(dispatch [:navigated %])
   {:use-fragment true}))
(ns assembly-explainer.core
  (:require [reagent.dom :as rdom]
            [framework.core :refer [dispatch]]
            [assembly-explainer.events]
            [assembly-explainer.subs]
            [assembly-explainer.views :refer [main]]
            [assembly-explainer.router :as router]
            [assembly-explainer.state]
            [assembly-explainer.keyboard]
            [goog.dom :as gdom]))

(defn mount-root []
  (rdom/render [main] (.getElementById js/document "app")))

(defn ^:dev/after-load clear-cache-and-render!
  []
  (mount-root))

(defn dev-init []
  (mount-root))

(defn ^:export init []
  #_(initialize-keyboard)
  (dispatch [:init-app-state])
  (router/init-routes!)
  (dev-init))

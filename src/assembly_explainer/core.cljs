(ns assembly-explainer.core
  (:require [reagent.dom :as rdom]
            [framework.core :refer [dispatch]]
            [assembly-explainer.events]
            [assembly-explainer.views :refer [main]]
            [assembly-explainer.routes :as routes]
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
  (routes/init-routes!)
  (dev-init))

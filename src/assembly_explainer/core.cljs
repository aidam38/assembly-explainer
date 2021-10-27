(ns assembly-explainer.core
  (:require [reagent.dom :as rdom]
            [assembly-explainer.state :refer [ctx]]
            [assembly-explainer.views :refer [main]]
            [assembly-explainer.events :refer [dispatch]]
            [assembly-explainer.routes :as routes]
            [assembly-explainer.state]
            [assembly-explainer.keyboard]
            [goog.dom :as gdom]))

(defn mount-root []
  (rdom/render [main @ctx] (.getElementById js/document "app")))

(defn ^:dev/after-load clear-cache-and-render!
  []
  (mount-root))

(defn dev-init []
  (mount-root))

(defn ^:export init []
  #_(initialize-keyboard)
  (dispatch [:initialize-app-state 0])
  (routes/init-routes!)
  (dev-init))



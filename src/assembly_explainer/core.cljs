(ns assembly-explainer.core
  (:require [reagent.dom :as rdom]
            [assembly-explainer.views :refer [main]]
            [assembly-explainer.events :refer [dispatch]]
            [assembly-explainer.state]
            [assembly-explainer.keyboard :refer [initialize-keyboard]]
            [goog.dom :as gdom]))

(defn mount-root []
  (rdom/render [main] (.getElementById js/document "app")))

(defn ^:dev/after-load clear-cache-and-render!
  []
  (mount-root))

(defn dev-init []
  (mount-root))

(defn ^:export init []
  (dispatch [:initialize-db])
  #_(initialize-keyboard)
  (dev-init))



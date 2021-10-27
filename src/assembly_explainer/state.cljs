(ns assembly-explainer.state
  (:require
   [reagent.core :as r])
  (:require-macros [assembly-explainer.util :refer [expand-programs]]))

(def programs (expand-programs ["test1" "test2" "test3"]))

(def program-names (keys programs))

(defn starting-app-state [name]
  {:route "test1"
   :program-input (get programs name)
   :program-state nil
   :program-state-history []})

(def app-state (r/atom {}))

(def ctx {:app-state app-state})
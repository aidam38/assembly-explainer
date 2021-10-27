(ns assembly-explainer.state
  (:require
   [reagent.core :as r])
  (:require-macros [assembly-explainer.util :refer [expand-programs]]))

(def programs (expand-programs ["test1" "test2" "test3"]))

(defn starting-app-state [p]
  {:program-input (nth programs p)
   :program-state nil
   :program-state-history []})

(def app-state (r/atom {}))

(def ctx (r/atom {:app-state app-state}))
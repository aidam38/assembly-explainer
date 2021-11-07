(ns assembly-explainer.state
  (:require-macros [assembly-explainer.util :refer [expand-programs]]))

(def programs (expand-programs ["test1" "test2" "test3" "test4"]))

(def program-names (keys programs))

(defn starting-app-state [name]
  {:route name
   :program-input (get programs name)
   :program-state nil
   :program-state-history []})
(ns assembly-explainer.state
  (:require
   [reagent.core :as r])
  (:require-macros [assembly-explainer.util :refer [expand-programs]]))

(def programs (expand-programs ["test1" "test2" "test3"]))

(def app-state (r/atom {:program-input (nth programs 1)
                        :program-state nil
                        :program-state-history []}))

(def ctx {:app-state app-state})
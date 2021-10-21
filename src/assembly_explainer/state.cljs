(ns assembly-explainer.state
  (:require
   [reagent.core :as r])
  (:require-macros [assembly-explainer.util :refer [expand-programs]]))

(def programs (expand-programs ["test1" "test2"]))

(def app-state (r/atom {:program-input (second programs)
                        :program-state nil}))

(def ctx {:app-state app-state})
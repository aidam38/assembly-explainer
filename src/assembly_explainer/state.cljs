(ns assembly-explainer.state
  (:require
   [assembly-explainer.compiler.core :as compiler]
   [reagent.core :as r])

  (:require-macros [assembly-explainer.util :refer [expand-programs]]))

(def programs (expand-programs ["test1"]))

(def app-state (r/atom {:program-input (first programs)
                        :program-state nil}))

(def ctx {:app-state app-state})
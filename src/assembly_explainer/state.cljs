(ns assembly-explainer.state
  (:require [reagent.core :as r]))

(def app-state (r/atom {:program ""
                        :program-state {}}))

(def context {:app-state app-state
              :instruction-set {}})

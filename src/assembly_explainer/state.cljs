(ns assembly-explainer.state
  (:require [assembly-explainer.compiler.machine :as machine])
  (:require-macros [assembly-explainer.util :refer [expand-programs]]))

(def default-app-state
  {:current-route {:name :home}})

(def programs (expand-programs ["test1" "test2" "test3" "test4" "test5" "test6"]))

(def program-names (keys programs))

(defn starting-example-state [name]
  (let [program-input (get programs name)]
    {:program-input program-input
     :program-state (machine/init-program-state program-input)
     :program-state-history []}))

(def starting-playground-state
  {:editor-content ""
   :editing? true})
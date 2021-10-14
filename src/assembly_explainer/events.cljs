(ns assembly-explainer.events
  (:require [re-frame.core :as rf]
            [assembly-explainer.state :as db]))

(defmulti dispatch first)

(defmethod dispatch :step-button-pressed [] "heello")
(defmethod dispatch :back-button-pressed [] "heello back")
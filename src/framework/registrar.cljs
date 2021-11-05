(ns framework.registrar)

(def kinds #{:event :sub})

(def registrar-map (atom {}))

(defn get-handler [kind id]
  (assert (kinds kind))
  (get-in registrar-map [kind id]))

(defn register-handler [kind id handler-fn]
  (assert (kinds kind))
  (swap! registrar-map assoc-in [kind id] handler-fn))
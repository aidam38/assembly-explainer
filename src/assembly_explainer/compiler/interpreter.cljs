    (ns assembly-explainer.interpreter)

(def huge-map-of-instructions
  {"mov" {:fn (fn [state args] ())
          :spec "mov %dst %src = ..."}})


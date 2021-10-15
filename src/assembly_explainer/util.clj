(ns assembly-explainer.util)

(defmacro expand-programs [names]
  (mapv #(let [path (str "resources/asm/" % ".asm")]
           {:name %
            :path path
            :code (slurp path)}) names))
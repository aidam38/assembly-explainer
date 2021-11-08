(ns codemirror.editor
  (:require [reagent.core :as r]
            [applied-science.js-interop :as j]
            ["@codemirror/commands" :refer [defaultKeymap]]
            ["@codemirror/state" :refer [EditorState]]
            ["@codemirror/view" :refer [EditorView keymap]]
            ["@codemirror/history" :refer [history historyKeymap]]))

(defn js-concat [& xs]
  (clj->js
   (apply concat xs)))

(defn main [{:keys [on-change]}]
  (r/with-let [extensions
               (js-concat
                [(history)
                 (.. keymap (of (js-concat
                                 defaultKeymap
                                 historyKeymap)))
                 (.. EditorView -updateListener (of #(on-change (.. % -state -doc toString))))])
               *editor-view (r/atom nil)
               mount! (fn [el]
                        (when el
                          (let [editor-view (new EditorView
                                                 #js{:state (.create EditorState #js {:extensions extensions})
                                                     :parent el})]
                            (reset! *editor-view editor-view))))]
    [:div {:ref mount!}]
    (finally (j/call @*editor-view :destroy))))
(ns assembly-explainer.views
  (:require
   [reagent.core :as r]
   [assembly-explainer.events :refer [dispatch]]
   [assembly-explainer.compiler.machine :as m]
   [assembly-explainer.compiler.byte-object :as bobj]
   [assembly-explainer.util :as u]
   [assembly-explainer.subs :as s]
   [cljs.pprint]
   [to.fluent.heroicons-clojure.reagent.outline.chevron-right :refer [chevron-right]]
   [to.fluent.heroicons-clojure.reagent.outline.chevron-left :refer [chevron-left]]))

(defn step-forward-button [{:keys [app-state]}]
  [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-200.disabled:opacity-20.disabled:bg-gray-400.disabled:pointer-events-none
   {:on-click #(dispatch [:step-program-state])
    :disabled @s/at-end-of-program?}
   "Step!"])

(defn step-back-button [{:keys [app-state]}]
  [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-200.disabled:opacity-20.disabled:bg-gray-400.disabled:pointer-events-none
   {:on-click #(dispatch [:undo-program-state])
    :disabled @s/at-start-of-program?}
   "Step back!"])

(defn buttons [{:keys [app-state] :as ctx}]
  [:div.flex.space-x-2
   [step-forward-button ctx]
   [step-back-button ctx]])

(defn val-comp [[type value & [offset]]]
  (case type
    :literal [:div "$" value]
    :register [:div.text-green-500 "%" value]
    :indirection [:div "$" offset "(%" value ")"]
    :ins [:div value]
    [:div (pr-str value)]))

(defn ins-comp [[opcode & args] i]
  [:div.relative
   [:div.absolute.text-gray-400.text-xs i]
   [:div.absolute.right-0.text-gray-400.text-xs
    (for [bl @(s/get-backlinks-of [:ins i])]
      ^{:key bl} [val-comp bl])]
   [:div.flex.p-2.ml-3
    [:div.w-10.mr-4
     opcode]
    [:div.flex.space-x-2
     (interpose ", "
                (for [arg args]
                  ^{:key arg} [val-comp arg]))]]])

(defn program-comp [{:keys [app-state]}]
  (r/with-let [instructions (r/cursor (:program-state @app-state) [:instructions])]
    [:div.bg-gray-900.rounded.divide-y-2.divide-gray-500
     (for [[i ins] (map-indexed vector @instructions)]
       ^{:key (hash ins)} [ins-comp ins i])]))

(defn stack-item-comp [val meta]
  [:div.flex.p-2
   [:div.mr-8
    [val-comp val]]])

(defn stack-comp [{:keys [app-state]}]
  (r/with-let [{:keys [program-state]} @app-state]
    (let [{:keys [bytes meta] :as stack} @(r/cursor program-state [:stack])]
      [:div.bg-gray-900.mb-2.divide-y-2.divide-gray-50.h-64.rounded
       (for [m meta
             :let [value (bobj/get-value-from-meta stack m)]]
         ^{:key (hash bytes)} [stack-item-comp value meta])])))

(defn reg-comp [name {:keys [bytes meta]}]
  (let [m (first meta)]
    [:div.flex
     [:div.mr-2 "%" name]
     [val-comp [(:type m) (u/bytes-to-num bytes)]]]))

(defn registers-comp [{:keys [app-state]}]
  (r/with-let [registers (r/cursor (:program-state @app-state) [:registers])]
    [:div.bg-gray-900.p-2.h-32.rounded
     (for [[name {:keys [meta] :as reg}] @registers
           :when (some :type meta)]
       ^{:key name} [reg-comp name reg])]))

(defn chevron-button [which on-click]
  [:button.p-1.mr-2.rounded-full.flex.justify-center.items-center.hover:bg-gray-600
   {:on-click on-click}
   [:div.h-6.w-6 which]])

(defn header [{:keys [app-state]}]
  (r/with-let [name (r/cursor app-state [:program-input :name])]
    [:div.flex.justify-between.items-center.mb-2.text-gray-200
     [:div.flex.items-start
      [chevron-button chevron-left #()]
      [:h1.text-xl @name]]
     [:div
      [chevron-button chevron-right #()]]]))

(defn dashboard [ctx]
  [:div.bg-gray-700.rounded-lg.p-4.text-gray-50.shadow-xl
   [:div.flex.py-4
    [:div.p-2 {:class "w-1/2"}
     [program-comp ctx]]
    [:div.p-2 {:class "w-1/2"}
     [stack-comp ctx]
     [registers-comp ctx]]]
   [buttons ctx]])

(defn main [ctx]
  [:div.h-screen.bg-gray-500.font-mono
   [:div.container.max-w-screen-md.mx-auto
    [:div.pt-10
     [header ctx]
     [dashboard ctx]]
    (when true
      [:div.text-gray-100
       [:pre.pt-24 (with-out-str (cljs.pprint/pprint @(:app-state ctx)))]
       [:pre.pt-10 (with-out-str (cljs.pprint/pprint @(:program-state @(:app-state ctx))))]])]])
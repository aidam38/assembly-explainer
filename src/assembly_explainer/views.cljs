(ns assembly-explainer.views
  (:require
   [reagent.core :as r]
   [framework.core :refer [subscribe dispatch]]
   [assembly-explainer.compiler.machine :as m]
   [assembly-explainer.compiler.byte-object :as bobj]
   [assembly-explainer.util :as u]
   [assembly-explainer.subs :as s]
   [cljs.pprint]
   [to.fluent.heroicons-clojure.reagent.outline.chevron-right :refer [chevron-right]]
   [to.fluent.heroicons-clojure.reagent.outline.chevron-left :refer [chevron-left]]))

(defn step-forward-button []
  [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-200.disabled:opacity-20.disabled:bg-gray-400.disabled:pointer-events-none
   {:on-click #(dispatch [:step-program-state])
    :disabled @(subscribe [:at-end-of-program?])}
   "Step!"])

(defn step-back-button []
  [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-200.disabled:opacity-20.disabled:bg-gray-400.disabled:pointer-events-none
   {:on-click #(dispatch [:undo-program-state])
    :disabled @(subscribe [:at-start-of-program?])}
   "Step back!"])

(defn buttons []
  [:div.flex.space-x-2
   [step-forward-button]
   [step-back-button]])

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
    (for [bl @(subscribe [:get-backlinks-of [:ins i]])]
      ^{:key bl} [val-comp bl])]
   [:div.flex.p-2.ml-3
    [:div.w-10.mr-4
     opcode]
    [:div.flex.space-x-2
     (interpose ", "
                (for [arg args]
                  ^{:key arg} [val-comp arg]))]]])

(defn program-comp []
  (let [instructions @(subscribe [:instructions])]
    [:div.bg-gray-900.rounded.divide-y-2.divide-gray-500
     (for [[i ins] (map-indexed vector instructions)]
       ^{:key (hash ins)} [ins-comp ins i])]))

(defn stack-item-comp [val meta]
  [:div.flex.p-2
   [:div.mr-8
    [val-comp val]]])

(defn stack-comp []
  (let [{:keys [bytes meta] :as stack} @(subscribe [:stack])]
    [:div.bg-gray-900.mb-2.divide-y-2.divide-gray-50.h-64.rounded
     (for [m meta
           :let [value (bobj/get-value-from-meta stack m)]]
       ^{:key (hash bytes)} [stack-item-comp value meta])]))

(defn reg-comp [name {:keys [bytes meta]}]
  (let [m (first meta)]
    [:div.flex
     [:div.mr-2 "%" name]
     [val-comp [(:type m) (u/bytes-to-num bytes)]]]))

(defn registers-comp []
  (let [registers @(subscribe [:registers])]
    [:div.bg-gray-900.p-2.h-32.rounded
     (for [[name {:keys [meta] :as reg}] registers
           :when (some :type meta)]
       ^{:key name} [reg-comp name reg])]))

(defn chevron-button [which on-click]
  [:button.p-1.mr-2.rounded-full.flex.justify-center.items-center.hover:bg-gray-600
   {:on-click on-click}
   [:div.h-6.w-6 which]])

(defn header []
  (let [name @(subscribe [:program-name])]
    [:div.flex.justify-between.items-center.mb-2.text-gray-200
     [:div.flex.items-start
      [chevron-button chevron-left #()]
      [:h1.text-xl name]]
     [:div
      [chevron-button chevron-right #()]]]))

(defn dashboard []
  [:div.bg-gray-700.rounded-lg.p-4.text-gray-50.shadow-xl
   [:div.flex.py-4
    [:div.p-2 {:class "w-1/2"}
     [program-comp]]
    [:div.p-2 {:class "w-1/2"}
     [stack-comp]
     [registers-comp]]]
   [buttons]])

(defn main []
  [:div.h-screen.bg-gray-500.font-mono
   [:div.container.max-w-screen-md.mx-auto
    [:div.pt-10
     [header]
     [dashboard]]
    #_(when true
        [:div.text-gray-100
         [:pre.pt-24 (with-out-str (cljs.pprint/pprint @(:app-state ctx)))]
         [:pre.pt-10 (with-out-str (cljs.pprint/pprint @(:program-state @(:app-state ctx))))]])]])
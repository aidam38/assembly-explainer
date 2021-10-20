(ns assembly-explainer.views
  (:require
   [reagent.core :as r]
   [assembly-explainer.events :refer [dispatch]]
   [cljs.pprint]
   [assembly-explainer.icons.heroicons :as hi]))

(defn step-button [{:keys [app-state]}]
  [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-500
   {:on-click #(dispatch [:step])}
   "Step!"])

(defn arg-comp [[type value]]
  [:div value])

(defn ins-comp [[opcode & args]]
  [:div.flex.p-2
   [:div.mr-8
    opcode]
   [:div.flex.space-x-2
    (for [arg args]
      ^{:key arg} [arg-comp arg])]])

(defn program-comp [{:keys [app-state]}]
  (r/with-let [instructions (r/cursor (:program-state @app-state) [:memory :program :instructions])]
    [:div.bg-gray-900
     (for [ins @instructions]
       ^{:key (hash ins)} [ins-comp ins])]))

(defn stack-item-comp [item]
  [:div.flex.p-2
   [:div.mr-8
    (pr-str item)]])

(defn stack-comp [{:keys [app-state]}]
  (r/with-let [stack (r/cursor (:program-state @app-state) [:memory :stack])]
    [:div.bg-gray-900.mb-2.divide-y-2.divide-gray-50
     (doall (for [item @stack]
              (when item
                ^{:key (hash item)} [stack-item-comp item])))]))

(defn reg-comp [[name value]]
  [:div.flex
   [:div.mr-2 name]
   [:div value]])

(defn registers-comp [{:keys [app-state]}]
  (r/with-let [registers (r/cursor (:program-state @app-state) [:registers])]
    [:div.bg-gray-900.p-2
     (for [[type val :as reg] @registers
           :when (not (zero? val))]
       ^{:key type} [reg-comp reg])]))

(defn header [{:keys [app-state]}]
  (r/with-let [name (r/cursor app-state [:program-input :name])]
    [:div.flex.justify-center
     [:h1.text-xl @name]]))

(defn dashboard [ctx]
  [:div.bg-gray-700.rounded-lg.p-4.text-gray-50
   [header ctx]
   [:div.flex.py-4
    [:div.p-2 {:class "w-1/2"}
     [program-comp ctx]]
    [:div.p-2 {:class "w-1/2"}
     [stack-comp ctx]
     [registers-comp ctx]]]
   [step-button ctx]])

(defn main [ctx]
  [:div.h-screen.bg-gray-500
   [:div.container.max-w-screen-md.mx-auto
    [:div.pt-10
     [dashboard ctx]]
    (when true
      [:div.text-gray-100
       [:pre.pt-24 (with-out-str (cljs.pprint/pprint @(:app-state ctx)))]
       [:pre.pt-10 (with-out-str (cljs.pprint/pprint @(:program-state @(:app-state ctx))))]])]])
(ns assembly-explainer.views
  (:require
   [reagent.core :as r]
   [framework.core :refer [subscribe dispatch]]
   [codemirror.editor :as cm]
   [assembly-explainer.compiler.machine :as m]
   [assembly-explainer.compiler.core :as c]
   [assembly-explainer.compiler.byte-object :as bobj]
   [assembly-explainer.util :as u]
   [assembly-explainer.state :as s]
   [assembly-explainer.router :as router]
   [assembly-explainer.compiler.parser :as p]
   [reitit.frontend.easy :as rfe]
   [cljs.pprint]
   [to.fluent.heroicons-clojure.reagent.outline.chevron-right :refer [chevron-right]]
   [to.fluent.heroicons-clojure.reagent.outline.chevron-left :refer [chevron-left]]))

;; reusable components

(defn panel [name child]
  [:div
   [:span.text-sm.text-gray-400 name]
   [:div.bg-gray-900.mb-2.rounded
    child]])

(defn step-forward-button []
  [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-200.disabled:opacity-20.disabled:bg-gray-400.disabled:pointer-events-none.select-none
   {:on-click #(dispatch [:step-program-state])
    :disabled @(subscribe [:at-end-of-program?])}
   "Step!"])

(defn step-back-button []
  [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-200.disabled:opacity-20.disabled:bg-gray-400.disabled:pointer-events-none.select-none
   {:on-click #(dispatch [:undo-program-state])
    :disabled @(subscribe [:at-start-of-program?])}
   "Step back!"])

(defn buttons []
  [:div.flex.space-x-2
   [step-forward-button]
   [step-back-button]])

(defn val-comp [[type value & [offset]]]
  (case type
    :literal [:div.text-blue-500 "$" value]
    :register [:div.text-green-500 "%" value]
    :indirection [:div.text-purple-500 "$" offset "(%" value ")"]
    :ins [:div.text-yellow-500 value]
    :stack [:div.text-pink-500 value]
    [:div (pr-str value)]))

(defn backlinks-comp [val]
  [:div.absolute.right-0.text-gray-400.text-xs
   (for [bl @(subscribe [:get-backlinks-of val])]
     ^{:key bl} [val-comp bl])])

(defn ins-comp [[opcode & args] i backlinks?]
  [:div.relative
   [:div.absolute.text-yellow-500.text-xs i]
   (when backlinks? [backlinks-comp [:ins i]])
   [:div.flex.p-2.ml-4
    [:div.w-10.mr-6.text-gray-400
     opcode]
    [:div.flex.space-x-2.text-gray-400
     (interpose ", "
                (for [arg args]
                  ^{:key arg} [val-comp arg]))]]])

(defn instructions-comp [instructions backlinks?]
  [panel "instructions"
   [:div.divide-y-2.divide-gray-500
    (for [[i ins] (map-indexed vector instructions)]
      ^{:key (hash ins)} [ins-comp ins i backlinks?])]])

(defn program-comp []
  (let [instructions @(subscribe [:instructions])]
    [instructions-comp instructions true]))

(defn stack-item-comp [val {:keys [range]}]
  [:div.relative
   [:div.absolute.text-xs.text-pink-500 (first range)]
   [backlinks-comp [:stack (first range)]]
   [:div.flex.p-2.ml-6
    [:div.mr-8
     [val-comp val]]]])

(defn stack-comp []
  (let [{:keys [bytes meta] :as stack} @(subscribe [:stack])]
    [panel "stack"
     [:div.h-64.divide-y-2.divide-gray-500
      (for [m meta
            :let [value (bobj/get-value-from-meta stack m)]]
        ^{:key (hash bytes)} [stack-item-comp value m])]]))

(defn reg-comp [[_ {:keys [bytes meta]} :as reg-pair]]
  (let [{:keys [type]} (first meta)]
    [:div.flex
     [:div.w-10.mr-4
      [val-comp [:register (m/get-register-name reg-pair)]]]
     [val-comp [type (u/bytes-to-num bytes)]]]))

(defn registers-comp []
  (let [registers @(subscribe [:registers])]
    [panel "registers"
     [:div.h-32
      (for [[name {:keys [meta]} :as reg] registers
            :when (some :type meta)]
        ^{:key name} [reg-comp reg])]]))

(defn flags-comp []
  (let [flags @(subscribe [:flags])]
    [panel "flags"
     [:div.h-28 (pr-str flags)]]))

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

(defn dashboard-comp [child]
  [:div.bg-gray-700.rounded-lg.p-4.text-gray-50.shadow-xl
   child])

(defn program-dashboard []
  [dashboard-comp
   [:<>
    [:div.flex.py-4
     [:div.p-2 {:class "w-1/2"}
      [program-comp]]
     [:div.p-2 {:class "w-1/2"}
      [stack-comp]
      [registers-comp]
      [flags-comp]]]
    [buttons]]])

(defn code-editor []
  [:div.bg-gray-100.rounded.shadow.border.text-gray-900.h-32
   [cm/main
    {:on-change #(dispatch [:update-editor-content %])}]])

(defn instructions-preview []
  (let [editor-content @(subscribe [:editor-content])
        parse-result (p/assembly-parser  editor-content)]
    (u/prr parse-result)
    (if (vector? parse-result)
      [instructions-comp (p/get-ast parse-result) false]
      [:pre (pr-str parse-result)])))

(defn playground []
  (let [editing? @(subscribe [:editing?])]
    (if editing?
      [dashboard-comp
       [:<>
        [:div.flex.py-4
         [:div.p-4 {:class "w-1/2"}
          [code-editor]]
         [:div.p-2 {:class "w-1/2"}
          [instructions-preview]]]
        [:button.rounded.bg-gray-400.text-gray-900.px-2.py-1.hover:bg-gray-200.disabled:opacity-20.disabled:bg-gray-400.disabled:pointer-events-none.select-none
         {:on-click #(dispatch [:run])}
         "Run!"]]]
      [program-dashboard])))

(defn link-comp [route label]
  [:a.h-8.p-2.rounded.flex.items-center.hover:text-gray-300.hover:bg-gray-700
   {:href (apply rfe/href route)
    :class (when @(subscribe [:is-current? route]) "text-red-500")}
   label])

(defn sidebar []
  [:div.flex.flex-col.p-4.rounded.bg-gray-600.bg-opacity-50.text-gray-300.divide-gray-700.divide-y-2.space-y-4
   [link-comp [:home] "Introduction"]
   [:div.flex.flex-col.pt-2
    [:span.uppercase.text-xs.mb-2 "Examples"]
    (for [n s/program-names]
      ^{:key n} [link-comp [:example {:example n}] n])]
   [link-comp [:playground] "Playground"]])

(defn main []
  (let [active-page @(subscribe [:active-page])]
    [:div.h-screen.bg-gray-600.font-mono
     [:div.container.max-w-screen-xl.mx-auto.flex.flex-row
      [:div.w-56.pt-32
       [sidebar]]
      [:div.container
       (case active-page
         :home [:div "hello worlds"]
         :example [:div.pt-10
                   [header]
                   [program-dashboard]]
         :playground [:div.pt-10
                      [:h1.text-xl.text-white "Playground"]
                      [playground]])]
      [:div.w-56]
      #_(when true
          [:div.text-gray-100
           [:pre.pt-24 (with-out-str (cljs.pprint/pprint @(:app-state ctx)))]
           [:pre.pt-10 (with-out-str (cljs.pprint/pprint @(:program-state @(:app-state ctx))))]])]]))
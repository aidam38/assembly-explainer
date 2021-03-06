(ns assembly-explainer.subs
  (:require [reagent.core :as r]
            [framework.core :refer [reg-sub subscribe]]
            [assembly-explainer.util :as u]
            [assembly-explainer.router :as router]
            [assembly-explainer.compiler.byte-object :as bobj]
            [assembly-explainer.compiler.machine :as m]))

(reg-sub
 :active-page
 (fn [app-state _]
   (get-in @app-state [:current-route :name])))

(reg-sub
 :program-name
 (fn [app-state _]
   (get-in @app-state [:program-input :name])))

(reg-sub
 :program-state
 (fn [app-state _]
   @(:program-state @app-state)))

(reg-sub
 :registers
 (fn [_ _]
   (:registers @(subscribe [:program-state]))))

(reg-sub
 :stack
 (fn [_ _]
   (:stack @(subscribe [:program-state]))))

(reg-sub
 :flags
 (fn [_ _]
   (:flags @(subscribe [:program-state]))))

(reg-sub
 :instructions
 (fn [_ _]
   (:instructions @(subscribe [:program-state]))))

(reg-sub
 :number-of-instructions
 (fn [_ _]
   (count (:instructions @(subscribe [:program-state])))))

(reg-sub
 :current-instruction
 (fn [_ _]
   (second (bobj/get-value-at-index (:ip @(subscribe [:registers])) 0 8))))

(reg-sub
 :at-end-of-program?
 (fn [_ _]
   (= @(subscribe [:current-instruction])
      @(subscribe [:number-of-instructions]))))

(reg-sub
 :at-start-of-program?
 (fn [_ _]
   (zero? @(subscribe [:current-instruction]))))

(reg-sub
 :get-backlinks-of
 (fn [_ [_ value]]
   (->> @(subscribe [:registers])
        (filter
         #(let [[_ reg] %
                val (bobj/get-value-at-index reg 0 8)]
            (= value val)))
        (map (fn [reg-pair] [:register (m/get-register-name reg-pair)])))))

;; playground
(reg-sub
 :editor-content
 (fn [app-state _]
   (get-in @app-state [:editor-content])))

(reg-sub
 :editing?
 (fn [app-state _]
   (get-in @app-state [:editing?])))

(defn- name-matches?
  [{name1 :name
    path1 :path}
   {name2 :name
    path2 :path}]
  (and (= name1 name2)
       (= (not-empty path1)
          (not-empty path2))))

(reg-sub
 :is-current?
 (fn [app-state [_ [name path]]]
   (name-matches?
    (get @app-state :current-route)
    {:name name
     :path path})))

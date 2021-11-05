(ns assembly-explainer.subs
  (:require [reagent.core :as r]
            [framework.core :refer [reg-sub subscribe]]
            [assembly-explainer.compiler.byte-object :as bobj]))

(reg-sub
 :program-name
 (fn [app-state _]
   (get-in app-state [:program-input :name])))

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
   (second (:rip @(subscribe [:registers])))))

(reg-sub
 :at-end-of-program?
 (fn [_ _]
   (= @(subscribe [:current-instruction]) (dec @(subscribe [:number-of-instructions])))))

(reg-sub
 :at-start-of-program?
 (fn [_ _]
   (zero? @(subscribe [:current-instruction]))))

(reg-sub
 :get-backlinks-of
 (fn [_ [_ value]]
   (->> @(subscribe [:registers])
        (filter
         #(let [[name reg] %
                val (bobj/get-value-at-index reg 0 8)]
            (= value val)))
        (map (fn [[n _]] [:register n])))))
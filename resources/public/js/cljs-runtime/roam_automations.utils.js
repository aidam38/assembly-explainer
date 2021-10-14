goog.provide('roam_automations.utils');
roam_automations.utils.filter_transformations = (function roam_automations$utils$filter_transformations(st,ts){
var regex = (function (p1__44992_SHARP_){
return cljs.core.re_find(cljs.core.re_pattern(clojure.string.lower_case(st)),p1__44992_SHARP_);
});
var pred = (function (p1__44993_SHARP_){
return cljs.core.some(regex,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(p1__44993_SHARP_)));
});
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,ts));
});
roam_automations.utils.drop_nth = (function roam_automations$utils$drop_nth(n,v){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,v),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n + (1)),v));
});
roam_automations.utils.copy_to_clipboard_BANG_ = (function roam_automations$utils$copy_to_clipboard_BANG_(s){
return navigator.clipboard.writeText(s);
});

//# sourceMappingURL=roam_automations.utils.js.map

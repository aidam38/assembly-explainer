goog.provide('roam_automations.events');
if((typeof roam_automations !== 'undefined') && (typeof roam_automations.events !== 'undefined') && (typeof roam_automations.events.dispatch !== 'undefined')){
} else {
roam_automations.events.dispatch = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__45622 = cljs.core.get_global_hierarchy;
return (fexpr__45622.cljs$core$IFn$_invoke$arity$0 ? fexpr__45622.cljs$core$IFn$_invoke$arity$0() : fexpr__45622.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("roam-automations.events","dispatch"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
roam_automations.events.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"step-button-pressed","step-button-pressed",488695798),(function (){
return "heello";
}));
roam_automations.events.dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"back-button-pressed","back-button-pressed",-1674955625),(function (){
return "heello back";
}));

//# sourceMappingURL=roam_automations.events.js.map

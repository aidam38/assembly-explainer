goog.provide('roam_automations.core');
roam_automations.core.mount_root = (function roam_automations$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [roam_automations.views.main], null),document.getElementById("app"));
});
roam_automations.core.clear_cache_and_render_BANG_ = (function roam_automations$core$clear_cache_and_render_BANG_(){
return roam_automations.core.mount_root();
});
roam_automations.core.dev_init = (function roam_automations$core$dev_init(){
return roam_automations.core.mount_root();
});
roam_automations.core.init = (function roam_automations$core$init(){
roam_automations.events.dispatch.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return roam_automations.core.dev_init();
});
goog.exportSymbol('roam_automations.core.init', roam_automations.core.init);

//# sourceMappingURL=roam_automations.core.js.map

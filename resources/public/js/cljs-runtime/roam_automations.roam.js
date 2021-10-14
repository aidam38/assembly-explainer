goog.provide('roam_automations.roam');
roam_automations.roam.api = roamAlphaAPI;
roam_automations.roam.add_block_context_menu_command = (function roam_automations$roam$add_block_context_menu_command(label,conditional,callback){
return roam_automations.roam.api.ui.blockContextMenu.addCommand(({"label": label, "conditional": conditional, "callback": callback}));
});
roam_automations.roam.query = (function roam_automations$roam$query(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44911 = arguments.length;
var i__4819__auto___44912 = (0);
while(true){
if((i__4819__auto___44912 < len__4818__auto___44911)){
args__4824__auto__.push((arguments[i__4819__auto___44912]));

var G__44913 = (i__4819__auto___44912 + (1));
i__4819__auto___44912 = G__44913;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return roam_automations.roam.query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(roam_automations.roam.query.cljs$core$IFn$_invoke$arity$variadic = (function (q,o){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(roam_automations.roam.api.data.q(),cljs.core.cons(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0)),o));
}));

(roam_automations.roam.query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(roam_automations.roam.query.cljs$lang$applyTo = (function (seq44909){
var G__44910 = cljs.core.first(seq44909);
var seq44909__$1 = cljs.core.next(seq44909);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44910,seq44909__$1);
}));


//# sourceMappingURL=roam_automations.roam.js.map

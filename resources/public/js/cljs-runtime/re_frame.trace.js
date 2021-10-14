goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__42746){
var map__42747 = p__42746;
var map__42747__$1 = cljs.core.__destructure_map(map__42747);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42747__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42747__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42747__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42747__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__42750_42789 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__42751_42790 = null;
var count__42752_42791 = (0);
var i__42753_42792 = (0);
while(true){
if((i__42753_42792 < count__42752_42791)){
var vec__42766_42796 = chunk__42751_42790.cljs$core$IIndexed$_nth$arity$2(null,i__42753_42792);
var k_42797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42766_42796,(0),null);
var cb_42798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42766_42796,(1),null);
try{var G__42770_42799 = cljs.core.deref(re_frame.trace.traces);
(cb_42798.cljs$core$IFn$_invoke$arity$1 ? cb_42798.cljs$core$IFn$_invoke$arity$1(G__42770_42799) : cb_42798.call(null,G__42770_42799));
}catch (e42769){var e_42800 = e42769;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42797,"while storing",cljs.core.deref(re_frame.trace.traces),e_42800], 0));
}

var G__42801 = seq__42750_42789;
var G__42802 = chunk__42751_42790;
var G__42803 = count__42752_42791;
var G__42804 = (i__42753_42792 + (1));
seq__42750_42789 = G__42801;
chunk__42751_42790 = G__42802;
count__42752_42791 = G__42803;
i__42753_42792 = G__42804;
continue;
} else {
var temp__5754__auto___42805 = cljs.core.seq(seq__42750_42789);
if(temp__5754__auto___42805){
var seq__42750_42806__$1 = temp__5754__auto___42805;
if(cljs.core.chunked_seq_QMARK_(seq__42750_42806__$1)){
var c__4638__auto___42807 = cljs.core.chunk_first(seq__42750_42806__$1);
var G__42808 = cljs.core.chunk_rest(seq__42750_42806__$1);
var G__42809 = c__4638__auto___42807;
var G__42810 = cljs.core.count(c__4638__auto___42807);
var G__42811 = (0);
seq__42750_42789 = G__42808;
chunk__42751_42790 = G__42809;
count__42752_42791 = G__42810;
i__42753_42792 = G__42811;
continue;
} else {
var vec__42771_42812 = cljs.core.first(seq__42750_42806__$1);
var k_42813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42771_42812,(0),null);
var cb_42814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42771_42812,(1),null);
try{var G__42775_42823 = cljs.core.deref(re_frame.trace.traces);
(cb_42814.cljs$core$IFn$_invoke$arity$1 ? cb_42814.cljs$core$IFn$_invoke$arity$1(G__42775_42823) : cb_42814.call(null,G__42775_42823));
}catch (e42774){var e_42824 = e42774;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42813,"while storing",cljs.core.deref(re_frame.trace.traces),e_42824], 0));
}

var G__42829 = cljs.core.next(seq__42750_42806__$1);
var G__42830 = null;
var G__42831 = (0);
var G__42832 = (0);
seq__42750_42789 = G__42829;
chunk__42751_42790 = G__42830;
count__42752_42791 = G__42831;
i__42753_42792 = G__42832;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__42382 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42383 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42383);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___42497 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___42497)){
var new_db_42498 = temp__5754__auto___42497;
var fexpr__42385_42499 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42385_42499.cljs$core$IFn$_invoke$arity$1 ? fexpr__42385_42499.cljs$core$IFn$_invoke$arity$1(new_db_42498) : fexpr__42385_42499.call(null,new_db_42498));
} else {
}

var seq__42386 = cljs.core.seq(effects_without_db);
var chunk__42387 = null;
var count__42388 = (0);
var i__42389 = (0);
while(true){
if((i__42389 < count__42388)){
var vec__42396 = chunk__42387.cljs$core$IIndexed$_nth$arity$2(null,i__42389);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396,(1),null);
var temp__5752__auto___42500 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42500)){
var effect_fn_42501 = temp__5752__auto___42500;
(effect_fn_42501.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42501.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42501.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42502 = seq__42386;
var G__42503 = chunk__42387;
var G__42504 = count__42388;
var G__42505 = (i__42389 + (1));
seq__42386 = G__42502;
chunk__42387 = G__42503;
count__42388 = G__42504;
i__42389 = G__42505;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42386);
if(temp__5754__auto__){
var seq__42386__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42386__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42386__$1);
var G__42506 = cljs.core.chunk_rest(seq__42386__$1);
var G__42507 = c__4638__auto__;
var G__42508 = cljs.core.count(c__4638__auto__);
var G__42509 = (0);
seq__42386 = G__42506;
chunk__42387 = G__42507;
count__42388 = G__42508;
i__42389 = G__42509;
continue;
} else {
var vec__42401 = cljs.core.first(seq__42386__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401,(1),null);
var temp__5752__auto___42510 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42510)){
var effect_fn_42511 = temp__5752__auto___42510;
(effect_fn_42511.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42511.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42511.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42512 = cljs.core.next(seq__42386__$1);
var G__42513 = null;
var G__42514 = (0);
var G__42515 = (0);
seq__42386 = G__42512;
chunk__42387 = G__42513;
count__42388 = G__42514;
i__42389 = G__42515;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__41746__auto___42516 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__41747__auto___42517 = (end__41746__auto___42516 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41747__auto___42517,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__41746__auto___42516);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42382);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___42518 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___42518)){
var new_db_42519 = temp__5754__auto___42518;
var fexpr__42406_42520 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42406_42520.cljs$core$IFn$_invoke$arity$1 ? fexpr__42406_42520.cljs$core$IFn$_invoke$arity$1(new_db_42519) : fexpr__42406_42520.call(null,new_db_42519));
} else {
}

var seq__42411 = cljs.core.seq(effects_without_db);
var chunk__42412 = null;
var count__42413 = (0);
var i__42414 = (0);
while(true){
if((i__42414 < count__42413)){
var vec__42437 = chunk__42412.cljs$core$IIndexed$_nth$arity$2(null,i__42414);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42437,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42437,(1),null);
var temp__5752__auto___42521 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42521)){
var effect_fn_42522 = temp__5752__auto___42521;
(effect_fn_42522.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42522.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42522.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42523 = seq__42411;
var G__42524 = chunk__42412;
var G__42525 = count__42413;
var G__42526 = (i__42414 + (1));
seq__42411 = G__42523;
chunk__42412 = G__42524;
count__42413 = G__42525;
i__42414 = G__42526;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42411);
if(temp__5754__auto__){
var seq__42411__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42411__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42411__$1);
var G__42527 = cljs.core.chunk_rest(seq__42411__$1);
var G__42528 = c__4638__auto__;
var G__42529 = cljs.core.count(c__4638__auto__);
var G__42530 = (0);
seq__42411 = G__42527;
chunk__42412 = G__42528;
count__42413 = G__42529;
i__42414 = G__42530;
continue;
} else {
var vec__42441 = cljs.core.first(seq__42411__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42441,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42441,(1),null);
var temp__5752__auto___42531 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42531)){
var effect_fn_42532 = temp__5752__auto___42531;
(effect_fn_42532.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42532.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42532.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42533 = cljs.core.next(seq__42411__$1);
var G__42534 = null;
var G__42535 = (0);
var G__42536 = (0);
seq__42411 = G__42533;
chunk__42412 = G__42534;
count__42413 = G__42535;
i__42414 = G__42536;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__42449){
var map__42450 = p__42449;
var map__42450__$1 = cljs.core.__destructure_map(map__42450);
var effect = map__42450__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42450__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42450__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__42459 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42460 = null;
var count__42461 = (0);
var i__42462 = (0);
while(true){
if((i__42462 < count__42461)){
var effect = chunk__42460.cljs$core$IIndexed$_nth$arity$2(null,i__42462);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__42537 = seq__42459;
var G__42538 = chunk__42460;
var G__42539 = count__42461;
var G__42540 = (i__42462 + (1));
seq__42459 = G__42537;
chunk__42460 = G__42538;
count__42461 = G__42539;
i__42462 = G__42540;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42459);
if(temp__5754__auto__){
var seq__42459__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42459__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42459__$1);
var G__42541 = cljs.core.chunk_rest(seq__42459__$1);
var G__42542 = c__4638__auto__;
var G__42543 = cljs.core.count(c__4638__auto__);
var G__42544 = (0);
seq__42459 = G__42541;
chunk__42460 = G__42542;
count__42461 = G__42543;
i__42462 = G__42544;
continue;
} else {
var effect = cljs.core.first(seq__42459__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__42545 = cljs.core.next(seq__42459__$1);
var G__42546 = null;
var G__42547 = (0);
var G__42548 = (0);
seq__42459 = G__42545;
chunk__42460 = G__42546;
count__42461 = G__42547;
i__42462 = G__42548;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__42466 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__42467 = null;
var count__42468 = (0);
var i__42469 = (0);
while(true){
if((i__42469 < count__42468)){
var vec__42476 = chunk__42467.cljs$core$IIndexed$_nth$arity$2(null,i__42469);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42476,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42476,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___42549 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42549)){
var effect_fn_42550 = temp__5752__auto___42549;
(effect_fn_42550.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42550.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42550.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__42551 = seq__42466;
var G__42552 = chunk__42467;
var G__42553 = count__42468;
var G__42554 = (i__42469 + (1));
seq__42466 = G__42551;
chunk__42467 = G__42552;
count__42468 = G__42553;
i__42469 = G__42554;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42466);
if(temp__5754__auto__){
var seq__42466__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42466__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42466__$1);
var G__42555 = cljs.core.chunk_rest(seq__42466__$1);
var G__42556 = c__4638__auto__;
var G__42557 = cljs.core.count(c__4638__auto__);
var G__42558 = (0);
seq__42466 = G__42555;
chunk__42467 = G__42556;
count__42468 = G__42557;
i__42469 = G__42558;
continue;
} else {
var vec__42479 = cljs.core.first(seq__42466__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42479,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42479,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___42567 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42567)){
var effect_fn_42568 = temp__5752__auto___42567;
(effect_fn_42568.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42568.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42568.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__42570 = cljs.core.next(seq__42466__$1);
var G__42571 = null;
var G__42572 = (0);
var G__42573 = (0);
seq__42466 = G__42570;
chunk__42467 = G__42571;
count__42468 = G__42572;
i__42469 = G__42573;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__42482 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42483 = null;
var count__42484 = (0);
var i__42485 = (0);
while(true){
if((i__42485 < count__42484)){
var event = chunk__42483.cljs$core$IIndexed$_nth$arity$2(null,i__42485);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__42574 = seq__42482;
var G__42575 = chunk__42483;
var G__42576 = count__42484;
var G__42577 = (i__42485 + (1));
seq__42482 = G__42574;
chunk__42483 = G__42575;
count__42484 = G__42576;
i__42485 = G__42577;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42482);
if(temp__5754__auto__){
var seq__42482__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42482__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42482__$1);
var G__42583 = cljs.core.chunk_rest(seq__42482__$1);
var G__42584 = c__4638__auto__;
var G__42585 = cljs.core.count(c__4638__auto__);
var G__42586 = (0);
seq__42482 = G__42583;
chunk__42483 = G__42584;
count__42484 = G__42585;
i__42485 = G__42586;
continue;
} else {
var event = cljs.core.first(seq__42482__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__42589 = cljs.core.next(seq__42482__$1);
var G__42590 = null;
var G__42591 = (0);
var G__42592 = (0);
seq__42482 = G__42589;
chunk__42483 = G__42590;
count__42484 = G__42591;
i__42485 = G__42592;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__42489 = cljs.core.seq(value);
var chunk__42490 = null;
var count__42491 = (0);
var i__42492 = (0);
while(true){
if((i__42492 < count__42491)){
var event = chunk__42490.cljs$core$IIndexed$_nth$arity$2(null,i__42492);
clear_event(event);


var G__42595 = seq__42489;
var G__42596 = chunk__42490;
var G__42597 = count__42491;
var G__42598 = (i__42492 + (1));
seq__42489 = G__42595;
chunk__42490 = G__42596;
count__42491 = G__42597;
i__42492 = G__42598;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42489);
if(temp__5754__auto__){
var seq__42489__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42489__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42489__$1);
var G__42599 = cljs.core.chunk_rest(seq__42489__$1);
var G__42600 = c__4638__auto__;
var G__42601 = cljs.core.count(c__4638__auto__);
var G__42602 = (0);
seq__42489 = G__42599;
chunk__42490 = G__42600;
count__42491 = G__42601;
i__42492 = G__42602;
continue;
} else {
var event = cljs.core.first(seq__42489__$1);
clear_event(event);


var G__42603 = cljs.core.next(seq__42489__$1);
var G__42604 = null;
var G__42605 = (0);
var G__42606 = (0);
seq__42489 = G__42603;
chunk__42490 = G__42604;
count__42491 = G__42605;
i__42492 = G__42606;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map

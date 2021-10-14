goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__43041 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43042 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43042);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___43133 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___43133)){
var new_db_43134 = temp__5754__auto___43133;
var fexpr__43045_43135 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43045_43135.cljs$core$IFn$_invoke$arity$1 ? fexpr__43045_43135.cljs$core$IFn$_invoke$arity$1(new_db_43134) : fexpr__43045_43135.call(null,new_db_43134));
} else {
}

var seq__43046 = cljs.core.seq(effects_without_db);
var chunk__43047 = null;
var count__43048 = (0);
var i__43049 = (0);
while(true){
if((i__43049 < count__43048)){
var vec__43060 = chunk__43047.cljs$core$IIndexed$_nth$arity$2(null,i__43049);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43060,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43060,(1),null);
var temp__5752__auto___43136 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___43136)){
var effect_fn_43137 = temp__5752__auto___43136;
(effect_fn_43137.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43137.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43137.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43138 = seq__43046;
var G__43139 = chunk__43047;
var G__43140 = count__43048;
var G__43141 = (i__43049 + (1));
seq__43046 = G__43138;
chunk__43047 = G__43139;
count__43048 = G__43140;
i__43049 = G__43141;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__43046);
if(temp__5754__auto__){
var seq__43046__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43046__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43046__$1);
var G__43142 = cljs.core.chunk_rest(seq__43046__$1);
var G__43143 = c__4638__auto__;
var G__43144 = cljs.core.count(c__4638__auto__);
var G__43145 = (0);
seq__43046 = G__43142;
chunk__43047 = G__43143;
count__43048 = G__43144;
i__43049 = G__43145;
continue;
} else {
var vec__43064 = cljs.core.first(seq__43046__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43064,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43064,(1),null);
var temp__5752__auto___43146 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___43146)){
var effect_fn_43147 = temp__5752__auto___43146;
(effect_fn_43147.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43147.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43147.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43148 = cljs.core.next(seq__43046__$1);
var G__43149 = null;
var G__43150 = (0);
var G__43151 = (0);
seq__43046 = G__43148;
chunk__43047 = G__43149;
count__43048 = G__43150;
i__43049 = G__43151;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42724__auto___43152 = re_frame.interop.now();
var duration__42725__auto___43153 = (end__42724__auto___43152 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42725__auto___43153,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42724__auto___43152);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43041);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___43154 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___43154)){
var new_db_43155 = temp__5754__auto___43154;
var fexpr__43067_43156 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43067_43156.cljs$core$IFn$_invoke$arity$1 ? fexpr__43067_43156.cljs$core$IFn$_invoke$arity$1(new_db_43155) : fexpr__43067_43156.call(null,new_db_43155));
} else {
}

var seq__43069 = cljs.core.seq(effects_without_db);
var chunk__43070 = null;
var count__43071 = (0);
var i__43072 = (0);
while(true){
if((i__43072 < count__43071)){
var vec__43080 = chunk__43070.cljs$core$IIndexed$_nth$arity$2(null,i__43072);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43080,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43080,(1),null);
var temp__5752__auto___43157 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___43157)){
var effect_fn_43158 = temp__5752__auto___43157;
(effect_fn_43158.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43158.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43158.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43161 = seq__43069;
var G__43162 = chunk__43070;
var G__43163 = count__43071;
var G__43164 = (i__43072 + (1));
seq__43069 = G__43161;
chunk__43070 = G__43162;
count__43071 = G__43163;
i__43072 = G__43164;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__43069);
if(temp__5754__auto__){
var seq__43069__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43069__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43069__$1);
var G__43165 = cljs.core.chunk_rest(seq__43069__$1);
var G__43166 = c__4638__auto__;
var G__43167 = cljs.core.count(c__4638__auto__);
var G__43168 = (0);
seq__43069 = G__43165;
chunk__43070 = G__43166;
count__43071 = G__43167;
i__43072 = G__43168;
continue;
} else {
var vec__43084 = cljs.core.first(seq__43069__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43084,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43084,(1),null);
var temp__5752__auto___43169 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___43169)){
var effect_fn_43170 = temp__5752__auto___43169;
(effect_fn_43170.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43170.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43170.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43171 = cljs.core.next(seq__43069__$1);
var G__43172 = null;
var G__43173 = (0);
var G__43174 = (0);
seq__43069 = G__43171;
chunk__43070 = G__43172;
count__43071 = G__43173;
i__43072 = G__43174;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__43087){
var map__43088 = p__43087;
var map__43088__$1 = cljs.core.__destructure_map(map__43088);
var effect = map__43088__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43088__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43088__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__43092 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43093 = null;
var count__43094 = (0);
var i__43095 = (0);
while(true){
if((i__43095 < count__43094)){
var effect = chunk__43093.cljs$core$IIndexed$_nth$arity$2(null,i__43095);
re_frame.fx.dispatch_later(effect);


var G__43176 = seq__43092;
var G__43177 = chunk__43093;
var G__43178 = count__43094;
var G__43179 = (i__43095 + (1));
seq__43092 = G__43176;
chunk__43093 = G__43177;
count__43094 = G__43178;
i__43095 = G__43179;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__43092);
if(temp__5754__auto__){
var seq__43092__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43092__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43092__$1);
var G__43180 = cljs.core.chunk_rest(seq__43092__$1);
var G__43181 = c__4638__auto__;
var G__43182 = cljs.core.count(c__4638__auto__);
var G__43183 = (0);
seq__43092 = G__43180;
chunk__43093 = G__43181;
count__43094 = G__43182;
i__43095 = G__43183;
continue;
} else {
var effect = cljs.core.first(seq__43092__$1);
re_frame.fx.dispatch_later(effect);


var G__43184 = cljs.core.next(seq__43092__$1);
var G__43185 = null;
var G__43186 = (0);
var G__43187 = (0);
seq__43092 = G__43184;
chunk__43093 = G__43185;
count__43094 = G__43186;
i__43095 = G__43187;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__43109 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__43110 = null;
var count__43111 = (0);
var i__43112 = (0);
while(true){
if((i__43112 < count__43111)){
var vec__43119 = chunk__43110.cljs$core$IIndexed$_nth$arity$2(null,i__43112);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43119,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43119,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___43189 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___43189)){
var effect_fn_43190 = temp__5752__auto___43189;
(effect_fn_43190.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43190.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43190.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43191 = seq__43109;
var G__43192 = chunk__43110;
var G__43193 = count__43111;
var G__43194 = (i__43112 + (1));
seq__43109 = G__43191;
chunk__43110 = G__43192;
count__43111 = G__43193;
i__43112 = G__43194;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__43109);
if(temp__5754__auto__){
var seq__43109__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43109__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43109__$1);
var G__43195 = cljs.core.chunk_rest(seq__43109__$1);
var G__43196 = c__4638__auto__;
var G__43197 = cljs.core.count(c__4638__auto__);
var G__43198 = (0);
seq__43109 = G__43195;
chunk__43110 = G__43196;
count__43111 = G__43197;
i__43112 = G__43198;
continue;
} else {
var vec__43122 = cljs.core.first(seq__43109__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43122,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43122,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___43199 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___43199)){
var effect_fn_43200 = temp__5752__auto___43199;
(effect_fn_43200.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43200.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43200.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43201 = cljs.core.next(seq__43109__$1);
var G__43202 = null;
var G__43203 = (0);
var G__43204 = (0);
seq__43109 = G__43201;
chunk__43110 = G__43202;
count__43111 = G__43203;
i__43112 = G__43204;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__43125 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43126 = null;
var count__43127 = (0);
var i__43128 = (0);
while(true){
if((i__43128 < count__43127)){
var event = chunk__43126.cljs$core$IIndexed$_nth$arity$2(null,i__43128);
re_frame.router.dispatch(event);


var G__43205 = seq__43125;
var G__43206 = chunk__43126;
var G__43207 = count__43127;
var G__43208 = (i__43128 + (1));
seq__43125 = G__43205;
chunk__43126 = G__43206;
count__43127 = G__43207;
i__43128 = G__43208;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__43125);
if(temp__5754__auto__){
var seq__43125__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43125__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43125__$1);
var G__43209 = cljs.core.chunk_rest(seq__43125__$1);
var G__43210 = c__4638__auto__;
var G__43211 = cljs.core.count(c__4638__auto__);
var G__43212 = (0);
seq__43125 = G__43209;
chunk__43126 = G__43210;
count__43127 = G__43211;
i__43128 = G__43212;
continue;
} else {
var event = cljs.core.first(seq__43125__$1);
re_frame.router.dispatch(event);


var G__43213 = cljs.core.next(seq__43125__$1);
var G__43214 = null;
var G__43215 = (0);
var G__43216 = (0);
seq__43125 = G__43213;
chunk__43126 = G__43214;
count__43127 = G__43215;
i__43128 = G__43216;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__43129 = cljs.core.seq(value);
var chunk__43130 = null;
var count__43131 = (0);
var i__43132 = (0);
while(true){
if((i__43132 < count__43131)){
var event = chunk__43130.cljs$core$IIndexed$_nth$arity$2(null,i__43132);
clear_event(event);


var G__43217 = seq__43129;
var G__43218 = chunk__43130;
var G__43219 = count__43131;
var G__43220 = (i__43132 + (1));
seq__43129 = G__43217;
chunk__43130 = G__43218;
count__43131 = G__43219;
i__43132 = G__43220;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__43129);
if(temp__5754__auto__){
var seq__43129__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43129__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43129__$1);
var G__43221 = cljs.core.chunk_rest(seq__43129__$1);
var G__43222 = c__4638__auto__;
var G__43223 = cljs.core.count(c__4638__auto__);
var G__43224 = (0);
seq__43129 = G__43221;
chunk__43130 = G__43222;
count__43131 = G__43223;
i__43132 = G__43224;
continue;
} else {
var event = cljs.core.first(seq__43129__$1);
clear_event(event);


var G__43225 = cljs.core.next(seq__43129__$1);
var G__43226 = null;
var G__43227 = (0);
var G__43228 = (0);
seq__43129 = G__43225;
chunk__43130 = G__43226;
count__43131 = G__43227;
i__43132 = G__43228;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

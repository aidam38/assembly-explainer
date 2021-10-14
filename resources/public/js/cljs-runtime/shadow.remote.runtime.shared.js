goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48125,res){
var map__48128 = p__48125;
var map__48128__$1 = cljs.core.__destructure_map(map__48128);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48128__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48128__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48130 = res;
var G__48130__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48130,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48130);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48130__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48130__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48143 = arguments.length;
switch (G__48143) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48152,msg,handlers,timeout_after_ms){
var map__48153 = p__48152;
var map__48153__$1 = cljs.core.__destructure_map(map__48153);
var runtime = map__48153__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48153__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48444 = arguments.length;
var i__4819__auto___48447 = (0);
while(true){
if((i__4819__auto___48447 < len__4818__auto___48444)){
args__4824__auto__.push((arguments[i__4819__auto___48447]));

var G__48449 = (i__4819__auto___48447 + (1));
i__4819__auto___48447 = G__48449;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48188,ev,args){
var map__48189 = p__48188;
var map__48189__$1 = cljs.core.__destructure_map(map__48189);
var runtime = map__48189__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48189__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48190 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48193 = null;
var count__48194 = (0);
var i__48195 = (0);
while(true){
if((i__48195 < count__48194)){
var ext = chunk__48193.cljs$core$IIndexed$_nth$arity$2(null,i__48195);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48454 = seq__48190;
var G__48455 = chunk__48193;
var G__48456 = count__48194;
var G__48457 = (i__48195 + (1));
seq__48190 = G__48454;
chunk__48193 = G__48455;
count__48194 = G__48456;
i__48195 = G__48457;
continue;
} else {
var G__48458 = seq__48190;
var G__48459 = chunk__48193;
var G__48460 = count__48194;
var G__48461 = (i__48195 + (1));
seq__48190 = G__48458;
chunk__48193 = G__48459;
count__48194 = G__48460;
i__48195 = G__48461;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__48190);
if(temp__5754__auto__){
var seq__48190__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48190__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48190__$1);
var G__48462 = cljs.core.chunk_rest(seq__48190__$1);
var G__48463 = c__4638__auto__;
var G__48464 = cljs.core.count(c__4638__auto__);
var G__48465 = (0);
seq__48190 = G__48462;
chunk__48193 = G__48463;
count__48194 = G__48464;
i__48195 = G__48465;
continue;
} else {
var ext = cljs.core.first(seq__48190__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48466 = cljs.core.next(seq__48190__$1);
var G__48467 = null;
var G__48468 = (0);
var G__48469 = (0);
seq__48190 = G__48466;
chunk__48193 = G__48467;
count__48194 = G__48468;
i__48195 = G__48469;
continue;
} else {
var G__48470 = cljs.core.next(seq__48190__$1);
var G__48471 = null;
var G__48472 = (0);
var G__48473 = (0);
seq__48190 = G__48470;
chunk__48193 = G__48471;
count__48194 = G__48472;
i__48195 = G__48473;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48181){
var G__48182 = cljs.core.first(seq48181);
var seq48181__$1 = cljs.core.next(seq48181);
var G__48183 = cljs.core.first(seq48181__$1);
var seq48181__$2 = cljs.core.next(seq48181__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48182,G__48183,seq48181__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48218,p__48219){
var map__48220 = p__48218;
var map__48220__$1 = cljs.core.__destructure_map(map__48220);
var runtime = map__48220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48221 = p__48219;
var map__48221__$1 = cljs.core.__destructure_map(map__48221);
var msg = map__48221__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48221__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48223 = cljs.core.deref(state_ref);
var map__48223__$1 = cljs.core.__destructure_map(map__48223);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48226){
var map__48227 = p__48226;
var map__48227__$1 = cljs.core.__destructure_map(map__48227);
var runtime = map__48227__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48230,msg){
var map__48231 = p__48230;
var map__48231__$1 = cljs.core.__destructure_map(map__48231);
var runtime = map__48231__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48231__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48232,key,p__48233){
var map__48234 = p__48232;
var map__48234__$1 = cljs.core.__destructure_map(map__48234);
var state = map__48234__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48234__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48235 = p__48233;
var map__48235__$1 = cljs.core.__destructure_map(map__48235);
var spec = map__48235__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48236,key,spec){
var map__48237 = p__48236;
var map__48237__$1 = cljs.core.__destructure_map(map__48237);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48239_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48239_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48240_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48240_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48241_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48241_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48242_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48242_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48243_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48243_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48246,key){
var map__48247 = p__48246;
var map__48247__$1 = cljs.core.__destructure_map(map__48247);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48247__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48248,msg){
var map__48249 = p__48248;
var map__48249__$1 = cljs.core.__destructure_map(map__48249);
var runtime = map__48249__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48249__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48255,p__48256){
var map__48257 = p__48255;
var map__48257__$1 = cljs.core.__destructure_map(map__48257);
var runtime = map__48257__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48257__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48258 = p__48256;
var map__48258__$1 = cljs.core.__destructure_map(map__48258);
var msg = map__48258__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48258__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48258__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48368 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48370 = null;
var count__48371 = (0);
var i__48372 = (0);
while(true){
if((i__48372 < count__48371)){
var map__48412 = chunk__48370.cljs$core$IIndexed$_nth$arity$2(null,i__48372);
var map__48412__$1 = cljs.core.__destructure_map(map__48412);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48412__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48496 = seq__48368;
var G__48497 = chunk__48370;
var G__48498 = count__48371;
var G__48499 = (i__48372 + (1));
seq__48368 = G__48496;
chunk__48370 = G__48497;
count__48371 = G__48498;
i__48372 = G__48499;
continue;
} else {
var G__48500 = seq__48368;
var G__48501 = chunk__48370;
var G__48502 = count__48371;
var G__48503 = (i__48372 + (1));
seq__48368 = G__48500;
chunk__48370 = G__48501;
count__48371 = G__48502;
i__48372 = G__48503;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__48368);
if(temp__5754__auto__){
var seq__48368__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48368__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48368__$1);
var G__48505 = cljs.core.chunk_rest(seq__48368__$1);
var G__48506 = c__4638__auto__;
var G__48507 = cljs.core.count(c__4638__auto__);
var G__48508 = (0);
seq__48368 = G__48505;
chunk__48370 = G__48506;
count__48371 = G__48507;
i__48372 = G__48508;
continue;
} else {
var map__48418 = cljs.core.first(seq__48368__$1);
var map__48418__$1 = cljs.core.__destructure_map(map__48418);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48418__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48512 = cljs.core.next(seq__48368__$1);
var G__48513 = null;
var G__48514 = (0);
var G__48515 = (0);
seq__48368 = G__48512;
chunk__48370 = G__48513;
count__48371 = G__48514;
i__48372 = G__48515;
continue;
} else {
var G__48516 = cljs.core.next(seq__48368__$1);
var G__48517 = null;
var G__48518 = (0);
var G__48519 = (0);
seq__48368 = G__48516;
chunk__48370 = G__48517;
count__48371 = G__48518;
i__48372 = G__48519;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

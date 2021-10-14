goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51774,p__51775){
var map__51776 = p__51774;
var map__51776__$1 = cljs.core.__destructure_map(map__51776);
var svc = map__51776__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51776__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51776__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51776__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51777 = p__51775;
var map__51777__$1 = cljs.core.__destructure_map(map__51777);
var msg = map__51777__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51777__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51777__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51777__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51777__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51778,p__51779){
var map__51780 = p__51778;
var map__51780__$1 = cljs.core.__destructure_map(map__51780);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51780__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51781 = p__51779;
var map__51781__$1 = cljs.core.__destructure_map(map__51781);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51781__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51783,p__51784){
var map__51785 = p__51783;
var map__51785__$1 = cljs.core.__destructure_map(map__51785);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51785__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51785__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51787 = p__51784;
var map__51787__$1 = cljs.core.__destructure_map(map__51787);
var msg = map__51787__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51787__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51795,tid){
var map__51796 = p__51795;
var map__51796__$1 = cljs.core.__destructure_map(map__51796);
var svc = map__51796__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51796__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51805 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51806 = null;
var count__51807 = (0);
var i__51808 = (0);
while(true){
if((i__51808 < count__51807)){
var vec__51824 = chunk__51806.cljs$core$IIndexed$_nth$arity$2(null,i__51808);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51846 = seq__51805;
var G__51847 = chunk__51806;
var G__51848 = count__51807;
var G__51849 = (i__51808 + (1));
seq__51805 = G__51846;
chunk__51806 = G__51847;
count__51807 = G__51848;
i__51808 = G__51849;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__51805);
if(temp__5754__auto__){
var seq__51805__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51805__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51805__$1);
var G__51850 = cljs.core.chunk_rest(seq__51805__$1);
var G__51851 = c__4638__auto__;
var G__51852 = cljs.core.count(c__4638__auto__);
var G__51853 = (0);
seq__51805 = G__51850;
chunk__51806 = G__51851;
count__51807 = G__51852;
i__51808 = G__51853;
continue;
} else {
var vec__51827 = cljs.core.first(seq__51805__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51827,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51827,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51854 = cljs.core.next(seq__51805__$1);
var G__51855 = null;
var G__51856 = (0);
var G__51857 = (0);
seq__51805 = G__51854;
chunk__51806 = G__51855;
count__51807 = G__51856;
i__51808 = G__51857;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51797_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51797_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51798_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51798_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51799_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51799_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51800_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51800_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51830){
var map__51834 = p__51830;
var map__51834__$1 = cljs.core.__destructure_map(map__51834);
var svc = map__51834__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

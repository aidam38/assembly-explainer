goog.provide('day8.re_frame_10x.fx.local_storage');
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e44286){if((e44286 instanceof Error)){
var _ = e44286;
return (new goog.testing.storage.FakeMechanism());
} else {
throw e44286;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){

return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(var_args){
var G__44341 = arguments.length;
switch (G__44341) {
case 1:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e44345){if((e44345 instanceof Error)){
var _ = e44345;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e44345;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__44359 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__44360 = null;
var count__44361 = (0);
var i__44362 = (0);
while(true){
if((i__44362 < count__44361)){
var k = chunk__44360.cljs$core$IIndexed$_nth$arity$2(null,i__44362);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__44383 = seq__44359;
var G__44384 = chunk__44360;
var G__44385 = count__44361;
var G__44386 = (i__44362 + (1));
seq__44359 = G__44383;
chunk__44360 = G__44384;
count__44361 = G__44385;
i__44362 = G__44386;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__44359);
if(temp__5754__auto__){
var seq__44359__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44359__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44359__$1);
var G__44387 = cljs.core.chunk_rest(seq__44359__$1);
var G__44388 = c__4638__auto__;
var G__44389 = cljs.core.count(c__4638__auto__);
var G__44390 = (0);
seq__44359 = G__44387;
chunk__44360 = G__44388;
count__44361 = G__44389;
i__44362 = G__44390;
continue;
} else {
var k = cljs.core.first(seq__44359__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__44391 = cljs.core.next(seq__44359__$1);
var G__44392 = null;
var G__44393 = (0);
var G__44394 = (0);
seq__44359 = G__44391;
chunk__44360 = G__44392;
count__44361 = G__44393;
i__44362 = G__44394;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__44377 = arguments.length;
switch (G__44377) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___44396 = arguments.length;
var i__4819__auto___44397 = (0);
while(true){
if((i__4819__auto___44397 < len__4818__auto___44396)){
args_arr__4839__auto__.push((arguments[i__4819__auto___44397]));

var G__44398 = (i__4819__auto___44397 + (1));
i__4819__auto___44397 = G__44398;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0)));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq44375){
var G__44376 = cljs.core.first(seq44375);
var seq44375__$1 = cljs.core.next(seq44375);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44376,seq44375__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__44380){
var map__44381 = p__44380;
var map__44381__$1 = cljs.core.__destructure_map(map__44381);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44381__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44381__$1,new cljs.core.Keyword(null,"or","or",235744169));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,or));
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map

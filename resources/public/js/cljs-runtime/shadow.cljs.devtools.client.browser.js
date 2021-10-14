goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52989 = arguments.length;
var i__4819__auto___52990 = (0);
while(true){
if((i__4819__auto___52990 < len__4818__auto___52989)){
args__4824__auto__.push((arguments[i__4819__auto___52990]));

var G__52991 = (i__4819__auto___52990 + (1));
i__4819__auto___52990 = G__52991;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52724){
var G__52725 = cljs.core.first(seq52724);
var seq52724__$1 = cljs.core.next(seq52724);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52725,seq52724__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52731 = cljs.core.seq(sources);
var chunk__52732 = null;
var count__52733 = (0);
var i__52734 = (0);
while(true){
if((i__52734 < count__52733)){
var map__52754 = chunk__52732.cljs$core$IIndexed$_nth$arity$2(null,i__52734);
var map__52754__$1 = cljs.core.__destructure_map(map__52754);
var src = map__52754__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52755){var e_52992 = e52755;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52992);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52992.message)].join('')));
}

var G__52993 = seq__52731;
var G__52994 = chunk__52732;
var G__52995 = count__52733;
var G__52996 = (i__52734 + (1));
seq__52731 = G__52993;
chunk__52732 = G__52994;
count__52733 = G__52995;
i__52734 = G__52996;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__52731);
if(temp__5754__auto__){
var seq__52731__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52731__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52731__$1);
var G__52997 = cljs.core.chunk_rest(seq__52731__$1);
var G__52998 = c__4638__auto__;
var G__52999 = cljs.core.count(c__4638__auto__);
var G__53000 = (0);
seq__52731 = G__52997;
chunk__52732 = G__52998;
count__52733 = G__52999;
i__52734 = G__53000;
continue;
} else {
var map__52756 = cljs.core.first(seq__52731__$1);
var map__52756__$1 = cljs.core.__destructure_map(map__52756);
var src = map__52756__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52756__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52756__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52756__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52756__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52758){var e_53001 = e52758;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53001);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53001.message)].join('')));
}

var G__53002 = cljs.core.next(seq__52731__$1);
var G__53003 = null;
var G__53004 = (0);
var G__53005 = (0);
seq__52731 = G__53002;
chunk__52732 = G__53003;
count__52733 = G__53004;
i__52734 = G__53005;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52762 = cljs.core.seq(js_requires);
var chunk__52763 = null;
var count__52764 = (0);
var i__52765 = (0);
while(true){
if((i__52765 < count__52764)){
var js_ns = chunk__52763.cljs$core$IIndexed$_nth$arity$2(null,i__52765);
var require_str_53006 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53006);


var G__53007 = seq__52762;
var G__53008 = chunk__52763;
var G__53009 = count__52764;
var G__53010 = (i__52765 + (1));
seq__52762 = G__53007;
chunk__52763 = G__53008;
count__52764 = G__53009;
i__52765 = G__53010;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__52762);
if(temp__5754__auto__){
var seq__52762__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52762__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52762__$1);
var G__53011 = cljs.core.chunk_rest(seq__52762__$1);
var G__53012 = c__4638__auto__;
var G__53013 = cljs.core.count(c__4638__auto__);
var G__53014 = (0);
seq__52762 = G__53011;
chunk__52763 = G__53012;
count__52764 = G__53013;
i__52765 = G__53014;
continue;
} else {
var js_ns = cljs.core.first(seq__52762__$1);
var require_str_53015 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53015);


var G__53016 = cljs.core.next(seq__52762__$1);
var G__53017 = null;
var G__53018 = (0);
var G__53019 = (0);
seq__52762 = G__53016;
chunk__52763 = G__53017;
count__52764 = G__53018;
i__52765 = G__53019;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52777){
var map__52778 = p__52777;
var map__52778__$1 = cljs.core.__destructure_map(map__52778);
var msg = map__52778__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52779(s__52780){
return (new cljs.core.LazySeq(null,(function (){
var s__52780__$1 = s__52780;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__52780__$1);
if(temp__5754__auto__){
var xs__6310__auto__ = temp__5754__auto__;
var map__52785 = cljs.core.first(xs__6310__auto__);
var map__52785__$1 = cljs.core.__destructure_map(map__52785);
var src = map__52785__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52785__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52785__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__52780__$1,map__52785,map__52785__$1,src,resource_name,warnings,xs__6310__auto__,temp__5754__auto__,map__52778,map__52778__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52779_$_iter__52781(s__52782){
return (new cljs.core.LazySeq(null,((function (s__52780__$1,map__52785,map__52785__$1,src,resource_name,warnings,xs__6310__auto__,temp__5754__auto__,map__52778,map__52778__$1,msg,info,reload_info){
return (function (){
var s__52782__$1 = s__52782;
while(true){
var temp__5754__auto____$1 = cljs.core.seq(s__52782__$1);
if(temp__5754__auto____$1){
var s__52782__$2 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52782__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__52782__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__52784 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__52783 = (0);
while(true){
if((i__52783 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__52783);
cljs.core.chunk_append(b__52784,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53020 = (i__52783 + (1));
i__52783 = G__53020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52784),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52779_$_iter__52781(cljs.core.chunk_rest(s__52782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52784),null);
}
} else {
var warning = cljs.core.first(s__52782__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52779_$_iter__52781(cljs.core.rest(s__52782__$2)));
}
} else {
return null;
}
break;
}
});})(s__52780__$1,map__52785,map__52785__$1,src,resource_name,warnings,xs__6310__auto__,temp__5754__auto__,map__52778,map__52778__$1,msg,info,reload_info))
,null,null));
});})(s__52780__$1,map__52785,map__52785__$1,src,resource_name,warnings,xs__6310__auto__,temp__5754__auto__,map__52778,map__52778__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52779(cljs.core.rest(s__52780__$1)));
} else {
var G__53021 = cljs.core.rest(s__52780__$1);
s__52780__$1 = G__53021;
continue;
}
} else {
var G__53022 = cljs.core.rest(s__52780__$1);
s__52780__$1 = G__53022;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52789_53023 = cljs.core.seq(warnings);
var chunk__52792_53024 = null;
var count__52794_53025 = (0);
var i__52796_53026 = (0);
while(true){
if((i__52796_53026 < count__52794_53025)){
var map__52799_53027 = chunk__52792_53024.cljs$core$IIndexed$_nth$arity$2(null,i__52796_53026);
var map__52799_53028__$1 = cljs.core.__destructure_map(map__52799_53027);
var w_53029 = map__52799_53028__$1;
var msg_53030__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799_53028__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799_53028__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799_53028__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799_53028__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53033)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53031),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53032),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53030__$1)].join(''));


var G__53035 = seq__52789_53023;
var G__53036 = chunk__52792_53024;
var G__53037 = count__52794_53025;
var G__53038 = (i__52796_53026 + (1));
seq__52789_53023 = G__53035;
chunk__52792_53024 = G__53036;
count__52794_53025 = G__53037;
i__52796_53026 = G__53038;
continue;
} else {
var temp__5754__auto___53039 = cljs.core.seq(seq__52789_53023);
if(temp__5754__auto___53039){
var seq__52789_53040__$1 = temp__5754__auto___53039;
if(cljs.core.chunked_seq_QMARK_(seq__52789_53040__$1)){
var c__4638__auto___53041 = cljs.core.chunk_first(seq__52789_53040__$1);
var G__53042 = cljs.core.chunk_rest(seq__52789_53040__$1);
var G__53043 = c__4638__auto___53041;
var G__53044 = cljs.core.count(c__4638__auto___53041);
var G__53045 = (0);
seq__52789_53023 = G__53042;
chunk__52792_53024 = G__53043;
count__52794_53025 = G__53044;
i__52796_53026 = G__53045;
continue;
} else {
var map__52801_53046 = cljs.core.first(seq__52789_53040__$1);
var map__52801_53047__$1 = cljs.core.__destructure_map(map__52801_53046);
var w_53048 = map__52801_53047__$1;
var msg_53049__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52801_53047__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52801_53047__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52801_53047__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52801_53047__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53052)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53050),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53051),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53049__$1)].join(''));


var G__53054 = cljs.core.next(seq__52789_53040__$1);
var G__53055 = null;
var G__53056 = (0);
var G__53057 = (0);
seq__52789_53023 = G__53054;
chunk__52792_53024 = G__53055;
count__52794_53025 = G__53056;
i__52796_53026 = G__53057;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52776_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52776_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52808){
var map__52809 = p__52808;
var map__52809__$1 = cljs.core.__destructure_map(map__52809);
var msg = map__52809__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52810 = cljs.core.seq(updates);
var chunk__52812 = null;
var count__52813 = (0);
var i__52814 = (0);
while(true){
if((i__52814 < count__52813)){
var path = chunk__52812.cljs$core$IIndexed$_nth$arity$2(null,i__52814);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52850_53058 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52854_53059 = null;
var count__52855_53060 = (0);
var i__52856_53061 = (0);
while(true){
if((i__52856_53061 < count__52855_53060)){
var node_53062 = chunk__52854_53059.cljs$core$IIndexed$_nth$arity$2(null,i__52856_53061);
if(cljs.core.not(node_53062.shadow$old)){
var path_match_53063 = shadow.cljs.devtools.client.browser.match_paths(node_53062.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53063)){
var new_link_53064 = (function (){var G__52862 = node_53062.cloneNode(true);
G__52862.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53063),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52862;
})();
(node_53062.shadow$old = true);

(new_link_53064.onload = ((function (seq__52850_53058,chunk__52854_53059,count__52855_53060,i__52856_53061,seq__52810,chunk__52812,count__52813,i__52814,new_link_53064,path_match_53063,node_53062,path,map__52809,map__52809__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53062);
});})(seq__52850_53058,chunk__52854_53059,count__52855_53060,i__52856_53061,seq__52810,chunk__52812,count__52813,i__52814,new_link_53064,path_match_53063,node_53062,path,map__52809,map__52809__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53063], 0));

goog.dom.insertSiblingAfter(new_link_53064,node_53062);


var G__53065 = seq__52850_53058;
var G__53066 = chunk__52854_53059;
var G__53067 = count__52855_53060;
var G__53068 = (i__52856_53061 + (1));
seq__52850_53058 = G__53065;
chunk__52854_53059 = G__53066;
count__52855_53060 = G__53067;
i__52856_53061 = G__53068;
continue;
} else {
var G__53069 = seq__52850_53058;
var G__53070 = chunk__52854_53059;
var G__53071 = count__52855_53060;
var G__53072 = (i__52856_53061 + (1));
seq__52850_53058 = G__53069;
chunk__52854_53059 = G__53070;
count__52855_53060 = G__53071;
i__52856_53061 = G__53072;
continue;
}
} else {
var G__53073 = seq__52850_53058;
var G__53074 = chunk__52854_53059;
var G__53075 = count__52855_53060;
var G__53076 = (i__52856_53061 + (1));
seq__52850_53058 = G__53073;
chunk__52854_53059 = G__53074;
count__52855_53060 = G__53075;
i__52856_53061 = G__53076;
continue;
}
} else {
var temp__5754__auto___53077 = cljs.core.seq(seq__52850_53058);
if(temp__5754__auto___53077){
var seq__52850_53078__$1 = temp__5754__auto___53077;
if(cljs.core.chunked_seq_QMARK_(seq__52850_53078__$1)){
var c__4638__auto___53079 = cljs.core.chunk_first(seq__52850_53078__$1);
var G__53080 = cljs.core.chunk_rest(seq__52850_53078__$1);
var G__53081 = c__4638__auto___53079;
var G__53082 = cljs.core.count(c__4638__auto___53079);
var G__53083 = (0);
seq__52850_53058 = G__53080;
chunk__52854_53059 = G__53081;
count__52855_53060 = G__53082;
i__52856_53061 = G__53083;
continue;
} else {
var node_53084 = cljs.core.first(seq__52850_53078__$1);
if(cljs.core.not(node_53084.shadow$old)){
var path_match_53085 = shadow.cljs.devtools.client.browser.match_paths(node_53084.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53085)){
var new_link_53088 = (function (){var G__52863 = node_53084.cloneNode(true);
G__52863.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53085),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52863;
})();
(node_53084.shadow$old = true);

(new_link_53088.onload = ((function (seq__52850_53058,chunk__52854_53059,count__52855_53060,i__52856_53061,seq__52810,chunk__52812,count__52813,i__52814,new_link_53088,path_match_53085,node_53084,seq__52850_53078__$1,temp__5754__auto___53077,path,map__52809,map__52809__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53084);
});})(seq__52850_53058,chunk__52854_53059,count__52855_53060,i__52856_53061,seq__52810,chunk__52812,count__52813,i__52814,new_link_53088,path_match_53085,node_53084,seq__52850_53078__$1,temp__5754__auto___53077,path,map__52809,map__52809__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53085], 0));

goog.dom.insertSiblingAfter(new_link_53088,node_53084);


var G__53089 = cljs.core.next(seq__52850_53078__$1);
var G__53090 = null;
var G__53091 = (0);
var G__53092 = (0);
seq__52850_53058 = G__53089;
chunk__52854_53059 = G__53090;
count__52855_53060 = G__53091;
i__52856_53061 = G__53092;
continue;
} else {
var G__53093 = cljs.core.next(seq__52850_53078__$1);
var G__53094 = null;
var G__53095 = (0);
var G__53096 = (0);
seq__52850_53058 = G__53093;
chunk__52854_53059 = G__53094;
count__52855_53060 = G__53095;
i__52856_53061 = G__53096;
continue;
}
} else {
var G__53097 = cljs.core.next(seq__52850_53078__$1);
var G__53098 = null;
var G__53099 = (0);
var G__53100 = (0);
seq__52850_53058 = G__53097;
chunk__52854_53059 = G__53098;
count__52855_53060 = G__53099;
i__52856_53061 = G__53100;
continue;
}
}
} else {
}
}
break;
}


var G__53101 = seq__52810;
var G__53102 = chunk__52812;
var G__53103 = count__52813;
var G__53104 = (i__52814 + (1));
seq__52810 = G__53101;
chunk__52812 = G__53102;
count__52813 = G__53103;
i__52814 = G__53104;
continue;
} else {
var G__53105 = seq__52810;
var G__53106 = chunk__52812;
var G__53107 = count__52813;
var G__53108 = (i__52814 + (1));
seq__52810 = G__53105;
chunk__52812 = G__53106;
count__52813 = G__53107;
i__52814 = G__53108;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__52810);
if(temp__5754__auto__){
var seq__52810__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52810__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52810__$1);
var G__53109 = cljs.core.chunk_rest(seq__52810__$1);
var G__53110 = c__4638__auto__;
var G__53111 = cljs.core.count(c__4638__auto__);
var G__53112 = (0);
seq__52810 = G__53109;
chunk__52812 = G__53110;
count__52813 = G__53111;
i__52814 = G__53112;
continue;
} else {
var path = cljs.core.first(seq__52810__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52864_53113 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52868_53114 = null;
var count__52869_53115 = (0);
var i__52870_53116 = (0);
while(true){
if((i__52870_53116 < count__52869_53115)){
var node_53117 = chunk__52868_53114.cljs$core$IIndexed$_nth$arity$2(null,i__52870_53116);
if(cljs.core.not(node_53117.shadow$old)){
var path_match_53118 = shadow.cljs.devtools.client.browser.match_paths(node_53117.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53118)){
var new_link_53119 = (function (){var G__52876 = node_53117.cloneNode(true);
G__52876.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53118),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52876;
})();
(node_53117.shadow$old = true);

(new_link_53119.onload = ((function (seq__52864_53113,chunk__52868_53114,count__52869_53115,i__52870_53116,seq__52810,chunk__52812,count__52813,i__52814,new_link_53119,path_match_53118,node_53117,path,seq__52810__$1,temp__5754__auto__,map__52809,map__52809__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53117);
});})(seq__52864_53113,chunk__52868_53114,count__52869_53115,i__52870_53116,seq__52810,chunk__52812,count__52813,i__52814,new_link_53119,path_match_53118,node_53117,path,seq__52810__$1,temp__5754__auto__,map__52809,map__52809__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53118], 0));

goog.dom.insertSiblingAfter(new_link_53119,node_53117);


var G__53120 = seq__52864_53113;
var G__53121 = chunk__52868_53114;
var G__53122 = count__52869_53115;
var G__53123 = (i__52870_53116 + (1));
seq__52864_53113 = G__53120;
chunk__52868_53114 = G__53121;
count__52869_53115 = G__53122;
i__52870_53116 = G__53123;
continue;
} else {
var G__53124 = seq__52864_53113;
var G__53125 = chunk__52868_53114;
var G__53126 = count__52869_53115;
var G__53127 = (i__52870_53116 + (1));
seq__52864_53113 = G__53124;
chunk__52868_53114 = G__53125;
count__52869_53115 = G__53126;
i__52870_53116 = G__53127;
continue;
}
} else {
var G__53128 = seq__52864_53113;
var G__53129 = chunk__52868_53114;
var G__53130 = count__52869_53115;
var G__53131 = (i__52870_53116 + (1));
seq__52864_53113 = G__53128;
chunk__52868_53114 = G__53129;
count__52869_53115 = G__53130;
i__52870_53116 = G__53131;
continue;
}
} else {
var temp__5754__auto___53132__$1 = cljs.core.seq(seq__52864_53113);
if(temp__5754__auto___53132__$1){
var seq__52864_53133__$1 = temp__5754__auto___53132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52864_53133__$1)){
var c__4638__auto___53134 = cljs.core.chunk_first(seq__52864_53133__$1);
var G__53135 = cljs.core.chunk_rest(seq__52864_53133__$1);
var G__53136 = c__4638__auto___53134;
var G__53137 = cljs.core.count(c__4638__auto___53134);
var G__53138 = (0);
seq__52864_53113 = G__53135;
chunk__52868_53114 = G__53136;
count__52869_53115 = G__53137;
i__52870_53116 = G__53138;
continue;
} else {
var node_53139 = cljs.core.first(seq__52864_53133__$1);
if(cljs.core.not(node_53139.shadow$old)){
var path_match_53141 = shadow.cljs.devtools.client.browser.match_paths(node_53139.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53141)){
var new_link_53142 = (function (){var G__52878 = node_53139.cloneNode(true);
G__52878.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53141),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52878;
})();
(node_53139.shadow$old = true);

(new_link_53142.onload = ((function (seq__52864_53113,chunk__52868_53114,count__52869_53115,i__52870_53116,seq__52810,chunk__52812,count__52813,i__52814,new_link_53142,path_match_53141,node_53139,seq__52864_53133__$1,temp__5754__auto___53132__$1,path,seq__52810__$1,temp__5754__auto__,map__52809,map__52809__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53139);
});})(seq__52864_53113,chunk__52868_53114,count__52869_53115,i__52870_53116,seq__52810,chunk__52812,count__52813,i__52814,new_link_53142,path_match_53141,node_53139,seq__52864_53133__$1,temp__5754__auto___53132__$1,path,seq__52810__$1,temp__5754__auto__,map__52809,map__52809__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53141], 0));

goog.dom.insertSiblingAfter(new_link_53142,node_53139);


var G__53143 = cljs.core.next(seq__52864_53133__$1);
var G__53144 = null;
var G__53145 = (0);
var G__53146 = (0);
seq__52864_53113 = G__53143;
chunk__52868_53114 = G__53144;
count__52869_53115 = G__53145;
i__52870_53116 = G__53146;
continue;
} else {
var G__53147 = cljs.core.next(seq__52864_53133__$1);
var G__53148 = null;
var G__53149 = (0);
var G__53150 = (0);
seq__52864_53113 = G__53147;
chunk__52868_53114 = G__53148;
count__52869_53115 = G__53149;
i__52870_53116 = G__53150;
continue;
}
} else {
var G__53151 = cljs.core.next(seq__52864_53133__$1);
var G__53152 = null;
var G__53153 = (0);
var G__53154 = (0);
seq__52864_53113 = G__53151;
chunk__52868_53114 = G__53152;
count__52869_53115 = G__53153;
i__52870_53116 = G__53154;
continue;
}
}
} else {
}
}
break;
}


var G__53155 = cljs.core.next(seq__52810__$1);
var G__53156 = null;
var G__53157 = (0);
var G__53158 = (0);
seq__52810 = G__53155;
chunk__52812 = G__53156;
count__52813 = G__53157;
i__52814 = G__53158;
continue;
} else {
var G__53159 = cljs.core.next(seq__52810__$1);
var G__53160 = null;
var G__53161 = (0);
var G__53162 = (0);
seq__52810 = G__53159;
chunk__52812 = G__53160;
count__52813 = G__53161;
i__52814 = G__53162;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52882){
var map__52883 = p__52882;
var map__52883__$1 = cljs.core.__destructure_map(map__52883);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52883__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52898){
var map__52899 = p__52898;
var map__52899__$1 = cljs.core.__destructure_map(map__52899);
var _ = map__52899__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52901,done,error){
var map__52903 = p__52901;
var map__52903__$1 = cljs.core.__destructure_map(map__52903);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52903__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52905,done,error){
var map__52906 = p__52905;
var map__52906__$1 = cljs.core.__destructure_map(map__52906);
var msg = map__52906__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52906__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52906__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52906__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52907){
var map__52912 = p__52907;
var map__52912__$1 = cljs.core.__destructure_map(map__52912);
var src = map__52912__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52912__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52925 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52925) : done.call(null,G__52925));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52927){
var map__52944 = p__52927;
var map__52944__$1 = cljs.core.__destructure_map(map__52944);
var msg__$1 = map__52944__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52944__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52945){var ex = e52945;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52967){
var map__52969 = p__52967;
var map__52969__$1 = cljs.core.__destructure_map(map__52969);
var env = map__52969__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52969__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52975){
var map__52976 = p__52975;
var map__52976__$1 = cljs.core.__destructure_map(map__52976);
var msg = map__52976__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52976__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52984){
var map__52985 = p__52984;
var map__52985__$1 = cljs.core.__destructure_map(map__52985);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52985__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52985__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52986){
var map__52987 = p__52986;
var map__52987__$1 = cljs.core.__destructure_map(map__52987);
var svc = map__52987__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52987__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

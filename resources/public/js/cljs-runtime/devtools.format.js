goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_42554 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._header[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._header["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_42554(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_42559 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._has_body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._has_body["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_42559(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_42560 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._body["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_42560(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5752__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5752__auto__)){
var o42394 = temp__5752__auto__;
var temp__5752__auto____$1 = (o42394["formatters"]);
if(cljs.core.truth_(temp__5752__auto____$1)){
var o42395 = temp__5752__auto____$1;
var temp__5752__auto____$2 = (o42395["templating"]);
if(cljs.core.truth_(temp__5752__auto____$2)){
var o42396 = temp__5752__auto____$2;
return (o42396["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5752__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5752__auto__)){
var o42409 = temp__5752__auto__;
var temp__5752__auto____$1 = (o42409["formatters"]);
if(cljs.core.truth_(temp__5752__auto____$1)){
var o42410 = temp__5752__auto____$1;
var temp__5752__auto____$2 = (o42410["templating"]);
if(cljs.core.truth_(temp__5752__auto____$2)){
var o42411 = temp__5752__auto____$2;
return (o42411["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5752__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5752__auto__)){
var o42412 = temp__5752__auto__;
var temp__5752__auto____$1 = (o42412["formatters"]);
if(cljs.core.truth_(temp__5752__auto____$1)){
var o42413 = temp__5752__auto____$1;
var temp__5752__auto____$2 = (o42413["templating"]);
if(cljs.core.truth_(temp__5752__auto____$2)){
var o42414 = temp__5752__auto____$2;
return (o42414["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5752__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5752__auto__)){
var o42425 = temp__5752__auto__;
var temp__5752__auto____$1 = (o42425["formatters"]);
if(cljs.core.truth_(temp__5752__auto____$1)){
var o42426 = temp__5752__auto____$1;
var temp__5752__auto____$2 = (o42426["templating"]);
if(cljs.core.truth_(temp__5752__auto____$2)){
var o42427 = temp__5752__auto____$2;
return (o42427["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5752__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5752__auto__)){
var o42428 = temp__5752__auto__;
var temp__5752__auto____$1 = (o42428["formatters"]);
if(cljs.core.truth_(temp__5752__auto____$1)){
var o42429 = temp__5752__auto____$1;
var temp__5752__auto____$2 = (o42429["templating"]);
if(cljs.core.truth_(temp__5752__auto____$2)){
var o42430 = temp__5752__auto____$2;
return (o42430["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5752__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5752__auto__)){
var o42431 = temp__5752__auto__;
var temp__5752__auto____$1 = (o42431["formatters"]);
if(cljs.core.truth_(temp__5752__auto____$1)){
var o42432 = temp__5752__auto____$1;
var temp__5752__auto____$2 = (o42432["markup"]);
if(cljs.core.truth_(temp__5752__auto____$2)){
var o42433 = temp__5752__auto____$2;
return (o42433["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5752__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5752__auto__)){
var o42434 = temp__5752__auto__;
var temp__5752__auto____$1 = (o42434["formatters"]);
if(cljs.core.truth_(temp__5752__auto____$1)){
var o42435 = temp__5752__auto____$1;
var temp__5752__auto____$2 = (o42435["markup"]);
if(cljs.core.truth_(temp__5752__auto____$2)){
var o42436 = temp__5752__auto____$2;
return (o42436["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42569 = arguments.length;
var i__4819__auto___42570 = (0);
while(true){
if((i__4819__auto___42570 < len__4818__auto___42569)){
args__4824__auto__.push((arguments[i__4819__auto___42570]));

var G__42571 = (i__4819__auto___42570 + (1));
i__4819__auto___42570 = G__42571;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq42451){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42451));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42576 = arguments.length;
var i__4819__auto___42577 = (0);
while(true){
if((i__4819__auto___42577 < len__4818__auto___42576)){
args__4824__auto__.push((arguments[i__4819__auto___42577]));

var G__42578 = (i__4819__auto___42577 + (1));
i__4819__auto___42577 = G__42578;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq42460){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42460));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42582 = arguments.length;
var i__4819__auto___42583 = (0);
while(true){
if((i__4819__auto___42583 < len__4818__auto___42582)){
args__4824__auto__.push((arguments[i__4819__auto___42583]));

var G__42584 = (i__4819__auto___42583 + (1));
i__4819__auto___42583 = G__42584;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq42468){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42468));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42586 = arguments.length;
var i__4819__auto___42587 = (0);
while(true){
if((i__4819__auto___42587 < len__4818__auto___42586)){
args__4824__auto__.push((arguments[i__4819__auto___42587]));

var G__42588 = (i__4819__auto___42587 + (1));
i__4819__auto___42587 = G__42588;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42478){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42478));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42590 = arguments.length;
var i__4819__auto___42591 = (0);
while(true){
if((i__4819__auto___42591 < len__4818__auto___42590)){
args__4824__auto__.push((arguments[i__4819__auto___42591]));

var G__42592 = (i__4819__auto___42591 + (1));
i__4819__auto___42591 = G__42592;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq42479){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42479));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42595 = arguments.length;
var i__4819__auto___42596 = (0);
while(true){
if((i__4819__auto___42596 < len__4818__auto___42595)){
args__4824__auto__.push((arguments[i__4819__auto___42596]));

var G__42597 = (i__4819__auto___42596 + (1));
i__4819__auto___42596 = G__42597;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq42487){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42487));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42598 = arguments.length;
var i__4819__auto___42599 = (0);
while(true){
if((i__4819__auto___42599 < len__4818__auto___42598)){
args__4824__auto__.push((arguments[i__4819__auto___42599]));

var G__42600 = (i__4819__auto___42599 + (1));
i__4819__auto___42599 = G__42600;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq42492){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42492));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42601 = arguments.length;
var i__4819__auto___42602 = (0);
while(true){
if((i__4819__auto___42602 < len__4818__auto___42601)){
args__4824__auto__.push((arguments[i__4819__auto___42602]));

var G__42603 = (i__4819__auto___42602 + (1));
i__4819__auto___42602 = G__42603;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42502){
var vec__42503 = p__42502;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42503,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__42493_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42493_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq42494){
var G__42495 = cljs.core.first(seq42494);
var seq42494__$1 = cljs.core.next(seq42494);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42495,seq42494__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__42512 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__42513 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__42514 = (function (){var G__42520 = new cljs.core.Keyword(null,"li","li",723558921);
var G__42521 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__42522 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__42520,G__42521,G__42522) : devtools.format.make_template_fn.call(null,G__42520,G__42521,G__42522));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__42512,G__42513,G__42514) : devtools.format.make_template_fn.call(null,G__42512,G__42513,G__42514));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42613 = arguments.length;
var i__4819__auto___42614 = (0);
while(true){
if((i__4819__auto___42614 < len__4818__auto___42613)){
args__4824__auto__.push((arguments[i__4819__auto___42614]));

var G__42615 = (i__4819__auto___42614 + (1));
i__4819__auto___42614 = G__42615;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq42526){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42526));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42616 = arguments.length;
var i__4819__auto___42617 = (0);
while(true){
if((i__4819__auto___42617 < len__4818__auto___42616)){
args__4824__auto__.push((arguments[i__4819__auto___42617]));

var G__42618 = (i__4819__auto___42617 + (1));
i__4819__auto___42617 = G__42618;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42535){
var G__42536 = cljs.core.first(seq42535);
var seq42535__$1 = cljs.core.next(seq42535);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42536,seq42535__$1);
}));


//# sourceMappingURL=devtools.format.js.map

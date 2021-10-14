goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47628 = arguments.length;
var i__4819__auto___47629 = (0);
while(true){
if((i__4819__auto___47629 < len__4818__auto___47628)){
args__4824__auto__.push((arguments[i__4819__auto___47629]));

var G__47630 = (i__4819__auto___47629 + (1));
i__4819__auto___47629 = G__47630;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__47598){
var vec__47599 = p__47598;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47599,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq47592){
var G__47593 = cljs.core.first(seq47592);
var seq47592__$1 = cljs.core.next(seq47592);
var G__47594 = cljs.core.first(seq47592__$1);
var seq47592__$2 = cljs.core.next(seq47592__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47593,G__47594,seq47592__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47631 = arguments.length;
var i__4819__auto___47632 = (0);
while(true){
if((i__4819__auto___47632 < len__4818__auto___47631)){
args__4824__auto__.push((arguments[i__4819__auto___47632]));

var G__47633 = (i__4819__auto___47632 + (1));
i__4819__auto___47632 = G__47633;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__47611){
var vec__47612 = p__47611;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47612,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq47606){
var G__47607 = cljs.core.first(seq47606);
var seq47606__$1 = cljs.core.next(seq47606);
var G__47608 = cljs.core.first(seq47606__$1);
var seq47606__$2 = cljs.core.next(seq47606__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47607,G__47608,seq47606__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map

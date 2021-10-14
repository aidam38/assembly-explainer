goog.provide('rewrite_clj.zip.move');
/**
 * Move right to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__46586 = zloc;
var G__46586__$1 = (((G__46586 == null))?null:clojure.zip.right(G__46586));
if((G__46586__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__46586__$1);
}
});
/**
 * Move left to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__46592 = zloc;
var G__46592__$1 = (((G__46592 == null))?null:clojure.zip.left(G__46592));
if((G__46592__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__46592__$1);
}
});
/**
 * Move down to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__46595 = zloc;
var G__46595__$1 = (((G__46595 == null))?null:clojure.zip.down(G__46595));
if((G__46595__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__46595__$1);
}
});
/**
 * Move up to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__46606 = zloc;
var G__46606__$1 = (((G__46606 == null))?null:clojure.zip.up(G__46606));
if((G__46606__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__46606__$1);
}
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__4212__auto__ = (function (){var G__46609 = zloc;
var G__46609__$1 = (((G__46609 == null))?null:clojure.zip.next(G__46609));
if((G__46609__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.next,G__46609__$1);
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475),true);
}
} else {
return null;
}
});
/**
 * Check whether the given node is at the end of the depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__4212__auto__ = cljs.core.not(zloc);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = clojure.zip.end_QMARK_(zloc);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(zloc));
}
}
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.right(zloc)) == null);
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left(clojure.zip.left(zloc)) == null);
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__46619 = zloc;
var G__46619__$1 = (((G__46619 == null))?null:clojure.zip.prev(G__46619));
if((G__46619__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.prev,G__46619__$1);
}
});
/**
 * Move to the leftmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__46620 = zloc;
var G__46620__$1 = (((G__46620 == null))?null:clojure.zip.leftmost(G__46620));
if((G__46620__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__46620__$1);
}
});
/**
 * Move to the rightmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__46621 = zloc;
var G__46621__$1 = (((G__46621 == null))?null:clojure.zip.rightmost(G__46621));
if((G__46621__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__46621__$1);
}
});

//# sourceMappingURL=rewrite_clj.zip.move.js.map

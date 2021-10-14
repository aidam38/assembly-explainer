goog.provide('zprint.sutil');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__46722 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46722) : zthing_QMARK_.call(null,G__46722));
})())){
return i;
} else {
var G__46900 = cljs.core.next(sloc);
var G__46901 = (i + (1));
sloc = G__46900;
i = G__46901;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return (x instanceof cljs.core.Atom);
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__46737 = arguments.length;
switch (G__46737) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (((typeof x === 'string') || (((typeof x === 'number') || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))))))))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__46746,pair_seq,ns){
var map__46747 = p__46746;
var map__46747__$1 = cljs.core.__destructure_map(map__46747);
var map_options = map__46747__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46747__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46747__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46747__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46747__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4210__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4210__auto__;
}
})())){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__46755 = cljs.core.first(pair_seq__$1);
var seq__46756 = cljs.core.seq(vec__46755);
var first__46757 = cljs.core.first(seq__46756);
var seq__46756__$1 = cljs.core.next(seq__46756);
var k = first__46757;
var rest_of_pair = seq__46756__$1;
var pair = vec__46755;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__46905 = ns__$1;
var G__46906 = cljs.core.next(pair_seq__$1);
var G__46907 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__46905;
pair_seq__$1 = G__46906;
out = G__46907;
continue;
} else {
return null;
}
} else {
var G__46908 = current_ns;
var G__46909 = cljs.core.next(pair_seq__$1);
var G__46910 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__46908;
pair_seq__$1 = G__46909;
out = G__46910;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__46911 = ns__$1;
var G__46912 = cljs.core.next(pair_seq__$1);
var G__46913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__46911;
pair_seq__$1 = G__46912;
out = G__46913;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__46761 = zprint.zfns.zstring;
var znumstr_orig_val__46762 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__46763 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__46764 = zprint.zfns.zsexpr;
var zseqnws_orig_val__46765 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__46766 = zprint.zfns.zseqnws_w_nl;
var zseqnws_w_bl_orig_val__46767 = zprint.zfns.zseqnws_w_bl;
var zfocus_style_orig_val__46768 = zprint.zfns.zfocus_style;
var zstart_orig_val__46769 = zprint.zfns.zstart;
var zfirst_orig_val__46770 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__46771 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__46772 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__46773 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__46774 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__46775 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__46776 = zprint.zfns.zfourth;
var znextnws_orig_val__46777 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__46778 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__46779 = zprint.zfns.znthnext;
var zcount_orig_val__46780 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__46781 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__46782 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__46783 = zprint.zfns.zmap_w_nl;
var zmap_w_bl_orig_val__46784 = zprint.zfns.zmap_w_bl;
var zmap_w_nl_comma_orig_val__46785 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__46786 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__46787 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__46788 = zprint.zfns.zfocus;
var zfind_path_orig_val__46789 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__46790 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__46791 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__46792 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__46793 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__46794 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__46795 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__46796 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__46797 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__46798 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__46799 = zprint.zfns.ztag;
var zlast_orig_val__46800 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__46801 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__46802 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__46803 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__46804 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__46805 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__46806 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__46807 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__46808 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__46809 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__46810 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__46811 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__46812 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__46813 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__46814 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__46815 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__46816 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__46817 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__46818 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__46819 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__46820 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__46821 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__46822 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__46823 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__46824 = zprint.zfns.zlift_ns;
var zfind_orig_val__46825 = zprint.zfns.zfind;
var ztake_append_orig_val__46826 = zprint.zfns.ztake_append;
var zstring_temp_val__46827 = zprint.sutil.sstring;
var znumstr_temp_val__46828 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__46829 = cljs.core.constantly(false);
var zsexpr_temp_val__46830 = cljs.core.identity;
var zseqnws_temp_val__46831 = zprint.sutil.sseqnws;
var zseqnws_w_nl_temp_val__46832 = zprint.sutil.sseqnws;
var zseqnws_w_bl_temp_val__46833 = zprint.sutil.sseqnws;
var zfocus_style_temp_val__46834 = zprint.sutil.sfocus_style;
var zstart_temp_val__46835 = zprint.sutil.sfirst;
var zfirst_temp_val__46836 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__46837 = zprint.sutil.sfirst;
var zsecond_temp_val__46838 = zprint.sutil.ssecond;
var zsecond_no_comment_temp_val__46839 = zprint.sutil.ssecond;
var zthird_temp_val__46840 = zprint.sutil.sthird;
var zthird_no_comment_temp_val__46841 = zprint.sutil.sthird;
var zfourth_temp_val__46842 = zprint.sutil.sfourth;
var znextnws_temp_val__46843 = cljs.core.next;
var znextnws_w_nl_temp_val__46844 = cljs.core.next;
var znthnext_temp_val__46845 = zprint.sutil.snthnext;
var zcount_temp_val__46846 = zprint.sutil.scount;
var zcount_zloc_seq_nc_nws_temp_val__46847 = zprint.sutil.scount;
var zmap_temp_val__46848 = zprint.sutil.smap;
var zmap_w_nl_temp_val__46849 = zprint.sutil.smap;
var zmap_w_bl_temp_val__46850 = zprint.sutil.smap;
var zmap_w_nl_comma_temp_val__46851 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__46852 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__46853 = cljs.core.fn_QMARK_;
var zfocus_temp_val__46854 = zprint.sutil.sfocus;
var zfind_path_temp_val__46855 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__46856 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__46857 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__46858 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__46859 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__46860 = cljs.core.constantly(false);
var zset_QMARK__temp_val__46861 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__46862 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__46863 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__46864 = cljs.core.constantly(false);
var ztag_temp_val__46865 = cljs.core.constantly(null);
var zlast_temp_val__46866 = zprint.sutil.slast;
var zarray_QMARK__temp_val__46867 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__46868 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__46869 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__46870 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__46871 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__46872 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__46873 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__46874 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__46875 = cljs.core.constantly(false);
var zmap_all_temp_val__46876 = cljs.core.map;
var zfuture_QMARK__temp_val__46877 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__46878 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__46879 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__46880 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__46881 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__46882 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__46883 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__46884 = null;
var zdotdotdot_temp_val__46885 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__46886 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__46887 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__46888 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__46889 = cljs.core.constantly(false);
var zlift_ns_temp_val__46890 = zprint.sutil.slift_ns;
var zfind_temp_val__46891 = zprint.sutil.sfind;
var ztake_append_temp_val__46892 = zprint.sutil.stake_append;
(zprint.zfns.zstring = zstring_temp_val__46827);

(zprint.zfns.znumstr = znumstr_temp_val__46828);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__46829);

(zprint.zfns.zsexpr = zsexpr_temp_val__46830);

(zprint.zfns.zseqnws = zseqnws_temp_val__46831);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__46832);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_temp_val__46833);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__46834);

(zprint.zfns.zstart = zstart_temp_val__46835);

(zprint.zfns.zfirst = zfirst_temp_val__46836);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__46837);

(zprint.zfns.zsecond = zsecond_temp_val__46838);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__46839);

(zprint.zfns.zthird = zthird_temp_val__46840);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__46841);

(zprint.zfns.zfourth = zfourth_temp_val__46842);

(zprint.zfns.znextnws = znextnws_temp_val__46843);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__46844);

(zprint.zfns.znthnext = znthnext_temp_val__46845);

(zprint.zfns.zcount = zcount_temp_val__46846);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__46847);

(zprint.zfns.zmap = zmap_temp_val__46848);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__46849);

(zprint.zfns.zmap_w_bl = zmap_w_bl_temp_val__46850);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__46851);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__46852);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__46853);

(zprint.zfns.zfocus = zfocus_temp_val__46854);

(zprint.zfns.zfind_path = zfind_path_temp_val__46855);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__46856);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__46857);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__46858);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__46859);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__46860);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__46861);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__46862);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__46863);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__46864);

(zprint.zfns.ztag = ztag_temp_val__46865);

(zprint.zfns.zlast = zlast_temp_val__46866);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__46867);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__46868);

(zprint.zfns.zderef = zderef_temp_val__46869);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__46870);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__46871);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__46872);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__46873);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__46874);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__46875);

(zprint.zfns.zmap_all = zmap_all_temp_val__46876);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__46877);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__46878);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__46879);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__46880);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__46881);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__46882);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__46883);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__46884);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__46885);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__46886);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__46887);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__46888);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__46889);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__46890);

(zprint.zfns.zfind = zfind_temp_val__46891);

(zprint.zfns.ztake_append = ztake_append_temp_val__46892);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__46826);

(zprint.zfns.zfind = zfind_orig_val__46825);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__46824);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__46823);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__46822);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__46821);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__46820);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__46819);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__46818);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__46817);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__46816);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__46815);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__46814);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__46813);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__46812);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__46811);

(zprint.zfns.zmap_all = zmap_all_orig_val__46810);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__46809);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__46808);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__46807);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__46806);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__46805);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__46804);

(zprint.zfns.zderef = zderef_orig_val__46803);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__46802);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__46801);

(zprint.zfns.zlast = zlast_orig_val__46800);

(zprint.zfns.ztag = ztag_orig_val__46799);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__46798);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__46797);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__46796);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__46795);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__46794);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__46793);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__46792);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__46791);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__46790);

(zprint.zfns.zfind_path = zfind_path_orig_val__46789);

(zprint.zfns.zfocus = zfocus_orig_val__46788);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__46787);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__46786);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__46785);

(zprint.zfns.zmap_w_bl = zmap_w_bl_orig_val__46784);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__46783);

(zprint.zfns.zmap = zmap_orig_val__46782);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__46781);

(zprint.zfns.zcount = zcount_orig_val__46780);

(zprint.zfns.znthnext = znthnext_orig_val__46779);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__46778);

(zprint.zfns.znextnws = znextnws_orig_val__46777);

(zprint.zfns.zfourth = zfourth_orig_val__46776);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__46775);

(zprint.zfns.zthird = zthird_orig_val__46774);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__46773);

(zprint.zfns.zsecond = zsecond_orig_val__46772);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__46771);

(zprint.zfns.zfirst = zfirst_orig_val__46770);

(zprint.zfns.zstart = zstart_orig_val__46769);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__46768);

(zprint.zfns.zseqnws_w_bl = zseqnws_w_bl_orig_val__46767);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__46766);

(zprint.zfns.zseqnws = zseqnws_orig_val__46765);

(zprint.zfns.zsexpr = zsexpr_orig_val__46764);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__46763);

(zprint.zfns.znumstr = znumstr_orig_val__46762);

(zprint.zfns.zstring = zstring_orig_val__46761);
}});

//# sourceMappingURL=zprint.sutil.js.map

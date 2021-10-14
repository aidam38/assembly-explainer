goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__53232 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__53233 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__53233);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__53234 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__53235 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__53235);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__53234);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__53232);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__53237 = arguments.length;
switch (G__53237) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__53238 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53238,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53238,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__53241_53258 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__53242_53259 = null;
var count__53243_53260 = (0);
var i__53244_53261 = (0);
while(true){
if((i__53244_53261 < count__53243_53260)){
var vec__53251_53262 = chunk__53242_53259.cljs$core$IIndexed$_nth$arity$2(null,i__53244_53261);
var container_53263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53251_53262,(0),null);
var comp_53264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53251_53262,(1),null);
reagent.dom.re_render_component(comp_53264,container_53263);


var G__53265 = seq__53241_53258;
var G__53266 = chunk__53242_53259;
var G__53267 = count__53243_53260;
var G__53268 = (i__53244_53261 + (1));
seq__53241_53258 = G__53265;
chunk__53242_53259 = G__53266;
count__53243_53260 = G__53267;
i__53244_53261 = G__53268;
continue;
} else {
var temp__5754__auto___53269 = cljs.core.seq(seq__53241_53258);
if(temp__5754__auto___53269){
var seq__53241_53270__$1 = temp__5754__auto___53269;
if(cljs.core.chunked_seq_QMARK_(seq__53241_53270__$1)){
var c__4638__auto___53271 = cljs.core.chunk_first(seq__53241_53270__$1);
var G__53272 = cljs.core.chunk_rest(seq__53241_53270__$1);
var G__53273 = c__4638__auto___53271;
var G__53274 = cljs.core.count(c__4638__auto___53271);
var G__53275 = (0);
seq__53241_53258 = G__53272;
chunk__53242_53259 = G__53273;
count__53243_53260 = G__53274;
i__53244_53261 = G__53275;
continue;
} else {
var vec__53254_53276 = cljs.core.first(seq__53241_53270__$1);
var container_53277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53254_53276,(0),null);
var comp_53278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53254_53276,(1),null);
reagent.dom.re_render_component(comp_53278,container_53277);


var G__53279 = cljs.core.next(seq__53241_53270__$1);
var G__53280 = null;
var G__53281 = (0);
var G__53282 = (0);
seq__53241_53258 = G__53279;
chunk__53242_53259 = G__53280;
count__53243_53260 = G__53281;
i__53244_53261 = G__53282;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map

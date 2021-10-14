goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51128 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51128(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51150 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51150(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50187 = coll;
var G__50188 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50187,G__50188) : shadow.dom.lazy_native_coll_seq.call(null,G__50187,G__50188));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50231 = arguments.length;
switch (G__50231) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50244 = arguments.length;
switch (G__50244) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50252 = arguments.length;
switch (G__50252) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50261 = arguments.length;
switch (G__50261) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50285 = arguments.length;
switch (G__50285) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50293 = arguments.length;
switch (G__50293) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50325){if((e50325 instanceof Object)){
var e = e50325;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50325;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50351 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50352 = null;
var count__50353 = (0);
var i__50354 = (0);
while(true){
if((i__50354 < count__50353)){
var el = chunk__50352.cljs$core$IIndexed$_nth$arity$2(null,i__50354);
var handler_51233__$1 = ((function (seq__50351,chunk__50352,count__50353,i__50354,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50351,chunk__50352,count__50353,i__50354,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51233__$1);


var G__51234 = seq__50351;
var G__51235 = chunk__50352;
var G__51236 = count__50353;
var G__51237 = (i__50354 + (1));
seq__50351 = G__51234;
chunk__50352 = G__51235;
count__50353 = G__51236;
i__50354 = G__51237;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50351);
if(temp__5754__auto__){
var seq__50351__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50351__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50351__$1);
var G__51238 = cljs.core.chunk_rest(seq__50351__$1);
var G__51239 = c__4638__auto__;
var G__51240 = cljs.core.count(c__4638__auto__);
var G__51241 = (0);
seq__50351 = G__51238;
chunk__50352 = G__51239;
count__50353 = G__51240;
i__50354 = G__51241;
continue;
} else {
var el = cljs.core.first(seq__50351__$1);
var handler_51246__$1 = ((function (seq__50351,chunk__50352,count__50353,i__50354,el,seq__50351__$1,temp__5754__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50351,chunk__50352,count__50353,i__50354,el,seq__50351__$1,temp__5754__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51246__$1);


var G__51247 = cljs.core.next(seq__50351__$1);
var G__51248 = null;
var G__51249 = (0);
var G__51250 = (0);
seq__50351 = G__51247;
chunk__50352 = G__51248;
count__50353 = G__51249;
i__50354 = G__51250;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50371 = arguments.length;
switch (G__50371) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50378 = cljs.core.seq(events);
var chunk__50379 = null;
var count__50380 = (0);
var i__50381 = (0);
while(true){
if((i__50381 < count__50380)){
var vec__50398 = chunk__50379.cljs$core$IIndexed$_nth$arity$2(null,i__50381);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51256 = seq__50378;
var G__51257 = chunk__50379;
var G__51258 = count__50380;
var G__51259 = (i__50381 + (1));
seq__50378 = G__51256;
chunk__50379 = G__51257;
count__50380 = G__51258;
i__50381 = G__51259;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50378);
if(temp__5754__auto__){
var seq__50378__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50378__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50378__$1);
var G__51260 = cljs.core.chunk_rest(seq__50378__$1);
var G__51261 = c__4638__auto__;
var G__51262 = cljs.core.count(c__4638__auto__);
var G__51263 = (0);
seq__50378 = G__51260;
chunk__50379 = G__51261;
count__50380 = G__51262;
i__50381 = G__51263;
continue;
} else {
var vec__50414 = cljs.core.first(seq__50378__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51264 = cljs.core.next(seq__50378__$1);
var G__51265 = null;
var G__51266 = (0);
var G__51267 = (0);
seq__50378 = G__51264;
chunk__50379 = G__51265;
count__50380 = G__51266;
i__50381 = G__51267;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50425 = cljs.core.seq(styles);
var chunk__50427 = null;
var count__50428 = (0);
var i__50429 = (0);
while(true){
if((i__50429 < count__50428)){
var vec__50442 = chunk__50427.cljs$core$IIndexed$_nth$arity$2(null,i__50429);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50442,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51268 = seq__50425;
var G__51269 = chunk__50427;
var G__51270 = count__50428;
var G__51271 = (i__50429 + (1));
seq__50425 = G__51268;
chunk__50427 = G__51269;
count__50428 = G__51270;
i__50429 = G__51271;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50425);
if(temp__5754__auto__){
var seq__50425__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50425__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50425__$1);
var G__51272 = cljs.core.chunk_rest(seq__50425__$1);
var G__51273 = c__4638__auto__;
var G__51274 = cljs.core.count(c__4638__auto__);
var G__51275 = (0);
seq__50425 = G__51272;
chunk__50427 = G__51273;
count__50428 = G__51274;
i__50429 = G__51275;
continue;
} else {
var vec__50449 = cljs.core.first(seq__50425__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50449,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50449,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51276 = cljs.core.next(seq__50425__$1);
var G__51277 = null;
var G__51278 = (0);
var G__51279 = (0);
seq__50425 = G__51276;
chunk__50427 = G__51277;
count__50428 = G__51278;
i__50429 = G__51279;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50459_51280 = key;
var G__50459_51281__$1 = (((G__50459_51280 instanceof cljs.core.Keyword))?G__50459_51280.fqn:null);
switch (G__50459_51281__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51283 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_51283,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_51283,"aria-");
}
})())){
el.setAttribute(ks_51283,value);
} else {
(el[ks_51283] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50544){
var map__50545 = p__50544;
var map__50545__$1 = cljs.core.__destructure_map(map__50545);
var props = map__50545__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50547 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50547,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50562 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50562,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50562;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50588 = arguments.length;
switch (G__50588) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50643){
var vec__50644 = p__50643;
var seq__50645 = cljs.core.seq(vec__50644);
var first__50646 = cljs.core.first(seq__50645);
var seq__50645__$1 = cljs.core.next(seq__50645);
var nn = first__50646;
var first__50646__$1 = cljs.core.first(seq__50645__$1);
var seq__50645__$2 = cljs.core.next(seq__50645__$1);
var np = first__50646__$1;
var nc = seq__50645__$2;
var node = vec__50644;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50649 = nn;
var G__50650 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50649,G__50650) : create_fn.call(null,G__50649,G__50650));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50652 = nn;
var G__50653 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50652,G__50653) : create_fn.call(null,G__50652,G__50653));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50662 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50662,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50662,(1),null);
var seq__50668_51285 = cljs.core.seq(node_children);
var chunk__50669_51286 = null;
var count__50670_51287 = (0);
var i__50671_51288 = (0);
while(true){
if((i__50671_51288 < count__50670_51287)){
var child_struct_51289 = chunk__50669_51286.cljs$core$IIndexed$_nth$arity$2(null,i__50671_51288);
var children_51290 = shadow.dom.dom_node(child_struct_51289);
if(cljs.core.seq_QMARK_(children_51290)){
var seq__50719_51291 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51290));
var chunk__50721_51292 = null;
var count__50722_51293 = (0);
var i__50723_51294 = (0);
while(true){
if((i__50723_51294 < count__50722_51293)){
var child_51295 = chunk__50721_51292.cljs$core$IIndexed$_nth$arity$2(null,i__50723_51294);
if(cljs.core.truth_(child_51295)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51295);


var G__51296 = seq__50719_51291;
var G__51297 = chunk__50721_51292;
var G__51298 = count__50722_51293;
var G__51299 = (i__50723_51294 + (1));
seq__50719_51291 = G__51296;
chunk__50721_51292 = G__51297;
count__50722_51293 = G__51298;
i__50723_51294 = G__51299;
continue;
} else {
var G__51300 = seq__50719_51291;
var G__51301 = chunk__50721_51292;
var G__51302 = count__50722_51293;
var G__51303 = (i__50723_51294 + (1));
seq__50719_51291 = G__51300;
chunk__50721_51292 = G__51301;
count__50722_51293 = G__51302;
i__50723_51294 = G__51303;
continue;
}
} else {
var temp__5754__auto___51304 = cljs.core.seq(seq__50719_51291);
if(temp__5754__auto___51304){
var seq__50719_51305__$1 = temp__5754__auto___51304;
if(cljs.core.chunked_seq_QMARK_(seq__50719_51305__$1)){
var c__4638__auto___51306 = cljs.core.chunk_first(seq__50719_51305__$1);
var G__51307 = cljs.core.chunk_rest(seq__50719_51305__$1);
var G__51308 = c__4638__auto___51306;
var G__51309 = cljs.core.count(c__4638__auto___51306);
var G__51310 = (0);
seq__50719_51291 = G__51307;
chunk__50721_51292 = G__51308;
count__50722_51293 = G__51309;
i__50723_51294 = G__51310;
continue;
} else {
var child_51311 = cljs.core.first(seq__50719_51305__$1);
if(cljs.core.truth_(child_51311)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51311);


var G__51312 = cljs.core.next(seq__50719_51305__$1);
var G__51313 = null;
var G__51314 = (0);
var G__51315 = (0);
seq__50719_51291 = G__51312;
chunk__50721_51292 = G__51313;
count__50722_51293 = G__51314;
i__50723_51294 = G__51315;
continue;
} else {
var G__51316 = cljs.core.next(seq__50719_51305__$1);
var G__51317 = null;
var G__51318 = (0);
var G__51319 = (0);
seq__50719_51291 = G__51316;
chunk__50721_51292 = G__51317;
count__50722_51293 = G__51318;
i__50723_51294 = G__51319;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51290);
}


var G__51320 = seq__50668_51285;
var G__51321 = chunk__50669_51286;
var G__51322 = count__50670_51287;
var G__51323 = (i__50671_51288 + (1));
seq__50668_51285 = G__51320;
chunk__50669_51286 = G__51321;
count__50670_51287 = G__51322;
i__50671_51288 = G__51323;
continue;
} else {
var temp__5754__auto___51324 = cljs.core.seq(seq__50668_51285);
if(temp__5754__auto___51324){
var seq__50668_51325__$1 = temp__5754__auto___51324;
if(cljs.core.chunked_seq_QMARK_(seq__50668_51325__$1)){
var c__4638__auto___51326 = cljs.core.chunk_first(seq__50668_51325__$1);
var G__51327 = cljs.core.chunk_rest(seq__50668_51325__$1);
var G__51328 = c__4638__auto___51326;
var G__51329 = cljs.core.count(c__4638__auto___51326);
var G__51330 = (0);
seq__50668_51285 = G__51327;
chunk__50669_51286 = G__51328;
count__50670_51287 = G__51329;
i__50671_51288 = G__51330;
continue;
} else {
var child_struct_51331 = cljs.core.first(seq__50668_51325__$1);
var children_51332 = shadow.dom.dom_node(child_struct_51331);
if(cljs.core.seq_QMARK_(children_51332)){
var seq__50728_51333 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51332));
var chunk__50730_51334 = null;
var count__50731_51335 = (0);
var i__50732_51336 = (0);
while(true){
if((i__50732_51336 < count__50731_51335)){
var child_51337 = chunk__50730_51334.cljs$core$IIndexed$_nth$arity$2(null,i__50732_51336);
if(cljs.core.truth_(child_51337)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51337);


var G__51338 = seq__50728_51333;
var G__51339 = chunk__50730_51334;
var G__51340 = count__50731_51335;
var G__51341 = (i__50732_51336 + (1));
seq__50728_51333 = G__51338;
chunk__50730_51334 = G__51339;
count__50731_51335 = G__51340;
i__50732_51336 = G__51341;
continue;
} else {
var G__51342 = seq__50728_51333;
var G__51343 = chunk__50730_51334;
var G__51344 = count__50731_51335;
var G__51345 = (i__50732_51336 + (1));
seq__50728_51333 = G__51342;
chunk__50730_51334 = G__51343;
count__50731_51335 = G__51344;
i__50732_51336 = G__51345;
continue;
}
} else {
var temp__5754__auto___51346__$1 = cljs.core.seq(seq__50728_51333);
if(temp__5754__auto___51346__$1){
var seq__50728_51348__$1 = temp__5754__auto___51346__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50728_51348__$1)){
var c__4638__auto___51349 = cljs.core.chunk_first(seq__50728_51348__$1);
var G__51350 = cljs.core.chunk_rest(seq__50728_51348__$1);
var G__51351 = c__4638__auto___51349;
var G__51352 = cljs.core.count(c__4638__auto___51349);
var G__51353 = (0);
seq__50728_51333 = G__51350;
chunk__50730_51334 = G__51351;
count__50731_51335 = G__51352;
i__50732_51336 = G__51353;
continue;
} else {
var child_51354 = cljs.core.first(seq__50728_51348__$1);
if(cljs.core.truth_(child_51354)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51354);


var G__51355 = cljs.core.next(seq__50728_51348__$1);
var G__51356 = null;
var G__51357 = (0);
var G__51358 = (0);
seq__50728_51333 = G__51355;
chunk__50730_51334 = G__51356;
count__50731_51335 = G__51357;
i__50732_51336 = G__51358;
continue;
} else {
var G__51359 = cljs.core.next(seq__50728_51348__$1);
var G__51360 = null;
var G__51361 = (0);
var G__51362 = (0);
seq__50728_51333 = G__51359;
chunk__50730_51334 = G__51360;
count__50731_51335 = G__51361;
i__50732_51336 = G__51362;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51332);
}


var G__51363 = cljs.core.next(seq__50668_51325__$1);
var G__51364 = null;
var G__51365 = (0);
var G__51366 = (0);
seq__50668_51285 = G__51363;
chunk__50669_51286 = G__51364;
count__50670_51287 = G__51365;
i__50671_51288 = G__51366;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50744 = cljs.core.seq(node);
var chunk__50745 = null;
var count__50746 = (0);
var i__50747 = (0);
while(true){
if((i__50747 < count__50746)){
var n = chunk__50745.cljs$core$IIndexed$_nth$arity$2(null,i__50747);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51367 = seq__50744;
var G__51368 = chunk__50745;
var G__51369 = count__50746;
var G__51370 = (i__50747 + (1));
seq__50744 = G__51367;
chunk__50745 = G__51368;
count__50746 = G__51369;
i__50747 = G__51370;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50744);
if(temp__5754__auto__){
var seq__50744__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50744__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50744__$1);
var G__51371 = cljs.core.chunk_rest(seq__50744__$1);
var G__51372 = c__4638__auto__;
var G__51373 = cljs.core.count(c__4638__auto__);
var G__51374 = (0);
seq__50744 = G__51371;
chunk__50745 = G__51372;
count__50746 = G__51373;
i__50747 = G__51374;
continue;
} else {
var n = cljs.core.first(seq__50744__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51375 = cljs.core.next(seq__50744__$1);
var G__51376 = null;
var G__51377 = (0);
var G__51378 = (0);
seq__50744 = G__51375;
chunk__50745 = G__51376;
count__50746 = G__51377;
i__50747 = G__51378;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50749 = arguments.length;
switch (G__50749) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50751 = arguments.length;
switch (G__50751) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50753 = arguments.length;
switch (G__50753) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51383 = arguments.length;
var i__4819__auto___51384 = (0);
while(true){
if((i__4819__auto___51384 < len__4818__auto___51383)){
args__4824__auto__.push((arguments[i__4819__auto___51384]));

var G__51385 = (i__4819__auto___51384 + (1));
i__4819__auto___51384 = G__51385;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50757_51386 = cljs.core.seq(nodes);
var chunk__50758_51387 = null;
var count__50759_51388 = (0);
var i__50760_51389 = (0);
while(true){
if((i__50760_51389 < count__50759_51388)){
var node_51390 = chunk__50758_51387.cljs$core$IIndexed$_nth$arity$2(null,i__50760_51389);
fragment.appendChild(shadow.dom._to_dom(node_51390));


var G__51391 = seq__50757_51386;
var G__51392 = chunk__50758_51387;
var G__51393 = count__50759_51388;
var G__51394 = (i__50760_51389 + (1));
seq__50757_51386 = G__51391;
chunk__50758_51387 = G__51392;
count__50759_51388 = G__51393;
i__50760_51389 = G__51394;
continue;
} else {
var temp__5754__auto___51395 = cljs.core.seq(seq__50757_51386);
if(temp__5754__auto___51395){
var seq__50757_51396__$1 = temp__5754__auto___51395;
if(cljs.core.chunked_seq_QMARK_(seq__50757_51396__$1)){
var c__4638__auto___51397 = cljs.core.chunk_first(seq__50757_51396__$1);
var G__51398 = cljs.core.chunk_rest(seq__50757_51396__$1);
var G__51399 = c__4638__auto___51397;
var G__51400 = cljs.core.count(c__4638__auto___51397);
var G__51401 = (0);
seq__50757_51386 = G__51398;
chunk__50758_51387 = G__51399;
count__50759_51388 = G__51400;
i__50760_51389 = G__51401;
continue;
} else {
var node_51402 = cljs.core.first(seq__50757_51396__$1);
fragment.appendChild(shadow.dom._to_dom(node_51402));


var G__51403 = cljs.core.next(seq__50757_51396__$1);
var G__51404 = null;
var G__51405 = (0);
var G__51406 = (0);
seq__50757_51386 = G__51403;
chunk__50758_51387 = G__51404;
count__50759_51388 = G__51405;
i__50760_51389 = G__51406;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50756){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50756));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50761_51409 = cljs.core.seq(scripts);
var chunk__50762_51410 = null;
var count__50763_51411 = (0);
var i__50764_51412 = (0);
while(true){
if((i__50764_51412 < count__50763_51411)){
var vec__50771_51415 = chunk__50762_51410.cljs$core$IIndexed$_nth$arity$2(null,i__50764_51412);
var script_tag_51416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50771_51415,(0),null);
var script_body_51417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50771_51415,(1),null);
eval(script_body_51417);


var G__51418 = seq__50761_51409;
var G__51419 = chunk__50762_51410;
var G__51420 = count__50763_51411;
var G__51421 = (i__50764_51412 + (1));
seq__50761_51409 = G__51418;
chunk__50762_51410 = G__51419;
count__50763_51411 = G__51420;
i__50764_51412 = G__51421;
continue;
} else {
var temp__5754__auto___51422 = cljs.core.seq(seq__50761_51409);
if(temp__5754__auto___51422){
var seq__50761_51423__$1 = temp__5754__auto___51422;
if(cljs.core.chunked_seq_QMARK_(seq__50761_51423__$1)){
var c__4638__auto___51424 = cljs.core.chunk_first(seq__50761_51423__$1);
var G__51425 = cljs.core.chunk_rest(seq__50761_51423__$1);
var G__51426 = c__4638__auto___51424;
var G__51427 = cljs.core.count(c__4638__auto___51424);
var G__51428 = (0);
seq__50761_51409 = G__51425;
chunk__50762_51410 = G__51426;
count__50763_51411 = G__51427;
i__50764_51412 = G__51428;
continue;
} else {
var vec__50774_51429 = cljs.core.first(seq__50761_51423__$1);
var script_tag_51430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50774_51429,(0),null);
var script_body_51431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50774_51429,(1),null);
eval(script_body_51431);


var G__51432 = cljs.core.next(seq__50761_51423__$1);
var G__51433 = null;
var G__51434 = (0);
var G__51435 = (0);
seq__50761_51409 = G__51432;
chunk__50762_51410 = G__51433;
count__50763_51411 = G__51434;
i__50764_51412 = G__51435;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50777){
var vec__50778 = p__50777;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50778,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50778,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50782 = arguments.length;
switch (G__50782) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50783 = cljs.core.seq(style_keys);
var chunk__50784 = null;
var count__50785 = (0);
var i__50786 = (0);
while(true){
if((i__50786 < count__50785)){
var it = chunk__50784.cljs$core$IIndexed$_nth$arity$2(null,i__50786);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51437 = seq__50783;
var G__51438 = chunk__50784;
var G__51439 = count__50785;
var G__51440 = (i__50786 + (1));
seq__50783 = G__51437;
chunk__50784 = G__51438;
count__50785 = G__51439;
i__50786 = G__51440;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50783);
if(temp__5754__auto__){
var seq__50783__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50783__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50783__$1);
var G__51441 = cljs.core.chunk_rest(seq__50783__$1);
var G__51442 = c__4638__auto__;
var G__51443 = cljs.core.count(c__4638__auto__);
var G__51444 = (0);
seq__50783 = G__51441;
chunk__50784 = G__51442;
count__50785 = G__51443;
i__50786 = G__51444;
continue;
} else {
var it = cljs.core.first(seq__50783__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51445 = cljs.core.next(seq__50783__$1);
var G__51446 = null;
var G__51447 = (0);
var G__51448 = (0);
seq__50783 = G__51445;
chunk__50784 = G__51446;
count__50785 = G__51447;
i__50786 = G__51448;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50788,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50792 = k50788;
var G__50792__$1 = (((G__50792 instanceof cljs.core.Keyword))?G__50792.fqn:null);
switch (G__50792__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50788,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50800){
var vec__50801 = p__50800;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50801,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50801,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50787){
var self__ = this;
var G__50787__$1 = this;
return (new cljs.core.RecordIter((0),G__50787__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50789,other50790){
var self__ = this;
var this50789__$1 = this;
return (((!((other50790 == null)))) && ((((this50789__$1.constructor === other50790.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50789__$1.x,other50790.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50789__$1.y,other50790.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50789__$1.__extmap,other50790.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50788){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50805 = k50788;
var G__50805__$1 = (((G__50805 instanceof cljs.core.Keyword))?G__50805.fqn:null);
switch (G__50805__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50788);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50787){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50806 = cljs.core.keyword_identical_QMARK_;
var expr__50807 = k__4470__auto__;
if(cljs.core.truth_((pred__50806.cljs$core$IFn$_invoke$arity$2 ? pred__50806.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50807) : pred__50806.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50807)))){
return (new shadow.dom.Coordinate(G__50787,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50806.cljs$core$IFn$_invoke$arity$2 ? pred__50806.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50807) : pred__50806.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50807)))){
return (new shadow.dom.Coordinate(self__.x,G__50787,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50787),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50787){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50787,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50791){
var extmap__4501__auto__ = (function (){var G__50812 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50791,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50791)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50812);
} else {
return G__50812;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50791),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50791),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50814,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50818 = k50814;
var G__50818__$1 = (((G__50818 instanceof cljs.core.Keyword))?G__50818.fqn:null);
switch (G__50818__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50814,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50819){
var vec__50820 = p__50819;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50820,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50820,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50813){
var self__ = this;
var G__50813__$1 = this;
return (new cljs.core.RecordIter((0),G__50813__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50815,other50816){
var self__ = this;
var this50815__$1 = this;
return (((!((other50816 == null)))) && ((((this50815__$1.constructor === other50816.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50815__$1.w,other50816.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50815__$1.h,other50816.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50815__$1.__extmap,other50816.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50814){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50826 = k50814;
var G__50826__$1 = (((G__50826 instanceof cljs.core.Keyword))?G__50826.fqn:null);
switch (G__50826__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50814);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50813){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50827 = cljs.core.keyword_identical_QMARK_;
var expr__50828 = k__4470__auto__;
if(cljs.core.truth_((pred__50827.cljs$core$IFn$_invoke$arity$2 ? pred__50827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50828) : pred__50827.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50828)))){
return (new shadow.dom.Size(G__50813,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50827.cljs$core$IFn$_invoke$arity$2 ? pred__50827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50828) : pred__50827.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50828)))){
return (new shadow.dom.Size(self__.w,G__50813,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50813),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50813){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50813,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50817){
var extmap__4501__auto__ = (function (){var G__50830 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50817,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50817)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50830);
} else {
return G__50830;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50817),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50817),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__51466 = (i + (1));
var G__51467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51466;
ret = G__51467;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50843){
var vec__50844 = p__50843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50844,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50848 = arguments.length;
switch (G__50848) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5752__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5752__auto__)){
var child = temp__5752__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51469 = ps;
var G__51470 = (i + (1));
el__$1 = G__51469;
i = G__51470;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50864 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50864,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50864,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50864,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50867_51471 = cljs.core.seq(props);
var chunk__50868_51472 = null;
var count__50869_51473 = (0);
var i__50870_51474 = (0);
while(true){
if((i__50870_51474 < count__50869_51473)){
var vec__50890_51475 = chunk__50868_51472.cljs$core$IIndexed$_nth$arity$2(null,i__50870_51474);
var k_51476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50890_51475,(0),null);
var v_51477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50890_51475,(1),null);
el.setAttributeNS((function (){var temp__5754__auto__ = cljs.core.namespace(k_51476);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51476),v_51477);


var G__51478 = seq__50867_51471;
var G__51479 = chunk__50868_51472;
var G__51480 = count__50869_51473;
var G__51481 = (i__50870_51474 + (1));
seq__50867_51471 = G__51478;
chunk__50868_51472 = G__51479;
count__50869_51473 = G__51480;
i__50870_51474 = G__51481;
continue;
} else {
var temp__5754__auto___51482 = cljs.core.seq(seq__50867_51471);
if(temp__5754__auto___51482){
var seq__50867_51483__$1 = temp__5754__auto___51482;
if(cljs.core.chunked_seq_QMARK_(seq__50867_51483__$1)){
var c__4638__auto___51484 = cljs.core.chunk_first(seq__50867_51483__$1);
var G__51485 = cljs.core.chunk_rest(seq__50867_51483__$1);
var G__51486 = c__4638__auto___51484;
var G__51487 = cljs.core.count(c__4638__auto___51484);
var G__51488 = (0);
seq__50867_51471 = G__51485;
chunk__50868_51472 = G__51486;
count__50869_51473 = G__51487;
i__50870_51474 = G__51488;
continue;
} else {
var vec__50893_51489 = cljs.core.first(seq__50867_51483__$1);
var k_51490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50893_51489,(0),null);
var v_51491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50893_51489,(1),null);
el.setAttributeNS((function (){var temp__5754__auto____$1 = cljs.core.namespace(k_51490);
if(cljs.core.truth_(temp__5754__auto____$1)){
var ns = temp__5754__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51490),v_51491);


var G__51492 = cljs.core.next(seq__50867_51483__$1);
var G__51493 = null;
var G__51494 = (0);
var G__51495 = (0);
seq__50867_51471 = G__51492;
chunk__50868_51472 = G__51493;
count__50869_51473 = G__51494;
i__50870_51474 = G__51495;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50905 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(1),null);
var seq__50908_51496 = cljs.core.seq(node_children);
var chunk__50910_51497 = null;
var count__50911_51498 = (0);
var i__50912_51499 = (0);
while(true){
if((i__50912_51499 < count__50911_51498)){
var child_struct_51500 = chunk__50910_51497.cljs$core$IIndexed$_nth$arity$2(null,i__50912_51499);
if((!((child_struct_51500 == null)))){
if(typeof child_struct_51500 === 'string'){
var text_51501 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51501),child_struct_51500].join(''));
} else {
var children_51502 = shadow.dom.svg_node(child_struct_51500);
if(cljs.core.seq_QMARK_(children_51502)){
var seq__50927_51503 = cljs.core.seq(children_51502);
var chunk__50929_51504 = null;
var count__50930_51505 = (0);
var i__50931_51506 = (0);
while(true){
if((i__50931_51506 < count__50930_51505)){
var child_51507 = chunk__50929_51504.cljs$core$IIndexed$_nth$arity$2(null,i__50931_51506);
if(cljs.core.truth_(child_51507)){
node.appendChild(child_51507);


var G__51508 = seq__50927_51503;
var G__51509 = chunk__50929_51504;
var G__51510 = count__50930_51505;
var G__51511 = (i__50931_51506 + (1));
seq__50927_51503 = G__51508;
chunk__50929_51504 = G__51509;
count__50930_51505 = G__51510;
i__50931_51506 = G__51511;
continue;
} else {
var G__51512 = seq__50927_51503;
var G__51513 = chunk__50929_51504;
var G__51514 = count__50930_51505;
var G__51515 = (i__50931_51506 + (1));
seq__50927_51503 = G__51512;
chunk__50929_51504 = G__51513;
count__50930_51505 = G__51514;
i__50931_51506 = G__51515;
continue;
}
} else {
var temp__5754__auto___51516 = cljs.core.seq(seq__50927_51503);
if(temp__5754__auto___51516){
var seq__50927_51517__$1 = temp__5754__auto___51516;
if(cljs.core.chunked_seq_QMARK_(seq__50927_51517__$1)){
var c__4638__auto___51518 = cljs.core.chunk_first(seq__50927_51517__$1);
var G__51519 = cljs.core.chunk_rest(seq__50927_51517__$1);
var G__51520 = c__4638__auto___51518;
var G__51521 = cljs.core.count(c__4638__auto___51518);
var G__51522 = (0);
seq__50927_51503 = G__51519;
chunk__50929_51504 = G__51520;
count__50930_51505 = G__51521;
i__50931_51506 = G__51522;
continue;
} else {
var child_51523 = cljs.core.first(seq__50927_51517__$1);
if(cljs.core.truth_(child_51523)){
node.appendChild(child_51523);


var G__51524 = cljs.core.next(seq__50927_51517__$1);
var G__51525 = null;
var G__51526 = (0);
var G__51527 = (0);
seq__50927_51503 = G__51524;
chunk__50929_51504 = G__51525;
count__50930_51505 = G__51526;
i__50931_51506 = G__51527;
continue;
} else {
var G__51528 = cljs.core.next(seq__50927_51517__$1);
var G__51529 = null;
var G__51530 = (0);
var G__51531 = (0);
seq__50927_51503 = G__51528;
chunk__50929_51504 = G__51529;
count__50930_51505 = G__51530;
i__50931_51506 = G__51531;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51502);
}
}


var G__51532 = seq__50908_51496;
var G__51533 = chunk__50910_51497;
var G__51534 = count__50911_51498;
var G__51535 = (i__50912_51499 + (1));
seq__50908_51496 = G__51532;
chunk__50910_51497 = G__51533;
count__50911_51498 = G__51534;
i__50912_51499 = G__51535;
continue;
} else {
var G__51536 = seq__50908_51496;
var G__51537 = chunk__50910_51497;
var G__51538 = count__50911_51498;
var G__51539 = (i__50912_51499 + (1));
seq__50908_51496 = G__51536;
chunk__50910_51497 = G__51537;
count__50911_51498 = G__51538;
i__50912_51499 = G__51539;
continue;
}
} else {
var temp__5754__auto___51540 = cljs.core.seq(seq__50908_51496);
if(temp__5754__auto___51540){
var seq__50908_51546__$1 = temp__5754__auto___51540;
if(cljs.core.chunked_seq_QMARK_(seq__50908_51546__$1)){
var c__4638__auto___51547 = cljs.core.chunk_first(seq__50908_51546__$1);
var G__51548 = cljs.core.chunk_rest(seq__50908_51546__$1);
var G__51549 = c__4638__auto___51547;
var G__51550 = cljs.core.count(c__4638__auto___51547);
var G__51551 = (0);
seq__50908_51496 = G__51548;
chunk__50910_51497 = G__51549;
count__50911_51498 = G__51550;
i__50912_51499 = G__51551;
continue;
} else {
var child_struct_51553 = cljs.core.first(seq__50908_51546__$1);
if((!((child_struct_51553 == null)))){
if(typeof child_struct_51553 === 'string'){
var text_51554 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51554),child_struct_51553].join(''));
} else {
var children_51555 = shadow.dom.svg_node(child_struct_51553);
if(cljs.core.seq_QMARK_(children_51555)){
var seq__50936_51556 = cljs.core.seq(children_51555);
var chunk__50938_51557 = null;
var count__50939_51558 = (0);
var i__50940_51559 = (0);
while(true){
if((i__50940_51559 < count__50939_51558)){
var child_51560 = chunk__50938_51557.cljs$core$IIndexed$_nth$arity$2(null,i__50940_51559);
if(cljs.core.truth_(child_51560)){
node.appendChild(child_51560);


var G__51561 = seq__50936_51556;
var G__51562 = chunk__50938_51557;
var G__51563 = count__50939_51558;
var G__51564 = (i__50940_51559 + (1));
seq__50936_51556 = G__51561;
chunk__50938_51557 = G__51562;
count__50939_51558 = G__51563;
i__50940_51559 = G__51564;
continue;
} else {
var G__51565 = seq__50936_51556;
var G__51566 = chunk__50938_51557;
var G__51567 = count__50939_51558;
var G__51568 = (i__50940_51559 + (1));
seq__50936_51556 = G__51565;
chunk__50938_51557 = G__51566;
count__50939_51558 = G__51567;
i__50940_51559 = G__51568;
continue;
}
} else {
var temp__5754__auto___51569__$1 = cljs.core.seq(seq__50936_51556);
if(temp__5754__auto___51569__$1){
var seq__50936_51570__$1 = temp__5754__auto___51569__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50936_51570__$1)){
var c__4638__auto___51572 = cljs.core.chunk_first(seq__50936_51570__$1);
var G__51573 = cljs.core.chunk_rest(seq__50936_51570__$1);
var G__51574 = c__4638__auto___51572;
var G__51575 = cljs.core.count(c__4638__auto___51572);
var G__51576 = (0);
seq__50936_51556 = G__51573;
chunk__50938_51557 = G__51574;
count__50939_51558 = G__51575;
i__50940_51559 = G__51576;
continue;
} else {
var child_51577 = cljs.core.first(seq__50936_51570__$1);
if(cljs.core.truth_(child_51577)){
node.appendChild(child_51577);


var G__51578 = cljs.core.next(seq__50936_51570__$1);
var G__51579 = null;
var G__51580 = (0);
var G__51581 = (0);
seq__50936_51556 = G__51578;
chunk__50938_51557 = G__51579;
count__50939_51558 = G__51580;
i__50940_51559 = G__51581;
continue;
} else {
var G__51582 = cljs.core.next(seq__50936_51570__$1);
var G__51583 = null;
var G__51584 = (0);
var G__51585 = (0);
seq__50936_51556 = G__51582;
chunk__50938_51557 = G__51583;
count__50939_51558 = G__51584;
i__50940_51559 = G__51585;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51555);
}
}


var G__51586 = cljs.core.next(seq__50908_51546__$1);
var G__51587 = null;
var G__51588 = (0);
var G__51589 = (0);
seq__50908_51496 = G__51586;
chunk__50910_51497 = G__51587;
count__50911_51498 = G__51588;
i__50912_51499 = G__51589;
continue;
} else {
var G__51590 = cljs.core.next(seq__50908_51546__$1);
var G__51591 = null;
var G__51592 = (0);
var G__51593 = (0);
seq__50908_51496 = G__51590;
chunk__50910_51497 = G__51591;
count__50911_51498 = G__51592;
i__50912_51499 = G__51593;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51598 = arguments.length;
var i__4819__auto___51599 = (0);
while(true){
if((i__4819__auto___51599 < len__4818__auto___51598)){
args__4824__auto__.push((arguments[i__4819__auto___51599]));

var G__51600 = (i__4819__auto___51599 + (1));
i__4819__auto___51599 = G__51600;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50953){
var G__50954 = cljs.core.first(seq50953);
var seq50953__$1 = cljs.core.next(seq50953);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50954,seq50953__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50983 = arguments.length;
switch (G__50983) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__47467__auto___51604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_51045){
var state_val_51047 = (state_51045[(1)]);
if((state_val_51047 === (1))){
var state_51045__$1 = state_51045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51045__$1,(2),once_or_cleanup);
} else {
if((state_val_51047 === (2))){
var inst_51034 = (state_51045[(2)]);
var inst_51039 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51045__$1 = (function (){var statearr_51108 = state_51045;
(statearr_51108[(7)] = inst_51034);

return statearr_51108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51045__$1,inst_51039);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47301__auto__ = null;
var shadow$dom$state_machine__47301__auto____0 = (function (){
var statearr_51114 = [null,null,null,null,null,null,null,null];
(statearr_51114[(0)] = shadow$dom$state_machine__47301__auto__);

(statearr_51114[(1)] = (1));

return statearr_51114;
});
var shadow$dom$state_machine__47301__auto____1 = (function (state_51045){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_51045);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e51115){var ex__47304__auto__ = e51115;
var statearr_51116_51609 = state_51045;
(statearr_51116_51609[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_51045[(4)]))){
var statearr_51117_51610 = state_51045;
(statearr_51117_51610[(1)] = cljs.core.first((state_51045[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51611 = state_51045;
state_51045 = G__51611;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
shadow$dom$state_machine__47301__auto__ = function(state_51045){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47301__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47301__auto____1.call(this,state_51045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47301__auto____0;
shadow$dom$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47301__auto____1;
return shadow$dom$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_51118 = f__47468__auto__();
(statearr_51118[(6)] = c__47467__auto___51604);

return statearr_51118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

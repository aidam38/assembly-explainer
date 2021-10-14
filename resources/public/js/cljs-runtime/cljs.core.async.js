goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47525 = arguments.length;
switch (G__47525) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47526 = (function (f,blockable,meta47527){
this.f = f;
this.blockable = blockable;
this.meta47527 = meta47527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47528,meta47527__$1){
var self__ = this;
var _47528__$1 = this;
return (new cljs.core.async.t_cljs$core$async47526(self__.f,self__.blockable,meta47527__$1));
}));

(cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47528){
var self__ = this;
var _47528__$1 = this;
return self__.meta47527;
}));

(cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47527","meta47527",1722990756,null)], null);
}));

(cljs.core.async.t_cljs$core$async47526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47526");

(cljs.core.async.t_cljs$core$async47526.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47526.
 */
cljs.core.async.__GT_t_cljs$core$async47526 = (function cljs$core$async$__GT_t_cljs$core$async47526(f__$1,blockable__$1,meta47527){
return (new cljs.core.async.t_cljs$core$async47526(f__$1,blockable__$1,meta47527));
});

}

return (new cljs.core.async.t_cljs$core$async47526(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47540 = arguments.length;
switch (G__47540) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47544 = arguments.length;
switch (G__47544) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47546 = arguments.length;
switch (G__47546) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49939 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49939) : fn1.call(null,val_49939));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49939) : fn1.call(null,val_49939));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47556 = arguments.length;
switch (G__47556) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5752__auto__)){
var ret = temp__5752__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5752__auto__)){
var retb = temp__5752__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___49941 = n;
var x_49942 = (0);
while(true){
if((x_49942 < n__4695__auto___49941)){
(a[x_49942] = x_49942);

var G__49943 = (x_49942 + (1));
x_49942 = G__49943;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47559 = (function (flag,meta47560){
this.flag = flag;
this.meta47560 = meta47560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47561,meta47560__$1){
var self__ = this;
var _47561__$1 = this;
return (new cljs.core.async.t_cljs$core$async47559(self__.flag,meta47560__$1));
}));

(cljs.core.async.t_cljs$core$async47559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47561){
var self__ = this;
var _47561__$1 = this;
return self__.meta47560;
}));

(cljs.core.async.t_cljs$core$async47559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47560","meta47560",1646544591,null)], null);
}));

(cljs.core.async.t_cljs$core$async47559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47559");

(cljs.core.async.t_cljs$core$async47559.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47559.
 */
cljs.core.async.__GT_t_cljs$core$async47559 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47559(flag__$1,meta47560){
return (new cljs.core.async.t_cljs$core$async47559(flag__$1,meta47560));
});

}

return (new cljs.core.async.t_cljs$core$async47559(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47562 = (function (flag,cb,meta47563){
this.flag = flag;
this.cb = cb;
this.meta47563 = meta47563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47564,meta47563__$1){
var self__ = this;
var _47564__$1 = this;
return (new cljs.core.async.t_cljs$core$async47562(self__.flag,self__.cb,meta47563__$1));
}));

(cljs.core.async.t_cljs$core$async47562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47564){
var self__ = this;
var _47564__$1 = this;
return self__.meta47563;
}));

(cljs.core.async.t_cljs$core$async47562.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47563","meta47563",-1296841125,null)], null);
}));

(cljs.core.async.t_cljs$core$async47562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47562");

(cljs.core.async.t_cljs$core$async47562.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47562.
 */
cljs.core.async.__GT_t_cljs$core$async47562 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47562(flag__$1,cb__$1,meta47563){
return (new cljs.core.async.t_cljs$core$async47562(flag__$1,cb__$1,meta47563));
});

}

return (new cljs.core.async.t_cljs$core$async47562(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47574_SHARP_){
var G__47582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47574_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47582) : fret.call(null,G__47582));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47575_SHARP_){
var G__47583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47575_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47583) : fret.call(null,G__47583));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49945 = (i + (1));
i = G__49945;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5754__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5754__auto__)){
var got = temp__5754__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49947 = arguments.length;
var i__4819__auto___49948 = (0);
while(true){
if((i__4819__auto___49948 < len__4818__auto___49947)){
args__4824__auto__.push((arguments[i__4819__auto___49948]));

var G__49949 = (i__4819__auto___49948 + (1));
i__4819__auto___49948 = G__49949;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47590){
var map__47591 = p__47590;
var map__47591__$1 = cljs.core.__destructure_map(map__47591);
var opts = map__47591__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47584){
var G__47585 = cljs.core.first(seq47584);
var seq47584__$1 = cljs.core.next(seq47584);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47585,seq47584__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47609 = arguments.length;
switch (G__47609) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47467__auto___49962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_47641){
var state_val_47642 = (state_47641[(1)]);
if((state_val_47642 === (7))){
var inst_47637 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
var statearr_47646_49963 = state_47641__$1;
(statearr_47646_49963[(2)] = inst_47637);

(statearr_47646_49963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (1))){
var state_47641__$1 = state_47641;
var statearr_47647_49964 = state_47641__$1;
(statearr_47647_49964[(2)] = null);

(statearr_47647_49964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (4))){
var inst_47620 = (state_47641[(7)]);
var inst_47620__$1 = (state_47641[(2)]);
var inst_47621 = (inst_47620__$1 == null);
var state_47641__$1 = (function (){var statearr_47648 = state_47641;
(statearr_47648[(7)] = inst_47620__$1);

return statearr_47648;
})();
if(cljs.core.truth_(inst_47621)){
var statearr_47649_49965 = state_47641__$1;
(statearr_47649_49965[(1)] = (5));

} else {
var statearr_47650_49966 = state_47641__$1;
(statearr_47650_49966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (13))){
var state_47641__$1 = state_47641;
var statearr_47651_49967 = state_47641__$1;
(statearr_47651_49967[(2)] = null);

(statearr_47651_49967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (6))){
var inst_47620 = (state_47641[(7)]);
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47641__$1,(11),to,inst_47620);
} else {
if((state_val_47642 === (3))){
var inst_47639 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47641__$1,inst_47639);
} else {
if((state_val_47642 === (12))){
var state_47641__$1 = state_47641;
var statearr_47652_49968 = state_47641__$1;
(statearr_47652_49968[(2)] = null);

(statearr_47652_49968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (2))){
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47641__$1,(4),from);
} else {
if((state_val_47642 === (11))){
var inst_47630 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
if(cljs.core.truth_(inst_47630)){
var statearr_47656_49969 = state_47641__$1;
(statearr_47656_49969[(1)] = (12));

} else {
var statearr_47657_49970 = state_47641__$1;
(statearr_47657_49970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (9))){
var state_47641__$1 = state_47641;
var statearr_47659_49971 = state_47641__$1;
(statearr_47659_49971[(2)] = null);

(statearr_47659_49971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (5))){
var state_47641__$1 = state_47641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47660_49972 = state_47641__$1;
(statearr_47660_49972[(1)] = (8));

} else {
var statearr_47661_49973 = state_47641__$1;
(statearr_47661_49973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (14))){
var inst_47635 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
var statearr_47662_49974 = state_47641__$1;
(statearr_47662_49974[(2)] = inst_47635);

(statearr_47662_49974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (10))){
var inst_47627 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
var statearr_47663_49975 = state_47641__$1;
(statearr_47663_49975[(2)] = inst_47627);

(statearr_47663_49975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (8))){
var inst_47624 = cljs.core.async.close_BANG_(to);
var state_47641__$1 = state_47641;
var statearr_47664_49976 = state_47641__$1;
(statearr_47664_49976[(2)] = inst_47624);

(statearr_47664_49976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_47667 = [null,null,null,null,null,null,null,null];
(statearr_47667[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_47667[(1)] = (1));

return statearr_47667;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_47641){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47641);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47668){var ex__47304__auto__ = e47668;
var statearr_47669_49977 = state_47641;
(statearr_47669_49977[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47641[(4)]))){
var statearr_47670_49978 = state_47641;
(statearr_47670_49978[(1)] = cljs.core.first((state_47641[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49979 = state_47641;
state_47641 = G__49979;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_47641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_47641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_47671 = f__47468__auto__();
(statearr_47671[(6)] = c__47467__auto___49962);

return statearr_47671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47674){
var vec__47675 = p__47674;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47675,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47675,(1),null);
var job = vec__47675;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47467__auto___49983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_47690){
var state_val_47691 = (state_47690[(1)]);
if((state_val_47691 === (1))){
var state_47690__$1 = state_47690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47690__$1,(2),res,v);
} else {
if((state_val_47691 === (2))){
var inst_47687 = (state_47690[(2)]);
var inst_47688 = cljs.core.async.close_BANG_(res);
var state_47690__$1 = (function (){var statearr_47698 = state_47690;
(statearr_47698[(7)] = inst_47687);

return statearr_47698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47690__$1,inst_47688);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47699 = [null,null,null,null,null,null,null,null];
(statearr_47699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47699[(1)] = (1));

return statearr_47699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47690){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47690);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47700){var ex__47304__auto__ = e47700;
var statearr_47701_49984 = state_47690;
(statearr_47701_49984[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47690[(4)]))){
var statearr_47705_49985 = state_47690;
(statearr_47705_49985[(1)] = cljs.core.first((state_47690[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49986 = state_47690;
state_47690 = G__49986;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_47710 = f__47468__auto__();
(statearr_47710[(6)] = c__47467__auto___49983);

return statearr_47710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47711){
var vec__47712 = p__47711;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47712,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47712,(1),null);
var job = vec__47712;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___49987 = n;
var __49988 = (0);
while(true){
if((__49988 < n__4695__auto___49987)){
var G__47716_49989 = type;
var G__47716_49990__$1 = (((G__47716_49989 instanceof cljs.core.Keyword))?G__47716_49989.fqn:null);
switch (G__47716_49990__$1) {
case "compute":
var c__47467__auto___49992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49988,c__47467__auto___49992,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async){
return (function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = ((function (__49988,c__47467__auto___49992,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async){
return (function (state_47736){
var state_val_47737 = (state_47736[(1)]);
if((state_val_47737 === (1))){
var state_47736__$1 = state_47736;
var statearr_47747_49993 = state_47736__$1;
(statearr_47747_49993[(2)] = null);

(statearr_47747_49993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (2))){
var state_47736__$1 = state_47736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47736__$1,(4),jobs);
} else {
if((state_val_47737 === (3))){
var inst_47734 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47736__$1,inst_47734);
} else {
if((state_val_47737 === (4))){
var inst_47723 = (state_47736[(2)]);
var inst_47727 = process(inst_47723);
var state_47736__$1 = state_47736;
if(cljs.core.truth_(inst_47727)){
var statearr_47748_49994 = state_47736__$1;
(statearr_47748_49994[(1)] = (5));

} else {
var statearr_47749_49995 = state_47736__$1;
(statearr_47749_49995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (5))){
var state_47736__$1 = state_47736;
var statearr_47750_49996 = state_47736__$1;
(statearr_47750_49996[(2)] = null);

(statearr_47750_49996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (6))){
var state_47736__$1 = state_47736;
var statearr_47753_49997 = state_47736__$1;
(statearr_47753_49997[(2)] = null);

(statearr_47753_49997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47737 === (7))){
var inst_47732 = (state_47736[(2)]);
var state_47736__$1 = state_47736;
var statearr_47754_49998 = state_47736__$1;
(statearr_47754_49998[(2)] = inst_47732);

(statearr_47754_49998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49988,c__47467__auto___49992,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async))
;
return ((function (__49988,switch__47300__auto__,c__47467__auto___49992,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47755 = [null,null,null,null,null,null,null];
(statearr_47755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47755[(1)] = (1));

return statearr_47755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47736){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47736);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47756){var ex__47304__auto__ = e47756;
var statearr_47757_49999 = state_47736;
(statearr_47757_49999[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47736[(4)]))){
var statearr_47758_50000 = state_47736;
(statearr_47758_50000[(1)] = cljs.core.first((state_47736[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50001 = state_47736;
state_47736 = G__50001;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
;})(__49988,switch__47300__auto__,c__47467__auto___49992,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async))
})();
var state__47469__auto__ = (function (){var statearr_47759 = f__47468__auto__();
(statearr_47759[(6)] = c__47467__auto___49992);

return statearr_47759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
});})(__49988,c__47467__auto___49992,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async))
);


break;
case "async":
var c__47467__auto___50002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49988,c__47467__auto___50002,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async){
return (function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = ((function (__49988,c__47467__auto___50002,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async){
return (function (state_47772){
var state_val_47773 = (state_47772[(1)]);
if((state_val_47773 === (1))){
var state_47772__$1 = state_47772;
var statearr_47774_50004 = state_47772__$1;
(statearr_47774_50004[(2)] = null);

(statearr_47774_50004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (2))){
var state_47772__$1 = state_47772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47772__$1,(4),jobs);
} else {
if((state_val_47773 === (3))){
var inst_47770 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47772__$1,inst_47770);
} else {
if((state_val_47773 === (4))){
var inst_47762 = (state_47772[(2)]);
var inst_47763 = async(inst_47762);
var state_47772__$1 = state_47772;
if(cljs.core.truth_(inst_47763)){
var statearr_47775_50005 = state_47772__$1;
(statearr_47775_50005[(1)] = (5));

} else {
var statearr_47776_50006 = state_47772__$1;
(statearr_47776_50006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (5))){
var state_47772__$1 = state_47772;
var statearr_47777_50007 = state_47772__$1;
(statearr_47777_50007[(2)] = null);

(statearr_47777_50007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (6))){
var state_47772__$1 = state_47772;
var statearr_47778_50008 = state_47772__$1;
(statearr_47778_50008[(2)] = null);

(statearr_47778_50008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (7))){
var inst_47768 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47779_50009 = state_47772__$1;
(statearr_47779_50009[(2)] = inst_47768);

(statearr_47779_50009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49988,c__47467__auto___50002,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async))
;
return ((function (__49988,switch__47300__auto__,c__47467__auto___50002,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47780 = [null,null,null,null,null,null,null];
(statearr_47780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47780[(1)] = (1));

return statearr_47780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47772){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47772);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47781){var ex__47304__auto__ = e47781;
var statearr_47782_50010 = state_47772;
(statearr_47782_50010[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47772[(4)]))){
var statearr_47783_50011 = state_47772;
(statearr_47783_50011[(1)] = cljs.core.first((state_47772[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50012 = state_47772;
state_47772 = G__50012;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
;})(__49988,switch__47300__auto__,c__47467__auto___50002,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async))
})();
var state__47469__auto__ = (function (){var statearr_47784 = f__47468__auto__();
(statearr_47784[(6)] = c__47467__auto___50002);

return statearr_47784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
});})(__49988,c__47467__auto___50002,G__47716_49989,G__47716_49990__$1,n__4695__auto___49987,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47716_49990__$1)].join('')));

}

var G__50013 = (__49988 + (1));
__49988 = G__50013;
continue;
} else {
}
break;
}

var c__47467__auto___50014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_47815){
var state_val_47816 = (state_47815[(1)]);
if((state_val_47816 === (7))){
var inst_47811 = (state_47815[(2)]);
var state_47815__$1 = state_47815;
var statearr_47824_50015 = state_47815__$1;
(statearr_47824_50015[(2)] = inst_47811);

(statearr_47824_50015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (1))){
var state_47815__$1 = state_47815;
var statearr_47831_50016 = state_47815__$1;
(statearr_47831_50016[(2)] = null);

(statearr_47831_50016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (4))){
var inst_47789 = (state_47815[(7)]);
var inst_47789__$1 = (state_47815[(2)]);
var inst_47790 = (inst_47789__$1 == null);
var state_47815__$1 = (function (){var statearr_47832 = state_47815;
(statearr_47832[(7)] = inst_47789__$1);

return statearr_47832;
})();
if(cljs.core.truth_(inst_47790)){
var statearr_47833_50018 = state_47815__$1;
(statearr_47833_50018[(1)] = (5));

} else {
var statearr_47834_50019 = state_47815__$1;
(statearr_47834_50019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (6))){
var inst_47794 = (state_47815[(8)]);
var inst_47789 = (state_47815[(7)]);
var inst_47794__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47803 = [inst_47789,inst_47794__$1];
var inst_47804 = (new cljs.core.PersistentVector(null,2,(5),inst_47801,inst_47803,null));
var state_47815__$1 = (function (){var statearr_47835 = state_47815;
(statearr_47835[(8)] = inst_47794__$1);

return statearr_47835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47815__$1,(8),jobs,inst_47804);
} else {
if((state_val_47816 === (3))){
var inst_47813 = (state_47815[(2)]);
var state_47815__$1 = state_47815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47815__$1,inst_47813);
} else {
if((state_val_47816 === (2))){
var state_47815__$1 = state_47815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47815__$1,(4),from);
} else {
if((state_val_47816 === (9))){
var inst_47808 = (state_47815[(2)]);
var state_47815__$1 = (function (){var statearr_47836 = state_47815;
(statearr_47836[(9)] = inst_47808);

return statearr_47836;
})();
var statearr_47837_50021 = state_47815__$1;
(statearr_47837_50021[(2)] = null);

(statearr_47837_50021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (5))){
var inst_47792 = cljs.core.async.close_BANG_(jobs);
var state_47815__$1 = state_47815;
var statearr_47848_50022 = state_47815__$1;
(statearr_47848_50022[(2)] = inst_47792);

(statearr_47848_50022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (8))){
var inst_47794 = (state_47815[(8)]);
var inst_47806 = (state_47815[(2)]);
var state_47815__$1 = (function (){var statearr_47862 = state_47815;
(statearr_47862[(10)] = inst_47806);

return statearr_47862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47815__$1,(9),results,inst_47794);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_47864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_47864[(1)] = (1));

return statearr_47864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47815){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47815);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e47865){var ex__47304__auto__ = e47865;
var statearr_47866_50025 = state_47815;
(statearr_47866_50025[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47815[(4)]))){
var statearr_47867_50026 = state_47815;
(statearr_47867_50026[(1)] = cljs.core.first((state_47815[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50027 = state_47815;
state_47815 = G__50027;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_47870 = f__47468__auto__();
(statearr_47870[(6)] = c__47467__auto___50014);

return statearr_47870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


var c__47467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_47911){
var state_val_47912 = (state_47911[(1)]);
if((state_val_47912 === (7))){
var inst_47907 = (state_47911[(2)]);
var state_47911__$1 = state_47911;
var statearr_47918_50028 = state_47911__$1;
(statearr_47918_50028[(2)] = inst_47907);

(statearr_47918_50028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (20))){
var state_47911__$1 = state_47911;
var statearr_47924_50029 = state_47911__$1;
(statearr_47924_50029[(2)] = null);

(statearr_47924_50029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (1))){
var state_47911__$1 = state_47911;
var statearr_47932_50030 = state_47911__$1;
(statearr_47932_50030[(2)] = null);

(statearr_47932_50030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (4))){
var inst_47874 = (state_47911[(7)]);
var inst_47874__$1 = (state_47911[(2)]);
var inst_47875 = (inst_47874__$1 == null);
var state_47911__$1 = (function (){var statearr_47939 = state_47911;
(statearr_47939[(7)] = inst_47874__$1);

return statearr_47939;
})();
if(cljs.core.truth_(inst_47875)){
var statearr_47940_50031 = state_47911__$1;
(statearr_47940_50031[(1)] = (5));

} else {
var statearr_47941_50032 = state_47911__$1;
(statearr_47941_50032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (15))){
var inst_47889 = (state_47911[(8)]);
var state_47911__$1 = state_47911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47911__$1,(18),to,inst_47889);
} else {
if((state_val_47912 === (21))){
var inst_47902 = (state_47911[(2)]);
var state_47911__$1 = state_47911;
var statearr_47942_50033 = state_47911__$1;
(statearr_47942_50033[(2)] = inst_47902);

(statearr_47942_50033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (13))){
var inst_47904 = (state_47911[(2)]);
var state_47911__$1 = (function (){var statearr_47948 = state_47911;
(statearr_47948[(9)] = inst_47904);

return statearr_47948;
})();
var statearr_47954_50034 = state_47911__$1;
(statearr_47954_50034[(2)] = null);

(statearr_47954_50034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (6))){
var inst_47874 = (state_47911[(7)]);
var state_47911__$1 = state_47911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47911__$1,(11),inst_47874);
} else {
if((state_val_47912 === (17))){
var inst_47897 = (state_47911[(2)]);
var state_47911__$1 = state_47911;
if(cljs.core.truth_(inst_47897)){
var statearr_47970_50036 = state_47911__$1;
(statearr_47970_50036[(1)] = (19));

} else {
var statearr_47976_50037 = state_47911__$1;
(statearr_47976_50037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (3))){
var inst_47909 = (state_47911[(2)]);
var state_47911__$1 = state_47911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47911__$1,inst_47909);
} else {
if((state_val_47912 === (12))){
var inst_47884 = (state_47911[(10)]);
var state_47911__$1 = state_47911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47911__$1,(14),inst_47884);
} else {
if((state_val_47912 === (2))){
var state_47911__$1 = state_47911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47911__$1,(4),results);
} else {
if((state_val_47912 === (19))){
var state_47911__$1 = state_47911;
var statearr_47989_50038 = state_47911__$1;
(statearr_47989_50038[(2)] = null);

(statearr_47989_50038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (11))){
var inst_47884 = (state_47911[(2)]);
var state_47911__$1 = (function (){var statearr_47990 = state_47911;
(statearr_47990[(10)] = inst_47884);

return statearr_47990;
})();
var statearr_47991_50039 = state_47911__$1;
(statearr_47991_50039[(2)] = null);

(statearr_47991_50039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (9))){
var state_47911__$1 = state_47911;
var statearr_47994_50040 = state_47911__$1;
(statearr_47994_50040[(2)] = null);

(statearr_47994_50040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (5))){
var state_47911__$1 = state_47911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48002_50041 = state_47911__$1;
(statearr_48002_50041[(1)] = (8));

} else {
var statearr_48003_50042 = state_47911__$1;
(statearr_48003_50042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (14))){
var inst_47889 = (state_47911[(8)]);
var inst_47891 = (state_47911[(11)]);
var inst_47889__$1 = (state_47911[(2)]);
var inst_47890 = (inst_47889__$1 == null);
var inst_47891__$1 = cljs.core.not(inst_47890);
var state_47911__$1 = (function (){var statearr_48004 = state_47911;
(statearr_48004[(8)] = inst_47889__$1);

(statearr_48004[(11)] = inst_47891__$1);

return statearr_48004;
})();
if(inst_47891__$1){
var statearr_48005_50045 = state_47911__$1;
(statearr_48005_50045[(1)] = (15));

} else {
var statearr_48014_50046 = state_47911__$1;
(statearr_48014_50046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (16))){
var inst_47891 = (state_47911[(11)]);
var state_47911__$1 = state_47911;
var statearr_48019_50047 = state_47911__$1;
(statearr_48019_50047[(2)] = inst_47891);

(statearr_48019_50047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (10))){
var inst_47881 = (state_47911[(2)]);
var state_47911__$1 = state_47911;
var statearr_48021_50048 = state_47911__$1;
(statearr_48021_50048[(2)] = inst_47881);

(statearr_48021_50048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (18))){
var inst_47894 = (state_47911[(2)]);
var state_47911__$1 = state_47911;
var statearr_48022_50050 = state_47911__$1;
(statearr_48022_50050[(2)] = inst_47894);

(statearr_48022_50050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47912 === (8))){
var inst_47878 = cljs.core.async.close_BANG_(to);
var state_47911__$1 = state_47911;
var statearr_48023_50052 = state_47911__$1;
(statearr_48023_50052[(2)] = inst_47878);

(statearr_48023_50052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_48024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__);

(statearr_48024[(1)] = (1));

return statearr_48024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1 = (function (state_47911){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_47911);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48025){var ex__47304__auto__ = e48025;
var statearr_48026_50053 = state_47911;
(statearr_48026_50053[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_47911[(4)]))){
var statearr_48027_50054 = state_47911;
(statearr_48027_50054[(1)] = cljs.core.first((state_47911[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50055 = state_47911;
state_47911 = G__50055;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__ = function(state_47911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1.call(this,state_47911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48028 = f__47468__auto__();
(statearr_48028[(6)] = c__47467__auto__);

return statearr_48028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));

return c__47467__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__48030 = arguments.length;
switch (G__48030) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__48033 = arguments.length;
switch (G__48033) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__48036 = arguments.length;
switch (G__48036) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47467__auto___50062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_48062){
var state_val_48063 = (state_48062[(1)]);
if((state_val_48063 === (7))){
var inst_48058 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
var statearr_48064_50063 = state_48062__$1;
(statearr_48064_50063[(2)] = inst_48058);

(statearr_48064_50063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (1))){
var state_48062__$1 = state_48062;
var statearr_48065_50064 = state_48062__$1;
(statearr_48065_50064[(2)] = null);

(statearr_48065_50064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (4))){
var inst_48039 = (state_48062[(7)]);
var inst_48039__$1 = (state_48062[(2)]);
var inst_48040 = (inst_48039__$1 == null);
var state_48062__$1 = (function (){var statearr_48066 = state_48062;
(statearr_48066[(7)] = inst_48039__$1);

return statearr_48066;
})();
if(cljs.core.truth_(inst_48040)){
var statearr_48067_50065 = state_48062__$1;
(statearr_48067_50065[(1)] = (5));

} else {
var statearr_48068_50066 = state_48062__$1;
(statearr_48068_50066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (13))){
var state_48062__$1 = state_48062;
var statearr_48069_50067 = state_48062__$1;
(statearr_48069_50067[(2)] = null);

(statearr_48069_50067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (6))){
var inst_48039 = (state_48062[(7)]);
var inst_48045 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48039) : p.call(null,inst_48039));
var state_48062__$1 = state_48062;
if(cljs.core.truth_(inst_48045)){
var statearr_48070_50068 = state_48062__$1;
(statearr_48070_50068[(1)] = (9));

} else {
var statearr_48071_50069 = state_48062__$1;
(statearr_48071_50069[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (3))){
var inst_48060 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48062__$1,inst_48060);
} else {
if((state_val_48063 === (12))){
var state_48062__$1 = state_48062;
var statearr_48072_50070 = state_48062__$1;
(statearr_48072_50070[(2)] = null);

(statearr_48072_50070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (2))){
var state_48062__$1 = state_48062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48062__$1,(4),ch);
} else {
if((state_val_48063 === (11))){
var inst_48039 = (state_48062[(7)]);
var inst_48049 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48062__$1,(8),inst_48049,inst_48039);
} else {
if((state_val_48063 === (9))){
var state_48062__$1 = state_48062;
var statearr_48073_50071 = state_48062__$1;
(statearr_48073_50071[(2)] = tc);

(statearr_48073_50071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (5))){
var inst_48042 = cljs.core.async.close_BANG_(tc);
var inst_48043 = cljs.core.async.close_BANG_(fc);
var state_48062__$1 = (function (){var statearr_48074 = state_48062;
(statearr_48074[(8)] = inst_48042);

return statearr_48074;
})();
var statearr_48075_50072 = state_48062__$1;
(statearr_48075_50072[(2)] = inst_48043);

(statearr_48075_50072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (14))){
var inst_48056 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
var statearr_48077_50073 = state_48062__$1;
(statearr_48077_50073[(2)] = inst_48056);

(statearr_48077_50073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (10))){
var state_48062__$1 = state_48062;
var statearr_48078_50074 = state_48062__$1;
(statearr_48078_50074[(2)] = fc);

(statearr_48078_50074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48063 === (8))){
var inst_48051 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
if(cljs.core.truth_(inst_48051)){
var statearr_48079_50075 = state_48062__$1;
(statearr_48079_50075[(1)] = (12));

} else {
var statearr_48080_50076 = state_48062__$1;
(statearr_48080_50076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48082 = [null,null,null,null,null,null,null,null,null];
(statearr_48082[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48082[(1)] = (1));

return statearr_48082;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48062){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48062);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48083){var ex__47304__auto__ = e48083;
var statearr_48084_50077 = state_48062;
(statearr_48084_50077[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48062[(4)]))){
var statearr_48085_50078 = state_48062;
(statearr_48085_50078[(1)] = cljs.core.first((state_48062[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50079 = state_48062;
state_48062 = G__50079;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48086 = f__47468__auto__();
(statearr_48086[(6)] = c__47467__auto___50062);

return statearr_48086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_48108){
var state_val_48109 = (state_48108[(1)]);
if((state_val_48109 === (7))){
var inst_48104 = (state_48108[(2)]);
var state_48108__$1 = state_48108;
var statearr_48110_50080 = state_48108__$1;
(statearr_48110_50080[(2)] = inst_48104);

(statearr_48110_50080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48109 === (1))){
var inst_48087 = init;
var inst_48088 = inst_48087;
var state_48108__$1 = (function (){var statearr_48111 = state_48108;
(statearr_48111[(7)] = inst_48088);

return statearr_48111;
})();
var statearr_48112_50081 = state_48108__$1;
(statearr_48112_50081[(2)] = null);

(statearr_48112_50081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48109 === (4))){
var inst_48091 = (state_48108[(8)]);
var inst_48091__$1 = (state_48108[(2)]);
var inst_48092 = (inst_48091__$1 == null);
var state_48108__$1 = (function (){var statearr_48113 = state_48108;
(statearr_48113[(8)] = inst_48091__$1);

return statearr_48113;
})();
if(cljs.core.truth_(inst_48092)){
var statearr_48114_50085 = state_48108__$1;
(statearr_48114_50085[(1)] = (5));

} else {
var statearr_48115_50086 = state_48108__$1;
(statearr_48115_50086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48109 === (6))){
var inst_48091 = (state_48108[(8)]);
var inst_48088 = (state_48108[(7)]);
var inst_48095 = (state_48108[(9)]);
var inst_48095__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48088,inst_48091) : f.call(null,inst_48088,inst_48091));
var inst_48096 = cljs.core.reduced_QMARK_(inst_48095__$1);
var state_48108__$1 = (function (){var statearr_48116 = state_48108;
(statearr_48116[(9)] = inst_48095__$1);

return statearr_48116;
})();
if(inst_48096){
var statearr_48117_50087 = state_48108__$1;
(statearr_48117_50087[(1)] = (8));

} else {
var statearr_48118_50088 = state_48108__$1;
(statearr_48118_50088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48109 === (3))){
var inst_48106 = (state_48108[(2)]);
var state_48108__$1 = state_48108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48108__$1,inst_48106);
} else {
if((state_val_48109 === (2))){
var state_48108__$1 = state_48108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48108__$1,(4),ch);
} else {
if((state_val_48109 === (9))){
var inst_48095 = (state_48108[(9)]);
var inst_48088 = inst_48095;
var state_48108__$1 = (function (){var statearr_48119 = state_48108;
(statearr_48119[(7)] = inst_48088);

return statearr_48119;
})();
var statearr_48120_50089 = state_48108__$1;
(statearr_48120_50089[(2)] = null);

(statearr_48120_50089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48109 === (5))){
var inst_48088 = (state_48108[(7)]);
var state_48108__$1 = state_48108;
var statearr_48121_50090 = state_48108__$1;
(statearr_48121_50090[(2)] = inst_48088);

(statearr_48121_50090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48109 === (10))){
var inst_48102 = (state_48108[(2)]);
var state_48108__$1 = state_48108;
var statearr_48122_50091 = state_48108__$1;
(statearr_48122_50091[(2)] = inst_48102);

(statearr_48122_50091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48109 === (8))){
var inst_48095 = (state_48108[(9)]);
var inst_48098 = cljs.core.deref(inst_48095);
var state_48108__$1 = state_48108;
var statearr_48123_50093 = state_48108__$1;
(statearr_48123_50093[(2)] = inst_48098);

(statearr_48123_50093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__47301__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47301__auto____0 = (function (){
var statearr_48124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48124[(0)] = cljs$core$async$reduce_$_state_machine__47301__auto__);

(statearr_48124[(1)] = (1));

return statearr_48124;
});
var cljs$core$async$reduce_$_state_machine__47301__auto____1 = (function (state_48108){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48108);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48126){var ex__47304__auto__ = e48126;
var statearr_48127_50095 = state_48108;
(statearr_48127_50095[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48108[(4)]))){
var statearr_48129_50096 = state_48108;
(statearr_48129_50096[(1)] = cljs.core.first((state_48108[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50100 = state_48108;
state_48108 = G__50100;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47301__auto__ = function(state_48108){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47301__auto____1.call(this,state_48108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47301__auto____0;
cljs$core$async$reduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47301__auto____1;
return cljs$core$async$reduce_$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48132 = f__47468__auto__();
(statearr_48132[(6)] = c__47467__auto__);

return statearr_48132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));

return c__47467__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_48139){
var state_val_48140 = (state_48139[(1)]);
if((state_val_48140 === (1))){
var inst_48134 = cljs.core.async.reduce(f__$1,init,ch);
var state_48139__$1 = state_48139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48139__$1,(2),inst_48134);
} else {
if((state_val_48140 === (2))){
var inst_48136 = (state_48139[(2)]);
var inst_48137 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48136) : f__$1.call(null,inst_48136));
var state_48139__$1 = state_48139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48139__$1,inst_48137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47301__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47301__auto____0 = (function (){
var statearr_48142 = [null,null,null,null,null,null,null];
(statearr_48142[(0)] = cljs$core$async$transduce_$_state_machine__47301__auto__);

(statearr_48142[(1)] = (1));

return statearr_48142;
});
var cljs$core$async$transduce_$_state_machine__47301__auto____1 = (function (state_48139){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48139);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48144){var ex__47304__auto__ = e48144;
var statearr_48145_50112 = state_48139;
(statearr_48145_50112[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48139[(4)]))){
var statearr_48146_50113 = state_48139;
(statearr_48146_50113[(1)] = cljs.core.first((state_48139[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50114 = state_48139;
state_48139 = G__50114;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47301__auto__ = function(state_48139){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47301__auto____1.call(this,state_48139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47301__auto____0;
cljs$core$async$transduce_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47301__auto____1;
return cljs$core$async$transduce_$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48147 = f__47468__auto__();
(statearr_48147[(6)] = c__47467__auto__);

return statearr_48147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));

return c__47467__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__48149 = arguments.length;
switch (G__48149) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_48178){
var state_val_48179 = (state_48178[(1)]);
if((state_val_48179 === (7))){
var inst_48160 = (state_48178[(2)]);
var state_48178__$1 = state_48178;
var statearr_48184_50116 = state_48178__$1;
(statearr_48184_50116[(2)] = inst_48160);

(statearr_48184_50116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (1))){
var inst_48154 = cljs.core.seq(coll);
var inst_48155 = inst_48154;
var state_48178__$1 = (function (){var statearr_48186 = state_48178;
(statearr_48186[(7)] = inst_48155);

return statearr_48186;
})();
var statearr_48187_50117 = state_48178__$1;
(statearr_48187_50117[(2)] = null);

(statearr_48187_50117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (4))){
var inst_48155 = (state_48178[(7)]);
var inst_48158 = cljs.core.first(inst_48155);
var state_48178__$1 = state_48178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48178__$1,(7),ch,inst_48158);
} else {
if((state_val_48179 === (13))){
var inst_48172 = (state_48178[(2)]);
var state_48178__$1 = state_48178;
var statearr_48198_50118 = state_48178__$1;
(statearr_48198_50118[(2)] = inst_48172);

(statearr_48198_50118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (6))){
var inst_48163 = (state_48178[(2)]);
var state_48178__$1 = state_48178;
if(cljs.core.truth_(inst_48163)){
var statearr_48199_50119 = state_48178__$1;
(statearr_48199_50119[(1)] = (8));

} else {
var statearr_48200_50120 = state_48178__$1;
(statearr_48200_50120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (3))){
var inst_48176 = (state_48178[(2)]);
var state_48178__$1 = state_48178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48178__$1,inst_48176);
} else {
if((state_val_48179 === (12))){
var state_48178__$1 = state_48178;
var statearr_48201_50124 = state_48178__$1;
(statearr_48201_50124[(2)] = null);

(statearr_48201_50124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (2))){
var inst_48155 = (state_48178[(7)]);
var state_48178__$1 = state_48178;
if(cljs.core.truth_(inst_48155)){
var statearr_48202_50126 = state_48178__$1;
(statearr_48202_50126[(1)] = (4));

} else {
var statearr_48203_50130 = state_48178__$1;
(statearr_48203_50130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (11))){
var inst_48169 = cljs.core.async.close_BANG_(ch);
var state_48178__$1 = state_48178;
var statearr_48204_50131 = state_48178__$1;
(statearr_48204_50131[(2)] = inst_48169);

(statearr_48204_50131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (9))){
var state_48178__$1 = state_48178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48205_50134 = state_48178__$1;
(statearr_48205_50134[(1)] = (11));

} else {
var statearr_48206_50136 = state_48178__$1;
(statearr_48206_50136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (5))){
var inst_48155 = (state_48178[(7)]);
var state_48178__$1 = state_48178;
var statearr_48207_50137 = state_48178__$1;
(statearr_48207_50137[(2)] = inst_48155);

(statearr_48207_50137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (10))){
var inst_48174 = (state_48178[(2)]);
var state_48178__$1 = state_48178;
var statearr_48208_50138 = state_48178__$1;
(statearr_48208_50138[(2)] = inst_48174);

(statearr_48208_50138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48179 === (8))){
var inst_48155 = (state_48178[(7)]);
var inst_48165 = cljs.core.next(inst_48155);
var inst_48155__$1 = inst_48165;
var state_48178__$1 = (function (){var statearr_48209 = state_48178;
(statearr_48209[(7)] = inst_48155__$1);

return statearr_48209;
})();
var statearr_48210_50139 = state_48178__$1;
(statearr_48210_50139[(2)] = null);

(statearr_48210_50139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48212 = [null,null,null,null,null,null,null,null];
(statearr_48212[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48212[(1)] = (1));

return statearr_48212;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48178){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48178);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48213){var ex__47304__auto__ = e48213;
var statearr_48214_50140 = state_48178;
(statearr_48214_50140[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48178[(4)]))){
var statearr_48215_50156 = state_48178;
(statearr_48215_50156[(1)] = cljs.core.first((state_48178[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50161 = state_48178;
state_48178 = G__50161;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48217 = f__47468__auto__();
(statearr_48217[(6)] = c__47467__auto__);

return statearr_48217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));

return c__47467__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48224 = arguments.length;
switch (G__48224) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50168 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50168(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50170 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50170(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50171 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50171(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50172 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50172(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48250 = (function (ch,cs,meta48251){
this.ch = ch;
this.cs = cs;
this.meta48251 = meta48251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48252,meta48251__$1){
var self__ = this;
var _48252__$1 = this;
return (new cljs.core.async.t_cljs$core$async48250(self__.ch,self__.cs,meta48251__$1));
}));

(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48252){
var self__ = this;
var _48252__$1 = this;
return self__.meta48251;
}));

(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48250.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48251","meta48251",1822574771,null)], null);
}));

(cljs.core.async.t_cljs$core$async48250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48250");

(cljs.core.async.t_cljs$core$async48250.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48250.
 */
cljs.core.async.__GT_t_cljs$core$async48250 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48250(ch__$1,cs__$1,meta48251){
return (new cljs.core.async.t_cljs$core$async48250(ch__$1,cs__$1,meta48251));
});

}

return (new cljs.core.async.t_cljs$core$async48250(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47467__auto___50173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_48404){
var state_val_48405 = (state_48404[(1)]);
if((state_val_48405 === (7))){
var inst_48400 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48407_50174 = state_48404__$1;
(statearr_48407_50174[(2)] = inst_48400);

(statearr_48407_50174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (20))){
var inst_48296 = (state_48404[(7)]);
var inst_48308 = cljs.core.first(inst_48296);
var inst_48309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48308,(0),null);
var inst_48310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48308,(1),null);
var state_48404__$1 = (function (){var statearr_48408 = state_48404;
(statearr_48408[(8)] = inst_48309);

return statearr_48408;
})();
if(cljs.core.truth_(inst_48310)){
var statearr_48410_50175 = state_48404__$1;
(statearr_48410_50175[(1)] = (22));

} else {
var statearr_48411_50176 = state_48404__$1;
(statearr_48411_50176[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (27))){
var inst_48265 = (state_48404[(9)]);
var inst_48345 = (state_48404[(10)]);
var inst_48340 = (state_48404[(11)]);
var inst_48338 = (state_48404[(12)]);
var inst_48345__$1 = cljs.core._nth(inst_48338,inst_48340);
var inst_48346 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48345__$1,inst_48265,done);
var state_48404__$1 = (function (){var statearr_48413 = state_48404;
(statearr_48413[(10)] = inst_48345__$1);

return statearr_48413;
})();
if(cljs.core.truth_(inst_48346)){
var statearr_48414_50177 = state_48404__$1;
(statearr_48414_50177[(1)] = (30));

} else {
var statearr_48415_50178 = state_48404__$1;
(statearr_48415_50178[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (1))){
var state_48404__$1 = state_48404;
var statearr_48416_50179 = state_48404__$1;
(statearr_48416_50179[(2)] = null);

(statearr_48416_50179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (24))){
var inst_48296 = (state_48404[(7)]);
var inst_48315 = (state_48404[(2)]);
var inst_48316 = cljs.core.next(inst_48296);
var inst_48274 = inst_48316;
var inst_48275 = null;
var inst_48276 = (0);
var inst_48277 = (0);
var state_48404__$1 = (function (){var statearr_48417 = state_48404;
(statearr_48417[(13)] = inst_48275);

(statearr_48417[(14)] = inst_48274);

(statearr_48417[(15)] = inst_48277);

(statearr_48417[(16)] = inst_48315);

(statearr_48417[(17)] = inst_48276);

return statearr_48417;
})();
var statearr_48419_50180 = state_48404__$1;
(statearr_48419_50180[(2)] = null);

(statearr_48419_50180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (39))){
var state_48404__$1 = state_48404;
var statearr_48424_50181 = state_48404__$1;
(statearr_48424_50181[(2)] = null);

(statearr_48424_50181[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (4))){
var inst_48265 = (state_48404[(9)]);
var inst_48265__$1 = (state_48404[(2)]);
var inst_48266 = (inst_48265__$1 == null);
var state_48404__$1 = (function (){var statearr_48425 = state_48404;
(statearr_48425[(9)] = inst_48265__$1);

return statearr_48425;
})();
if(cljs.core.truth_(inst_48266)){
var statearr_48426_50182 = state_48404__$1;
(statearr_48426_50182[(1)] = (5));

} else {
var statearr_48427_50183 = state_48404__$1;
(statearr_48427_50183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (15))){
var inst_48275 = (state_48404[(13)]);
var inst_48274 = (state_48404[(14)]);
var inst_48277 = (state_48404[(15)]);
var inst_48276 = (state_48404[(17)]);
var inst_48292 = (state_48404[(2)]);
var inst_48293 = (inst_48277 + (1));
var tmp48421 = inst_48275;
var tmp48422 = inst_48274;
var tmp48423 = inst_48276;
var inst_48274__$1 = tmp48422;
var inst_48275__$1 = tmp48421;
var inst_48276__$1 = tmp48423;
var inst_48277__$1 = inst_48293;
var state_48404__$1 = (function (){var statearr_48429 = state_48404;
(statearr_48429[(13)] = inst_48275__$1);

(statearr_48429[(14)] = inst_48274__$1);

(statearr_48429[(15)] = inst_48277__$1);

(statearr_48429[(17)] = inst_48276__$1);

(statearr_48429[(18)] = inst_48292);

return statearr_48429;
})();
var statearr_48430_50184 = state_48404__$1;
(statearr_48430_50184[(2)] = null);

(statearr_48430_50184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (21))){
var inst_48319 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48434_50185 = state_48404__$1;
(statearr_48434_50185[(2)] = inst_48319);

(statearr_48434_50185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (31))){
var inst_48345 = (state_48404[(10)]);
var inst_48349 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48345);
var state_48404__$1 = state_48404;
var statearr_48435_50186 = state_48404__$1;
(statearr_48435_50186[(2)] = inst_48349);

(statearr_48435_50186[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (32))){
var inst_48340 = (state_48404[(11)]);
var inst_48338 = (state_48404[(12)]);
var inst_48339 = (state_48404[(19)]);
var inst_48337 = (state_48404[(20)]);
var inst_48351 = (state_48404[(2)]);
var inst_48352 = (inst_48340 + (1));
var tmp48431 = inst_48338;
var tmp48432 = inst_48339;
var tmp48433 = inst_48337;
var inst_48337__$1 = tmp48433;
var inst_48338__$1 = tmp48431;
var inst_48339__$1 = tmp48432;
var inst_48340__$1 = inst_48352;
var state_48404__$1 = (function (){var statearr_48438 = state_48404;
(statearr_48438[(21)] = inst_48351);

(statearr_48438[(11)] = inst_48340__$1);

(statearr_48438[(12)] = inst_48338__$1);

(statearr_48438[(19)] = inst_48339__$1);

(statearr_48438[(20)] = inst_48337__$1);

return statearr_48438;
})();
var statearr_48439_50191 = state_48404__$1;
(statearr_48439_50191[(2)] = null);

(statearr_48439_50191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (40))){
var inst_48367 = (state_48404[(22)]);
var inst_48377 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48367);
var state_48404__$1 = state_48404;
var statearr_48443_50193 = state_48404__$1;
(statearr_48443_50193[(2)] = inst_48377);

(statearr_48443_50193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (33))){
var inst_48355 = (state_48404[(23)]);
var inst_48358 = cljs.core.chunked_seq_QMARK_(inst_48355);
var state_48404__$1 = state_48404;
if(inst_48358){
var statearr_48446_50195 = state_48404__$1;
(statearr_48446_50195[(1)] = (36));

} else {
var statearr_48448_50196 = state_48404__$1;
(statearr_48448_50196[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (13))){
var inst_48286 = (state_48404[(24)]);
var inst_48289 = cljs.core.async.close_BANG_(inst_48286);
var state_48404__$1 = state_48404;
var statearr_48450_50206 = state_48404__$1;
(statearr_48450_50206[(2)] = inst_48289);

(statearr_48450_50206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (22))){
var inst_48309 = (state_48404[(8)]);
var inst_48312 = cljs.core.async.close_BANG_(inst_48309);
var state_48404__$1 = state_48404;
var statearr_48451_50207 = state_48404__$1;
(statearr_48451_50207[(2)] = inst_48312);

(statearr_48451_50207[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (36))){
var inst_48355 = (state_48404[(23)]);
var inst_48362 = cljs.core.chunk_first(inst_48355);
var inst_48363 = cljs.core.chunk_rest(inst_48355);
var inst_48364 = cljs.core.count(inst_48362);
var inst_48337 = inst_48363;
var inst_48338 = inst_48362;
var inst_48339 = inst_48364;
var inst_48340 = (0);
var state_48404__$1 = (function (){var statearr_48452 = state_48404;
(statearr_48452[(11)] = inst_48340);

(statearr_48452[(12)] = inst_48338);

(statearr_48452[(19)] = inst_48339);

(statearr_48452[(20)] = inst_48337);

return statearr_48452;
})();
var statearr_48453_50208 = state_48404__$1;
(statearr_48453_50208[(2)] = null);

(statearr_48453_50208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (41))){
var inst_48355 = (state_48404[(23)]);
var inst_48379 = (state_48404[(2)]);
var inst_48380 = cljs.core.next(inst_48355);
var inst_48337 = inst_48380;
var inst_48338 = null;
var inst_48339 = (0);
var inst_48340 = (0);
var state_48404__$1 = (function (){var statearr_48475 = state_48404;
(statearr_48475[(11)] = inst_48340);

(statearr_48475[(12)] = inst_48338);

(statearr_48475[(19)] = inst_48339);

(statearr_48475[(25)] = inst_48379);

(statearr_48475[(20)] = inst_48337);

return statearr_48475;
})();
var statearr_48477_50209 = state_48404__$1;
(statearr_48477_50209[(2)] = null);

(statearr_48477_50209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (43))){
var state_48404__$1 = state_48404;
var statearr_48480_50210 = state_48404__$1;
(statearr_48480_50210[(2)] = null);

(statearr_48480_50210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (29))){
var inst_48388 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48481_50212 = state_48404__$1;
(statearr_48481_50212[(2)] = inst_48388);

(statearr_48481_50212[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (44))){
var inst_48397 = (state_48404[(2)]);
var state_48404__$1 = (function (){var statearr_48484 = state_48404;
(statearr_48484[(26)] = inst_48397);

return statearr_48484;
})();
var statearr_48485_50213 = state_48404__$1;
(statearr_48485_50213[(2)] = null);

(statearr_48485_50213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (6))){
var inst_48329 = (state_48404[(27)]);
var inst_48328 = cljs.core.deref(cs);
var inst_48329__$1 = cljs.core.keys(inst_48328);
var inst_48330 = cljs.core.count(inst_48329__$1);
var inst_48331 = cljs.core.reset_BANG_(dctr,inst_48330);
var inst_48336 = cljs.core.seq(inst_48329__$1);
var inst_48337 = inst_48336;
var inst_48338 = null;
var inst_48339 = (0);
var inst_48340 = (0);
var state_48404__$1 = (function (){var statearr_48488 = state_48404;
(statearr_48488[(28)] = inst_48331);

(statearr_48488[(11)] = inst_48340);

(statearr_48488[(12)] = inst_48338);

(statearr_48488[(19)] = inst_48339);

(statearr_48488[(20)] = inst_48337);

(statearr_48488[(27)] = inst_48329__$1);

return statearr_48488;
})();
var statearr_48489_50214 = state_48404__$1;
(statearr_48489_50214[(2)] = null);

(statearr_48489_50214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (28))){
var inst_48355 = (state_48404[(23)]);
var inst_48337 = (state_48404[(20)]);
var inst_48355__$1 = cljs.core.seq(inst_48337);
var state_48404__$1 = (function (){var statearr_48490 = state_48404;
(statearr_48490[(23)] = inst_48355__$1);

return statearr_48490;
})();
if(inst_48355__$1){
var statearr_48491_50216 = state_48404__$1;
(statearr_48491_50216[(1)] = (33));

} else {
var statearr_48492_50217 = state_48404__$1;
(statearr_48492_50217[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (25))){
var inst_48340 = (state_48404[(11)]);
var inst_48339 = (state_48404[(19)]);
var inst_48342 = (inst_48340 < inst_48339);
var inst_48343 = inst_48342;
var state_48404__$1 = state_48404;
if(cljs.core.truth_(inst_48343)){
var statearr_48493_50218 = state_48404__$1;
(statearr_48493_50218[(1)] = (27));

} else {
var statearr_48494_50219 = state_48404__$1;
(statearr_48494_50219[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (34))){
var state_48404__$1 = state_48404;
var statearr_48504_50220 = state_48404__$1;
(statearr_48504_50220[(2)] = null);

(statearr_48504_50220[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (17))){
var state_48404__$1 = state_48404;
var statearr_48509_50221 = state_48404__$1;
(statearr_48509_50221[(2)] = null);

(statearr_48509_50221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (3))){
var inst_48402 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48404__$1,inst_48402);
} else {
if((state_val_48405 === (12))){
var inst_48324 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48511_50222 = state_48404__$1;
(statearr_48511_50222[(2)] = inst_48324);

(statearr_48511_50222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (2))){
var state_48404__$1 = state_48404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48404__$1,(4),ch);
} else {
if((state_val_48405 === (23))){
var state_48404__$1 = state_48404;
var statearr_48520_50224 = state_48404__$1;
(statearr_48520_50224[(2)] = null);

(statearr_48520_50224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (35))){
var inst_48386 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48521_50225 = state_48404__$1;
(statearr_48521_50225[(2)] = inst_48386);

(statearr_48521_50225[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (19))){
var inst_48296 = (state_48404[(7)]);
var inst_48300 = cljs.core.chunk_first(inst_48296);
var inst_48301 = cljs.core.chunk_rest(inst_48296);
var inst_48302 = cljs.core.count(inst_48300);
var inst_48274 = inst_48301;
var inst_48275 = inst_48300;
var inst_48276 = inst_48302;
var inst_48277 = (0);
var state_48404__$1 = (function (){var statearr_48523 = state_48404;
(statearr_48523[(13)] = inst_48275);

(statearr_48523[(14)] = inst_48274);

(statearr_48523[(15)] = inst_48277);

(statearr_48523[(17)] = inst_48276);

return statearr_48523;
})();
var statearr_48524_50226 = state_48404__$1;
(statearr_48524_50226[(2)] = null);

(statearr_48524_50226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (11))){
var inst_48296 = (state_48404[(7)]);
var inst_48274 = (state_48404[(14)]);
var inst_48296__$1 = cljs.core.seq(inst_48274);
var state_48404__$1 = (function (){var statearr_48525 = state_48404;
(statearr_48525[(7)] = inst_48296__$1);

return statearr_48525;
})();
if(inst_48296__$1){
var statearr_48526_50227 = state_48404__$1;
(statearr_48526_50227[(1)] = (16));

} else {
var statearr_48527_50228 = state_48404__$1;
(statearr_48527_50228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (9))){
var inst_48326 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48528_50229 = state_48404__$1;
(statearr_48528_50229[(2)] = inst_48326);

(statearr_48528_50229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (5))){
var inst_48272 = cljs.core.deref(cs);
var inst_48273 = cljs.core.seq(inst_48272);
var inst_48274 = inst_48273;
var inst_48275 = null;
var inst_48276 = (0);
var inst_48277 = (0);
var state_48404__$1 = (function (){var statearr_48529 = state_48404;
(statearr_48529[(13)] = inst_48275);

(statearr_48529[(14)] = inst_48274);

(statearr_48529[(15)] = inst_48277);

(statearr_48529[(17)] = inst_48276);

return statearr_48529;
})();
var statearr_48530_50232 = state_48404__$1;
(statearr_48530_50232[(2)] = null);

(statearr_48530_50232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (14))){
var state_48404__$1 = state_48404;
var statearr_48532_50233 = state_48404__$1;
(statearr_48532_50233[(2)] = null);

(statearr_48532_50233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (45))){
var inst_48394 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48533_50234 = state_48404__$1;
(statearr_48533_50234[(2)] = inst_48394);

(statearr_48533_50234[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (26))){
var inst_48329 = (state_48404[(27)]);
var inst_48390 = (state_48404[(2)]);
var inst_48391 = cljs.core.seq(inst_48329);
var state_48404__$1 = (function (){var statearr_48534 = state_48404;
(statearr_48534[(29)] = inst_48390);

return statearr_48534;
})();
if(inst_48391){
var statearr_48535_50235 = state_48404__$1;
(statearr_48535_50235[(1)] = (42));

} else {
var statearr_48536_50236 = state_48404__$1;
(statearr_48536_50236[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (16))){
var inst_48296 = (state_48404[(7)]);
var inst_48298 = cljs.core.chunked_seq_QMARK_(inst_48296);
var state_48404__$1 = state_48404;
if(inst_48298){
var statearr_48537_50237 = state_48404__$1;
(statearr_48537_50237[(1)] = (19));

} else {
var statearr_48538_50238 = state_48404__$1;
(statearr_48538_50238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (38))){
var inst_48383 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48539_50239 = state_48404__$1;
(statearr_48539_50239[(2)] = inst_48383);

(statearr_48539_50239[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (30))){
var state_48404__$1 = state_48404;
var statearr_48540_50240 = state_48404__$1;
(statearr_48540_50240[(2)] = null);

(statearr_48540_50240[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (10))){
var inst_48275 = (state_48404[(13)]);
var inst_48277 = (state_48404[(15)]);
var inst_48285 = cljs.core._nth(inst_48275,inst_48277);
var inst_48286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48285,(0),null);
var inst_48287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48285,(1),null);
var state_48404__$1 = (function (){var statearr_48541 = state_48404;
(statearr_48541[(24)] = inst_48286);

return statearr_48541;
})();
if(cljs.core.truth_(inst_48287)){
var statearr_48542_50242 = state_48404__$1;
(statearr_48542_50242[(1)] = (13));

} else {
var statearr_48544_50243 = state_48404__$1;
(statearr_48544_50243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (18))){
var inst_48322 = (state_48404[(2)]);
var state_48404__$1 = state_48404;
var statearr_48545_50245 = state_48404__$1;
(statearr_48545_50245[(2)] = inst_48322);

(statearr_48545_50245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (42))){
var state_48404__$1 = state_48404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48404__$1,(45),dchan);
} else {
if((state_val_48405 === (37))){
var inst_48367 = (state_48404[(22)]);
var inst_48265 = (state_48404[(9)]);
var inst_48355 = (state_48404[(23)]);
var inst_48367__$1 = cljs.core.first(inst_48355);
var inst_48374 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48367__$1,inst_48265,done);
var state_48404__$1 = (function (){var statearr_48546 = state_48404;
(statearr_48546[(22)] = inst_48367__$1);

return statearr_48546;
})();
if(cljs.core.truth_(inst_48374)){
var statearr_48547_50246 = state_48404__$1;
(statearr_48547_50246[(1)] = (39));

} else {
var statearr_48548_50247 = state_48404__$1;
(statearr_48548_50247[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48405 === (8))){
var inst_48277 = (state_48404[(15)]);
var inst_48276 = (state_48404[(17)]);
var inst_48279 = (inst_48277 < inst_48276);
var inst_48280 = inst_48279;
var state_48404__$1 = state_48404;
if(cljs.core.truth_(inst_48280)){
var statearr_48549_50248 = state_48404__$1;
(statearr_48549_50248[(1)] = (10));

} else {
var statearr_48550_50249 = state_48404__$1;
(statearr_48550_50249[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__47301__auto__ = null;
var cljs$core$async$mult_$_state_machine__47301__auto____0 = (function (){
var statearr_48552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48552[(0)] = cljs$core$async$mult_$_state_machine__47301__auto__);

(statearr_48552[(1)] = (1));

return statearr_48552;
});
var cljs$core$async$mult_$_state_machine__47301__auto____1 = (function (state_48404){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48404);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48555){var ex__47304__auto__ = e48555;
var statearr_48556_50254 = state_48404;
(statearr_48556_50254[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48404[(4)]))){
var statearr_48557_50255 = state_48404;
(statearr_48557_50255[(1)] = cljs.core.first((state_48404[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50256 = state_48404;
state_48404 = G__50256;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47301__auto__ = function(state_48404){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47301__auto____1.call(this,state_48404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47301__auto____0;
cljs$core$async$mult_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47301__auto____1;
return cljs$core$async$mult_$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48564 = f__47468__auto__();
(statearr_48564[(6)] = c__47467__auto___50173);

return statearr_48564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48567 = arguments.length;
switch (G__48567) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50259 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50259(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50262 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50262(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50263 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50263(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50264 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50264(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50274 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50274(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50275 = arguments.length;
var i__4819__auto___50276 = (0);
while(true){
if((i__4819__auto___50276 < len__4818__auto___50275)){
args__4824__auto__.push((arguments[i__4819__auto___50276]));

var G__50278 = (i__4819__auto___50276 + (1));
i__4819__auto___50276 = G__50278;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48593){
var map__48594 = p__48593;
var map__48594__$1 = cljs.core.__destructure_map(map__48594);
var opts = map__48594__$1;
var statearr_48595_50279 = state;
(statearr_48595_50279[(1)] = cont_block);


var temp__5754__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48600_50280 = state;
(statearr_48600_50280[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5754__auto__)){
var cb = temp__5754__auto__;
var statearr_48601_50281 = state;
(statearr_48601_50281[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48588){
var G__48589 = cljs.core.first(seq48588);
var seq48588__$1 = cljs.core.next(seq48588);
var G__48590 = cljs.core.first(seq48588__$1);
var seq48588__$2 = cljs.core.next(seq48588__$1);
var G__48591 = cljs.core.first(seq48588__$2);
var seq48588__$3 = cljs.core.next(seq48588__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48589,G__48590,G__48591,seq48588__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48616 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48617){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48617 = meta48617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48618,meta48617__$1){
var self__ = this;
var _48618__$1 = this;
return (new cljs.core.async.t_cljs$core$async48616(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48617__$1));
}));

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48618){
var self__ = this;
var _48618__$1 = this;
return self__.meta48617;
}));

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48617","meta48617",-51290487,null)], null);
}));

(cljs.core.async.t_cljs$core$async48616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48616");

(cljs.core.async.t_cljs$core$async48616.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48616.
 */
cljs.core.async.__GT_t_cljs$core$async48616 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48616(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48617){
return (new cljs.core.async.t_cljs$core$async48616(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48617));
});

}

return (new cljs.core.async.t_cljs$core$async48616(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47467__auto___50288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_48728){
var state_val_48729 = (state_48728[(1)]);
if((state_val_48729 === (7))){
var inst_48680 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
if(cljs.core.truth_(inst_48680)){
var statearr_48732_50289 = state_48728__$1;
(statearr_48732_50289[(1)] = (8));

} else {
var statearr_48733_50290 = state_48728__$1;
(statearr_48733_50290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (20))){
var inst_48669 = (state_48728[(7)]);
var state_48728__$1 = state_48728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48728__$1,(23),out,inst_48669);
} else {
if((state_val_48729 === (1))){
var inst_48650 = calc_state();
var inst_48651 = cljs.core.__destructure_map(inst_48650);
var inst_48652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48651,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48651,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48651,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48655 = inst_48650;
var state_48728__$1 = (function (){var statearr_48736 = state_48728;
(statearr_48736[(8)] = inst_48655);

(statearr_48736[(9)] = inst_48652);

(statearr_48736[(10)] = inst_48653);

(statearr_48736[(11)] = inst_48654);

return statearr_48736;
})();
var statearr_48737_50292 = state_48728__$1;
(statearr_48737_50292[(2)] = null);

(statearr_48737_50292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (24))){
var inst_48658 = (state_48728[(12)]);
var inst_48655 = inst_48658;
var state_48728__$1 = (function (){var statearr_48739 = state_48728;
(statearr_48739[(8)] = inst_48655);

return statearr_48739;
})();
var statearr_48740_50301 = state_48728__$1;
(statearr_48740_50301[(2)] = null);

(statearr_48740_50301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (4))){
var inst_48669 = (state_48728[(7)]);
var inst_48671 = (state_48728[(13)]);
var inst_48667 = (state_48728[(2)]);
var inst_48669__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48667,(0),null);
var inst_48670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48667,(1),null);
var inst_48671__$1 = (inst_48669__$1 == null);
var state_48728__$1 = (function (){var statearr_48742 = state_48728;
(statearr_48742[(7)] = inst_48669__$1);

(statearr_48742[(13)] = inst_48671__$1);

(statearr_48742[(14)] = inst_48670);

return statearr_48742;
})();
if(cljs.core.truth_(inst_48671__$1)){
var statearr_48744_50302 = state_48728__$1;
(statearr_48744_50302[(1)] = (5));

} else {
var statearr_48745_50303 = state_48728__$1;
(statearr_48745_50303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (15))){
var inst_48701 = (state_48728[(15)]);
var inst_48659 = (state_48728[(16)]);
var inst_48701__$1 = cljs.core.empty_QMARK_(inst_48659);
var state_48728__$1 = (function (){var statearr_48746 = state_48728;
(statearr_48746[(15)] = inst_48701__$1);

return statearr_48746;
})();
if(inst_48701__$1){
var statearr_48747_50305 = state_48728__$1;
(statearr_48747_50305[(1)] = (17));

} else {
var statearr_48748_50306 = state_48728__$1;
(statearr_48748_50306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (21))){
var inst_48658 = (state_48728[(12)]);
var inst_48655 = inst_48658;
var state_48728__$1 = (function (){var statearr_48749 = state_48728;
(statearr_48749[(8)] = inst_48655);

return statearr_48749;
})();
var statearr_48750_50307 = state_48728__$1;
(statearr_48750_50307[(2)] = null);

(statearr_48750_50307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (13))){
var inst_48690 = (state_48728[(2)]);
var inst_48691 = calc_state();
var inst_48655 = inst_48691;
var state_48728__$1 = (function (){var statearr_48755 = state_48728;
(statearr_48755[(8)] = inst_48655);

(statearr_48755[(17)] = inst_48690);

return statearr_48755;
})();
var statearr_48756_50308 = state_48728__$1;
(statearr_48756_50308[(2)] = null);

(statearr_48756_50308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (22))){
var inst_48721 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
var statearr_48758_50312 = state_48728__$1;
(statearr_48758_50312[(2)] = inst_48721);

(statearr_48758_50312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (6))){
var inst_48670 = (state_48728[(14)]);
var inst_48678 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48670,change);
var state_48728__$1 = state_48728;
var statearr_48759_50319 = state_48728__$1;
(statearr_48759_50319[(2)] = inst_48678);

(statearr_48759_50319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (25))){
var state_48728__$1 = state_48728;
var statearr_48760_50320 = state_48728__$1;
(statearr_48760_50320[(2)] = null);

(statearr_48760_50320[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (17))){
var inst_48660 = (state_48728[(18)]);
var inst_48670 = (state_48728[(14)]);
var inst_48703 = (inst_48660.cljs$core$IFn$_invoke$arity$1 ? inst_48660.cljs$core$IFn$_invoke$arity$1(inst_48670) : inst_48660.call(null,inst_48670));
var inst_48704 = cljs.core.not(inst_48703);
var state_48728__$1 = state_48728;
var statearr_48761_50321 = state_48728__$1;
(statearr_48761_50321[(2)] = inst_48704);

(statearr_48761_50321[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (3))){
var inst_48725 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48728__$1,inst_48725);
} else {
if((state_val_48729 === (12))){
var state_48728__$1 = state_48728;
var statearr_48762_50322 = state_48728__$1;
(statearr_48762_50322[(2)] = null);

(statearr_48762_50322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (2))){
var inst_48655 = (state_48728[(8)]);
var inst_48658 = (state_48728[(12)]);
var inst_48658__$1 = cljs.core.__destructure_map(inst_48655);
var inst_48659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48658__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48658__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48658__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48728__$1 = (function (){var statearr_48763 = state_48728;
(statearr_48763[(18)] = inst_48660);

(statearr_48763[(16)] = inst_48659);

(statearr_48763[(12)] = inst_48658__$1);

return statearr_48763;
})();
return cljs.core.async.ioc_alts_BANG_(state_48728__$1,(4),inst_48661);
} else {
if((state_val_48729 === (23))){
var inst_48712 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
if(cljs.core.truth_(inst_48712)){
var statearr_48764_50328 = state_48728__$1;
(statearr_48764_50328[(1)] = (24));

} else {
var statearr_48765_50329 = state_48728__$1;
(statearr_48765_50329[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (19))){
var inst_48707 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
var statearr_48766_50330 = state_48728__$1;
(statearr_48766_50330[(2)] = inst_48707);

(statearr_48766_50330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (11))){
var inst_48670 = (state_48728[(14)]);
var inst_48687 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48670);
var state_48728__$1 = state_48728;
var statearr_48767_50338 = state_48728__$1;
(statearr_48767_50338[(2)] = inst_48687);

(statearr_48767_50338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (9))){
var inst_48697 = (state_48728[(19)]);
var inst_48659 = (state_48728[(16)]);
var inst_48670 = (state_48728[(14)]);
var inst_48697__$1 = (inst_48659.cljs$core$IFn$_invoke$arity$1 ? inst_48659.cljs$core$IFn$_invoke$arity$1(inst_48670) : inst_48659.call(null,inst_48670));
var state_48728__$1 = (function (){var statearr_48768 = state_48728;
(statearr_48768[(19)] = inst_48697__$1);

return statearr_48768;
})();
if(cljs.core.truth_(inst_48697__$1)){
var statearr_48769_50339 = state_48728__$1;
(statearr_48769_50339[(1)] = (14));

} else {
var statearr_48770_50340 = state_48728__$1;
(statearr_48770_50340[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (5))){
var inst_48671 = (state_48728[(13)]);
var state_48728__$1 = state_48728;
var statearr_48771_50341 = state_48728__$1;
(statearr_48771_50341[(2)] = inst_48671);

(statearr_48771_50341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (14))){
var inst_48697 = (state_48728[(19)]);
var state_48728__$1 = state_48728;
var statearr_48773_50342 = state_48728__$1;
(statearr_48773_50342[(2)] = inst_48697);

(statearr_48773_50342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (26))){
var inst_48717 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
var statearr_48774_50343 = state_48728__$1;
(statearr_48774_50343[(2)] = inst_48717);

(statearr_48774_50343[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (16))){
var inst_48709 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
if(cljs.core.truth_(inst_48709)){
var statearr_48775_50345 = state_48728__$1;
(statearr_48775_50345[(1)] = (20));

} else {
var statearr_48776_50346 = state_48728__$1;
(statearr_48776_50346[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (10))){
var inst_48723 = (state_48728[(2)]);
var state_48728__$1 = state_48728;
var statearr_48777_50347 = state_48728__$1;
(statearr_48777_50347[(2)] = inst_48723);

(statearr_48777_50347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (18))){
var inst_48701 = (state_48728[(15)]);
var state_48728__$1 = state_48728;
var statearr_48778_50348 = state_48728__$1;
(statearr_48778_50348[(2)] = inst_48701);

(statearr_48778_50348[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48729 === (8))){
var inst_48669 = (state_48728[(7)]);
var inst_48685 = (inst_48669 == null);
var state_48728__$1 = state_48728;
if(cljs.core.truth_(inst_48685)){
var statearr_48779_50349 = state_48728__$1;
(statearr_48779_50349[(1)] = (11));

} else {
var statearr_48780_50350 = state_48728__$1;
(statearr_48780_50350[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__47301__auto__ = null;
var cljs$core$async$mix_$_state_machine__47301__auto____0 = (function (){
var statearr_48781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48781[(0)] = cljs$core$async$mix_$_state_machine__47301__auto__);

(statearr_48781[(1)] = (1));

return statearr_48781;
});
var cljs$core$async$mix_$_state_machine__47301__auto____1 = (function (state_48728){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48728);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48783){var ex__47304__auto__ = e48783;
var statearr_48784_50355 = state_48728;
(statearr_48784_50355[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48728[(4)]))){
var statearr_48785_50358 = state_48728;
(statearr_48785_50358[(1)] = cljs.core.first((state_48728[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50359 = state_48728;
state_48728 = G__50359;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47301__auto__ = function(state_48728){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47301__auto____1.call(this,state_48728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47301__auto____0;
cljs$core$async$mix_$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47301__auto____1;
return cljs$core$async$mix_$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48786 = f__47468__auto__();
(statearr_48786[(6)] = c__47467__auto___50288);

return statearr_48786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50365 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50365(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50366 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50366(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50367 = (function() {
var G__50368 = null;
var G__50368__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50368__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50368 = function(p,v){
switch(arguments.length){
case 1:
return G__50368__1.call(this,p);
case 2:
return G__50368__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50368.cljs$core$IFn$_invoke$arity$1 = G__50368__1;
G__50368.cljs$core$IFn$_invoke$arity$2 = G__50368__2;
return G__50368;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48796 = arguments.length;
switch (G__48796) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50367(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50367(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48820 = arguments.length;
switch (G__48820) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48817_SHARP_){
if(cljs.core.truth_((p1__48817_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48817_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48817_SHARP_.call(null,topic)))){
return p1__48817_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48817_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48823 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48824){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48824 = meta48824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48825,meta48824__$1){
var self__ = this;
var _48825__$1 = this;
return (new cljs.core.async.t_cljs$core$async48823(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48824__$1));
}));

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48825){
var self__ = this;
var _48825__$1 = this;
return self__.meta48824;
}));

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5754__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5754__auto__)){
var m = temp__5754__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48824","meta48824",-645892385,null)], null);
}));

(cljs.core.async.t_cljs$core$async48823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48823");

(cljs.core.async.t_cljs$core$async48823.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48823.
 */
cljs.core.async.__GT_t_cljs$core$async48823 = (function cljs$core$async$__GT_t_cljs$core$async48823(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48824){
return (new cljs.core.async.t_cljs$core$async48823(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48824));
});

}

return (new cljs.core.async.t_cljs$core$async48823(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47467__auto___50382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_48900){
var state_val_48901 = (state_48900[(1)]);
if((state_val_48901 === (7))){
var inst_48896 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
var statearr_48902_50386 = state_48900__$1;
(statearr_48902_50386[(2)] = inst_48896);

(statearr_48902_50386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (20))){
var state_48900__$1 = state_48900;
var statearr_48903_50387 = state_48900__$1;
(statearr_48903_50387[(2)] = null);

(statearr_48903_50387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (1))){
var state_48900__$1 = state_48900;
var statearr_48904_50388 = state_48900__$1;
(statearr_48904_50388[(2)] = null);

(statearr_48904_50388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (24))){
var inst_48879 = (state_48900[(7)]);
var inst_48888 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48879);
var state_48900__$1 = state_48900;
var statearr_48906_50389 = state_48900__$1;
(statearr_48906_50389[(2)] = inst_48888);

(statearr_48906_50389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (4))){
var inst_48831 = (state_48900[(8)]);
var inst_48831__$1 = (state_48900[(2)]);
var inst_48832 = (inst_48831__$1 == null);
var state_48900__$1 = (function (){var statearr_48907 = state_48900;
(statearr_48907[(8)] = inst_48831__$1);

return statearr_48907;
})();
if(cljs.core.truth_(inst_48832)){
var statearr_48908_50390 = state_48900__$1;
(statearr_48908_50390[(1)] = (5));

} else {
var statearr_48909_50394 = state_48900__$1;
(statearr_48909_50394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (15))){
var inst_48873 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
var statearr_48910_50396 = state_48900__$1;
(statearr_48910_50396[(2)] = inst_48873);

(statearr_48910_50396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (21))){
var inst_48893 = (state_48900[(2)]);
var state_48900__$1 = (function (){var statearr_48911 = state_48900;
(statearr_48911[(9)] = inst_48893);

return statearr_48911;
})();
var statearr_48912_50397 = state_48900__$1;
(statearr_48912_50397[(2)] = null);

(statearr_48912_50397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (13))){
var inst_48855 = (state_48900[(10)]);
var inst_48857 = cljs.core.chunked_seq_QMARK_(inst_48855);
var state_48900__$1 = state_48900;
if(inst_48857){
var statearr_48913_50401 = state_48900__$1;
(statearr_48913_50401[(1)] = (16));

} else {
var statearr_48914_50402 = state_48900__$1;
(statearr_48914_50402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (22))){
var inst_48885 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
if(cljs.core.truth_(inst_48885)){
var statearr_48915_50403 = state_48900__$1;
(statearr_48915_50403[(1)] = (23));

} else {
var statearr_48916_50404 = state_48900__$1;
(statearr_48916_50404[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (6))){
var inst_48879 = (state_48900[(7)]);
var inst_48831 = (state_48900[(8)]);
var inst_48881 = (state_48900[(11)]);
var inst_48879__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48831) : topic_fn.call(null,inst_48831));
var inst_48880 = cljs.core.deref(mults);
var inst_48881__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48880,inst_48879__$1);
var state_48900__$1 = (function (){var statearr_48918 = state_48900;
(statearr_48918[(7)] = inst_48879__$1);

(statearr_48918[(11)] = inst_48881__$1);

return statearr_48918;
})();
if(cljs.core.truth_(inst_48881__$1)){
var statearr_48919_50406 = state_48900__$1;
(statearr_48919_50406[(1)] = (19));

} else {
var statearr_48920_50407 = state_48900__$1;
(statearr_48920_50407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (25))){
var inst_48890 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
var statearr_48921_50408 = state_48900__$1;
(statearr_48921_50408[(2)] = inst_48890);

(statearr_48921_50408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (17))){
var inst_48855 = (state_48900[(10)]);
var inst_48864 = cljs.core.first(inst_48855);
var inst_48865 = cljs.core.async.muxch_STAR_(inst_48864);
var inst_48866 = cljs.core.async.close_BANG_(inst_48865);
var inst_48867 = cljs.core.next(inst_48855);
var inst_48841 = inst_48867;
var inst_48842 = null;
var inst_48843 = (0);
var inst_48844 = (0);
var state_48900__$1 = (function (){var statearr_48922 = state_48900;
(statearr_48922[(12)] = inst_48844);

(statearr_48922[(13)] = inst_48842);

(statearr_48922[(14)] = inst_48843);

(statearr_48922[(15)] = inst_48866);

(statearr_48922[(16)] = inst_48841);

return statearr_48922;
})();
var statearr_48923_50409 = state_48900__$1;
(statearr_48923_50409[(2)] = null);

(statearr_48923_50409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (3))){
var inst_48898 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48900__$1,inst_48898);
} else {
if((state_val_48901 === (12))){
var inst_48875 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
var statearr_48925_50413 = state_48900__$1;
(statearr_48925_50413[(2)] = inst_48875);

(statearr_48925_50413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (2))){
var state_48900__$1 = state_48900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48900__$1,(4),ch);
} else {
if((state_val_48901 === (23))){
var state_48900__$1 = state_48900;
var statearr_48926_50420 = state_48900__$1;
(statearr_48926_50420[(2)] = null);

(statearr_48926_50420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (19))){
var inst_48831 = (state_48900[(8)]);
var inst_48881 = (state_48900[(11)]);
var inst_48883 = cljs.core.async.muxch_STAR_(inst_48881);
var state_48900__$1 = state_48900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48900__$1,(22),inst_48883,inst_48831);
} else {
if((state_val_48901 === (11))){
var inst_48855 = (state_48900[(10)]);
var inst_48841 = (state_48900[(16)]);
var inst_48855__$1 = cljs.core.seq(inst_48841);
var state_48900__$1 = (function (){var statearr_48927 = state_48900;
(statearr_48927[(10)] = inst_48855__$1);

return statearr_48927;
})();
if(inst_48855__$1){
var statearr_48929_50421 = state_48900__$1;
(statearr_48929_50421[(1)] = (13));

} else {
var statearr_48930_50422 = state_48900__$1;
(statearr_48930_50422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (9))){
var inst_48877 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
var statearr_48931_50423 = state_48900__$1;
(statearr_48931_50423[(2)] = inst_48877);

(statearr_48931_50423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (5))){
var inst_48838 = cljs.core.deref(mults);
var inst_48839 = cljs.core.vals(inst_48838);
var inst_48840 = cljs.core.seq(inst_48839);
var inst_48841 = inst_48840;
var inst_48842 = null;
var inst_48843 = (0);
var inst_48844 = (0);
var state_48900__$1 = (function (){var statearr_48932 = state_48900;
(statearr_48932[(12)] = inst_48844);

(statearr_48932[(13)] = inst_48842);

(statearr_48932[(14)] = inst_48843);

(statearr_48932[(16)] = inst_48841);

return statearr_48932;
})();
var statearr_48933_50424 = state_48900__$1;
(statearr_48933_50424[(2)] = null);

(statearr_48933_50424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (14))){
var state_48900__$1 = state_48900;
var statearr_48937_50426 = state_48900__$1;
(statearr_48937_50426[(2)] = null);

(statearr_48937_50426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (16))){
var inst_48855 = (state_48900[(10)]);
var inst_48859 = cljs.core.chunk_first(inst_48855);
var inst_48860 = cljs.core.chunk_rest(inst_48855);
var inst_48861 = cljs.core.count(inst_48859);
var inst_48841 = inst_48860;
var inst_48842 = inst_48859;
var inst_48843 = inst_48861;
var inst_48844 = (0);
var state_48900__$1 = (function (){var statearr_48939 = state_48900;
(statearr_48939[(12)] = inst_48844);

(statearr_48939[(13)] = inst_48842);

(statearr_48939[(14)] = inst_48843);

(statearr_48939[(16)] = inst_48841);

return statearr_48939;
})();
var statearr_48941_50433 = state_48900__$1;
(statearr_48941_50433[(2)] = null);

(statearr_48941_50433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (10))){
var inst_48844 = (state_48900[(12)]);
var inst_48842 = (state_48900[(13)]);
var inst_48843 = (state_48900[(14)]);
var inst_48841 = (state_48900[(16)]);
var inst_48849 = cljs.core._nth(inst_48842,inst_48844);
var inst_48850 = cljs.core.async.muxch_STAR_(inst_48849);
var inst_48851 = cljs.core.async.close_BANG_(inst_48850);
var inst_48852 = (inst_48844 + (1));
var tmp48934 = inst_48842;
var tmp48935 = inst_48843;
var tmp48936 = inst_48841;
var inst_48841__$1 = tmp48936;
var inst_48842__$1 = tmp48934;
var inst_48843__$1 = tmp48935;
var inst_48844__$1 = inst_48852;
var state_48900__$1 = (function (){var statearr_48942 = state_48900;
(statearr_48942[(12)] = inst_48844__$1);

(statearr_48942[(13)] = inst_48842__$1);

(statearr_48942[(14)] = inst_48843__$1);

(statearr_48942[(16)] = inst_48841__$1);

(statearr_48942[(17)] = inst_48851);

return statearr_48942;
})();
var statearr_48943_50434 = state_48900__$1;
(statearr_48943_50434[(2)] = null);

(statearr_48943_50434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (18))){
var inst_48870 = (state_48900[(2)]);
var state_48900__$1 = state_48900;
var statearr_48944_50435 = state_48900__$1;
(statearr_48944_50435[(2)] = inst_48870);

(statearr_48944_50435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48901 === (8))){
var inst_48844 = (state_48900[(12)]);
var inst_48843 = (state_48900[(14)]);
var inst_48846 = (inst_48844 < inst_48843);
var inst_48847 = inst_48846;
var state_48900__$1 = state_48900;
if(cljs.core.truth_(inst_48847)){
var statearr_48945_50439 = state_48900__$1;
(statearr_48945_50439[(1)] = (10));

} else {
var statearr_48946_50441 = state_48900__$1;
(statearr_48946_50441[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_48947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48947[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_48947[(1)] = (1));

return statearr_48947;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_48900){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_48900);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e48948){var ex__47304__auto__ = e48948;
var statearr_48949_50445 = state_48900;
(statearr_48949_50445[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_48900[(4)]))){
var statearr_48950_50446 = state_48900;
(statearr_48950_50446[(1)] = cljs.core.first((state_48900[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50447 = state_48900;
state_48900 = G__50447;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_48900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_48900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_48951 = f__47468__auto__();
(statearr_48951[(6)] = c__47467__auto___50382);

return statearr_48951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48953 = arguments.length;
switch (G__48953) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48957 = arguments.length;
switch (G__48957) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48959 = arguments.length;
switch (G__48959) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47467__auto___50456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49004){
var state_val_49005 = (state_49004[(1)]);
if((state_val_49005 === (7))){
var state_49004__$1 = state_49004;
var statearr_49006_50457 = state_49004__$1;
(statearr_49006_50457[(2)] = null);

(statearr_49006_50457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (1))){
var state_49004__$1 = state_49004;
var statearr_49007_50458 = state_49004__$1;
(statearr_49007_50458[(2)] = null);

(statearr_49007_50458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (4))){
var inst_48965 = (state_49004[(7)]);
var inst_48964 = (state_49004[(8)]);
var inst_48967 = (inst_48965 < inst_48964);
var state_49004__$1 = state_49004;
if(cljs.core.truth_(inst_48967)){
var statearr_49008_50460 = state_49004__$1;
(statearr_49008_50460[(1)] = (6));

} else {
var statearr_49009_50461 = state_49004__$1;
(statearr_49009_50461[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (15))){
var inst_48990 = (state_49004[(9)]);
var inst_48995 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48990);
var state_49004__$1 = state_49004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49004__$1,(17),out,inst_48995);
} else {
if((state_val_49005 === (13))){
var inst_48990 = (state_49004[(9)]);
var inst_48990__$1 = (state_49004[(2)]);
var inst_48991 = cljs.core.some(cljs.core.nil_QMARK_,inst_48990__$1);
var state_49004__$1 = (function (){var statearr_49010 = state_49004;
(statearr_49010[(9)] = inst_48990__$1);

return statearr_49010;
})();
if(cljs.core.truth_(inst_48991)){
var statearr_49011_50462 = state_49004__$1;
(statearr_49011_50462[(1)] = (14));

} else {
var statearr_49012_50463 = state_49004__$1;
(statearr_49012_50463[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (6))){
var state_49004__$1 = state_49004;
var statearr_49013_50464 = state_49004__$1;
(statearr_49013_50464[(2)] = null);

(statearr_49013_50464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (17))){
var inst_48997 = (state_49004[(2)]);
var state_49004__$1 = (function (){var statearr_49015 = state_49004;
(statearr_49015[(10)] = inst_48997);

return statearr_49015;
})();
var statearr_49016_50465 = state_49004__$1;
(statearr_49016_50465[(2)] = null);

(statearr_49016_50465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (3))){
var inst_49002 = (state_49004[(2)]);
var state_49004__$1 = state_49004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49004__$1,inst_49002);
} else {
if((state_val_49005 === (12))){
var _ = (function (){var statearr_49017 = state_49004;
(statearr_49017[(4)] = cljs.core.rest((state_49004[(4)])));

return statearr_49017;
})();
var state_49004__$1 = state_49004;
var ex49014 = (state_49004__$1[(2)]);
var statearr_49018_50466 = state_49004__$1;
(statearr_49018_50466[(5)] = ex49014);


if((ex49014 instanceof Object)){
var statearr_49019_50467 = state_49004__$1;
(statearr_49019_50467[(1)] = (11));

(statearr_49019_50467[(5)] = null);

} else {
throw ex49014;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (2))){
var inst_48963 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48964 = cnt;
var inst_48965 = (0);
var state_49004__$1 = (function (){var statearr_49020 = state_49004;
(statearr_49020[(11)] = inst_48963);

(statearr_49020[(7)] = inst_48965);

(statearr_49020[(8)] = inst_48964);

return statearr_49020;
})();
var statearr_49021_50470 = state_49004__$1;
(statearr_49021_50470[(2)] = null);

(statearr_49021_50470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (11))){
var inst_48969 = (state_49004[(2)]);
var inst_48970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49004__$1 = (function (){var statearr_49022 = state_49004;
(statearr_49022[(12)] = inst_48969);

return statearr_49022;
})();
var statearr_49023_50471 = state_49004__$1;
(statearr_49023_50471[(2)] = inst_48970);

(statearr_49023_50471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (9))){
var inst_48965 = (state_49004[(7)]);
var _ = (function (){var statearr_49024 = state_49004;
(statearr_49024[(4)] = cljs.core.cons((12),(state_49004[(4)])));

return statearr_49024;
})();
var inst_48976 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48965) : chs__$1.call(null,inst_48965));
var inst_48977 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48965) : done.call(null,inst_48965));
var inst_48978 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48976,inst_48977);
var ___$1 = (function (){var statearr_49025 = state_49004;
(statearr_49025[(4)] = cljs.core.rest((state_49004[(4)])));

return statearr_49025;
})();
var state_49004__$1 = state_49004;
var statearr_49026_50472 = state_49004__$1;
(statearr_49026_50472[(2)] = inst_48978);

(statearr_49026_50472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (5))){
var inst_48988 = (state_49004[(2)]);
var state_49004__$1 = (function (){var statearr_49027 = state_49004;
(statearr_49027[(13)] = inst_48988);

return statearr_49027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49004__$1,(13),dchan);
} else {
if((state_val_49005 === (14))){
var inst_48993 = cljs.core.async.close_BANG_(out);
var state_49004__$1 = state_49004;
var statearr_49030_50473 = state_49004__$1;
(statearr_49030_50473[(2)] = inst_48993);

(statearr_49030_50473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (16))){
var inst_49000 = (state_49004[(2)]);
var state_49004__$1 = state_49004;
var statearr_49032_50474 = state_49004__$1;
(statearr_49032_50474[(2)] = inst_49000);

(statearr_49032_50474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (10))){
var inst_48965 = (state_49004[(7)]);
var inst_48981 = (state_49004[(2)]);
var inst_48982 = (inst_48965 + (1));
var inst_48965__$1 = inst_48982;
var state_49004__$1 = (function (){var statearr_49033 = state_49004;
(statearr_49033[(7)] = inst_48965__$1);

(statearr_49033[(14)] = inst_48981);

return statearr_49033;
})();
var statearr_49034_50476 = state_49004__$1;
(statearr_49034_50476[(2)] = null);

(statearr_49034_50476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49005 === (8))){
var inst_48986 = (state_49004[(2)]);
var state_49004__$1 = state_49004;
var statearr_49037_50477 = state_49004__$1;
(statearr_49037_50477[(2)] = inst_48986);

(statearr_49037_50477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_49042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49042[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_49042[(1)] = (1));

return statearr_49042;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_49004){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49004);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49043){var ex__47304__auto__ = e49043;
var statearr_49044_50479 = state_49004;
(statearr_49044_50479[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49004[(4)]))){
var statearr_49045_50480 = state_49004;
(statearr_49045_50480[(1)] = cljs.core.first((state_49004[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50481 = state_49004;
state_49004 = G__50481;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_49004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_49004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49054 = f__47468__auto__();
(statearr_49054[(6)] = c__47467__auto___50456);

return statearr_49054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49070 = arguments.length;
switch (G__49070) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47467__auto___50483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49139){
var state_val_49140 = (state_49139[(1)]);
if((state_val_49140 === (7))){
var inst_49110 = (state_49139[(7)]);
var inst_49111 = (state_49139[(8)]);
var inst_49110__$1 = (state_49139[(2)]);
var inst_49111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49110__$1,(0),null);
var inst_49112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49110__$1,(1),null);
var inst_49113 = (inst_49111__$1 == null);
var state_49139__$1 = (function (){var statearr_49145 = state_49139;
(statearr_49145[(9)] = inst_49112);

(statearr_49145[(7)] = inst_49110__$1);

(statearr_49145[(8)] = inst_49111__$1);

return statearr_49145;
})();
if(cljs.core.truth_(inst_49113)){
var statearr_49146_50484 = state_49139__$1;
(statearr_49146_50484[(1)] = (8));

} else {
var statearr_49147_50485 = state_49139__$1;
(statearr_49147_50485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (1))){
var inst_49097 = cljs.core.vec(chs);
var inst_49099 = inst_49097;
var state_49139__$1 = (function (){var statearr_49148 = state_49139;
(statearr_49148[(10)] = inst_49099);

return statearr_49148;
})();
var statearr_49149_50486 = state_49139__$1;
(statearr_49149_50486[(2)] = null);

(statearr_49149_50486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (4))){
var inst_49099 = (state_49139[(10)]);
var state_49139__$1 = state_49139;
return cljs.core.async.ioc_alts_BANG_(state_49139__$1,(7),inst_49099);
} else {
if((state_val_49140 === (6))){
var inst_49133 = (state_49139[(2)]);
var state_49139__$1 = state_49139;
var statearr_49150_50487 = state_49139__$1;
(statearr_49150_50487[(2)] = inst_49133);

(statearr_49150_50487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (3))){
var inst_49135 = (state_49139[(2)]);
var state_49139__$1 = state_49139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49139__$1,inst_49135);
} else {
if((state_val_49140 === (2))){
var inst_49099 = (state_49139[(10)]);
var inst_49101 = cljs.core.count(inst_49099);
var inst_49102 = (inst_49101 > (0));
var state_49139__$1 = state_49139;
if(cljs.core.truth_(inst_49102)){
var statearr_49155_50488 = state_49139__$1;
(statearr_49155_50488[(1)] = (4));

} else {
var statearr_49156_50489 = state_49139__$1;
(statearr_49156_50489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (11))){
var inst_49099 = (state_49139[(10)]);
var inst_49124 = (state_49139[(2)]);
var tmp49152 = inst_49099;
var inst_49099__$1 = tmp49152;
var state_49139__$1 = (function (){var statearr_49157 = state_49139;
(statearr_49157[(10)] = inst_49099__$1);

(statearr_49157[(11)] = inst_49124);

return statearr_49157;
})();
var statearr_49159_50490 = state_49139__$1;
(statearr_49159_50490[(2)] = null);

(statearr_49159_50490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (9))){
var inst_49111 = (state_49139[(8)]);
var state_49139__$1 = state_49139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49139__$1,(11),out,inst_49111);
} else {
if((state_val_49140 === (5))){
var inst_49131 = cljs.core.async.close_BANG_(out);
var state_49139__$1 = state_49139;
var statearr_49164_50491 = state_49139__$1;
(statearr_49164_50491[(2)] = inst_49131);

(statearr_49164_50491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (10))){
var inst_49127 = (state_49139[(2)]);
var state_49139__$1 = state_49139;
var statearr_49166_50492 = state_49139__$1;
(statearr_49166_50492[(2)] = inst_49127);

(statearr_49166_50492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49140 === (8))){
var inst_49099 = (state_49139[(10)]);
var inst_49112 = (state_49139[(9)]);
var inst_49110 = (state_49139[(7)]);
var inst_49111 = (state_49139[(8)]);
var inst_49119 = (function (){var cs = inst_49099;
var vec__49105 = inst_49110;
var v = inst_49111;
var c = inst_49112;
return (function (p1__49059_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49059_SHARP_);
});
})();
var inst_49120 = cljs.core.filterv(inst_49119,inst_49099);
var inst_49099__$1 = inst_49120;
var state_49139__$1 = (function (){var statearr_49167 = state_49139;
(statearr_49167[(10)] = inst_49099__$1);

return statearr_49167;
})();
var statearr_49168_50497 = state_49139__$1;
(statearr_49168_50497[(2)] = null);

(statearr_49168_50497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_49169 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49169[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_49169[(1)] = (1));

return statearr_49169;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_49139){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49139);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49171){var ex__47304__auto__ = e49171;
var statearr_49172_50498 = state_49139;
(statearr_49172_50498[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49139[(4)]))){
var statearr_49177_50499 = state_49139;
(statearr_49177_50499[(1)] = cljs.core.first((state_49139[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50500 = state_49139;
state_49139 = G__50500;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_49139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_49139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49182 = f__47468__auto__();
(statearr_49182[(6)] = c__47467__auto___50483);

return statearr_49182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49190 = arguments.length;
switch (G__49190) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47467__auto___50503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49227){
var state_val_49228 = (state_49227[(1)]);
if((state_val_49228 === (7))){
var inst_49209 = (state_49227[(7)]);
var inst_49209__$1 = (state_49227[(2)]);
var inst_49210 = (inst_49209__$1 == null);
var inst_49211 = cljs.core.not(inst_49210);
var state_49227__$1 = (function (){var statearr_49232 = state_49227;
(statearr_49232[(7)] = inst_49209__$1);

return statearr_49232;
})();
if(inst_49211){
var statearr_49236_50504 = state_49227__$1;
(statearr_49236_50504[(1)] = (8));

} else {
var statearr_49237_50511 = state_49227__$1;
(statearr_49237_50511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (1))){
var inst_49204 = (0);
var state_49227__$1 = (function (){var statearr_49238 = state_49227;
(statearr_49238[(8)] = inst_49204);

return statearr_49238;
})();
var statearr_49239_50512 = state_49227__$1;
(statearr_49239_50512[(2)] = null);

(statearr_49239_50512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (4))){
var state_49227__$1 = state_49227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49227__$1,(7),ch);
} else {
if((state_val_49228 === (6))){
var inst_49222 = (state_49227[(2)]);
var state_49227__$1 = state_49227;
var statearr_49241_50513 = state_49227__$1;
(statearr_49241_50513[(2)] = inst_49222);

(statearr_49241_50513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (3))){
var inst_49224 = (state_49227[(2)]);
var inst_49225 = cljs.core.async.close_BANG_(out);
var state_49227__$1 = (function (){var statearr_49245 = state_49227;
(statearr_49245[(9)] = inst_49224);

return statearr_49245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49227__$1,inst_49225);
} else {
if((state_val_49228 === (2))){
var inst_49204 = (state_49227[(8)]);
var inst_49206 = (inst_49204 < n);
var state_49227__$1 = state_49227;
if(cljs.core.truth_(inst_49206)){
var statearr_49247_50517 = state_49227__$1;
(statearr_49247_50517[(1)] = (4));

} else {
var statearr_49250_50518 = state_49227__$1;
(statearr_49250_50518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (11))){
var inst_49204 = (state_49227[(8)]);
var inst_49214 = (state_49227[(2)]);
var inst_49215 = (inst_49204 + (1));
var inst_49204__$1 = inst_49215;
var state_49227__$1 = (function (){var statearr_49252 = state_49227;
(statearr_49252[(10)] = inst_49214);

(statearr_49252[(8)] = inst_49204__$1);

return statearr_49252;
})();
var statearr_49254_50519 = state_49227__$1;
(statearr_49254_50519[(2)] = null);

(statearr_49254_50519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (9))){
var state_49227__$1 = state_49227;
var statearr_49255_50521 = state_49227__$1;
(statearr_49255_50521[(2)] = null);

(statearr_49255_50521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (5))){
var state_49227__$1 = state_49227;
var statearr_49259_50525 = state_49227__$1;
(statearr_49259_50525[(2)] = null);

(statearr_49259_50525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (10))){
var inst_49219 = (state_49227[(2)]);
var state_49227__$1 = state_49227;
var statearr_49261_50526 = state_49227__$1;
(statearr_49261_50526[(2)] = inst_49219);

(statearr_49261_50526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49228 === (8))){
var inst_49209 = (state_49227[(7)]);
var state_49227__$1 = state_49227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49227__$1,(11),out,inst_49209);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_49265 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49265[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_49265[(1)] = (1));

return statearr_49265;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_49227){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49227);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49267){var ex__47304__auto__ = e49267;
var statearr_49268_50527 = state_49227;
(statearr_49268_50527[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49227[(4)]))){
var statearr_49271_50528 = state_49227;
(statearr_49271_50528[(1)] = cljs.core.first((state_49227[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50529 = state_49227;
state_49227 = G__50529;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_49227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_49227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49274 = f__47468__auto__();
(statearr_49274[(6)] = c__47467__auto___50503);

return statearr_49274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49295 = (function (f,ch,meta49296){
this.f = f;
this.ch = ch;
this.meta49296 = meta49296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49297,meta49296__$1){
var self__ = this;
var _49297__$1 = this;
return (new cljs.core.async.t_cljs$core$async49295(self__.f,self__.ch,meta49296__$1));
}));

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49297){
var self__ = this;
var _49297__$1 = this;
return self__.meta49296;
}));

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49299 = (function (f,ch,meta49296,_,fn1,meta49300){
this.f = f;
this.ch = ch;
this.meta49296 = meta49296;
this._ = _;
this.fn1 = fn1;
this.meta49300 = meta49300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49301,meta49300__$1){
var self__ = this;
var _49301__$1 = this;
return (new cljs.core.async.t_cljs$core$async49299(self__.f,self__.ch,self__.meta49296,self__._,self__.fn1,meta49300__$1));
}));

(cljs.core.async.t_cljs$core$async49299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49301){
var self__ = this;
var _49301__$1 = this;
return self__.meta49300;
}));

(cljs.core.async.t_cljs$core$async49299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49290_SHARP_){
var G__49306 = (((p1__49290_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49290_SHARP_) : self__.f.call(null,p1__49290_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49306) : f1.call(null,G__49306));
});
}));

(cljs.core.async.t_cljs$core$async49299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49296","meta49296",-909244566,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49295","cljs.core.async/t_cljs$core$async49295",386118332,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49300","meta49300",-720676465,null)], null);
}));

(cljs.core.async.t_cljs$core$async49299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49299");

(cljs.core.async.t_cljs$core$async49299.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49299.
 */
cljs.core.async.__GT_t_cljs$core$async49299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49299(f__$1,ch__$1,meta49296__$1,___$2,fn1__$1,meta49300){
return (new cljs.core.async.t_cljs$core$async49299(f__$1,ch__$1,meta49296__$1,___$2,fn1__$1,meta49300));
});

}

return (new cljs.core.async.t_cljs$core$async49299(self__.f,self__.ch,self__.meta49296,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49307 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49307) : self__.f.call(null,G__49307));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49296","meta49296",-909244566,null)], null);
}));

(cljs.core.async.t_cljs$core$async49295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49295");

(cljs.core.async.t_cljs$core$async49295.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49295.
 */
cljs.core.async.__GT_t_cljs$core$async49295 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49295(f__$1,ch__$1,meta49296){
return (new cljs.core.async.t_cljs$core$async49295(f__$1,ch__$1,meta49296));
});

}

return (new cljs.core.async.t_cljs$core$async49295(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49308 = (function (f,ch,meta49309){
this.f = f;
this.ch = ch;
this.meta49309 = meta49309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49310,meta49309__$1){
var self__ = this;
var _49310__$1 = this;
return (new cljs.core.async.t_cljs$core$async49308(self__.f,self__.ch,meta49309__$1));
}));

(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49310){
var self__ = this;
var _49310__$1 = this;
return self__.meta49309;
}));

(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49309","meta49309",-974571540,null)], null);
}));

(cljs.core.async.t_cljs$core$async49308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49308");

(cljs.core.async.t_cljs$core$async49308.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49308.
 */
cljs.core.async.__GT_t_cljs$core$async49308 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49308(f__$1,ch__$1,meta49309){
return (new cljs.core.async.t_cljs$core$async49308(f__$1,ch__$1,meta49309));
});

}

return (new cljs.core.async.t_cljs$core$async49308(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49315 = (function (p,ch,meta49316){
this.p = p;
this.ch = ch;
this.meta49316 = meta49316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49317,meta49316__$1){
var self__ = this;
var _49317__$1 = this;
return (new cljs.core.async.t_cljs$core$async49315(self__.p,self__.ch,meta49316__$1));
}));

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49317){
var self__ = this;
var _49317__$1 = this;
return self__.meta49316;
}));

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49316","meta49316",-1612589116,null)], null);
}));

(cljs.core.async.t_cljs$core$async49315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49315");

(cljs.core.async.t_cljs$core$async49315.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49315.
 */
cljs.core.async.__GT_t_cljs$core$async49315 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49315(p__$1,ch__$1,meta49316){
return (new cljs.core.async.t_cljs$core$async49315(p__$1,ch__$1,meta49316));
});

}

return (new cljs.core.async.t_cljs$core$async49315(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49328 = arguments.length;
switch (G__49328) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47467__auto___50550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49413){
var state_val_49415 = (state_49413[(1)]);
if((state_val_49415 === (7))){
var inst_49406 = (state_49413[(2)]);
var state_49413__$1 = state_49413;
var statearr_49416_50551 = state_49413__$1;
(statearr_49416_50551[(2)] = inst_49406);

(statearr_49416_50551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (1))){
var state_49413__$1 = state_49413;
var statearr_49421_50552 = state_49413__$1;
(statearr_49421_50552[(2)] = null);

(statearr_49421_50552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (4))){
var inst_49379 = (state_49413[(7)]);
var inst_49379__$1 = (state_49413[(2)]);
var inst_49392 = (inst_49379__$1 == null);
var state_49413__$1 = (function (){var statearr_49429 = state_49413;
(statearr_49429[(7)] = inst_49379__$1);

return statearr_49429;
})();
if(cljs.core.truth_(inst_49392)){
var statearr_49430_50553 = state_49413__$1;
(statearr_49430_50553[(1)] = (5));

} else {
var statearr_49431_50554 = state_49413__$1;
(statearr_49431_50554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (6))){
var inst_49379 = (state_49413[(7)]);
var inst_49397 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49379) : p.call(null,inst_49379));
var state_49413__$1 = state_49413;
if(cljs.core.truth_(inst_49397)){
var statearr_49432_50560 = state_49413__$1;
(statearr_49432_50560[(1)] = (8));

} else {
var statearr_49433_50561 = state_49413__$1;
(statearr_49433_50561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (3))){
var inst_49410 = (state_49413[(2)]);
var state_49413__$1 = state_49413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49413__$1,inst_49410);
} else {
if((state_val_49415 === (2))){
var state_49413__$1 = state_49413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49413__$1,(4),ch);
} else {
if((state_val_49415 === (11))){
var inst_49400 = (state_49413[(2)]);
var state_49413__$1 = state_49413;
var statearr_49438_50568 = state_49413__$1;
(statearr_49438_50568[(2)] = inst_49400);

(statearr_49438_50568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (9))){
var state_49413__$1 = state_49413;
var statearr_49439_50569 = state_49413__$1;
(statearr_49439_50569[(2)] = null);

(statearr_49439_50569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (5))){
var inst_49395 = cljs.core.async.close_BANG_(out);
var state_49413__$1 = state_49413;
var statearr_49440_50570 = state_49413__$1;
(statearr_49440_50570[(2)] = inst_49395);

(statearr_49440_50570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (10))){
var inst_49403 = (state_49413[(2)]);
var state_49413__$1 = (function (){var statearr_49445 = state_49413;
(statearr_49445[(8)] = inst_49403);

return statearr_49445;
})();
var statearr_49458_50571 = state_49413__$1;
(statearr_49458_50571[(2)] = null);

(statearr_49458_50571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49415 === (8))){
var inst_49379 = (state_49413[(7)]);
var state_49413__$1 = state_49413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49413__$1,(11),out,inst_49379);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_49460 = [null,null,null,null,null,null,null,null,null];
(statearr_49460[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_49460[(1)] = (1));

return statearr_49460;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_49413){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49413);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49461){var ex__47304__auto__ = e49461;
var statearr_49462_50572 = state_49413;
(statearr_49462_50572[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49413[(4)]))){
var statearr_49463_50573 = state_49413;
(statearr_49463_50573[(1)] = cljs.core.first((state_49413[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50574 = state_49413;
state_49413 = G__50574;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_49413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_49413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49464 = f__47468__auto__();
(statearr_49464[(6)] = c__47467__auto___50550);

return statearr_49464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49466 = arguments.length;
switch (G__49466) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47467__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49553){
var state_val_49554 = (state_49553[(1)]);
if((state_val_49554 === (7))){
var inst_49549 = (state_49553[(2)]);
var state_49553__$1 = state_49553;
var statearr_49555_50579 = state_49553__$1;
(statearr_49555_50579[(2)] = inst_49549);

(statearr_49555_50579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (20))){
var inst_49506 = (state_49553[(7)]);
var inst_49528 = (state_49553[(2)]);
var inst_49531 = cljs.core.next(inst_49506);
var inst_49492 = inst_49531;
var inst_49493 = null;
var inst_49494 = (0);
var inst_49495 = (0);
var state_49553__$1 = (function (){var statearr_49556 = state_49553;
(statearr_49556[(8)] = inst_49494);

(statearr_49556[(9)] = inst_49495);

(statearr_49556[(10)] = inst_49528);

(statearr_49556[(11)] = inst_49492);

(statearr_49556[(12)] = inst_49493);

return statearr_49556;
})();
var statearr_49557_50585 = state_49553__$1;
(statearr_49557_50585[(2)] = null);

(statearr_49557_50585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (1))){
var state_49553__$1 = state_49553;
var statearr_49558_50586 = state_49553__$1;
(statearr_49558_50586[(2)] = null);

(statearr_49558_50586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (4))){
var inst_49481 = (state_49553[(13)]);
var inst_49481__$1 = (state_49553[(2)]);
var inst_49482 = (inst_49481__$1 == null);
var state_49553__$1 = (function (){var statearr_49560 = state_49553;
(statearr_49560[(13)] = inst_49481__$1);

return statearr_49560;
})();
if(cljs.core.truth_(inst_49482)){
var statearr_49562_50587 = state_49553__$1;
(statearr_49562_50587[(1)] = (5));

} else {
var statearr_49563_50589 = state_49553__$1;
(statearr_49563_50589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (15))){
var state_49553__$1 = state_49553;
var statearr_49571_50590 = state_49553__$1;
(statearr_49571_50590[(2)] = null);

(statearr_49571_50590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (21))){
var state_49553__$1 = state_49553;
var statearr_49572_50591 = state_49553__$1;
(statearr_49572_50591[(2)] = null);

(statearr_49572_50591[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (13))){
var inst_49494 = (state_49553[(8)]);
var inst_49495 = (state_49553[(9)]);
var inst_49492 = (state_49553[(11)]);
var inst_49493 = (state_49553[(12)]);
var inst_49502 = (state_49553[(2)]);
var inst_49503 = (inst_49495 + (1));
var tmp49564 = inst_49494;
var tmp49565 = inst_49492;
var tmp49566 = inst_49493;
var inst_49492__$1 = tmp49565;
var inst_49493__$1 = tmp49566;
var inst_49494__$1 = tmp49564;
var inst_49495__$1 = inst_49503;
var state_49553__$1 = (function (){var statearr_49574 = state_49553;
(statearr_49574[(8)] = inst_49494__$1);

(statearr_49574[(14)] = inst_49502);

(statearr_49574[(9)] = inst_49495__$1);

(statearr_49574[(11)] = inst_49492__$1);

(statearr_49574[(12)] = inst_49493__$1);

return statearr_49574;
})();
var statearr_49579_50592 = state_49553__$1;
(statearr_49579_50592[(2)] = null);

(statearr_49579_50592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (22))){
var state_49553__$1 = state_49553;
var statearr_49583_50593 = state_49553__$1;
(statearr_49583_50593[(2)] = null);

(statearr_49583_50593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (6))){
var inst_49481 = (state_49553[(13)]);
var inst_49490 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49481) : f.call(null,inst_49481));
var inst_49491 = cljs.core.seq(inst_49490);
var inst_49492 = inst_49491;
var inst_49493 = null;
var inst_49494 = (0);
var inst_49495 = (0);
var state_49553__$1 = (function (){var statearr_49584 = state_49553;
(statearr_49584[(8)] = inst_49494);

(statearr_49584[(9)] = inst_49495);

(statearr_49584[(11)] = inst_49492);

(statearr_49584[(12)] = inst_49493);

return statearr_49584;
})();
var statearr_49585_50594 = state_49553__$1;
(statearr_49585_50594[(2)] = null);

(statearr_49585_50594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (17))){
var inst_49506 = (state_49553[(7)]);
var inst_49514 = cljs.core.chunk_first(inst_49506);
var inst_49515 = cljs.core.chunk_rest(inst_49506);
var inst_49516 = cljs.core.count(inst_49514);
var inst_49492 = inst_49515;
var inst_49493 = inst_49514;
var inst_49494 = inst_49516;
var inst_49495 = (0);
var state_49553__$1 = (function (){var statearr_49586 = state_49553;
(statearr_49586[(8)] = inst_49494);

(statearr_49586[(9)] = inst_49495);

(statearr_49586[(11)] = inst_49492);

(statearr_49586[(12)] = inst_49493);

return statearr_49586;
})();
var statearr_49587_50595 = state_49553__$1;
(statearr_49587_50595[(2)] = null);

(statearr_49587_50595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (3))){
var inst_49551 = (state_49553[(2)]);
var state_49553__$1 = state_49553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49553__$1,inst_49551);
} else {
if((state_val_49554 === (12))){
var inst_49539 = (state_49553[(2)]);
var state_49553__$1 = state_49553;
var statearr_49588_50596 = state_49553__$1;
(statearr_49588_50596[(2)] = inst_49539);

(statearr_49588_50596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (2))){
var state_49553__$1 = state_49553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49553__$1,(4),in$);
} else {
if((state_val_49554 === (23))){
var inst_49547 = (state_49553[(2)]);
var state_49553__$1 = state_49553;
var statearr_49595_50597 = state_49553__$1;
(statearr_49595_50597[(2)] = inst_49547);

(statearr_49595_50597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (19))){
var inst_49534 = (state_49553[(2)]);
var state_49553__$1 = state_49553;
var statearr_49626_50598 = state_49553__$1;
(statearr_49626_50598[(2)] = inst_49534);

(statearr_49626_50598[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (11))){
var inst_49506 = (state_49553[(7)]);
var inst_49492 = (state_49553[(11)]);
var inst_49506__$1 = cljs.core.seq(inst_49492);
var state_49553__$1 = (function (){var statearr_49631 = state_49553;
(statearr_49631[(7)] = inst_49506__$1);

return statearr_49631;
})();
if(inst_49506__$1){
var statearr_49632_50603 = state_49553__$1;
(statearr_49632_50603[(1)] = (14));

} else {
var statearr_49633_50604 = state_49553__$1;
(statearr_49633_50604[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (9))){
var inst_49541 = (state_49553[(2)]);
var inst_49542 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49553__$1 = (function (){var statearr_49636 = state_49553;
(statearr_49636[(15)] = inst_49541);

return statearr_49636;
})();
if(cljs.core.truth_(inst_49542)){
var statearr_49637_50605 = state_49553__$1;
(statearr_49637_50605[(1)] = (21));

} else {
var statearr_49638_50606 = state_49553__$1;
(statearr_49638_50606[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (5))){
var inst_49484 = cljs.core.async.close_BANG_(out);
var state_49553__$1 = state_49553;
var statearr_49640_50607 = state_49553__$1;
(statearr_49640_50607[(2)] = inst_49484);

(statearr_49640_50607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (14))){
var inst_49506 = (state_49553[(7)]);
var inst_49512 = cljs.core.chunked_seq_QMARK_(inst_49506);
var state_49553__$1 = state_49553;
if(inst_49512){
var statearr_49642_50608 = state_49553__$1;
(statearr_49642_50608[(1)] = (17));

} else {
var statearr_49643_50609 = state_49553__$1;
(statearr_49643_50609[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (16))){
var inst_49537 = (state_49553[(2)]);
var state_49553__$1 = state_49553;
var statearr_49644_50610 = state_49553__$1;
(statearr_49644_50610[(2)] = inst_49537);

(statearr_49644_50610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49554 === (10))){
var inst_49495 = (state_49553[(9)]);
var inst_49493 = (state_49553[(12)]);
var inst_49500 = cljs.core._nth(inst_49493,inst_49495);
var state_49553__$1 = state_49553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49553__$1,(13),out,inst_49500);
} else {
if((state_val_49554 === (18))){
var inst_49506 = (state_49553[(7)]);
var inst_49522 = cljs.core.first(inst_49506);
var state_49553__$1 = state_49553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49553__$1,(20),out,inst_49522);
} else {
if((state_val_49554 === (8))){
var inst_49494 = (state_49553[(8)]);
var inst_49495 = (state_49553[(9)]);
var inst_49497 = (inst_49495 < inst_49494);
var inst_49498 = inst_49497;
var state_49553__$1 = state_49553;
if(cljs.core.truth_(inst_49498)){
var statearr_49645_50611 = state_49553__$1;
(statearr_49645_50611[(1)] = (10));

} else {
var statearr_49646_50612 = state_49553__$1;
(statearr_49646_50612[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____0 = (function (){
var statearr_49647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49647[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__);

(statearr_49647[(1)] = (1));

return statearr_49647;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____1 = (function (state_49553){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49553);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49648){var ex__47304__auto__ = e49648;
var statearr_49649_50613 = state_49553;
(statearr_49649_50613[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49553[(4)]))){
var statearr_49650_50614 = state_49553;
(statearr_49650_50614[(1)] = cljs.core.first((state_49553[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50618 = state_49553;
state_49553 = G__50618;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__ = function(state_49553){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____1.call(this,state_49553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47301__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49653 = f__47468__auto__();
(statearr_49653[(6)] = c__47467__auto__);

return statearr_49653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));

return c__47467__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49655 = arguments.length;
switch (G__49655) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49662 = arguments.length;
switch (G__49662) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49664 = arguments.length;
switch (G__49664) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47467__auto___50629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49688){
var state_val_49689 = (state_49688[(1)]);
if((state_val_49689 === (7))){
var inst_49683 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49690_50630 = state_49688__$1;
(statearr_49690_50630[(2)] = inst_49683);

(statearr_49690_50630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (1))){
var inst_49665 = null;
var state_49688__$1 = (function (){var statearr_49691 = state_49688;
(statearr_49691[(7)] = inst_49665);

return statearr_49691;
})();
var statearr_49692_50631 = state_49688__$1;
(statearr_49692_50631[(2)] = null);

(statearr_49692_50631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (4))){
var inst_49668 = (state_49688[(8)]);
var inst_49668__$1 = (state_49688[(2)]);
var inst_49669 = (inst_49668__$1 == null);
var inst_49670 = cljs.core.not(inst_49669);
var state_49688__$1 = (function (){var statearr_49697 = state_49688;
(statearr_49697[(8)] = inst_49668__$1);

return statearr_49697;
})();
if(inst_49670){
var statearr_49698_50632 = state_49688__$1;
(statearr_49698_50632[(1)] = (5));

} else {
var statearr_49700_50633 = state_49688__$1;
(statearr_49700_50633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (6))){
var state_49688__$1 = state_49688;
var statearr_49701_50634 = state_49688__$1;
(statearr_49701_50634[(2)] = null);

(statearr_49701_50634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (3))){
var inst_49685 = (state_49688[(2)]);
var inst_49686 = cljs.core.async.close_BANG_(out);
var state_49688__$1 = (function (){var statearr_49702 = state_49688;
(statearr_49702[(9)] = inst_49685);

return statearr_49702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49688__$1,inst_49686);
} else {
if((state_val_49689 === (2))){
var state_49688__$1 = state_49688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49688__$1,(4),ch);
} else {
if((state_val_49689 === (11))){
var inst_49668 = (state_49688[(8)]);
var inst_49677 = (state_49688[(2)]);
var inst_49665 = inst_49668;
var state_49688__$1 = (function (){var statearr_49704 = state_49688;
(statearr_49704[(10)] = inst_49677);

(statearr_49704[(7)] = inst_49665);

return statearr_49704;
})();
var statearr_49706_50638 = state_49688__$1;
(statearr_49706_50638[(2)] = null);

(statearr_49706_50638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (9))){
var inst_49668 = (state_49688[(8)]);
var state_49688__$1 = state_49688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49688__$1,(11),out,inst_49668);
} else {
if((state_val_49689 === (5))){
var inst_49668 = (state_49688[(8)]);
var inst_49665 = (state_49688[(7)]);
var inst_49672 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49668,inst_49665);
var state_49688__$1 = state_49688;
if(inst_49672){
var statearr_49708_50639 = state_49688__$1;
(statearr_49708_50639[(1)] = (8));

} else {
var statearr_49709_50640 = state_49688__$1;
(statearr_49709_50640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (10))){
var inst_49680 = (state_49688[(2)]);
var state_49688__$1 = state_49688;
var statearr_49710_50641 = state_49688__$1;
(statearr_49710_50641[(2)] = inst_49680);

(statearr_49710_50641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49689 === (8))){
var inst_49665 = (state_49688[(7)]);
var tmp49707 = inst_49665;
var inst_49665__$1 = tmp49707;
var state_49688__$1 = (function (){var statearr_49711 = state_49688;
(statearr_49711[(7)] = inst_49665__$1);

return statearr_49711;
})();
var statearr_49712_50642 = state_49688__$1;
(statearr_49712_50642[(2)] = null);

(statearr_49712_50642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_49715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49715[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_49715[(1)] = (1));

return statearr_49715;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_49688){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49688);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49716){var ex__47304__auto__ = e49716;
var statearr_49717_50647 = state_49688;
(statearr_49717_50647[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49688[(4)]))){
var statearr_49721_50648 = state_49688;
(statearr_49721_50648[(1)] = cljs.core.first((state_49688[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50651 = state_49688;
state_49688 = G__50651;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_49688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_49688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49722 = f__47468__auto__();
(statearr_49722[(6)] = c__47467__auto___50629);

return statearr_49722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49724 = arguments.length;
switch (G__49724) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47467__auto___50655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49762){
var state_val_49764 = (state_49762[(1)]);
if((state_val_49764 === (7))){
var inst_49758 = (state_49762[(2)]);
var state_49762__$1 = state_49762;
var statearr_49768_50656 = state_49762__$1;
(statearr_49768_50656[(2)] = inst_49758);

(statearr_49768_50656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (1))){
var inst_49725 = (new Array(n));
var inst_49726 = inst_49725;
var inst_49727 = (0);
var state_49762__$1 = (function (){var statearr_49769 = state_49762;
(statearr_49769[(7)] = inst_49727);

(statearr_49769[(8)] = inst_49726);

return statearr_49769;
})();
var statearr_49770_50657 = state_49762__$1;
(statearr_49770_50657[(2)] = null);

(statearr_49770_50657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (4))){
var inst_49730 = (state_49762[(9)]);
var inst_49730__$1 = (state_49762[(2)]);
var inst_49731 = (inst_49730__$1 == null);
var inst_49732 = cljs.core.not(inst_49731);
var state_49762__$1 = (function (){var statearr_49775 = state_49762;
(statearr_49775[(9)] = inst_49730__$1);

return statearr_49775;
})();
if(inst_49732){
var statearr_49776_50658 = state_49762__$1;
(statearr_49776_50658[(1)] = (5));

} else {
var statearr_49777_50659 = state_49762__$1;
(statearr_49777_50659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (15))){
var inst_49752 = (state_49762[(2)]);
var state_49762__$1 = state_49762;
var statearr_49778_50660 = state_49762__$1;
(statearr_49778_50660[(2)] = inst_49752);

(statearr_49778_50660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (13))){
var state_49762__$1 = state_49762;
var statearr_49779_50661 = state_49762__$1;
(statearr_49779_50661[(2)] = null);

(statearr_49779_50661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (6))){
var inst_49727 = (state_49762[(7)]);
var inst_49748 = (inst_49727 > (0));
var state_49762__$1 = state_49762;
if(cljs.core.truth_(inst_49748)){
var statearr_49780_50665 = state_49762__$1;
(statearr_49780_50665[(1)] = (12));

} else {
var statearr_49781_50666 = state_49762__$1;
(statearr_49781_50666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (3))){
var inst_49760 = (state_49762[(2)]);
var state_49762__$1 = state_49762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49762__$1,inst_49760);
} else {
if((state_val_49764 === (12))){
var inst_49726 = (state_49762[(8)]);
var inst_49750 = cljs.core.vec(inst_49726);
var state_49762__$1 = state_49762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49762__$1,(15),out,inst_49750);
} else {
if((state_val_49764 === (2))){
var state_49762__$1 = state_49762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49762__$1,(4),ch);
} else {
if((state_val_49764 === (11))){
var inst_49742 = (state_49762[(2)]);
var inst_49743 = (new Array(n));
var inst_49726 = inst_49743;
var inst_49727 = (0);
var state_49762__$1 = (function (){var statearr_49782 = state_49762;
(statearr_49782[(7)] = inst_49727);

(statearr_49782[(10)] = inst_49742);

(statearr_49782[(8)] = inst_49726);

return statearr_49782;
})();
var statearr_49783_50667 = state_49762__$1;
(statearr_49783_50667[(2)] = null);

(statearr_49783_50667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (9))){
var inst_49726 = (state_49762[(8)]);
var inst_49740 = cljs.core.vec(inst_49726);
var state_49762__$1 = state_49762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49762__$1,(11),out,inst_49740);
} else {
if((state_val_49764 === (5))){
var inst_49735 = (state_49762[(11)]);
var inst_49727 = (state_49762[(7)]);
var inst_49730 = (state_49762[(9)]);
var inst_49726 = (state_49762[(8)]);
var inst_49734 = (inst_49726[inst_49727] = inst_49730);
var inst_49735__$1 = (inst_49727 + (1));
var inst_49736 = (inst_49735__$1 < n);
var state_49762__$1 = (function (){var statearr_49784 = state_49762;
(statearr_49784[(11)] = inst_49735__$1);

(statearr_49784[(12)] = inst_49734);

return statearr_49784;
})();
if(cljs.core.truth_(inst_49736)){
var statearr_49785_50672 = state_49762__$1;
(statearr_49785_50672[(1)] = (8));

} else {
var statearr_49786_50673 = state_49762__$1;
(statearr_49786_50673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (14))){
var inst_49755 = (state_49762[(2)]);
var inst_49756 = cljs.core.async.close_BANG_(out);
var state_49762__$1 = (function (){var statearr_49788 = state_49762;
(statearr_49788[(13)] = inst_49755);

return statearr_49788;
})();
var statearr_49789_50674 = state_49762__$1;
(statearr_49789_50674[(2)] = inst_49756);

(statearr_49789_50674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (10))){
var inst_49746 = (state_49762[(2)]);
var state_49762__$1 = state_49762;
var statearr_49790_50675 = state_49762__$1;
(statearr_49790_50675[(2)] = inst_49746);

(statearr_49790_50675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49764 === (8))){
var inst_49735 = (state_49762[(11)]);
var inst_49726 = (state_49762[(8)]);
var tmp49787 = inst_49726;
var inst_49726__$1 = tmp49787;
var inst_49727 = inst_49735;
var state_49762__$1 = (function (){var statearr_49791 = state_49762;
(statearr_49791[(7)] = inst_49727);

(statearr_49791[(8)] = inst_49726__$1);

return statearr_49791;
})();
var statearr_49792_50676 = state_49762__$1;
(statearr_49792_50676[(2)] = null);

(statearr_49792_50676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_49795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49795[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_49795[(1)] = (1));

return statearr_49795;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_49762){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49762);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49796){var ex__47304__auto__ = e49796;
var statearr_49797_50683 = state_49762;
(statearr_49797_50683[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49762[(4)]))){
var statearr_49798_50684 = state_49762;
(statearr_49798_50684[(1)] = cljs.core.first((state_49762[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50685 = state_49762;
state_49762 = G__50685;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_49762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_49762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49799 = f__47468__auto__();
(statearr_49799[(6)] = c__47467__auto___50655);

return statearr_49799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49804 = arguments.length;
switch (G__49804) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47467__auto___50687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47468__auto__ = (function (){var switch__47300__auto__ = (function (state_49850){
var state_val_49851 = (state_49850[(1)]);
if((state_val_49851 === (7))){
var inst_49845 = (state_49850[(2)]);
var state_49850__$1 = state_49850;
var statearr_49855_50688 = state_49850__$1;
(statearr_49855_50688[(2)] = inst_49845);

(statearr_49855_50688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (1))){
var inst_49805 = [];
var inst_49806 = inst_49805;
var inst_49807 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49850__$1 = (function (){var statearr_49856 = state_49850;
(statearr_49856[(7)] = inst_49806);

(statearr_49856[(8)] = inst_49807);

return statearr_49856;
})();
var statearr_49857_50689 = state_49850__$1;
(statearr_49857_50689[(2)] = null);

(statearr_49857_50689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (4))){
var inst_49810 = (state_49850[(9)]);
var inst_49810__$1 = (state_49850[(2)]);
var inst_49811 = (inst_49810__$1 == null);
var inst_49812 = cljs.core.not(inst_49811);
var state_49850__$1 = (function (){var statearr_49858 = state_49850;
(statearr_49858[(9)] = inst_49810__$1);

return statearr_49858;
})();
if(inst_49812){
var statearr_49859_50690 = state_49850__$1;
(statearr_49859_50690[(1)] = (5));

} else {
var statearr_49860_50691 = state_49850__$1;
(statearr_49860_50691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (15))){
var inst_49806 = (state_49850[(7)]);
var inst_49837 = cljs.core.vec(inst_49806);
var state_49850__$1 = state_49850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49850__$1,(18),out,inst_49837);
} else {
if((state_val_49851 === (13))){
var inst_49832 = (state_49850[(2)]);
var state_49850__$1 = state_49850;
var statearr_49861_50692 = state_49850__$1;
(statearr_49861_50692[(2)] = inst_49832);

(statearr_49861_50692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (6))){
var inst_49806 = (state_49850[(7)]);
var inst_49834 = inst_49806.length;
var inst_49835 = (inst_49834 > (0));
var state_49850__$1 = state_49850;
if(cljs.core.truth_(inst_49835)){
var statearr_49862_50693 = state_49850__$1;
(statearr_49862_50693[(1)] = (15));

} else {
var statearr_49863_50694 = state_49850__$1;
(statearr_49863_50694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (17))){
var inst_49842 = (state_49850[(2)]);
var inst_49843 = cljs.core.async.close_BANG_(out);
var state_49850__$1 = (function (){var statearr_49868 = state_49850;
(statearr_49868[(10)] = inst_49842);

return statearr_49868;
})();
var statearr_49869_50695 = state_49850__$1;
(statearr_49869_50695[(2)] = inst_49843);

(statearr_49869_50695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (3))){
var inst_49847 = (state_49850[(2)]);
var state_49850__$1 = state_49850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49850__$1,inst_49847);
} else {
if((state_val_49851 === (12))){
var inst_49806 = (state_49850[(7)]);
var inst_49825 = cljs.core.vec(inst_49806);
var state_49850__$1 = state_49850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49850__$1,(14),out,inst_49825);
} else {
if((state_val_49851 === (2))){
var state_49850__$1 = state_49850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49850__$1,(4),ch);
} else {
if((state_val_49851 === (11))){
var inst_49810 = (state_49850[(9)]);
var inst_49814 = (state_49850[(11)]);
var inst_49806 = (state_49850[(7)]);
var inst_49822 = inst_49806.push(inst_49810);
var tmp49870 = inst_49806;
var inst_49806__$1 = tmp49870;
var inst_49807 = inst_49814;
var state_49850__$1 = (function (){var statearr_49871 = state_49850;
(statearr_49871[(7)] = inst_49806__$1);

(statearr_49871[(12)] = inst_49822);

(statearr_49871[(8)] = inst_49807);

return statearr_49871;
})();
var statearr_49872_50697 = state_49850__$1;
(statearr_49872_50697[(2)] = null);

(statearr_49872_50697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (9))){
var inst_49807 = (state_49850[(8)]);
var inst_49818 = cljs.core.keyword_identical_QMARK_(inst_49807,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49850__$1 = state_49850;
var statearr_49873_50698 = state_49850__$1;
(statearr_49873_50698[(2)] = inst_49818);

(statearr_49873_50698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (5))){
var inst_49810 = (state_49850[(9)]);
var inst_49814 = (state_49850[(11)]);
var inst_49807 = (state_49850[(8)]);
var inst_49815 = (state_49850[(13)]);
var inst_49814__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49810) : f.call(null,inst_49810));
var inst_49815__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49814__$1,inst_49807);
var state_49850__$1 = (function (){var statearr_49874 = state_49850;
(statearr_49874[(11)] = inst_49814__$1);

(statearr_49874[(13)] = inst_49815__$1);

return statearr_49874;
})();
if(inst_49815__$1){
var statearr_49875_50699 = state_49850__$1;
(statearr_49875_50699[(1)] = (8));

} else {
var statearr_49876_50700 = state_49850__$1;
(statearr_49876_50700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (14))){
var inst_49810 = (state_49850[(9)]);
var inst_49814 = (state_49850[(11)]);
var inst_49827 = (state_49850[(2)]);
var inst_49828 = [];
var inst_49829 = inst_49828.push(inst_49810);
var inst_49806 = inst_49828;
var inst_49807 = inst_49814;
var state_49850__$1 = (function (){var statearr_49877 = state_49850;
(statearr_49877[(7)] = inst_49806);

(statearr_49877[(8)] = inst_49807);

(statearr_49877[(14)] = inst_49827);

(statearr_49877[(15)] = inst_49829);

return statearr_49877;
})();
var statearr_49878_50701 = state_49850__$1;
(statearr_49878_50701[(2)] = null);

(statearr_49878_50701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (16))){
var state_49850__$1 = state_49850;
var statearr_49879_50708 = state_49850__$1;
(statearr_49879_50708[(2)] = null);

(statearr_49879_50708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (10))){
var inst_49820 = (state_49850[(2)]);
var state_49850__$1 = state_49850;
if(cljs.core.truth_(inst_49820)){
var statearr_49880_50709 = state_49850__$1;
(statearr_49880_50709[(1)] = (11));

} else {
var statearr_49881_50710 = state_49850__$1;
(statearr_49881_50710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (18))){
var inst_49839 = (state_49850[(2)]);
var state_49850__$1 = state_49850;
var statearr_49882_50711 = state_49850__$1;
(statearr_49882_50711[(2)] = inst_49839);

(statearr_49882_50711[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49851 === (8))){
var inst_49815 = (state_49850[(13)]);
var state_49850__$1 = state_49850;
var statearr_49883_50712 = state_49850__$1;
(statearr_49883_50712[(2)] = inst_49815);

(statearr_49883_50712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47301__auto__ = null;
var cljs$core$async$state_machine__47301__auto____0 = (function (){
var statearr_49898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49898[(0)] = cljs$core$async$state_machine__47301__auto__);

(statearr_49898[(1)] = (1));

return statearr_49898;
});
var cljs$core$async$state_machine__47301__auto____1 = (function (state_49850){
while(true){
var ret_value__47302__auto__ = (function (){try{while(true){
var result__47303__auto__ = switch__47300__auto__(state_49850);
if(cljs.core.keyword_identical_QMARK_(result__47303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47303__auto__;
}
break;
}
}catch (e49899){var ex__47304__auto__ = e49899;
var statearr_49900_50713 = state_49850;
(statearr_49900_50713[(2)] = ex__47304__auto__);


if(cljs.core.seq((state_49850[(4)]))){
var statearr_49901_50714 = state_49850;
(statearr_49901_50714[(1)] = cljs.core.first((state_49850[(4)])));

} else {
throw ex__47304__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50715 = state_49850;
state_49850 = G__50715;
continue;
} else {
return ret_value__47302__auto__;
}
break;
}
});
cljs$core$async$state_machine__47301__auto__ = function(state_49850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47301__auto____1.call(this,state_49850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47301__auto____0;
cljs$core$async$state_machine__47301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47301__auto____1;
return cljs$core$async$state_machine__47301__auto__;
})()
})();
var state__47469__auto__ = (function (){var statearr_49908 = f__47468__auto__();
(statearr_49908[(6)] = c__47467__auto___50687);

return statearr_49908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47469__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

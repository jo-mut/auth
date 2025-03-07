goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15260 = (function (f,blockable,meta15261){
this.f = f;
this.blockable = blockable;
this.meta15261 = meta15261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15262,meta15261__$1){
var self__ = this;
var _15262__$1 = this;
return (new cljs.core.async.t_cljs$core$async15260(self__.f,self__.blockable,meta15261__$1));
}));

(cljs.core.async.t_cljs$core$async15260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15262){
var self__ = this;
var _15262__$1 = this;
return self__.meta15261;
}));

(cljs.core.async.t_cljs$core$async15260.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15261","meta15261",-390308642,null)], null);
}));

(cljs.core.async.t_cljs$core$async15260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15260");

(cljs.core.async.t_cljs$core$async15260.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15260.
 */
cljs.core.async.__GT_t_cljs$core$async15260 = (function cljs$core$async$__GT_t_cljs$core$async15260(f,blockable,meta15261){
return (new cljs.core.async.t_cljs$core$async15260(f,blockable,meta15261));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15256 = arguments.length;
switch (G__15256) {
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
return (new cljs.core.async.t_cljs$core$async15260(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15273 = arguments.length;
switch (G__15273) {
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
var G__15283 = arguments.length;
switch (G__15283) {
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
var G__15297 = arguments.length;
switch (G__15297) {
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
var val_18490 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18490) : fn1.call(null, val_18490));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18490) : fn1.call(null, val_18490));
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
var G__15306 = arguments.length;
switch (G__15306) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
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
var n__5593__auto___18493 = n;
var x_18494 = (0);
while(true){
if((x_18494 < n__5593__auto___18493)){
(a[x_18494] = x_18494);

var G__18495 = (x_18494 + (1));
x_18494 = G__18495;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15315 = (function (flag,meta15316){
this.flag = flag;
this.meta15316 = meta15316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15317,meta15316__$1){
var self__ = this;
var _15317__$1 = this;
return (new cljs.core.async.t_cljs$core$async15315(self__.flag,meta15316__$1));
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15317){
var self__ = this;
var _15317__$1 = this;
return self__.meta15316;
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15316","meta15316",832340698,null)], null);
}));

(cljs.core.async.t_cljs$core$async15315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15315");

(cljs.core.async.t_cljs$core$async15315.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15315.
 */
cljs.core.async.__GT_t_cljs$core$async15315 = (function cljs$core$async$__GT_t_cljs$core$async15315(flag,meta15316){
return (new cljs.core.async.t_cljs$core$async15315(flag,meta15316));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15315(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15331 = (function (flag,cb,meta15332){
this.flag = flag;
this.cb = cb;
this.meta15332 = meta15332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15333,meta15332__$1){
var self__ = this;
var _15333__$1 = this;
return (new cljs.core.async.t_cljs$core$async15331(self__.flag,self__.cb,meta15332__$1));
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15333){
var self__ = this;
var _15333__$1 = this;
return self__.meta15332;
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15332","meta15332",-1494051550,null)], null);
}));

(cljs.core.async.t_cljs$core$async15331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15331");

(cljs.core.async.t_cljs$core$async15331.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15331.
 */
cljs.core.async.__GT_t_cljs$core$async15331 = (function cljs$core$async$__GT_t_cljs$core$async15331(flag,cb,meta15332){
return (new cljs.core.async.t_cljs$core$async15331(flag,cb,meta15332));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15331(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15337_SHARP_){
var G__15346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15337_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15346) : fret.call(null, G__15346));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15339_SHARP_){
var G__15347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15339_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15347) : fret.call(null, G__15347));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18498 = (i + (1));
i = G__18498;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___18502 = arguments.length;
var i__5727__auto___18503 = (0);
while(true){
if((i__5727__auto___18503 < len__5726__auto___18502)){
args__5732__auto__.push((arguments[i__5727__auto___18503]));

var G__18504 = (i__5727__auto___18503 + (1));
i__5727__auto___18503 = G__18504;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15361){
var map__15362 = p__15361;
var map__15362__$1 = cljs.core.__destructure_map(map__15362);
var opts = map__15362__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15357){
var G__15358 = cljs.core.first(seq15357);
var seq15357__$1 = cljs.core.next(seq15357);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15358,seq15357__$1);
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
var G__15376 = arguments.length;
switch (G__15376) {
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
var c__15073__auto___18512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_15428){
var state_val_15429 = (state_15428[(1)]);
if((state_val_15429 === (7))){
var inst_15419 = (state_15428[(2)]);
var state_15428__$1 = state_15428;
var statearr_15436_18513 = state_15428__$1;
(statearr_15436_18513[(2)] = inst_15419);

(statearr_15436_18513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (1))){
var state_15428__$1 = state_15428;
var statearr_15438_18514 = state_15428__$1;
(statearr_15438_18514[(2)] = null);

(statearr_15438_18514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (4))){
var inst_15400 = (state_15428[(7)]);
var inst_15400__$1 = (state_15428[(2)]);
var inst_15401 = (inst_15400__$1 == null);
var state_15428__$1 = (function (){var statearr_15442 = state_15428;
(statearr_15442[(7)] = inst_15400__$1);

return statearr_15442;
})();
if(cljs.core.truth_(inst_15401)){
var statearr_15443_18515 = state_15428__$1;
(statearr_15443_18515[(1)] = (5));

} else {
var statearr_15444_18516 = state_15428__$1;
(statearr_15444_18516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (13))){
var state_15428__$1 = state_15428;
var statearr_15445_18517 = state_15428__$1;
(statearr_15445_18517[(2)] = null);

(statearr_15445_18517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (6))){
var inst_15400 = (state_15428[(7)]);
var state_15428__$1 = state_15428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15428__$1,(11),to,inst_15400);
} else {
if((state_val_15429 === (3))){
var inst_15421 = (state_15428[(2)]);
var state_15428__$1 = state_15428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15428__$1,inst_15421);
} else {
if((state_val_15429 === (12))){
var state_15428__$1 = state_15428;
var statearr_15451_18518 = state_15428__$1;
(statearr_15451_18518[(2)] = null);

(statearr_15451_18518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (2))){
var state_15428__$1 = state_15428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15428__$1,(4),from);
} else {
if((state_val_15429 === (11))){
var inst_15410 = (state_15428[(2)]);
var state_15428__$1 = state_15428;
if(cljs.core.truth_(inst_15410)){
var statearr_15452_18519 = state_15428__$1;
(statearr_15452_18519[(1)] = (12));

} else {
var statearr_15453_18520 = state_15428__$1;
(statearr_15453_18520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (9))){
var state_15428__$1 = state_15428;
var statearr_15455_18521 = state_15428__$1;
(statearr_15455_18521[(2)] = null);

(statearr_15455_18521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (5))){
var state_15428__$1 = state_15428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15457_18522 = state_15428__$1;
(statearr_15457_18522[(1)] = (8));

} else {
var statearr_15458_18523 = state_15428__$1;
(statearr_15458_18523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (14))){
var inst_15417 = (state_15428[(2)]);
var state_15428__$1 = state_15428;
var statearr_15459_18524 = state_15428__$1;
(statearr_15459_18524[(2)] = inst_15417);

(statearr_15459_18524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (10))){
var inst_15407 = (state_15428[(2)]);
var state_15428__$1 = state_15428;
var statearr_15460_18525 = state_15428__$1;
(statearr_15460_18525[(2)] = inst_15407);

(statearr_15460_18525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15429 === (8))){
var inst_15404 = cljs.core.async.close_BANG_(to);
var state_15428__$1 = state_15428;
var statearr_15461_18526 = state_15428__$1;
(statearr_15461_18526[(2)] = inst_15404);

(statearr_15461_18526[(1)] = (10));


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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_15466 = [null,null,null,null,null,null,null,null];
(statearr_15466[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_15466[(1)] = (1));

return statearr_15466;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_15428){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15428);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15471){var ex__14221__auto__ = e15471;
var statearr_15472_18527 = state_15428;
(statearr_15472_18527[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15428[(4)]))){
var statearr_15473_18528 = state_15428;
(statearr_15473_18528[(1)] = cljs.core.first((state_15428[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18529 = state_15428;
state_15428 = G__18529;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_15428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_15428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_15476 = f__15074__auto__();
(statearr_15476[(6)] = c__15073__auto___18512);

return statearr_15476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
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
var process__$1 = (function (p__15485){
var vec__15487 = p__15485;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15487,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15487,(1),null);
var job = vec__15487;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15073__auto___18530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_15495){
var state_val_15496 = (state_15495[(1)]);
if((state_val_15496 === (1))){
var state_15495__$1 = state_15495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15495__$1,(2),res,v);
} else {
if((state_val_15496 === (2))){
var inst_15491 = (state_15495[(2)]);
var inst_15492 = cljs.core.async.close_BANG_(res);
var state_15495__$1 = (function (){var statearr_15500 = state_15495;
(statearr_15500[(7)] = inst_15491);

return statearr_15500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15495__$1,inst_15492);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0 = (function (){
var statearr_15502 = [null,null,null,null,null,null,null,null];
(statearr_15502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__);

(statearr_15502[(1)] = (1));

return statearr_15502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1 = (function (state_15495){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15495);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15503){var ex__14221__auto__ = e15503;
var statearr_15505_18531 = state_15495;
(statearr_15505_18531[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15495[(4)]))){
var statearr_15506_18532 = state_15495;
(statearr_15506_18532[(1)] = cljs.core.first((state_15495[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18533 = state_15495;
state_15495 = G__18533;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = function(state_15495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1.call(this,state_15495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_15508 = f__15074__auto__();
(statearr_15508[(6)] = c__15073__auto___18530);

return statearr_15508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15512){
var vec__15515 = p__15512;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15515,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15515,(1),null);
var job = vec__15515;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18534 = n;
var __18535 = (0);
while(true){
if((__18535 < n__5593__auto___18534)){
var G__15519_18536 = type;
var G__15519_18537__$1 = (((G__15519_18536 instanceof cljs.core.Keyword))?G__15519_18536.fqn:null);
switch (G__15519_18537__$1) {
case "compute":
var c__15073__auto___18539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18535,c__15073__auto___18539,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async){
return (function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = ((function (__18535,c__15073__auto___18539,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async){
return (function (state_15535){
var state_val_15536 = (state_15535[(1)]);
if((state_val_15536 === (1))){
var state_15535__$1 = state_15535;
var statearr_15538_18540 = state_15535__$1;
(statearr_15538_18540[(2)] = null);

(statearr_15538_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (2))){
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15535__$1,(4),jobs);
} else {
if((state_val_15536 === (3))){
var inst_15533 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15535__$1,inst_15533);
} else {
if((state_val_15536 === (4))){
var inst_15525 = (state_15535[(2)]);
var inst_15526 = process__$1(inst_15525);
var state_15535__$1 = state_15535;
if(cljs.core.truth_(inst_15526)){
var statearr_15539_18545 = state_15535__$1;
(statearr_15539_18545[(1)] = (5));

} else {
var statearr_15540_18546 = state_15535__$1;
(statearr_15540_18546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (5))){
var state_15535__$1 = state_15535;
var statearr_15541_18547 = state_15535__$1;
(statearr_15541_18547[(2)] = null);

(statearr_15541_18547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (6))){
var state_15535__$1 = state_15535;
var statearr_15542_18548 = state_15535__$1;
(statearr_15542_18548[(2)] = null);

(statearr_15542_18548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (7))){
var inst_15531 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
var statearr_15543_18549 = state_15535__$1;
(statearr_15543_18549[(2)] = inst_15531);

(statearr_15543_18549[(1)] = (3));


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
});})(__18535,c__15073__auto___18539,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async))
;
return ((function (__18535,switch__14217__auto__,c__15073__auto___18539,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0 = (function (){
var statearr_15547 = [null,null,null,null,null,null,null];
(statearr_15547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__);

(statearr_15547[(1)] = (1));

return statearr_15547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1 = (function (state_15535){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15535);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15550){var ex__14221__auto__ = e15550;
var statearr_15551_18550 = state_15535;
(statearr_15551_18550[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15535[(4)]))){
var statearr_15552_18552 = state_15535;
(statearr_15552_18552[(1)] = cljs.core.first((state_15535[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18556 = state_15535;
state_15535 = G__18556;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = function(state_15535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1.call(this,state_15535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__;
})()
;})(__18535,switch__14217__auto__,c__15073__auto___18539,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async))
})();
var state__15075__auto__ = (function (){var statearr_15553 = f__15074__auto__();
(statearr_15553[(6)] = c__15073__auto___18539);

return statearr_15553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
});})(__18535,c__15073__auto___18539,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async))
);


break;
case "async":
var c__15073__auto___18558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18535,c__15073__auto___18558,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async){
return (function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = ((function (__18535,c__15073__auto___18558,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async){
return (function (state_15570){
var state_val_15571 = (state_15570[(1)]);
if((state_val_15571 === (1))){
var state_15570__$1 = state_15570;
var statearr_15574_18562 = state_15570__$1;
(statearr_15574_18562[(2)] = null);

(statearr_15574_18562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (2))){
var state_15570__$1 = state_15570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15570__$1,(4),jobs);
} else {
if((state_val_15571 === (3))){
var inst_15568 = (state_15570[(2)]);
var state_15570__$1 = state_15570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15570__$1,inst_15568);
} else {
if((state_val_15571 === (4))){
var inst_15558 = (state_15570[(2)]);
var inst_15561 = async(inst_15558);
var state_15570__$1 = state_15570;
if(cljs.core.truth_(inst_15561)){
var statearr_15575_18563 = state_15570__$1;
(statearr_15575_18563[(1)] = (5));

} else {
var statearr_15580_18567 = state_15570__$1;
(statearr_15580_18567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (5))){
var state_15570__$1 = state_15570;
var statearr_15581_18568 = state_15570__$1;
(statearr_15581_18568[(2)] = null);

(statearr_15581_18568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (6))){
var state_15570__$1 = state_15570;
var statearr_15583_18569 = state_15570__$1;
(statearr_15583_18569[(2)] = null);

(statearr_15583_18569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15571 === (7))){
var inst_15566 = (state_15570[(2)]);
var state_15570__$1 = state_15570;
var statearr_15586_18570 = state_15570__$1;
(statearr_15586_18570[(2)] = inst_15566);

(statearr_15586_18570[(1)] = (3));


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
});})(__18535,c__15073__auto___18558,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async))
;
return ((function (__18535,switch__14217__auto__,c__15073__auto___18558,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0 = (function (){
var statearr_15588 = [null,null,null,null,null,null,null];
(statearr_15588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__);

(statearr_15588[(1)] = (1));

return statearr_15588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1 = (function (state_15570){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15570);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15591){var ex__14221__auto__ = e15591;
var statearr_15593_18571 = state_15570;
(statearr_15593_18571[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15570[(4)]))){
var statearr_15595_18572 = state_15570;
(statearr_15595_18572[(1)] = cljs.core.first((state_15570[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18573 = state_15570;
state_15570 = G__18573;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = function(state_15570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1.call(this,state_15570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__;
})()
;})(__18535,switch__14217__auto__,c__15073__auto___18558,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async))
})();
var state__15075__auto__ = (function (){var statearr_15597 = f__15074__auto__();
(statearr_15597[(6)] = c__15073__auto___18558);

return statearr_15597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
});})(__18535,c__15073__auto___18558,G__15519_18536,G__15519_18537__$1,n__5593__auto___18534,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15519_18537__$1)].join('')));

}

var G__18574 = (__18535 + (1));
__18535 = G__18574;
continue;
} else {
}
break;
}

var c__15073__auto___18575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_15625){
var state_val_15626 = (state_15625[(1)]);
if((state_val_15626 === (7))){
var inst_15621 = (state_15625[(2)]);
var state_15625__$1 = state_15625;
var statearr_15628_18576 = state_15625__$1;
(statearr_15628_18576[(2)] = inst_15621);

(statearr_15628_18576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (1))){
var state_15625__$1 = state_15625;
var statearr_15629_18577 = state_15625__$1;
(statearr_15629_18577[(2)] = null);

(statearr_15629_18577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (4))){
var inst_15606 = (state_15625[(7)]);
var inst_15606__$1 = (state_15625[(2)]);
var inst_15607 = (inst_15606__$1 == null);
var state_15625__$1 = (function (){var statearr_15630 = state_15625;
(statearr_15630[(7)] = inst_15606__$1);

return statearr_15630;
})();
if(cljs.core.truth_(inst_15607)){
var statearr_15632_18578 = state_15625__$1;
(statearr_15632_18578[(1)] = (5));

} else {
var statearr_15633_18579 = state_15625__$1;
(statearr_15633_18579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (6))){
var inst_15606 = (state_15625[(7)]);
var inst_15611 = (state_15625[(8)]);
var inst_15611__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15613 = [inst_15606,inst_15611__$1];
var inst_15614 = (new cljs.core.PersistentVector(null,2,(5),inst_15612,inst_15613,null));
var state_15625__$1 = (function (){var statearr_15635 = state_15625;
(statearr_15635[(8)] = inst_15611__$1);

return statearr_15635;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15625__$1,(8),jobs,inst_15614);
} else {
if((state_val_15626 === (3))){
var inst_15623 = (state_15625[(2)]);
var state_15625__$1 = state_15625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15625__$1,inst_15623);
} else {
if((state_val_15626 === (2))){
var state_15625__$1 = state_15625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15625__$1,(4),from);
} else {
if((state_val_15626 === (9))){
var inst_15618 = (state_15625[(2)]);
var state_15625__$1 = (function (){var statearr_15637 = state_15625;
(statearr_15637[(9)] = inst_15618);

return statearr_15637;
})();
var statearr_15638_18581 = state_15625__$1;
(statearr_15638_18581[(2)] = null);

(statearr_15638_18581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (5))){
var inst_15609 = cljs.core.async.close_BANG_(jobs);
var state_15625__$1 = state_15625;
var statearr_15640_18582 = state_15625__$1;
(statearr_15640_18582[(2)] = inst_15609);

(statearr_15640_18582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (8))){
var inst_15611 = (state_15625[(8)]);
var inst_15616 = (state_15625[(2)]);
var state_15625__$1 = (function (){var statearr_15646 = state_15625;
(statearr_15646[(10)] = inst_15616);

return statearr_15646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15625__$1,(9),results,inst_15611);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0 = (function (){
var statearr_15647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__);

(statearr_15647[(1)] = (1));

return statearr_15647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1 = (function (state_15625){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15625);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15648){var ex__14221__auto__ = e15648;
var statearr_15652_18583 = state_15625;
(statearr_15652_18583[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15625[(4)]))){
var statearr_15653_18584 = state_15625;
(statearr_15653_18584[(1)] = cljs.core.first((state_15625[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18587 = state_15625;
state_15625 = G__18587;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = function(state_15625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1.call(this,state_15625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_15655 = f__15074__auto__();
(statearr_15655[(6)] = c__15073__auto___18575);

return statearr_15655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));


var c__15073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_15696){
var state_val_15697 = (state_15696[(1)]);
if((state_val_15697 === (7))){
var inst_15692 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15698_18591 = state_15696__$1;
(statearr_15698_18591[(2)] = inst_15692);

(statearr_15698_18591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (20))){
var state_15696__$1 = state_15696;
var statearr_15699_18592 = state_15696__$1;
(statearr_15699_18592[(2)] = null);

(statearr_15699_18592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (1))){
var state_15696__$1 = state_15696;
var statearr_15704_18593 = state_15696__$1;
(statearr_15704_18593[(2)] = null);

(statearr_15704_18593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (4))){
var inst_15658 = (state_15696[(7)]);
var inst_15658__$1 = (state_15696[(2)]);
var inst_15659 = (inst_15658__$1 == null);
var state_15696__$1 = (function (){var statearr_15706 = state_15696;
(statearr_15706[(7)] = inst_15658__$1);

return statearr_15706;
})();
if(cljs.core.truth_(inst_15659)){
var statearr_15707_18595 = state_15696__$1;
(statearr_15707_18595[(1)] = (5));

} else {
var statearr_15708_18599 = state_15696__$1;
(statearr_15708_18599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (15))){
var inst_15672 = (state_15696[(8)]);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15696__$1,(18),to,inst_15672);
} else {
if((state_val_15697 === (21))){
var inst_15687 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15712_18600 = state_15696__$1;
(statearr_15712_18600[(2)] = inst_15687);

(statearr_15712_18600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (13))){
var inst_15689 = (state_15696[(2)]);
var state_15696__$1 = (function (){var statearr_15713 = state_15696;
(statearr_15713[(9)] = inst_15689);

return statearr_15713;
})();
var statearr_15714_18602 = state_15696__$1;
(statearr_15714_18602[(2)] = null);

(statearr_15714_18602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (6))){
var inst_15658 = (state_15696[(7)]);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15696__$1,(11),inst_15658);
} else {
if((state_val_15697 === (17))){
var inst_15682 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
if(cljs.core.truth_(inst_15682)){
var statearr_15721_18603 = state_15696__$1;
(statearr_15721_18603[(1)] = (19));

} else {
var statearr_15722_18604 = state_15696__$1;
(statearr_15722_18604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (3))){
var inst_15694 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15696__$1,inst_15694);
} else {
if((state_val_15697 === (12))){
var inst_15668 = (state_15696[(10)]);
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15696__$1,(14),inst_15668);
} else {
if((state_val_15697 === (2))){
var state_15696__$1 = state_15696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15696__$1,(4),results);
} else {
if((state_val_15697 === (19))){
var state_15696__$1 = state_15696;
var statearr_15728_18605 = state_15696__$1;
(statearr_15728_18605[(2)] = null);

(statearr_15728_18605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (11))){
var inst_15668 = (state_15696[(2)]);
var state_15696__$1 = (function (){var statearr_15729 = state_15696;
(statearr_15729[(10)] = inst_15668);

return statearr_15729;
})();
var statearr_15730_18606 = state_15696__$1;
(statearr_15730_18606[(2)] = null);

(statearr_15730_18606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (9))){
var state_15696__$1 = state_15696;
var statearr_15731_18607 = state_15696__$1;
(statearr_15731_18607[(2)] = null);

(statearr_15731_18607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (5))){
var state_15696__$1 = state_15696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15732_18608 = state_15696__$1;
(statearr_15732_18608[(1)] = (8));

} else {
var statearr_15733_18609 = state_15696__$1;
(statearr_15733_18609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (14))){
var inst_15675 = (state_15696[(11)]);
var inst_15672 = (state_15696[(8)]);
var inst_15672__$1 = (state_15696[(2)]);
var inst_15674 = (inst_15672__$1 == null);
var inst_15675__$1 = cljs.core.not(inst_15674);
var state_15696__$1 = (function (){var statearr_15734 = state_15696;
(statearr_15734[(11)] = inst_15675__$1);

(statearr_15734[(8)] = inst_15672__$1);

return statearr_15734;
})();
if(inst_15675__$1){
var statearr_15737_18610 = state_15696__$1;
(statearr_15737_18610[(1)] = (15));

} else {
var statearr_15738_18611 = state_15696__$1;
(statearr_15738_18611[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (16))){
var inst_15675 = (state_15696[(11)]);
var state_15696__$1 = state_15696;
var statearr_15739_18616 = state_15696__$1;
(statearr_15739_18616[(2)] = inst_15675);

(statearr_15739_18616[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (10))){
var inst_15665 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15740_18617 = state_15696__$1;
(statearr_15740_18617[(2)] = inst_15665);

(statearr_15740_18617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (18))){
var inst_15679 = (state_15696[(2)]);
var state_15696__$1 = state_15696;
var statearr_15742_18618 = state_15696__$1;
(statearr_15742_18618[(2)] = inst_15679);

(statearr_15742_18618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15697 === (8))){
var inst_15662 = cljs.core.async.close_BANG_(to);
var state_15696__$1 = state_15696;
var statearr_15744_18619 = state_15696__$1;
(statearr_15744_18619[(2)] = inst_15662);

(statearr_15744_18619[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0 = (function (){
var statearr_15745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__);

(statearr_15745[(1)] = (1));

return statearr_15745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1 = (function (state_15696){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15696);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15746){var ex__14221__auto__ = e15746;
var statearr_15747_18621 = state_15696;
(statearr_15747_18621[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15696[(4)]))){
var statearr_15748_18622 = state_15696;
(statearr_15748_18622[(1)] = cljs.core.first((state_15696[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18623 = state_15696;
state_15696 = G__18623;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__ = function(state_15696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1.call(this,state_15696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_15749 = f__15074__auto__();
(statearr_15749[(6)] = c__15073__auto__);

return statearr_15749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));

return c__15073__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15755 = arguments.length;
switch (G__15755) {
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
var G__15758 = arguments.length;
switch (G__15758) {
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
var G__15772 = arguments.length;
switch (G__15772) {
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
var c__15073__auto___18635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_15803){
var state_val_15804 = (state_15803[(1)]);
if((state_val_15804 === (7))){
var inst_15799 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15807_18637 = state_15803__$1;
(statearr_15807_18637[(2)] = inst_15799);

(statearr_15807_18637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (1))){
var state_15803__$1 = state_15803;
var statearr_15809_18639 = state_15803__$1;
(statearr_15809_18639[(2)] = null);

(statearr_15809_18639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (4))){
var inst_15780 = (state_15803[(7)]);
var inst_15780__$1 = (state_15803[(2)]);
var inst_15781 = (inst_15780__$1 == null);
var state_15803__$1 = (function (){var statearr_15811 = state_15803;
(statearr_15811[(7)] = inst_15780__$1);

return statearr_15811;
})();
if(cljs.core.truth_(inst_15781)){
var statearr_15812_18644 = state_15803__$1;
(statearr_15812_18644[(1)] = (5));

} else {
var statearr_15814_18645 = state_15803__$1;
(statearr_15814_18645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (13))){
var state_15803__$1 = state_15803;
var statearr_15821_18647 = state_15803__$1;
(statearr_15821_18647[(2)] = null);

(statearr_15821_18647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (6))){
var inst_15780 = (state_15803[(7)]);
var inst_15786 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15780) : p.call(null, inst_15780));
var state_15803__$1 = state_15803;
if(cljs.core.truth_(inst_15786)){
var statearr_15822_18649 = state_15803__$1;
(statearr_15822_18649[(1)] = (9));

} else {
var statearr_15824_18650 = state_15803__$1;
(statearr_15824_18650[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (3))){
var inst_15801 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15803__$1,inst_15801);
} else {
if((state_val_15804 === (12))){
var state_15803__$1 = state_15803;
var statearr_15826_18652 = state_15803__$1;
(statearr_15826_18652[(2)] = null);

(statearr_15826_18652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (2))){
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15803__$1,(4),ch);
} else {
if((state_val_15804 === (11))){
var inst_15780 = (state_15803[(7)]);
var inst_15790 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15803__$1,(8),inst_15790,inst_15780);
} else {
if((state_val_15804 === (9))){
var state_15803__$1 = state_15803;
var statearr_15830_18653 = state_15803__$1;
(statearr_15830_18653[(2)] = tc);

(statearr_15830_18653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (5))){
var inst_15783 = cljs.core.async.close_BANG_(tc);
var inst_15784 = cljs.core.async.close_BANG_(fc);
var state_15803__$1 = (function (){var statearr_15832 = state_15803;
(statearr_15832[(8)] = inst_15783);

return statearr_15832;
})();
var statearr_15835_18654 = state_15803__$1;
(statearr_15835_18654[(2)] = inst_15784);

(statearr_15835_18654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (14))){
var inst_15797 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15836_18655 = state_15803__$1;
(statearr_15836_18655[(2)] = inst_15797);

(statearr_15836_18655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (10))){
var state_15803__$1 = state_15803;
var statearr_15838_18656 = state_15803__$1;
(statearr_15838_18656[(2)] = fc);

(statearr_15838_18656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (8))){
var inst_15792 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
if(cljs.core.truth_(inst_15792)){
var statearr_15842_18657 = state_15803__$1;
(statearr_15842_18657[(1)] = (12));

} else {
var statearr_15843_18658 = state_15803__$1;
(statearr_15843_18658[(1)] = (13));

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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_15845 = [null,null,null,null,null,null,null,null,null];
(statearr_15845[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_15845[(1)] = (1));

return statearr_15845;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_15803){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15803);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15846){var ex__14221__auto__ = e15846;
var statearr_15849_18663 = state_15803;
(statearr_15849_18663[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15803[(4)]))){
var statearr_15851_18667 = state_15803;
(statearr_15851_18667[(1)] = cljs.core.first((state_15803[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18668 = state_15803;
state_15803 = G__18668;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_15803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_15803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_15853 = f__15074__auto__();
(statearr_15853[(6)] = c__15073__auto___18635);

return statearr_15853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
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
var c__15073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_15887){
var state_val_15888 = (state_15887[(1)]);
if((state_val_15888 === (7))){
var inst_15883 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15901_18669 = state_15887__$1;
(statearr_15901_18669[(2)] = inst_15883);

(statearr_15901_18669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (1))){
var inst_15861 = init;
var inst_15862 = inst_15861;
var state_15887__$1 = (function (){var statearr_15904 = state_15887;
(statearr_15904[(7)] = inst_15862);

return statearr_15904;
})();
var statearr_15905_18693 = state_15887__$1;
(statearr_15905_18693[(2)] = null);

(statearr_15905_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (4))){
var inst_15866 = (state_15887[(8)]);
var inst_15866__$1 = (state_15887[(2)]);
var inst_15867 = (inst_15866__$1 == null);
var state_15887__$1 = (function (){var statearr_15909 = state_15887;
(statearr_15909[(8)] = inst_15866__$1);

return statearr_15909;
})();
if(cljs.core.truth_(inst_15867)){
var statearr_15910_18694 = state_15887__$1;
(statearr_15910_18694[(1)] = (5));

} else {
var statearr_15911_18695 = state_15887__$1;
(statearr_15911_18695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (6))){
var inst_15862 = (state_15887[(7)]);
var inst_15866 = (state_15887[(8)]);
var inst_15873 = (state_15887[(9)]);
var inst_15873__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15862,inst_15866) : f.call(null, inst_15862,inst_15866));
var inst_15874 = cljs.core.reduced_QMARK_(inst_15873__$1);
var state_15887__$1 = (function (){var statearr_15913 = state_15887;
(statearr_15913[(9)] = inst_15873__$1);

return statearr_15913;
})();
if(inst_15874){
var statearr_15916_18697 = state_15887__$1;
(statearr_15916_18697[(1)] = (8));

} else {
var statearr_15918_18698 = state_15887__$1;
(statearr_15918_18698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (3))){
var inst_15885 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15887__$1,inst_15885);
} else {
if((state_val_15888 === (2))){
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15887__$1,(4),ch);
} else {
if((state_val_15888 === (9))){
var inst_15873 = (state_15887[(9)]);
var inst_15862 = inst_15873;
var state_15887__$1 = (function (){var statearr_15922 = state_15887;
(statearr_15922[(7)] = inst_15862);

return statearr_15922;
})();
var statearr_15925_18699 = state_15887__$1;
(statearr_15925_18699[(2)] = null);

(statearr_15925_18699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (5))){
var inst_15862 = (state_15887[(7)]);
var state_15887__$1 = state_15887;
var statearr_15927_18700 = state_15887__$1;
(statearr_15927_18700[(2)] = inst_15862);

(statearr_15927_18700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (10))){
var inst_15881 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15929_18701 = state_15887__$1;
(statearr_15929_18701[(2)] = inst_15881);

(statearr_15929_18701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (8))){
var inst_15873 = (state_15887[(9)]);
var inst_15877 = cljs.core.deref(inst_15873);
var state_15887__$1 = state_15887;
var statearr_15933_18702 = state_15887__$1;
(statearr_15933_18702[(2)] = inst_15877);

(statearr_15933_18702[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14218__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14218__auto____0 = (function (){
var statearr_15936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15936[(0)] = cljs$core$async$reduce_$_state_machine__14218__auto__);

(statearr_15936[(1)] = (1));

return statearr_15936;
});
var cljs$core$async$reduce_$_state_machine__14218__auto____1 = (function (state_15887){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15887);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15938){var ex__14221__auto__ = e15938;
var statearr_15939_18719 = state_15887;
(statearr_15939_18719[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15887[(4)]))){
var statearr_15942_18720 = state_15887;
(statearr_15942_18720[(1)] = cljs.core.first((state_15887[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18723 = state_15887;
state_15887 = G__18723;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14218__auto__ = function(state_15887){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14218__auto____1.call(this,state_15887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14218__auto____0;
cljs$core$async$reduce_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14218__auto____1;
return cljs$core$async$reduce_$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_15945 = f__15074__auto__();
(statearr_15945[(6)] = c__15073__auto__);

return statearr_15945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));

return c__15073__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__15073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_15959){
var state_val_15960 = (state_15959[(1)]);
if((state_val_15960 === (1))){
var inst_15953 = cljs.core.async.reduce(f__$1,init,ch);
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15959__$1,(2),inst_15953);
} else {
if((state_val_15960 === (2))){
var inst_15956 = (state_15959[(2)]);
var inst_15957 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15956) : f__$1.call(null, inst_15956));
var state_15959__$1 = state_15959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15959__$1,inst_15957);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14218__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14218__auto____0 = (function (){
var statearr_15970 = [null,null,null,null,null,null,null];
(statearr_15970[(0)] = cljs$core$async$transduce_$_state_machine__14218__auto__);

(statearr_15970[(1)] = (1));

return statearr_15970;
});
var cljs$core$async$transduce_$_state_machine__14218__auto____1 = (function (state_15959){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_15959);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e15972){var ex__14221__auto__ = e15972;
var statearr_15973_18729 = state_15959;
(statearr_15973_18729[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_15959[(4)]))){
var statearr_15977_18730 = state_15959;
(statearr_15977_18730[(1)] = cljs.core.first((state_15959[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18733 = state_15959;
state_15959 = G__18733;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14218__auto__ = function(state_15959){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14218__auto____1.call(this,state_15959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14218__auto____0;
cljs$core$async$transduce_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14218__auto____1;
return cljs$core$async$transduce_$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_15980 = f__15074__auto__();
(statearr_15980[(6)] = c__15073__auto__);

return statearr_15980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));

return c__15073__auto__;
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
var G__15988 = arguments.length;
switch (G__15988) {
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
var c__15073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_16034){
var state_val_16035 = (state_16034[(1)]);
if((state_val_16035 === (7))){
var inst_16013 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16043_18738 = state_16034__$1;
(statearr_16043_18738[(2)] = inst_16013);

(statearr_16043_18738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (1))){
var inst_16004 = cljs.core.seq(coll);
var inst_16005 = inst_16004;
var state_16034__$1 = (function (){var statearr_16048 = state_16034;
(statearr_16048[(7)] = inst_16005);

return statearr_16048;
})();
var statearr_16050_18739 = state_16034__$1;
(statearr_16050_18739[(2)] = null);

(statearr_16050_18739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (4))){
var inst_16005 = (state_16034[(7)]);
var inst_16011 = cljs.core.first(inst_16005);
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16034__$1,(7),ch,inst_16011);
} else {
if((state_val_16035 === (13))){
var inst_16027 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16060_18745 = state_16034__$1;
(statearr_16060_18745[(2)] = inst_16027);

(statearr_16060_18745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (6))){
var inst_16017 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
if(cljs.core.truth_(inst_16017)){
var statearr_16063_18746 = state_16034__$1;
(statearr_16063_18746[(1)] = (8));

} else {
var statearr_16064_18751 = state_16034__$1;
(statearr_16064_18751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (3))){
var inst_16031 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16034__$1,inst_16031);
} else {
if((state_val_16035 === (12))){
var state_16034__$1 = state_16034;
var statearr_16068_18755 = state_16034__$1;
(statearr_16068_18755[(2)] = null);

(statearr_16068_18755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (2))){
var inst_16005 = (state_16034[(7)]);
var state_16034__$1 = state_16034;
if(cljs.core.truth_(inst_16005)){
var statearr_16070_18761 = state_16034__$1;
(statearr_16070_18761[(1)] = (4));

} else {
var statearr_16071_18762 = state_16034__$1;
(statearr_16071_18762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (11))){
var inst_16024 = cljs.core.async.close_BANG_(ch);
var state_16034__$1 = state_16034;
var statearr_16075_18763 = state_16034__$1;
(statearr_16075_18763[(2)] = inst_16024);

(statearr_16075_18763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (9))){
var state_16034__$1 = state_16034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16078_18764 = state_16034__$1;
(statearr_16078_18764[(1)] = (11));

} else {
var statearr_16079_18768 = state_16034__$1;
(statearr_16079_18768[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (5))){
var inst_16005 = (state_16034[(7)]);
var state_16034__$1 = state_16034;
var statearr_16083_18769 = state_16034__$1;
(statearr_16083_18769[(2)] = inst_16005);

(statearr_16083_18769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (10))){
var inst_16029 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
var statearr_16085_18774 = state_16034__$1;
(statearr_16085_18774[(2)] = inst_16029);

(statearr_16085_18774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16035 === (8))){
var inst_16005 = (state_16034[(7)]);
var inst_16020 = cljs.core.next(inst_16005);
var inst_16005__$1 = inst_16020;
var state_16034__$1 = (function (){var statearr_16089 = state_16034;
(statearr_16089[(7)] = inst_16005__$1);

return statearr_16089;
})();
var statearr_16090_18775 = state_16034__$1;
(statearr_16090_18775[(2)] = null);

(statearr_16090_18775[(1)] = (2));


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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_16095 = [null,null,null,null,null,null,null,null];
(statearr_16095[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_16095[(1)] = (1));

return statearr_16095;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_16034){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_16034);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e16096){var ex__14221__auto__ = e16096;
var statearr_16098_18780 = state_16034;
(statearr_16098_18780[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_16034[(4)]))){
var statearr_16099_18781 = state_16034;
(statearr_16099_18781[(1)] = cljs.core.first((state_16034[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18782 = state_16034;
state_16034 = G__18782;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_16034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_16034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_16104 = f__15074__auto__();
(statearr_16104[(6)] = c__15073__auto__);

return statearr_16104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));

return c__15073__auto__;
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
var G__16110 = arguments.length;
switch (G__16110) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18787 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18787(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18790 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18790(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18796 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18796(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18803 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18803(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16113 = (function (ch,cs,meta16114){
this.ch = ch;
this.cs = cs;
this.meta16114 = meta16114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16115,meta16114__$1){
var self__ = this;
var _16115__$1 = this;
return (new cljs.core.async.t_cljs$core$async16113(self__.ch,self__.cs,meta16114__$1));
}));

(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16115){
var self__ = this;
var _16115__$1 = this;
return self__.meta16114;
}));

(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16113.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16114","meta16114",-1384101444,null)], null);
}));

(cljs.core.async.t_cljs$core$async16113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16113");

(cljs.core.async.t_cljs$core$async16113.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16113.
 */
cljs.core.async.__GT_t_cljs$core$async16113 = (function cljs$core$async$__GT_t_cljs$core$async16113(ch,cs,meta16114){
return (new cljs.core.async.t_cljs$core$async16113(ch,cs,meta16114));
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
var m = (new cljs.core.async.t_cljs$core$async16113(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15073__auto___18807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_16261){
var state_val_16262 = (state_16261[(1)]);
if((state_val_16262 === (7))){
var inst_16256 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16263_18808 = state_16261__$1;
(statearr_16263_18808[(2)] = inst_16256);

(statearr_16263_18808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (20))){
var inst_16151 = (state_16261[(7)]);
var inst_16163 = cljs.core.first(inst_16151);
var inst_16164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16163,(0),null);
var inst_16165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16163,(1),null);
var state_16261__$1 = (function (){var statearr_16266 = state_16261;
(statearr_16266[(8)] = inst_16164);

return statearr_16266;
})();
if(cljs.core.truth_(inst_16165)){
var statearr_16267_18811 = state_16261__$1;
(statearr_16267_18811[(1)] = (22));

} else {
var statearr_16268_18812 = state_16261__$1;
(statearr_16268_18812[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (27))){
var inst_16193 = (state_16261[(9)]);
var inst_16200 = (state_16261[(10)]);
var inst_16195 = (state_16261[(11)]);
var inst_16120 = (state_16261[(12)]);
var inst_16200__$1 = cljs.core._nth(inst_16193,inst_16195);
var inst_16201 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16200__$1,inst_16120,done);
var state_16261__$1 = (function (){var statearr_16269 = state_16261;
(statearr_16269[(10)] = inst_16200__$1);

return statearr_16269;
})();
if(cljs.core.truth_(inst_16201)){
var statearr_16270_18815 = state_16261__$1;
(statearr_16270_18815[(1)] = (30));

} else {
var statearr_16271_18816 = state_16261__$1;
(statearr_16271_18816[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (1))){
var state_16261__$1 = state_16261;
var statearr_16272_18817 = state_16261__$1;
(statearr_16272_18817[(2)] = null);

(statearr_16272_18817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (24))){
var inst_16151 = (state_16261[(7)]);
var inst_16170 = (state_16261[(2)]);
var inst_16171 = cljs.core.next(inst_16151);
var inst_16129 = inst_16171;
var inst_16130 = null;
var inst_16131 = (0);
var inst_16132 = (0);
var state_16261__$1 = (function (){var statearr_16273 = state_16261;
(statearr_16273[(13)] = inst_16170);

(statearr_16273[(14)] = inst_16131);

(statearr_16273[(15)] = inst_16130);

(statearr_16273[(16)] = inst_16132);

(statearr_16273[(17)] = inst_16129);

return statearr_16273;
})();
var statearr_16274_18823 = state_16261__$1;
(statearr_16274_18823[(2)] = null);

(statearr_16274_18823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (39))){
var state_16261__$1 = state_16261;
var statearr_16283_18824 = state_16261__$1;
(statearr_16283_18824[(2)] = null);

(statearr_16283_18824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (4))){
var inst_16120 = (state_16261[(12)]);
var inst_16120__$1 = (state_16261[(2)]);
var inst_16121 = (inst_16120__$1 == null);
var state_16261__$1 = (function (){var statearr_16284 = state_16261;
(statearr_16284[(12)] = inst_16120__$1);

return statearr_16284;
})();
if(cljs.core.truth_(inst_16121)){
var statearr_16285_18825 = state_16261__$1;
(statearr_16285_18825[(1)] = (5));

} else {
var statearr_16286_18826 = state_16261__$1;
(statearr_16286_18826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (15))){
var inst_16131 = (state_16261[(14)]);
var inst_16130 = (state_16261[(15)]);
var inst_16132 = (state_16261[(16)]);
var inst_16129 = (state_16261[(17)]);
var inst_16147 = (state_16261[(2)]);
var inst_16148 = (inst_16132 + (1));
var tmp16275 = inst_16131;
var tmp16276 = inst_16130;
var tmp16277 = inst_16129;
var inst_16129__$1 = tmp16277;
var inst_16130__$1 = tmp16276;
var inst_16131__$1 = tmp16275;
var inst_16132__$1 = inst_16148;
var state_16261__$1 = (function (){var statearr_16287 = state_16261;
(statearr_16287[(14)] = inst_16131__$1);

(statearr_16287[(15)] = inst_16130__$1);

(statearr_16287[(16)] = inst_16132__$1);

(statearr_16287[(18)] = inst_16147);

(statearr_16287[(17)] = inst_16129__$1);

return statearr_16287;
})();
var statearr_16288_18835 = state_16261__$1;
(statearr_16288_18835[(2)] = null);

(statearr_16288_18835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (21))){
var inst_16174 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16292_18837 = state_16261__$1;
(statearr_16292_18837[(2)] = inst_16174);

(statearr_16292_18837[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (31))){
var inst_16200 = (state_16261[(10)]);
var inst_16204 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16200);
var state_16261__$1 = state_16261;
var statearr_16293_18838 = state_16261__$1;
(statearr_16293_18838[(2)] = inst_16204);

(statearr_16293_18838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (32))){
var inst_16193 = (state_16261[(9)]);
var inst_16192 = (state_16261[(19)]);
var inst_16195 = (state_16261[(11)]);
var inst_16194 = (state_16261[(20)]);
var inst_16206 = (state_16261[(2)]);
var inst_16207 = (inst_16195 + (1));
var tmp16289 = inst_16193;
var tmp16290 = inst_16192;
var tmp16291 = inst_16194;
var inst_16192__$1 = tmp16290;
var inst_16193__$1 = tmp16289;
var inst_16194__$1 = tmp16291;
var inst_16195__$1 = inst_16207;
var state_16261__$1 = (function (){var statearr_16294 = state_16261;
(statearr_16294[(9)] = inst_16193__$1);

(statearr_16294[(19)] = inst_16192__$1);

(statearr_16294[(11)] = inst_16195__$1);

(statearr_16294[(21)] = inst_16206);

(statearr_16294[(20)] = inst_16194__$1);

return statearr_16294;
})();
var statearr_16295_18839 = state_16261__$1;
(statearr_16295_18839[(2)] = null);

(statearr_16295_18839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (40))){
var inst_16223 = (state_16261[(22)]);
var inst_16232 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16223);
var state_16261__$1 = state_16261;
var statearr_16296_18841 = state_16261__$1;
(statearr_16296_18841[(2)] = inst_16232);

(statearr_16296_18841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (33))){
var inst_16210 = (state_16261[(23)]);
var inst_16215 = cljs.core.chunked_seq_QMARK_(inst_16210);
var state_16261__$1 = state_16261;
if(inst_16215){
var statearr_16297_18842 = state_16261__$1;
(statearr_16297_18842[(1)] = (36));

} else {
var statearr_16298_18847 = state_16261__$1;
(statearr_16298_18847[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (13))){
var inst_16141 = (state_16261[(24)]);
var inst_16144 = cljs.core.async.close_BANG_(inst_16141);
var state_16261__$1 = state_16261;
var statearr_16299_18849 = state_16261__$1;
(statearr_16299_18849[(2)] = inst_16144);

(statearr_16299_18849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (22))){
var inst_16164 = (state_16261[(8)]);
var inst_16167 = cljs.core.async.close_BANG_(inst_16164);
var state_16261__$1 = state_16261;
var statearr_16300_18855 = state_16261__$1;
(statearr_16300_18855[(2)] = inst_16167);

(statearr_16300_18855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (36))){
var inst_16210 = (state_16261[(23)]);
var inst_16217 = cljs.core.chunk_first(inst_16210);
var inst_16218 = cljs.core.chunk_rest(inst_16210);
var inst_16219 = cljs.core.count(inst_16217);
var inst_16192 = inst_16218;
var inst_16193 = inst_16217;
var inst_16194 = inst_16219;
var inst_16195 = (0);
var state_16261__$1 = (function (){var statearr_16301 = state_16261;
(statearr_16301[(9)] = inst_16193);

(statearr_16301[(19)] = inst_16192);

(statearr_16301[(11)] = inst_16195);

(statearr_16301[(20)] = inst_16194);

return statearr_16301;
})();
var statearr_16305_18857 = state_16261__$1;
(statearr_16305_18857[(2)] = null);

(statearr_16305_18857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (41))){
var inst_16210 = (state_16261[(23)]);
var inst_16234 = (state_16261[(2)]);
var inst_16235 = cljs.core.next(inst_16210);
var inst_16192 = inst_16235;
var inst_16193 = null;
var inst_16194 = (0);
var inst_16195 = (0);
var state_16261__$1 = (function (){var statearr_16306 = state_16261;
(statearr_16306[(9)] = inst_16193);

(statearr_16306[(25)] = inst_16234);

(statearr_16306[(19)] = inst_16192);

(statearr_16306[(11)] = inst_16195);

(statearr_16306[(20)] = inst_16194);

return statearr_16306;
})();
var statearr_16311_18859 = state_16261__$1;
(statearr_16311_18859[(2)] = null);

(statearr_16311_18859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (43))){
var state_16261__$1 = state_16261;
var statearr_16316_18860 = state_16261__$1;
(statearr_16316_18860[(2)] = null);

(statearr_16316_18860[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (29))){
var inst_16243 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16321_18861 = state_16261__$1;
(statearr_16321_18861[(2)] = inst_16243);

(statearr_16321_18861[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (44))){
var inst_16253 = (state_16261[(2)]);
var state_16261__$1 = (function (){var statearr_16325 = state_16261;
(statearr_16325[(26)] = inst_16253);

return statearr_16325;
})();
var statearr_16326_18865 = state_16261__$1;
(statearr_16326_18865[(2)] = null);

(statearr_16326_18865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (6))){
var inst_16184 = (state_16261[(27)]);
var inst_16183 = cljs.core.deref(cs);
var inst_16184__$1 = cljs.core.keys(inst_16183);
var inst_16185 = cljs.core.count(inst_16184__$1);
var inst_16186 = cljs.core.reset_BANG_(dctr,inst_16185);
var inst_16191 = cljs.core.seq(inst_16184__$1);
var inst_16192 = inst_16191;
var inst_16193 = null;
var inst_16194 = (0);
var inst_16195 = (0);
var state_16261__$1 = (function (){var statearr_16329 = state_16261;
(statearr_16329[(9)] = inst_16193);

(statearr_16329[(28)] = inst_16186);

(statearr_16329[(19)] = inst_16192);

(statearr_16329[(11)] = inst_16195);

(statearr_16329[(20)] = inst_16194);

(statearr_16329[(27)] = inst_16184__$1);

return statearr_16329;
})();
var statearr_16332_18867 = state_16261__$1;
(statearr_16332_18867[(2)] = null);

(statearr_16332_18867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (28))){
var inst_16192 = (state_16261[(19)]);
var inst_16210 = (state_16261[(23)]);
var inst_16210__$1 = cljs.core.seq(inst_16192);
var state_16261__$1 = (function (){var statearr_16333 = state_16261;
(statearr_16333[(23)] = inst_16210__$1);

return statearr_16333;
})();
if(inst_16210__$1){
var statearr_16334_18868 = state_16261__$1;
(statearr_16334_18868[(1)] = (33));

} else {
var statearr_16335_18869 = state_16261__$1;
(statearr_16335_18869[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (25))){
var inst_16195 = (state_16261[(11)]);
var inst_16194 = (state_16261[(20)]);
var inst_16197 = (inst_16195 < inst_16194);
var inst_16198 = inst_16197;
var state_16261__$1 = state_16261;
if(cljs.core.truth_(inst_16198)){
var statearr_16336_18877 = state_16261__$1;
(statearr_16336_18877[(1)] = (27));

} else {
var statearr_16337_18878 = state_16261__$1;
(statearr_16337_18878[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (34))){
var state_16261__$1 = state_16261;
var statearr_16343_18883 = state_16261__$1;
(statearr_16343_18883[(2)] = null);

(statearr_16343_18883[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (17))){
var state_16261__$1 = state_16261;
var statearr_16344_18884 = state_16261__$1;
(statearr_16344_18884[(2)] = null);

(statearr_16344_18884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (3))){
var inst_16258 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16261__$1,inst_16258);
} else {
if((state_val_16262 === (12))){
var inst_16179 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16350_18889 = state_16261__$1;
(statearr_16350_18889[(2)] = inst_16179);

(statearr_16350_18889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (2))){
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16261__$1,(4),ch);
} else {
if((state_val_16262 === (23))){
var state_16261__$1 = state_16261;
var statearr_16353_18890 = state_16261__$1;
(statearr_16353_18890[(2)] = null);

(statearr_16353_18890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (35))){
var inst_16241 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16356_18894 = state_16261__$1;
(statearr_16356_18894[(2)] = inst_16241);

(statearr_16356_18894[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (19))){
var inst_16151 = (state_16261[(7)]);
var inst_16155 = cljs.core.chunk_first(inst_16151);
var inst_16156 = cljs.core.chunk_rest(inst_16151);
var inst_16157 = cljs.core.count(inst_16155);
var inst_16129 = inst_16156;
var inst_16130 = inst_16155;
var inst_16131 = inst_16157;
var inst_16132 = (0);
var state_16261__$1 = (function (){var statearr_16361 = state_16261;
(statearr_16361[(14)] = inst_16131);

(statearr_16361[(15)] = inst_16130);

(statearr_16361[(16)] = inst_16132);

(statearr_16361[(17)] = inst_16129);

return statearr_16361;
})();
var statearr_16362_18899 = state_16261__$1;
(statearr_16362_18899[(2)] = null);

(statearr_16362_18899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (11))){
var inst_16151 = (state_16261[(7)]);
var inst_16129 = (state_16261[(17)]);
var inst_16151__$1 = cljs.core.seq(inst_16129);
var state_16261__$1 = (function (){var statearr_16481 = state_16261;
(statearr_16481[(7)] = inst_16151__$1);

return statearr_16481;
})();
if(inst_16151__$1){
var statearr_16483_18900 = state_16261__$1;
(statearr_16483_18900[(1)] = (16));

} else {
var statearr_16484_18901 = state_16261__$1;
(statearr_16484_18901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (9))){
var inst_16181 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16486_18902 = state_16261__$1;
(statearr_16486_18902[(2)] = inst_16181);

(statearr_16486_18902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (5))){
var inst_16127 = cljs.core.deref(cs);
var inst_16128 = cljs.core.seq(inst_16127);
var inst_16129 = inst_16128;
var inst_16130 = null;
var inst_16131 = (0);
var inst_16132 = (0);
var state_16261__$1 = (function (){var statearr_16490 = state_16261;
(statearr_16490[(14)] = inst_16131);

(statearr_16490[(15)] = inst_16130);

(statearr_16490[(16)] = inst_16132);

(statearr_16490[(17)] = inst_16129);

return statearr_16490;
})();
var statearr_16491_18907 = state_16261__$1;
(statearr_16491_18907[(2)] = null);

(statearr_16491_18907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (14))){
var state_16261__$1 = state_16261;
var statearr_16493_18908 = state_16261__$1;
(statearr_16493_18908[(2)] = null);

(statearr_16493_18908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (45))){
var inst_16250 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16497_18909 = state_16261__$1;
(statearr_16497_18909[(2)] = inst_16250);

(statearr_16497_18909[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (26))){
var inst_16184 = (state_16261[(27)]);
var inst_16245 = (state_16261[(2)]);
var inst_16246 = cljs.core.seq(inst_16184);
var state_16261__$1 = (function (){var statearr_16502 = state_16261;
(statearr_16502[(29)] = inst_16245);

return statearr_16502;
})();
if(inst_16246){
var statearr_16504_18914 = state_16261__$1;
(statearr_16504_18914[(1)] = (42));

} else {
var statearr_16506_18915 = state_16261__$1;
(statearr_16506_18915[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (16))){
var inst_16151 = (state_16261[(7)]);
var inst_16153 = cljs.core.chunked_seq_QMARK_(inst_16151);
var state_16261__$1 = state_16261;
if(inst_16153){
var statearr_16509_18918 = state_16261__$1;
(statearr_16509_18918[(1)] = (19));

} else {
var statearr_16511_18919 = state_16261__$1;
(statearr_16511_18919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (38))){
var inst_16238 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16512_18924 = state_16261__$1;
(statearr_16512_18924[(2)] = inst_16238);

(statearr_16512_18924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (30))){
var state_16261__$1 = state_16261;
var statearr_16514_18925 = state_16261__$1;
(statearr_16514_18925[(2)] = null);

(statearr_16514_18925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (10))){
var inst_16130 = (state_16261[(15)]);
var inst_16132 = (state_16261[(16)]);
var inst_16140 = cljs.core._nth(inst_16130,inst_16132);
var inst_16141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16140,(0),null);
var inst_16142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16140,(1),null);
var state_16261__$1 = (function (){var statearr_16518 = state_16261;
(statearr_16518[(24)] = inst_16141);

return statearr_16518;
})();
if(cljs.core.truth_(inst_16142)){
var statearr_16519_18930 = state_16261__$1;
(statearr_16519_18930[(1)] = (13));

} else {
var statearr_16521_18931 = state_16261__$1;
(statearr_16521_18931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (18))){
var inst_16177 = (state_16261[(2)]);
var state_16261__$1 = state_16261;
var statearr_16522_18933 = state_16261__$1;
(statearr_16522_18933[(2)] = inst_16177);

(statearr_16522_18933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (42))){
var state_16261__$1 = state_16261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16261__$1,(45),dchan);
} else {
if((state_val_16262 === (37))){
var inst_16223 = (state_16261[(22)]);
var inst_16120 = (state_16261[(12)]);
var inst_16210 = (state_16261[(23)]);
var inst_16223__$1 = cljs.core.first(inst_16210);
var inst_16228 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16223__$1,inst_16120,done);
var state_16261__$1 = (function (){var statearr_16540 = state_16261;
(statearr_16540[(22)] = inst_16223__$1);

return statearr_16540;
})();
if(cljs.core.truth_(inst_16228)){
var statearr_16541_18939 = state_16261__$1;
(statearr_16541_18939[(1)] = (39));

} else {
var statearr_16542_18940 = state_16261__$1;
(statearr_16542_18940[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16262 === (8))){
var inst_16131 = (state_16261[(14)]);
var inst_16132 = (state_16261[(16)]);
var inst_16134 = (inst_16132 < inst_16131);
var inst_16135 = inst_16134;
var state_16261__$1 = state_16261;
if(cljs.core.truth_(inst_16135)){
var statearr_16544_18945 = state_16261__$1;
(statearr_16544_18945[(1)] = (10));

} else {
var statearr_16545_18946 = state_16261__$1;
(statearr_16545_18946[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14218__auto__ = null;
var cljs$core$async$mult_$_state_machine__14218__auto____0 = (function (){
var statearr_16550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16550[(0)] = cljs$core$async$mult_$_state_machine__14218__auto__);

(statearr_16550[(1)] = (1));

return statearr_16550;
});
var cljs$core$async$mult_$_state_machine__14218__auto____1 = (function (state_16261){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_16261);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e16552){var ex__14221__auto__ = e16552;
var statearr_16553_18947 = state_16261;
(statearr_16553_18947[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_16261[(4)]))){
var statearr_16554_18948 = state_16261;
(statearr_16554_18948[(1)] = cljs.core.first((state_16261[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18950 = state_16261;
state_16261 = G__18950;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14218__auto__ = function(state_16261){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14218__auto____1.call(this,state_16261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14218__auto____0;
cljs$core$async$mult_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14218__auto____1;
return cljs$core$async$mult_$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_16562 = f__15074__auto__();
(statearr_16562[(6)] = c__15073__auto___18807);

return statearr_16562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
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
var G__16569 = arguments.length;
switch (G__16569) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18957 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18957(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18959 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18959(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18960 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18960(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18961 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18961(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18964 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18964(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18970 = arguments.length;
var i__5727__auto___18971 = (0);
while(true){
if((i__5727__auto___18971 < len__5726__auto___18970)){
args__5732__auto__.push((arguments[i__5727__auto___18971]));

var G__18972 = (i__5727__auto___18971 + (1));
i__5727__auto___18971 = G__18972;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16628){
var map__16629 = p__16628;
var map__16629__$1 = cljs.core.__destructure_map(map__16629);
var opts = map__16629__$1;
var statearr_16630_18981 = state;
(statearr_16630_18981[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16633_18994 = state;
(statearr_16633_18994[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16634_18998 = state;
(statearr_16634_18998[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16623){
var G__16624 = cljs.core.first(seq16623);
var seq16623__$1 = cljs.core.next(seq16623);
var G__16625 = cljs.core.first(seq16623__$1);
var seq16623__$2 = cljs.core.next(seq16623__$1);
var G__16626 = cljs.core.first(seq16623__$2);
var seq16623__$3 = cljs.core.next(seq16623__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16624,G__16625,G__16626,seq16623__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16647 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16648){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16648 = meta16648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16649,meta16648__$1){
var self__ = this;
var _16649__$1 = this;
return (new cljs.core.async.t_cljs$core$async16647(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16648__$1));
}));

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16649){
var self__ = this;
var _16649__$1 = this;
return self__.meta16648;
}));

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16647.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16648","meta16648",95412634,null)], null);
}));

(cljs.core.async.t_cljs$core$async16647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16647");

(cljs.core.async.t_cljs$core$async16647.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16647.
 */
cljs.core.async.__GT_t_cljs$core$async16647 = (function cljs$core$async$__GT_t_cljs$core$async16647(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16648){
return (new cljs.core.async.t_cljs$core$async16647(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16648));
});


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
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
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
var m = (new cljs.core.async.t_cljs$core$async16647(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15073__auto___19177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_16811){
var state_val_16812 = (state_16811[(1)]);
if((state_val_16812 === (7))){
var inst_16762 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16762)){
var statearr_16814_19185 = state_16811__$1;
(statearr_16814_19185[(1)] = (8));

} else {
var statearr_16817_19191 = state_16811__$1;
(statearr_16817_19191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (20))){
var inst_16710 = (state_16811[(7)]);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16811__$1,(23),out,inst_16710);
} else {
if((state_val_16812 === (1))){
var inst_16677 = calc_state();
var inst_16678 = cljs.core.__destructure_map(inst_16677);
var inst_16682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16678,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16678,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16678,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16685 = inst_16677;
var state_16811__$1 = (function (){var statearr_16822 = state_16811;
(statearr_16822[(8)] = inst_16682);

(statearr_16822[(9)] = inst_16684);

(statearr_16822[(10)] = inst_16685);

(statearr_16822[(11)] = inst_16683);

return statearr_16822;
})();
var statearr_16825_19200 = state_16811__$1;
(statearr_16825_19200[(2)] = null);

(statearr_16825_19200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (24))){
var inst_16692 = (state_16811[(12)]);
var inst_16685 = inst_16692;
var state_16811__$1 = (function (){var statearr_16827 = state_16811;
(statearr_16827[(10)] = inst_16685);

return statearr_16827;
})();
var statearr_16828_19201 = state_16811__$1;
(statearr_16828_19201[(2)] = null);

(statearr_16828_19201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (4))){
var inst_16756 = (state_16811[(13)]);
var inst_16710 = (state_16811[(7)]);
var inst_16709 = (state_16811[(2)]);
var inst_16710__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16709,(0),null);
var inst_16754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16709,(1),null);
var inst_16756__$1 = (inst_16710__$1 == null);
var state_16811__$1 = (function (){var statearr_16836 = state_16811;
(statearr_16836[(14)] = inst_16754);

(statearr_16836[(13)] = inst_16756__$1);

(statearr_16836[(7)] = inst_16710__$1);

return statearr_16836;
})();
if(cljs.core.truth_(inst_16756__$1)){
var statearr_16837_19217 = state_16811__$1;
(statearr_16837_19217[(1)] = (5));

} else {
var statearr_16839_19218 = state_16811__$1;
(statearr_16839_19218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (15))){
var inst_16782 = (state_16811[(15)]);
var inst_16693 = (state_16811[(16)]);
var inst_16782__$1 = cljs.core.empty_QMARK_(inst_16693);
var state_16811__$1 = (function (){var statearr_16841 = state_16811;
(statearr_16841[(15)] = inst_16782__$1);

return statearr_16841;
})();
if(inst_16782__$1){
var statearr_16842_19230 = state_16811__$1;
(statearr_16842_19230[(1)] = (17));

} else {
var statearr_16844_19237 = state_16811__$1;
(statearr_16844_19237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (21))){
var inst_16692 = (state_16811[(12)]);
var inst_16685 = inst_16692;
var state_16811__$1 = (function (){var statearr_16845 = state_16811;
(statearr_16845[(10)] = inst_16685);

return statearr_16845;
})();
var statearr_16846_19239 = state_16811__$1;
(statearr_16846_19239[(2)] = null);

(statearr_16846_19239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (13))){
var inst_16772 = (state_16811[(2)]);
var inst_16776 = calc_state();
var inst_16685 = inst_16776;
var state_16811__$1 = (function (){var statearr_16847 = state_16811;
(statearr_16847[(17)] = inst_16772);

(statearr_16847[(10)] = inst_16685);

return statearr_16847;
})();
var statearr_16849_19244 = state_16811__$1;
(statearr_16849_19244[(2)] = null);

(statearr_16849_19244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (22))){
var inst_16802 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16850_19246 = state_16811__$1;
(statearr_16850_19246[(2)] = inst_16802);

(statearr_16850_19246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (6))){
var inst_16754 = (state_16811[(14)]);
var inst_16760 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16754,change);
var state_16811__$1 = state_16811;
var statearr_16851_19256 = state_16811__$1;
(statearr_16851_19256[(2)] = inst_16760);

(statearr_16851_19256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (25))){
var state_16811__$1 = state_16811;
var statearr_16852_19265 = state_16811__$1;
(statearr_16852_19265[(2)] = null);

(statearr_16852_19265[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (17))){
var inst_16754 = (state_16811[(14)]);
var inst_16698 = (state_16811[(18)]);
var inst_16784 = (inst_16698.cljs$core$IFn$_invoke$arity$1 ? inst_16698.cljs$core$IFn$_invoke$arity$1(inst_16754) : inst_16698.call(null, inst_16754));
var inst_16785 = cljs.core.not(inst_16784);
var state_16811__$1 = state_16811;
var statearr_16858_19272 = state_16811__$1;
(statearr_16858_19272[(2)] = inst_16785);

(statearr_16858_19272[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (3))){
var inst_16806 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16811__$1,inst_16806);
} else {
if((state_val_16812 === (12))){
var state_16811__$1 = state_16811;
var statearr_16860_19274 = state_16811__$1;
(statearr_16860_19274[(2)] = null);

(statearr_16860_19274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (2))){
var inst_16692 = (state_16811[(12)]);
var inst_16685 = (state_16811[(10)]);
var inst_16692__$1 = cljs.core.__destructure_map(inst_16685);
var inst_16693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16692__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16692__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16692__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16811__$1 = (function (){var statearr_16863 = state_16811;
(statearr_16863[(16)] = inst_16693);

(statearr_16863[(12)] = inst_16692__$1);

(statearr_16863[(18)] = inst_16698);

return statearr_16863;
})();
return cljs.core.async.ioc_alts_BANG_(state_16811__$1,(4),inst_16699);
} else {
if((state_val_16812 === (23))){
var inst_16793 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16793)){
var statearr_16865_19279 = state_16811__$1;
(statearr_16865_19279[(1)] = (24));

} else {
var statearr_16866_19280 = state_16811__$1;
(statearr_16866_19280[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (19))){
var inst_16788 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16867_19281 = state_16811__$1;
(statearr_16867_19281[(2)] = inst_16788);

(statearr_16867_19281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (11))){
var inst_16754 = (state_16811[(14)]);
var inst_16766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16754);
var state_16811__$1 = state_16811;
var statearr_16868_19283 = state_16811__$1;
(statearr_16868_19283[(2)] = inst_16766);

(statearr_16868_19283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (9))){
var inst_16754 = (state_16811[(14)]);
var inst_16693 = (state_16811[(16)]);
var inst_16779 = (state_16811[(19)]);
var inst_16779__$1 = (inst_16693.cljs$core$IFn$_invoke$arity$1 ? inst_16693.cljs$core$IFn$_invoke$arity$1(inst_16754) : inst_16693.call(null, inst_16754));
var state_16811__$1 = (function (){var statearr_16871 = state_16811;
(statearr_16871[(19)] = inst_16779__$1);

return statearr_16871;
})();
if(cljs.core.truth_(inst_16779__$1)){
var statearr_16875_19284 = state_16811__$1;
(statearr_16875_19284[(1)] = (14));

} else {
var statearr_16876_19285 = state_16811__$1;
(statearr_16876_19285[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (5))){
var inst_16756 = (state_16811[(13)]);
var state_16811__$1 = state_16811;
var statearr_16877_19286 = state_16811__$1;
(statearr_16877_19286[(2)] = inst_16756);

(statearr_16877_19286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (14))){
var inst_16779 = (state_16811[(19)]);
var state_16811__$1 = state_16811;
var statearr_16878_19287 = state_16811__$1;
(statearr_16878_19287[(2)] = inst_16779);

(statearr_16878_19287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (26))){
var inst_16798 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16881_19288 = state_16811__$1;
(statearr_16881_19288[(2)] = inst_16798);

(statearr_16881_19288[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (16))){
var inst_16790 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16790)){
var statearr_16885_19289 = state_16811__$1;
(statearr_16885_19289[(1)] = (20));

} else {
var statearr_16886_19290 = state_16811__$1;
(statearr_16886_19290[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (10))){
var inst_16804 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16887_19291 = state_16811__$1;
(statearr_16887_19291[(2)] = inst_16804);

(statearr_16887_19291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (18))){
var inst_16782 = (state_16811[(15)]);
var state_16811__$1 = state_16811;
var statearr_16888_19297 = state_16811__$1;
(statearr_16888_19297[(2)] = inst_16782);

(statearr_16888_19297[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (8))){
var inst_16710 = (state_16811[(7)]);
var inst_16764 = (inst_16710 == null);
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16764)){
var statearr_16889_19298 = state_16811__$1;
(statearr_16889_19298[(1)] = (11));

} else {
var statearr_16890_19299 = state_16811__$1;
(statearr_16890_19299[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14218__auto__ = null;
var cljs$core$async$mix_$_state_machine__14218__auto____0 = (function (){
var statearr_16893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16893[(0)] = cljs$core$async$mix_$_state_machine__14218__auto__);

(statearr_16893[(1)] = (1));

return statearr_16893;
});
var cljs$core$async$mix_$_state_machine__14218__auto____1 = (function (state_16811){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_16811);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e16899){var ex__14221__auto__ = e16899;
var statearr_16900_19314 = state_16811;
(statearr_16900_19314[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_16811[(4)]))){
var statearr_16902_19315 = state_16811;
(statearr_16902_19315[(1)] = cljs.core.first((state_16811[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19316 = state_16811;
state_16811 = G__19316;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14218__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14218__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14218__auto____0;
cljs$core$async$mix_$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14218__auto____1;
return cljs$core$async$mix_$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_16907 = f__15074__auto__();
(statearr_16907[(6)] = c__15073__auto___19177);

return statearr_16907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19326 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19326(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19327 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19327(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19330 = (function() {
var G__19331 = null;
var G__19331__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19331__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19331 = function(p,v){
switch(arguments.length){
case 1:
return G__19331__1.call(this,p);
case 2:
return G__19331__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19331.cljs$core$IFn$_invoke$arity$1 = G__19331__1;
G__19331.cljs$core$IFn$_invoke$arity$2 = G__19331__2;
return G__19331;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16949 = arguments.length;
switch (G__16949) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19330(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19330(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16998 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16999){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16999 = meta16999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17000,meta16999__$1){
var self__ = this;
var _17000__$1 = this;
return (new cljs.core.async.t_cljs$core$async16998(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16999__$1));
}));

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17000){
var self__ = this;
var _17000__$1 = this;
return self__.meta16999;
}));

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16999","meta16999",1635332608,null)], null);
}));

(cljs.core.async.t_cljs$core$async16998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16998");

(cljs.core.async.t_cljs$core$async16998.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16998.
 */
cljs.core.async.__GT_t_cljs$core$async16998 = (function cljs$core$async$__GT_t_cljs$core$async16998(ch,topic_fn,buf_fn,mults,ensure_mult,meta16999){
return (new cljs.core.async.t_cljs$core$async16998(ch,topic_fn,buf_fn,mults,ensure_mult,meta16999));
});


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
var G__16994 = arguments.length;
switch (G__16994) {
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
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16984_SHARP_){
if(cljs.core.truth_((p1__16984_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16984_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16984_SHARP_.call(null, topic)))){
return p1__16984_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16984_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16998(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15073__auto___19346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_17086){
var state_val_17087 = (state_17086[(1)]);
if((state_val_17087 === (7))){
var inst_17080 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17089_19347 = state_17086__$1;
(statearr_17089_19347[(2)] = inst_17080);

(statearr_17089_19347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (20))){
var state_17086__$1 = state_17086;
var statearr_17090_19348 = state_17086__$1;
(statearr_17090_19348[(2)] = null);

(statearr_17090_19348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (1))){
var state_17086__$1 = state_17086;
var statearr_17091_19349 = state_17086__$1;
(statearr_17091_19349[(2)] = null);

(statearr_17091_19349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (24))){
var inst_17063 = (state_17086[(7)]);
var inst_17072 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17063);
var state_17086__$1 = state_17086;
var statearr_17096_19350 = state_17086__$1;
(statearr_17096_19350[(2)] = inst_17072);

(statearr_17096_19350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (4))){
var inst_17009 = (state_17086[(8)]);
var inst_17009__$1 = (state_17086[(2)]);
var inst_17010 = (inst_17009__$1 == null);
var state_17086__$1 = (function (){var statearr_17105 = state_17086;
(statearr_17105[(8)] = inst_17009__$1);

return statearr_17105;
})();
if(cljs.core.truth_(inst_17010)){
var statearr_17106_19351 = state_17086__$1;
(statearr_17106_19351[(1)] = (5));

} else {
var statearr_17107_19352 = state_17086__$1;
(statearr_17107_19352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (15))){
var inst_17057 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17108_19353 = state_17086__$1;
(statearr_17108_19353[(2)] = inst_17057);

(statearr_17108_19353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (21))){
var inst_17077 = (state_17086[(2)]);
var state_17086__$1 = (function (){var statearr_17109 = state_17086;
(statearr_17109[(9)] = inst_17077);

return statearr_17109;
})();
var statearr_17110_19354 = state_17086__$1;
(statearr_17110_19354[(2)] = null);

(statearr_17110_19354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (13))){
var inst_17038 = (state_17086[(10)]);
var inst_17041 = cljs.core.chunked_seq_QMARK_(inst_17038);
var state_17086__$1 = state_17086;
if(inst_17041){
var statearr_17111_19355 = state_17086__$1;
(statearr_17111_19355[(1)] = (16));

} else {
var statearr_17115_19356 = state_17086__$1;
(statearr_17115_19356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (22))){
var inst_17069 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
if(cljs.core.truth_(inst_17069)){
var statearr_17116_19357 = state_17086__$1;
(statearr_17116_19357[(1)] = (23));

} else {
var statearr_17117_19358 = state_17086__$1;
(statearr_17117_19358[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (6))){
var inst_17063 = (state_17086[(7)]);
var inst_17009 = (state_17086[(8)]);
var inst_17065 = (state_17086[(11)]);
var inst_17063__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17009) : topic_fn.call(null, inst_17009));
var inst_17064 = cljs.core.deref(mults);
var inst_17065__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17064,inst_17063__$1);
var state_17086__$1 = (function (){var statearr_17119 = state_17086;
(statearr_17119[(7)] = inst_17063__$1);

(statearr_17119[(11)] = inst_17065__$1);

return statearr_17119;
})();
if(cljs.core.truth_(inst_17065__$1)){
var statearr_17120_19359 = state_17086__$1;
(statearr_17120_19359[(1)] = (19));

} else {
var statearr_17121_19360 = state_17086__$1;
(statearr_17121_19360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (25))){
var inst_17074 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17122_19361 = state_17086__$1;
(statearr_17122_19361[(2)] = inst_17074);

(statearr_17122_19361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (17))){
var inst_17038 = (state_17086[(10)]);
var inst_17048 = cljs.core.first(inst_17038);
var inst_17049 = cljs.core.async.muxch_STAR_(inst_17048);
var inst_17050 = cljs.core.async.close_BANG_(inst_17049);
var inst_17051 = cljs.core.next(inst_17038);
var inst_17022 = inst_17051;
var inst_17023 = null;
var inst_17024 = (0);
var inst_17025 = (0);
var state_17086__$1 = (function (){var statearr_17131 = state_17086;
(statearr_17131[(12)] = inst_17022);

(statearr_17131[(13)] = inst_17023);

(statearr_17131[(14)] = inst_17025);

(statearr_17131[(15)] = inst_17024);

(statearr_17131[(16)] = inst_17050);

return statearr_17131;
})();
var statearr_17134_19362 = state_17086__$1;
(statearr_17134_19362[(2)] = null);

(statearr_17134_19362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (3))){
var inst_17082 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17086__$1,inst_17082);
} else {
if((state_val_17087 === (12))){
var inst_17059 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17139_19363 = state_17086__$1;
(statearr_17139_19363[(2)] = inst_17059);

(statearr_17139_19363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (2))){
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17086__$1,(4),ch);
} else {
if((state_val_17087 === (23))){
var state_17086__$1 = state_17086;
var statearr_17140_19365 = state_17086__$1;
(statearr_17140_19365[(2)] = null);

(statearr_17140_19365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (19))){
var inst_17009 = (state_17086[(8)]);
var inst_17065 = (state_17086[(11)]);
var inst_17067 = cljs.core.async.muxch_STAR_(inst_17065);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17086__$1,(22),inst_17067,inst_17009);
} else {
if((state_val_17087 === (11))){
var inst_17022 = (state_17086[(12)]);
var inst_17038 = (state_17086[(10)]);
var inst_17038__$1 = cljs.core.seq(inst_17022);
var state_17086__$1 = (function (){var statearr_17142 = state_17086;
(statearr_17142[(10)] = inst_17038__$1);

return statearr_17142;
})();
if(inst_17038__$1){
var statearr_17143_19367 = state_17086__$1;
(statearr_17143_19367[(1)] = (13));

} else {
var statearr_17144_19368 = state_17086__$1;
(statearr_17144_19368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (9))){
var inst_17061 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17145_19369 = state_17086__$1;
(statearr_17145_19369[(2)] = inst_17061);

(statearr_17145_19369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (5))){
var inst_17019 = cljs.core.deref(mults);
var inst_17020 = cljs.core.vals(inst_17019);
var inst_17021 = cljs.core.seq(inst_17020);
var inst_17022 = inst_17021;
var inst_17023 = null;
var inst_17024 = (0);
var inst_17025 = (0);
var state_17086__$1 = (function (){var statearr_17146 = state_17086;
(statearr_17146[(12)] = inst_17022);

(statearr_17146[(13)] = inst_17023);

(statearr_17146[(14)] = inst_17025);

(statearr_17146[(15)] = inst_17024);

return statearr_17146;
})();
var statearr_17147_19379 = state_17086__$1;
(statearr_17147_19379[(2)] = null);

(statearr_17147_19379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (14))){
var state_17086__$1 = state_17086;
var statearr_17155_19386 = state_17086__$1;
(statearr_17155_19386[(2)] = null);

(statearr_17155_19386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (16))){
var inst_17038 = (state_17086[(10)]);
var inst_17043 = cljs.core.chunk_first(inst_17038);
var inst_17044 = cljs.core.chunk_rest(inst_17038);
var inst_17045 = cljs.core.count(inst_17043);
var inst_17022 = inst_17044;
var inst_17023 = inst_17043;
var inst_17024 = inst_17045;
var inst_17025 = (0);
var state_17086__$1 = (function (){var statearr_17164 = state_17086;
(statearr_17164[(12)] = inst_17022);

(statearr_17164[(13)] = inst_17023);

(statearr_17164[(14)] = inst_17025);

(statearr_17164[(15)] = inst_17024);

return statearr_17164;
})();
var statearr_17165_19388 = state_17086__$1;
(statearr_17165_19388[(2)] = null);

(statearr_17165_19388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (10))){
var inst_17022 = (state_17086[(12)]);
var inst_17023 = (state_17086[(13)]);
var inst_17025 = (state_17086[(14)]);
var inst_17024 = (state_17086[(15)]);
var inst_17030 = cljs.core._nth(inst_17023,inst_17025);
var inst_17031 = cljs.core.async.muxch_STAR_(inst_17030);
var inst_17032 = cljs.core.async.close_BANG_(inst_17031);
var inst_17033 = (inst_17025 + (1));
var tmp17148 = inst_17022;
var tmp17149 = inst_17023;
var tmp17150 = inst_17024;
var inst_17022__$1 = tmp17148;
var inst_17023__$1 = tmp17149;
var inst_17024__$1 = tmp17150;
var inst_17025__$1 = inst_17033;
var state_17086__$1 = (function (){var statearr_17174 = state_17086;
(statearr_17174[(12)] = inst_17022__$1);

(statearr_17174[(13)] = inst_17023__$1);

(statearr_17174[(17)] = inst_17032);

(statearr_17174[(14)] = inst_17025__$1);

(statearr_17174[(15)] = inst_17024__$1);

return statearr_17174;
})();
var statearr_17181_19390 = state_17086__$1;
(statearr_17181_19390[(2)] = null);

(statearr_17181_19390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (18))){
var inst_17054 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17182_19391 = state_17086__$1;
(statearr_17182_19391[(2)] = inst_17054);

(statearr_17182_19391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (8))){
var inst_17025 = (state_17086[(14)]);
var inst_17024 = (state_17086[(15)]);
var inst_17027 = (inst_17025 < inst_17024);
var inst_17028 = inst_17027;
var state_17086__$1 = state_17086;
if(cljs.core.truth_(inst_17028)){
var statearr_17189_19392 = state_17086__$1;
(statearr_17189_19392[(1)] = (10));

} else {
var statearr_17191_19393 = state_17086__$1;
(statearr_17191_19393[(1)] = (11));

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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_17195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17195[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_17195[(1)] = (1));

return statearr_17195;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_17086){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_17086);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e17196){var ex__14221__auto__ = e17196;
var statearr_17197_19398 = state_17086;
(statearr_17197_19398[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_17086[(4)]))){
var statearr_17206_19399 = state_17086;
(statearr_17206_19399[(1)] = cljs.core.first((state_17086[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19401 = state_17086;
state_17086 = G__19401;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_17086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_17086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_17215 = f__15074__auto__();
(statearr_17215[(6)] = c__15073__auto___19346);

return statearr_17215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
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
var G__17229 = arguments.length;
switch (G__17229) {
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
var G__17241 = arguments.length;
switch (G__17241) {
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
var G__17248 = arguments.length;
switch (G__17248) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15073__auto___19416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_17311){
var state_val_17312 = (state_17311[(1)]);
if((state_val_17312 === (7))){
var state_17311__$1 = state_17311;
var statearr_17313_19418 = state_17311__$1;
(statearr_17313_19418[(2)] = null);

(statearr_17313_19418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (1))){
var state_17311__$1 = state_17311;
var statearr_17315_19419 = state_17311__$1;
(statearr_17315_19419[(2)] = null);

(statearr_17315_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (4))){
var inst_17263 = (state_17311[(7)]);
var inst_17262 = (state_17311[(8)]);
var inst_17265 = (inst_17263 < inst_17262);
var state_17311__$1 = state_17311;
if(cljs.core.truth_(inst_17265)){
var statearr_17319_19420 = state_17311__$1;
(statearr_17319_19420[(1)] = (6));

} else {
var statearr_17320_19421 = state_17311__$1;
(statearr_17320_19421[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (15))){
var inst_17296 = (state_17311[(9)]);
var inst_17301 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17296);
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17311__$1,(17),out,inst_17301);
} else {
if((state_val_17312 === (13))){
var inst_17296 = (state_17311[(9)]);
var inst_17296__$1 = (state_17311[(2)]);
var inst_17297 = cljs.core.some(cljs.core.nil_QMARK_,inst_17296__$1);
var state_17311__$1 = (function (){var statearr_17322 = state_17311;
(statearr_17322[(9)] = inst_17296__$1);

return statearr_17322;
})();
if(cljs.core.truth_(inst_17297)){
var statearr_17323_19422 = state_17311__$1;
(statearr_17323_19422[(1)] = (14));

} else {
var statearr_17324_19423 = state_17311__$1;
(statearr_17324_19423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (6))){
var state_17311__$1 = state_17311;
var statearr_17325_19424 = state_17311__$1;
(statearr_17325_19424[(2)] = null);

(statearr_17325_19424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (17))){
var inst_17303 = (state_17311[(2)]);
var state_17311__$1 = (function (){var statearr_17341 = state_17311;
(statearr_17341[(10)] = inst_17303);

return statearr_17341;
})();
var statearr_17342_19425 = state_17311__$1;
(statearr_17342_19425[(2)] = null);

(statearr_17342_19425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (3))){
var inst_17308 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17311__$1,inst_17308);
} else {
if((state_val_17312 === (12))){
var _ = (function (){var statearr_17347 = state_17311;
(statearr_17347[(4)] = cljs.core.rest((state_17311[(4)])));

return statearr_17347;
})();
var state_17311__$1 = state_17311;
var ex17336 = (state_17311__$1[(2)]);
var statearr_17348_19429 = state_17311__$1;
(statearr_17348_19429[(5)] = ex17336);


if((ex17336 instanceof Object)){
var statearr_17349_19430 = state_17311__$1;
(statearr_17349_19430[(1)] = (11));

(statearr_17349_19430[(5)] = null);

} else {
throw ex17336;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (2))){
var inst_17261 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17262 = cnt;
var inst_17263 = (0);
var state_17311__$1 = (function (){var statearr_17360 = state_17311;
(statearr_17360[(7)] = inst_17263);

(statearr_17360[(11)] = inst_17261);

(statearr_17360[(8)] = inst_17262);

return statearr_17360;
})();
var statearr_17361_19440 = state_17311__$1;
(statearr_17361_19440[(2)] = null);

(statearr_17361_19440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (11))){
var inst_17274 = (state_17311[(2)]);
var inst_17275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17311__$1 = (function (){var statearr_17362 = state_17311;
(statearr_17362[(12)] = inst_17274);

return statearr_17362;
})();
var statearr_17363_19441 = state_17311__$1;
(statearr_17363_19441[(2)] = inst_17275);

(statearr_17363_19441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (9))){
var inst_17263 = (state_17311[(7)]);
var _ = (function (){var statearr_17368 = state_17311;
(statearr_17368[(4)] = cljs.core.cons((12),(state_17311[(4)])));

return statearr_17368;
})();
var inst_17281 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17263) : chs__$1.call(null, inst_17263));
var inst_17282 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17263) : done.call(null, inst_17263));
var inst_17283 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17281,inst_17282);
var ___$1 = (function (){var statearr_17369 = state_17311;
(statearr_17369[(4)] = cljs.core.rest((state_17311[(4)])));

return statearr_17369;
})();
var state_17311__$1 = state_17311;
var statearr_17371_19442 = state_17311__$1;
(statearr_17371_19442[(2)] = inst_17283);

(statearr_17371_19442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (5))){
var inst_17293 = (state_17311[(2)]);
var state_17311__$1 = (function (){var statearr_17372 = state_17311;
(statearr_17372[(13)] = inst_17293);

return statearr_17372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17311__$1,(13),dchan);
} else {
if((state_val_17312 === (14))){
var inst_17299 = cljs.core.async.close_BANG_(out);
var state_17311__$1 = state_17311;
var statearr_17373_19446 = state_17311__$1;
(statearr_17373_19446[(2)] = inst_17299);

(statearr_17373_19446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (16))){
var inst_17306 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
var statearr_17374_19447 = state_17311__$1;
(statearr_17374_19447[(2)] = inst_17306);

(statearr_17374_19447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (10))){
var inst_17263 = (state_17311[(7)]);
var inst_17286 = (state_17311[(2)]);
var inst_17287 = (inst_17263 + (1));
var inst_17263__$1 = inst_17287;
var state_17311__$1 = (function (){var statearr_17375 = state_17311;
(statearr_17375[(7)] = inst_17263__$1);

(statearr_17375[(14)] = inst_17286);

return statearr_17375;
})();
var statearr_17377_19452 = state_17311__$1;
(statearr_17377_19452[(2)] = null);

(statearr_17377_19452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (8))){
var inst_17291 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
var statearr_17385_19453 = state_17311__$1;
(statearr_17385_19453[(2)] = inst_17291);

(statearr_17385_19453[(1)] = (5));


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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_17390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17390[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_17390[(1)] = (1));

return statearr_17390;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_17311){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_17311);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e17391){var ex__14221__auto__ = e17391;
var statearr_17392_19459 = state_17311;
(statearr_17392_19459[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_17311[(4)]))){
var statearr_17393_19460 = state_17311;
(statearr_17393_19460[(1)] = cljs.core.first((state_17311[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19464 = state_17311;
state_17311 = G__19464;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_17311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_17311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_17396 = f__15074__auto__();
(statearr_17396[(6)] = c__15073__auto___19416);

return statearr_17396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));

}

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
var G__17401 = arguments.length;
switch (G__17401) {
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
var c__15073__auto___19467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_17436){
var state_val_17437 = (state_17436[(1)]);
if((state_val_17437 === (7))){
var inst_17415 = (state_17436[(7)]);
var inst_17416 = (state_17436[(8)]);
var inst_17415__$1 = (state_17436[(2)]);
var inst_17416__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17415__$1,(0),null);
var inst_17417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17415__$1,(1),null);
var inst_17418 = (inst_17416__$1 == null);
var state_17436__$1 = (function (){var statearr_17438 = state_17436;
(statearr_17438[(7)] = inst_17415__$1);

(statearr_17438[(9)] = inst_17417);

(statearr_17438[(8)] = inst_17416__$1);

return statearr_17438;
})();
if(cljs.core.truth_(inst_17418)){
var statearr_17439_19471 = state_17436__$1;
(statearr_17439_19471[(1)] = (8));

} else {
var statearr_17441_19472 = state_17436__$1;
(statearr_17441_19472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (1))){
var inst_17405 = cljs.core.vec(chs);
var inst_17406 = inst_17405;
var state_17436__$1 = (function (){var statearr_17442 = state_17436;
(statearr_17442[(10)] = inst_17406);

return statearr_17442;
})();
var statearr_17443_19473 = state_17436__$1;
(statearr_17443_19473[(2)] = null);

(statearr_17443_19473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (4))){
var inst_17406 = (state_17436[(10)]);
var state_17436__$1 = state_17436;
return cljs.core.async.ioc_alts_BANG_(state_17436__$1,(7),inst_17406);
} else {
if((state_val_17437 === (6))){
var inst_17432 = (state_17436[(2)]);
var state_17436__$1 = state_17436;
var statearr_17444_19474 = state_17436__$1;
(statearr_17444_19474[(2)] = inst_17432);

(statearr_17444_19474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (3))){
var inst_17434 = (state_17436[(2)]);
var state_17436__$1 = state_17436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17436__$1,inst_17434);
} else {
if((state_val_17437 === (2))){
var inst_17406 = (state_17436[(10)]);
var inst_17408 = cljs.core.count(inst_17406);
var inst_17409 = (inst_17408 > (0));
var state_17436__$1 = state_17436;
if(cljs.core.truth_(inst_17409)){
var statearr_17450_19479 = state_17436__$1;
(statearr_17450_19479[(1)] = (4));

} else {
var statearr_17451_19481 = state_17436__$1;
(statearr_17451_19481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (11))){
var inst_17406 = (state_17436[(10)]);
var inst_17425 = (state_17436[(2)]);
var tmp17445 = inst_17406;
var inst_17406__$1 = tmp17445;
var state_17436__$1 = (function (){var statearr_17452 = state_17436;
(statearr_17452[(10)] = inst_17406__$1);

(statearr_17452[(11)] = inst_17425);

return statearr_17452;
})();
var statearr_17453_19482 = state_17436__$1;
(statearr_17453_19482[(2)] = null);

(statearr_17453_19482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (9))){
var inst_17416 = (state_17436[(8)]);
var state_17436__$1 = state_17436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17436__$1,(11),out,inst_17416);
} else {
if((state_val_17437 === (5))){
var inst_17430 = cljs.core.async.close_BANG_(out);
var state_17436__$1 = state_17436;
var statearr_17459_19485 = state_17436__$1;
(statearr_17459_19485[(2)] = inst_17430);

(statearr_17459_19485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (10))){
var inst_17428 = (state_17436[(2)]);
var state_17436__$1 = state_17436;
var statearr_17460_19491 = state_17436__$1;
(statearr_17460_19491[(2)] = inst_17428);

(statearr_17460_19491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17437 === (8))){
var inst_17415 = (state_17436[(7)]);
var inst_17417 = (state_17436[(9)]);
var inst_17406 = (state_17436[(10)]);
var inst_17416 = (state_17436[(8)]);
var inst_17420 = (function (){var cs = inst_17406;
var vec__17411 = inst_17415;
var v = inst_17416;
var c = inst_17417;
return (function (p1__17398_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17398_SHARP_);
});
})();
var inst_17421 = cljs.core.filterv(inst_17420,inst_17406);
var inst_17406__$1 = inst_17421;
var state_17436__$1 = (function (){var statearr_17464 = state_17436;
(statearr_17464[(10)] = inst_17406__$1);

return statearr_17464;
})();
var statearr_17465_19493 = state_17436__$1;
(statearr_17465_19493[(2)] = null);

(statearr_17465_19493[(1)] = (2));


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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_17473 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17473[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_17473[(1)] = (1));

return statearr_17473;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_17436){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_17436);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e17482){var ex__14221__auto__ = e17482;
var statearr_17483_19494 = state_17436;
(statearr_17483_19494[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_17436[(4)]))){
var statearr_17484_19495 = state_17436;
(statearr_17484_19495[(1)] = cljs.core.first((state_17436[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19496 = state_17436;
state_17436 = G__19496;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_17436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_17436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_17485 = f__15074__auto__();
(statearr_17485[(6)] = c__15073__auto___19467);

return statearr_17485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
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
var G__17497 = arguments.length;
switch (G__17497) {
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
var c__15073__auto___19502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_17551){
var state_val_17552 = (state_17551[(1)]);
if((state_val_17552 === (7))){
var inst_17514 = (state_17551[(7)]);
var inst_17514__$1 = (state_17551[(2)]);
var inst_17515 = (inst_17514__$1 == null);
var inst_17516 = cljs.core.not(inst_17515);
var state_17551__$1 = (function (){var statearr_17553 = state_17551;
(statearr_17553[(7)] = inst_17514__$1);

return statearr_17553;
})();
if(inst_17516){
var statearr_17554_19506 = state_17551__$1;
(statearr_17554_19506[(1)] = (8));

} else {
var statearr_17558_19507 = state_17551__$1;
(statearr_17558_19507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (1))){
var inst_17502 = (0);
var state_17551__$1 = (function (){var statearr_17559 = state_17551;
(statearr_17559[(8)] = inst_17502);

return statearr_17559;
})();
var statearr_17561_19510 = state_17551__$1;
(statearr_17561_19510[(2)] = null);

(statearr_17561_19510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (4))){
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17551__$1,(7),ch);
} else {
if((state_val_17552 === (6))){
var inst_17542 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
var statearr_17562_19511 = state_17551__$1;
(statearr_17562_19511[(2)] = inst_17542);

(statearr_17562_19511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (3))){
var inst_17544 = (state_17551[(2)]);
var inst_17545 = cljs.core.async.close_BANG_(out);
var state_17551__$1 = (function (){var statearr_17563 = state_17551;
(statearr_17563[(9)] = inst_17544);

return statearr_17563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17551__$1,inst_17545);
} else {
if((state_val_17552 === (2))){
var inst_17502 = (state_17551[(8)]);
var inst_17508 = (inst_17502 < n);
var state_17551__$1 = state_17551;
if(cljs.core.truth_(inst_17508)){
var statearr_17564_19515 = state_17551__$1;
(statearr_17564_19515[(1)] = (4));

} else {
var statearr_17565_19516 = state_17551__$1;
(statearr_17565_19516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (11))){
var inst_17502 = (state_17551[(8)]);
var inst_17519 = (state_17551[(2)]);
var inst_17520 = (inst_17502 + (1));
var inst_17502__$1 = inst_17520;
var state_17551__$1 = (function (){var statearr_17567 = state_17551;
(statearr_17567[(10)] = inst_17519);

(statearr_17567[(8)] = inst_17502__$1);

return statearr_17567;
})();
var statearr_17568_19517 = state_17551__$1;
(statearr_17568_19517[(2)] = null);

(statearr_17568_19517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (9))){
var state_17551__$1 = state_17551;
var statearr_17570_19518 = state_17551__$1;
(statearr_17570_19518[(2)] = null);

(statearr_17570_19518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (5))){
var state_17551__$1 = state_17551;
var statearr_17574_19519 = state_17551__$1;
(statearr_17574_19519[(2)] = null);

(statearr_17574_19519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (10))){
var inst_17539 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
var statearr_17582_19524 = state_17551__$1;
(statearr_17582_19524[(2)] = inst_17539);

(statearr_17582_19524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (8))){
var inst_17514 = (state_17551[(7)]);
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17551__$1,(11),out,inst_17514);
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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_17589 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17589[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_17589[(1)] = (1));

return statearr_17589;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_17551){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_17551);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e17590){var ex__14221__auto__ = e17590;
var statearr_17591_19530 = state_17551;
(statearr_17591_19530[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_17551[(4)]))){
var statearr_17592_19531 = state_17551;
(statearr_17592_19531[(1)] = cljs.core.first((state_17551[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19533 = state_17551;
state_17551 = G__19533;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_17551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_17551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_17594 = f__15074__auto__();
(statearr_17594[(6)] = c__15073__auto___19502);

return statearr_17594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17608 = (function (f,ch,meta17601,_,fn1,meta17609){
this.f = f;
this.ch = ch;
this.meta17601 = meta17601;
this._ = _;
this.fn1 = fn1;
this.meta17609 = meta17609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17610,meta17609__$1){
var self__ = this;
var _17610__$1 = this;
return (new cljs.core.async.t_cljs$core$async17608(self__.f,self__.ch,self__.meta17601,self__._,self__.fn1,meta17609__$1));
}));

(cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17610){
var self__ = this;
var _17610__$1 = this;
return self__.meta17609;
}));

(cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17596_SHARP_){
var G__17628 = (((p1__17596_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17596_SHARP_) : self__.f.call(null, p1__17596_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17628) : f1.call(null, G__17628));
});
}));

(cljs.core.async.t_cljs$core$async17608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17601","meta17601",-1420819817,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17600","cljs.core.async/t_cljs$core$async17600",1353491272,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17609","meta17609",-1018724522,null)], null);
}));

(cljs.core.async.t_cljs$core$async17608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17608");

(cljs.core.async.t_cljs$core$async17608.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17608.
 */
cljs.core.async.__GT_t_cljs$core$async17608 = (function cljs$core$async$__GT_t_cljs$core$async17608(f,ch,meta17601,_,fn1,meta17609){
return (new cljs.core.async.t_cljs$core$async17608(f,ch,meta17601,_,fn1,meta17609));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17600 = (function (f,ch,meta17601){
this.f = f;
this.ch = ch;
this.meta17601 = meta17601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17602,meta17601__$1){
var self__ = this;
var _17602__$1 = this;
return (new cljs.core.async.t_cljs$core$async17600(self__.f,self__.ch,meta17601__$1));
}));

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17602){
var self__ = this;
var _17602__$1 = this;
return self__.meta17601;
}));

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17608(self__.f,self__.ch,self__.meta17601,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17656 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17656) : self__.f.call(null, G__17656));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17601","meta17601",-1420819817,null)], null);
}));

(cljs.core.async.t_cljs$core$async17600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17600");

(cljs.core.async.t_cljs$core$async17600.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17600.
 */
cljs.core.async.__GT_t_cljs$core$async17600 = (function cljs$core$async$__GT_t_cljs$core$async17600(f,ch,meta17601){
return (new cljs.core.async.t_cljs$core$async17600(f,ch,meta17601));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17666 = (function (f,ch,meta17667){
this.f = f;
this.ch = ch;
this.meta17667 = meta17667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17668,meta17667__$1){
var self__ = this;
var _17668__$1 = this;
return (new cljs.core.async.t_cljs$core$async17666(self__.f,self__.ch,meta17667__$1));
}));

(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17668){
var self__ = this;
var _17668__$1 = this;
return self__.meta17667;
}));

(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17667","meta17667",481814301,null)], null);
}));

(cljs.core.async.t_cljs$core$async17666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17666");

(cljs.core.async.t_cljs$core$async17666.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17666.
 */
cljs.core.async.__GT_t_cljs$core$async17666 = (function cljs$core$async$__GT_t_cljs$core$async17666(f,ch,meta17667){
return (new cljs.core.async.t_cljs$core$async17666(f,ch,meta17667));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17666(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17669 = (function (p,ch,meta17670){
this.p = p;
this.ch = ch;
this.meta17670 = meta17670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17671,meta17670__$1){
var self__ = this;
var _17671__$1 = this;
return (new cljs.core.async.t_cljs$core$async17669(self__.p,self__.ch,meta17670__$1));
}));

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17671){
var self__ = this;
var _17671__$1 = this;
return self__.meta17670;
}));

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17669.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17670","meta17670",1690211083,null)], null);
}));

(cljs.core.async.t_cljs$core$async17669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17669");

(cljs.core.async.t_cljs$core$async17669.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17669.
 */
cljs.core.async.__GT_t_cljs$core$async17669 = (function cljs$core$async$__GT_t_cljs$core$async17669(p,ch,meta17670){
return (new cljs.core.async.t_cljs$core$async17669(p,ch,meta17670));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17669(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17714 = arguments.length;
switch (G__17714) {
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
var c__15073__auto___19548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_17748){
var state_val_17749 = (state_17748[(1)]);
if((state_val_17749 === (7))){
var inst_17744 = (state_17748[(2)]);
var state_17748__$1 = state_17748;
var statearr_17753_19549 = state_17748__$1;
(statearr_17753_19549[(2)] = inst_17744);

(statearr_17753_19549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (1))){
var state_17748__$1 = state_17748;
var statearr_17754_19550 = state_17748__$1;
(statearr_17754_19550[(2)] = null);

(statearr_17754_19550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (4))){
var inst_17730 = (state_17748[(7)]);
var inst_17730__$1 = (state_17748[(2)]);
var inst_17731 = (inst_17730__$1 == null);
var state_17748__$1 = (function (){var statearr_17755 = state_17748;
(statearr_17755[(7)] = inst_17730__$1);

return statearr_17755;
})();
if(cljs.core.truth_(inst_17731)){
var statearr_17756_19555 = state_17748__$1;
(statearr_17756_19555[(1)] = (5));

} else {
var statearr_17757_19556 = state_17748__$1;
(statearr_17757_19556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (6))){
var inst_17730 = (state_17748[(7)]);
var inst_17735 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17730) : p.call(null, inst_17730));
var state_17748__$1 = state_17748;
if(cljs.core.truth_(inst_17735)){
var statearr_17758_19557 = state_17748__$1;
(statearr_17758_19557[(1)] = (8));

} else {
var statearr_17759_19558 = state_17748__$1;
(statearr_17759_19558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (3))){
var inst_17746 = (state_17748[(2)]);
var state_17748__$1 = state_17748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17748__$1,inst_17746);
} else {
if((state_val_17749 === (2))){
var state_17748__$1 = state_17748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17748__$1,(4),ch);
} else {
if((state_val_17749 === (11))){
var inst_17738 = (state_17748[(2)]);
var state_17748__$1 = state_17748;
var statearr_17766_19559 = state_17748__$1;
(statearr_17766_19559[(2)] = inst_17738);

(statearr_17766_19559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (9))){
var state_17748__$1 = state_17748;
var statearr_17768_19565 = state_17748__$1;
(statearr_17768_19565[(2)] = null);

(statearr_17768_19565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (5))){
var inst_17733 = cljs.core.async.close_BANG_(out);
var state_17748__$1 = state_17748;
var statearr_17769_19566 = state_17748__$1;
(statearr_17769_19566[(2)] = inst_17733);

(statearr_17769_19566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (10))){
var inst_17741 = (state_17748[(2)]);
var state_17748__$1 = (function (){var statearr_17770 = state_17748;
(statearr_17770[(8)] = inst_17741);

return statearr_17770;
})();
var statearr_17771_19568 = state_17748__$1;
(statearr_17771_19568[(2)] = null);

(statearr_17771_19568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17749 === (8))){
var inst_17730 = (state_17748[(7)]);
var state_17748__$1 = state_17748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17748__$1,(11),out,inst_17730);
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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_17774 = [null,null,null,null,null,null,null,null,null];
(statearr_17774[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_17774[(1)] = (1));

return statearr_17774;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_17748){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_17748);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e17775){var ex__14221__auto__ = e17775;
var statearr_17776_19573 = state_17748;
(statearr_17776_19573[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_17748[(4)]))){
var statearr_17777_19574 = state_17748;
(statearr_17777_19574[(1)] = cljs.core.first((state_17748[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19575 = state_17748;
state_17748 = G__19575;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_17748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_17748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_17788 = f__15074__auto__();
(statearr_17788[(6)] = c__15073__auto___19548);

return statearr_17788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17797 = arguments.length;
switch (G__17797) {
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
var c__15073__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_17888){
var state_val_17889 = (state_17888[(1)]);
if((state_val_17889 === (7))){
var inst_17878 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
var statearr_17902_19580 = state_17888__$1;
(statearr_17902_19580[(2)] = inst_17878);

(statearr_17902_19580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (20))){
var inst_17843 = (state_17888[(7)]);
var inst_17859 = (state_17888[(2)]);
var inst_17860 = cljs.core.next(inst_17843);
var inst_17821 = inst_17860;
var inst_17822 = null;
var inst_17823 = (0);
var inst_17824 = (0);
var state_17888__$1 = (function (){var statearr_17909 = state_17888;
(statearr_17909[(8)] = inst_17821);

(statearr_17909[(9)] = inst_17824);

(statearr_17909[(10)] = inst_17822);

(statearr_17909[(11)] = inst_17823);

(statearr_17909[(12)] = inst_17859);

return statearr_17909;
})();
var statearr_17910_19581 = state_17888__$1;
(statearr_17910_19581[(2)] = null);

(statearr_17910_19581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (1))){
var state_17888__$1 = state_17888;
var statearr_17915_19586 = state_17888__$1;
(statearr_17915_19586[(2)] = null);

(statearr_17915_19586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (4))){
var inst_17809 = (state_17888[(13)]);
var inst_17809__$1 = (state_17888[(2)]);
var inst_17810 = (inst_17809__$1 == null);
var state_17888__$1 = (function (){var statearr_17916 = state_17888;
(statearr_17916[(13)] = inst_17809__$1);

return statearr_17916;
})();
if(cljs.core.truth_(inst_17810)){
var statearr_17920_19592 = state_17888__$1;
(statearr_17920_19592[(1)] = (5));

} else {
var statearr_17921_19593 = state_17888__$1;
(statearr_17921_19593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (15))){
var state_17888__$1 = state_17888;
var statearr_17925_19595 = state_17888__$1;
(statearr_17925_19595[(2)] = null);

(statearr_17925_19595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (21))){
var state_17888__$1 = state_17888;
var statearr_17926_19596 = state_17888__$1;
(statearr_17926_19596[(2)] = null);

(statearr_17926_19596[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (13))){
var inst_17821 = (state_17888[(8)]);
var inst_17824 = (state_17888[(9)]);
var inst_17822 = (state_17888[(10)]);
var inst_17823 = (state_17888[(11)]);
var inst_17831 = (state_17888[(2)]);
var inst_17833 = (inst_17824 + (1));
var tmp17922 = inst_17821;
var tmp17923 = inst_17822;
var tmp17924 = inst_17823;
var inst_17821__$1 = tmp17922;
var inst_17822__$1 = tmp17923;
var inst_17823__$1 = tmp17924;
var inst_17824__$1 = inst_17833;
var state_17888__$1 = (function (){var statearr_17934 = state_17888;
(statearr_17934[(8)] = inst_17821__$1);

(statearr_17934[(9)] = inst_17824__$1);

(statearr_17934[(10)] = inst_17822__$1);

(statearr_17934[(11)] = inst_17823__$1);

(statearr_17934[(14)] = inst_17831);

return statearr_17934;
})();
var statearr_17944_19602 = state_17888__$1;
(statearr_17944_19602[(2)] = null);

(statearr_17944_19602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (22))){
var state_17888__$1 = state_17888;
var statearr_17945_19603 = state_17888__$1;
(statearr_17945_19603[(2)] = null);

(statearr_17945_19603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (6))){
var inst_17809 = (state_17888[(13)]);
var inst_17819 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17809) : f.call(null, inst_17809));
var inst_17820 = cljs.core.seq(inst_17819);
var inst_17821 = inst_17820;
var inst_17822 = null;
var inst_17823 = (0);
var inst_17824 = (0);
var state_17888__$1 = (function (){var statearr_17947 = state_17888;
(statearr_17947[(8)] = inst_17821);

(statearr_17947[(9)] = inst_17824);

(statearr_17947[(10)] = inst_17822);

(statearr_17947[(11)] = inst_17823);

return statearr_17947;
})();
var statearr_17951_19604 = state_17888__$1;
(statearr_17951_19604[(2)] = null);

(statearr_17951_19604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (17))){
var inst_17843 = (state_17888[(7)]);
var inst_17850 = cljs.core.chunk_first(inst_17843);
var inst_17852 = cljs.core.chunk_rest(inst_17843);
var inst_17853 = cljs.core.count(inst_17850);
var inst_17821 = inst_17852;
var inst_17822 = inst_17850;
var inst_17823 = inst_17853;
var inst_17824 = (0);
var state_17888__$1 = (function (){var statearr_17954 = state_17888;
(statearr_17954[(8)] = inst_17821);

(statearr_17954[(9)] = inst_17824);

(statearr_17954[(10)] = inst_17822);

(statearr_17954[(11)] = inst_17823);

return statearr_17954;
})();
var statearr_17955_19605 = state_17888__$1;
(statearr_17955_19605[(2)] = null);

(statearr_17955_19605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (3))){
var inst_17880 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17888__$1,inst_17880);
} else {
if((state_val_17889 === (12))){
var inst_17868 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
var statearr_17963_19606 = state_17888__$1;
(statearr_17963_19606[(2)] = inst_17868);

(statearr_17963_19606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (2))){
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17888__$1,(4),in$);
} else {
if((state_val_17889 === (23))){
var inst_17876 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
var statearr_17964_19611 = state_17888__$1;
(statearr_17964_19611[(2)] = inst_17876);

(statearr_17964_19611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (19))){
var inst_17863 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
var statearr_17970_19612 = state_17888__$1;
(statearr_17970_19612[(2)] = inst_17863);

(statearr_17970_19612[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (11))){
var inst_17821 = (state_17888[(8)]);
var inst_17843 = (state_17888[(7)]);
var inst_17843__$1 = cljs.core.seq(inst_17821);
var state_17888__$1 = (function (){var statearr_17971 = state_17888;
(statearr_17971[(7)] = inst_17843__$1);

return statearr_17971;
})();
if(inst_17843__$1){
var statearr_17972_19613 = state_17888__$1;
(statearr_17972_19613[(1)] = (14));

} else {
var statearr_17973_19614 = state_17888__$1;
(statearr_17973_19614[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (9))){
var inst_17870 = (state_17888[(2)]);
var inst_17871 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17888__$1 = (function (){var statearr_17974 = state_17888;
(statearr_17974[(15)] = inst_17870);

return statearr_17974;
})();
if(cljs.core.truth_(inst_17871)){
var statearr_17975_19615 = state_17888__$1;
(statearr_17975_19615[(1)] = (21));

} else {
var statearr_17977_19616 = state_17888__$1;
(statearr_17977_19616[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (5))){
var inst_17813 = cljs.core.async.close_BANG_(out);
var state_17888__$1 = state_17888;
var statearr_17987_19617 = state_17888__$1;
(statearr_17987_19617[(2)] = inst_17813);

(statearr_17987_19617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (14))){
var inst_17843 = (state_17888[(7)]);
var inst_17847 = cljs.core.chunked_seq_QMARK_(inst_17843);
var state_17888__$1 = state_17888;
if(inst_17847){
var statearr_17994_19618 = state_17888__$1;
(statearr_17994_19618[(1)] = (17));

} else {
var statearr_17995_19619 = state_17888__$1;
(statearr_17995_19619[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (16))){
var inst_17866 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
var statearr_17997_19623 = state_17888__$1;
(statearr_17997_19623[(2)] = inst_17866);

(statearr_17997_19623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (10))){
var inst_17824 = (state_17888[(9)]);
var inst_17822 = (state_17888[(10)]);
var inst_17829 = cljs.core._nth(inst_17822,inst_17824);
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17888__$1,(13),out,inst_17829);
} else {
if((state_val_17889 === (18))){
var inst_17843 = (state_17888[(7)]);
var inst_17856 = cljs.core.first(inst_17843);
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17888__$1,(20),out,inst_17856);
} else {
if((state_val_17889 === (8))){
var inst_17824 = (state_17888[(9)]);
var inst_17823 = (state_17888[(11)]);
var inst_17826 = (inst_17824 < inst_17823);
var inst_17827 = inst_17826;
var state_17888__$1 = state_17888;
if(cljs.core.truth_(inst_17827)){
var statearr_17998_19632 = state_17888__$1;
(statearr_17998_19632[(1)] = (10));

} else {
var statearr_17999_19633 = state_17888__$1;
(statearr_17999_19633[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14218__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14218__auto____0 = (function (){
var statearr_18000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18000[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14218__auto__);

(statearr_18000[(1)] = (1));

return statearr_18000;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14218__auto____1 = (function (state_17888){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_17888);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e18001){var ex__14221__auto__ = e18001;
var statearr_18003_19634 = state_17888;
(statearr_18003_19634[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_17888[(4)]))){
var statearr_18004_19635 = state_17888;
(statearr_18004_19635[(1)] = cljs.core.first((state_17888[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19644 = state_17888;
state_17888 = G__19644;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14218__auto__ = function(state_17888){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14218__auto____1.call(this,state_17888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14218__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14218__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_18009 = f__15074__auto__();
(statearr_18009[(6)] = c__15073__auto__);

return statearr_18009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));

return c__15073__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18015 = arguments.length;
switch (G__18015) {
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
var G__18019 = arguments.length;
switch (G__18019) {
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
var G__18027 = arguments.length;
switch (G__18027) {
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
var c__15073__auto___19668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_18055){
var state_val_18056 = (state_18055[(1)]);
if((state_val_18056 === (7))){
var inst_18050 = (state_18055[(2)]);
var state_18055__$1 = state_18055;
var statearr_18057_19669 = state_18055__$1;
(statearr_18057_19669[(2)] = inst_18050);

(statearr_18057_19669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (1))){
var inst_18029 = null;
var state_18055__$1 = (function (){var statearr_18058 = state_18055;
(statearr_18058[(7)] = inst_18029);

return statearr_18058;
})();
var statearr_18059_19677 = state_18055__$1;
(statearr_18059_19677[(2)] = null);

(statearr_18059_19677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (4))){
var inst_18035 = (state_18055[(8)]);
var inst_18035__$1 = (state_18055[(2)]);
var inst_18036 = (inst_18035__$1 == null);
var inst_18037 = cljs.core.not(inst_18036);
var state_18055__$1 = (function (){var statearr_18063 = state_18055;
(statearr_18063[(8)] = inst_18035__$1);

return statearr_18063;
})();
if(inst_18037){
var statearr_18068_19682 = state_18055__$1;
(statearr_18068_19682[(1)] = (5));

} else {
var statearr_18069_19683 = state_18055__$1;
(statearr_18069_19683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (6))){
var state_18055__$1 = state_18055;
var statearr_18070_19684 = state_18055__$1;
(statearr_18070_19684[(2)] = null);

(statearr_18070_19684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (3))){
var inst_18052 = (state_18055[(2)]);
var inst_18053 = cljs.core.async.close_BANG_(out);
var state_18055__$1 = (function (){var statearr_18071 = state_18055;
(statearr_18071[(9)] = inst_18052);

return statearr_18071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18055__$1,inst_18053);
} else {
if((state_val_18056 === (2))){
var state_18055__$1 = state_18055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18055__$1,(4),ch);
} else {
if((state_val_18056 === (11))){
var inst_18035 = (state_18055[(8)]);
var inst_18044 = (state_18055[(2)]);
var inst_18029 = inst_18035;
var state_18055__$1 = (function (){var statearr_18076 = state_18055;
(statearr_18076[(10)] = inst_18044);

(statearr_18076[(7)] = inst_18029);

return statearr_18076;
})();
var statearr_18077_19692 = state_18055__$1;
(statearr_18077_19692[(2)] = null);

(statearr_18077_19692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (9))){
var inst_18035 = (state_18055[(8)]);
var state_18055__$1 = state_18055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18055__$1,(11),out,inst_18035);
} else {
if((state_val_18056 === (5))){
var inst_18035 = (state_18055[(8)]);
var inst_18029 = (state_18055[(7)]);
var inst_18039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18035,inst_18029);
var state_18055__$1 = state_18055;
if(inst_18039){
var statearr_18082_19693 = state_18055__$1;
(statearr_18082_19693[(1)] = (8));

} else {
var statearr_18083_19695 = state_18055__$1;
(statearr_18083_19695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (10))){
var inst_18047 = (state_18055[(2)]);
var state_18055__$1 = state_18055;
var statearr_18090_19698 = state_18055__$1;
(statearr_18090_19698[(2)] = inst_18047);

(statearr_18090_19698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18056 === (8))){
var inst_18029 = (state_18055[(7)]);
var tmp18081 = inst_18029;
var inst_18029__$1 = tmp18081;
var state_18055__$1 = (function (){var statearr_18091 = state_18055;
(statearr_18091[(7)] = inst_18029__$1);

return statearr_18091;
})();
var statearr_18095_19699 = state_18055__$1;
(statearr_18095_19699[(2)] = null);

(statearr_18095_19699[(1)] = (2));


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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_18097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18097[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_18097[(1)] = (1));

return statearr_18097;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_18055){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_18055);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e18099){var ex__14221__auto__ = e18099;
var statearr_18103_19700 = state_18055;
(statearr_18103_19700[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_18055[(4)]))){
var statearr_18104_19701 = state_18055;
(statearr_18104_19701[(1)] = cljs.core.first((state_18055[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19702 = state_18055;
state_18055 = G__19702;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_18055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_18055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_18105 = f__15074__auto__();
(statearr_18105[(6)] = c__15073__auto___19668);

return statearr_18105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18113 = arguments.length;
switch (G__18113) {
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
var c__15073__auto___19704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_18167){
var state_val_18168 = (state_18167[(1)]);
if((state_val_18168 === (7))){
var inst_18163 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18171_19705 = state_18167__$1;
(statearr_18171_19705[(2)] = inst_18163);

(statearr_18171_19705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (1))){
var inst_18124 = (new Array(n));
var inst_18125 = inst_18124;
var inst_18126 = (0);
var state_18167__$1 = (function (){var statearr_18173 = state_18167;
(statearr_18173[(7)] = inst_18126);

(statearr_18173[(8)] = inst_18125);

return statearr_18173;
})();
var statearr_18174_19706 = state_18167__$1;
(statearr_18174_19706[(2)] = null);

(statearr_18174_19706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (4))){
var inst_18129 = (state_18167[(9)]);
var inst_18129__$1 = (state_18167[(2)]);
var inst_18131 = (inst_18129__$1 == null);
var inst_18132 = cljs.core.not(inst_18131);
var state_18167__$1 = (function (){var statearr_18175 = state_18167;
(statearr_18175[(9)] = inst_18129__$1);

return statearr_18175;
})();
if(inst_18132){
var statearr_18176_19707 = state_18167__$1;
(statearr_18176_19707[(1)] = (5));

} else {
var statearr_18182_19708 = state_18167__$1;
(statearr_18182_19708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (15))){
var inst_18157 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18184_19709 = state_18167__$1;
(statearr_18184_19709[(2)] = inst_18157);

(statearr_18184_19709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (13))){
var state_18167__$1 = state_18167;
var statearr_18190_19710 = state_18167__$1;
(statearr_18190_19710[(2)] = null);

(statearr_18190_19710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (6))){
var inst_18126 = (state_18167[(7)]);
var inst_18153 = (inst_18126 > (0));
var state_18167__$1 = state_18167;
if(cljs.core.truth_(inst_18153)){
var statearr_18195_19711 = state_18167__$1;
(statearr_18195_19711[(1)] = (12));

} else {
var statearr_18196_19716 = state_18167__$1;
(statearr_18196_19716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (3))){
var inst_18165 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18167__$1,inst_18165);
} else {
if((state_val_18168 === (12))){
var inst_18125 = (state_18167[(8)]);
var inst_18155 = cljs.core.vec(inst_18125);
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18167__$1,(15),out,inst_18155);
} else {
if((state_val_18168 === (2))){
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18167__$1,(4),ch);
} else {
if((state_val_18168 === (11))){
var inst_18143 = (state_18167[(2)]);
var inst_18145 = (new Array(n));
var inst_18125 = inst_18145;
var inst_18126 = (0);
var state_18167__$1 = (function (){var statearr_18199 = state_18167;
(statearr_18199[(7)] = inst_18126);

(statearr_18199[(8)] = inst_18125);

(statearr_18199[(10)] = inst_18143);

return statearr_18199;
})();
var statearr_18200_19737 = state_18167__$1;
(statearr_18200_19737[(2)] = null);

(statearr_18200_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (9))){
var inst_18125 = (state_18167[(8)]);
var inst_18141 = cljs.core.vec(inst_18125);
var state_18167__$1 = state_18167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18167__$1,(11),out,inst_18141);
} else {
if((state_val_18168 === (5))){
var inst_18126 = (state_18167[(7)]);
var inst_18129 = (state_18167[(9)]);
var inst_18125 = (state_18167[(8)]);
var inst_18135 = (state_18167[(11)]);
var inst_18134 = (inst_18125[inst_18126] = inst_18129);
var inst_18135__$1 = (inst_18126 + (1));
var inst_18136 = (inst_18135__$1 < n);
var state_18167__$1 = (function (){var statearr_18205 = state_18167;
(statearr_18205[(12)] = inst_18134);

(statearr_18205[(11)] = inst_18135__$1);

return statearr_18205;
})();
if(cljs.core.truth_(inst_18136)){
var statearr_18208_19740 = state_18167__$1;
(statearr_18208_19740[(1)] = (8));

} else {
var statearr_18210_19741 = state_18167__$1;
(statearr_18210_19741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (14))){
var inst_18160 = (state_18167[(2)]);
var inst_18161 = cljs.core.async.close_BANG_(out);
var state_18167__$1 = (function (){var statearr_18217 = state_18167;
(statearr_18217[(13)] = inst_18160);

return statearr_18217;
})();
var statearr_18218_19745 = state_18167__$1;
(statearr_18218_19745[(2)] = inst_18161);

(statearr_18218_19745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (10))){
var inst_18148 = (state_18167[(2)]);
var state_18167__$1 = state_18167;
var statearr_18219_19746 = state_18167__$1;
(statearr_18219_19746[(2)] = inst_18148);

(statearr_18219_19746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18168 === (8))){
var inst_18125 = (state_18167[(8)]);
var inst_18135 = (state_18167[(11)]);
var tmp18211 = inst_18125;
var inst_18125__$1 = tmp18211;
var inst_18126 = inst_18135;
var state_18167__$1 = (function (){var statearr_18220 = state_18167;
(statearr_18220[(7)] = inst_18126);

(statearr_18220[(8)] = inst_18125__$1);

return statearr_18220;
})();
var statearr_18221_19747 = state_18167__$1;
(statearr_18221_19747[(2)] = null);

(statearr_18221_19747[(1)] = (2));


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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_18224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18224[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_18224[(1)] = (1));

return statearr_18224;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_18167){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_18167);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e18225){var ex__14221__auto__ = e18225;
var statearr_18227_19750 = state_18167;
(statearr_18227_19750[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_18167[(4)]))){
var statearr_18230_19752 = state_18167;
(statearr_18230_19752[(1)] = cljs.core.first((state_18167[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19753 = state_18167;
state_18167 = G__19753;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_18167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_18167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_18231 = f__15074__auto__();
(statearr_18231[(6)] = c__15073__auto___19704);

return statearr_18231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18241 = arguments.length;
switch (G__18241) {
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
var c__15073__auto___19761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15074__auto__ = (function (){var switch__14217__auto__ = (function (state_18315){
var state_val_18319 = (state_18315[(1)]);
if((state_val_18319 === (7))){
var inst_18304 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18337_19765 = state_18315__$1;
(statearr_18337_19765[(2)] = inst_18304);

(statearr_18337_19765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (1))){
var inst_18248 = [];
var inst_18250 = inst_18248;
var inst_18252 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18315__$1 = (function (){var statearr_18345 = state_18315;
(statearr_18345[(7)] = inst_18250);

(statearr_18345[(8)] = inst_18252);

return statearr_18345;
})();
var statearr_18351_19769 = state_18315__$1;
(statearr_18351_19769[(2)] = null);

(statearr_18351_19769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (4))){
var inst_18259 = (state_18315[(9)]);
var inst_18259__$1 = (state_18315[(2)]);
var inst_18260 = (inst_18259__$1 == null);
var inst_18261 = cljs.core.not(inst_18260);
var state_18315__$1 = (function (){var statearr_18352 = state_18315;
(statearr_18352[(9)] = inst_18259__$1);

return statearr_18352;
})();
if(inst_18261){
var statearr_18357_19771 = state_18315__$1;
(statearr_18357_19771[(1)] = (5));

} else {
var statearr_18358_19772 = state_18315__$1;
(statearr_18358_19772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (15))){
var inst_18250 = (state_18315[(7)]);
var inst_18296 = cljs.core.vec(inst_18250);
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18315__$1,(18),out,inst_18296);
} else {
if((state_val_18319 === (13))){
var inst_18284 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18361_19773 = state_18315__$1;
(statearr_18361_19773[(2)] = inst_18284);

(statearr_18361_19773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (6))){
var inst_18250 = (state_18315[(7)]);
var inst_18290 = inst_18250.length;
var inst_18291 = (inst_18290 > (0));
var state_18315__$1 = state_18315;
if(cljs.core.truth_(inst_18291)){
var statearr_18367_19777 = state_18315__$1;
(statearr_18367_19777[(1)] = (15));

} else {
var statearr_18368_19779 = state_18315__$1;
(statearr_18368_19779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (17))){
var inst_18301 = (state_18315[(2)]);
var inst_18302 = cljs.core.async.close_BANG_(out);
var state_18315__$1 = (function (){var statearr_18369 = state_18315;
(statearr_18369[(10)] = inst_18301);

return statearr_18369;
})();
var statearr_18370_19780 = state_18315__$1;
(statearr_18370_19780[(2)] = inst_18302);

(statearr_18370_19780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (3))){
var inst_18306 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18315__$1,inst_18306);
} else {
if((state_val_18319 === (12))){
var inst_18250 = (state_18315[(7)]);
var inst_18277 = cljs.core.vec(inst_18250);
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18315__$1,(14),out,inst_18277);
} else {
if((state_val_18319 === (2))){
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18315__$1,(4),ch);
} else {
if((state_val_18319 === (11))){
var inst_18250 = (state_18315[(7)]);
var inst_18263 = (state_18315[(11)]);
var inst_18259 = (state_18315[(9)]);
var inst_18274 = inst_18250.push(inst_18259);
var tmp18371 = inst_18250;
var inst_18250__$1 = tmp18371;
var inst_18252 = inst_18263;
var state_18315__$1 = (function (){var statearr_18379 = state_18315;
(statearr_18379[(7)] = inst_18250__$1);

(statearr_18379[(8)] = inst_18252);

(statearr_18379[(12)] = inst_18274);

return statearr_18379;
})();
var statearr_18381_19793 = state_18315__$1;
(statearr_18381_19793[(2)] = null);

(statearr_18381_19793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (9))){
var inst_18252 = (state_18315[(8)]);
var inst_18267 = cljs.core.keyword_identical_QMARK_(inst_18252,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18315__$1 = state_18315;
var statearr_18386_19794 = state_18315__$1;
(statearr_18386_19794[(2)] = inst_18267);

(statearr_18386_19794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (5))){
var inst_18264 = (state_18315[(13)]);
var inst_18252 = (state_18315[(8)]);
var inst_18263 = (state_18315[(11)]);
var inst_18259 = (state_18315[(9)]);
var inst_18263__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18259) : f.call(null, inst_18259));
var inst_18264__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18263__$1,inst_18252);
var state_18315__$1 = (function (){var statearr_18388 = state_18315;
(statearr_18388[(13)] = inst_18264__$1);

(statearr_18388[(11)] = inst_18263__$1);

return statearr_18388;
})();
if(inst_18264__$1){
var statearr_18389_19807 = state_18315__$1;
(statearr_18389_19807[(1)] = (8));

} else {
var statearr_18390_19809 = state_18315__$1;
(statearr_18390_19809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (14))){
var inst_18263 = (state_18315[(11)]);
var inst_18259 = (state_18315[(9)]);
var inst_18279 = (state_18315[(2)]);
var inst_18280 = [];
var inst_18281 = inst_18280.push(inst_18259);
var inst_18250 = inst_18280;
var inst_18252 = inst_18263;
var state_18315__$1 = (function (){var statearr_18395 = state_18315;
(statearr_18395[(7)] = inst_18250);

(statearr_18395[(14)] = inst_18281);

(statearr_18395[(8)] = inst_18252);

(statearr_18395[(15)] = inst_18279);

return statearr_18395;
})();
var statearr_18404_19824 = state_18315__$1;
(statearr_18404_19824[(2)] = null);

(statearr_18404_19824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (16))){
var state_18315__$1 = state_18315;
var statearr_18416_19827 = state_18315__$1;
(statearr_18416_19827[(2)] = null);

(statearr_18416_19827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (10))){
var inst_18269 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
if(cljs.core.truth_(inst_18269)){
var statearr_18427_19829 = state_18315__$1;
(statearr_18427_19829[(1)] = (11));

} else {
var statearr_18430_19830 = state_18315__$1;
(statearr_18430_19830[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (18))){
var inst_18298 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18432_19831 = state_18315__$1;
(statearr_18432_19831[(2)] = inst_18298);

(statearr_18432_19831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18319 === (8))){
var inst_18264 = (state_18315[(13)]);
var state_18315__$1 = state_18315;
var statearr_18433_19832 = state_18315__$1;
(statearr_18433_19832[(2)] = inst_18264);

(statearr_18433_19832[(1)] = (10));


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
var cljs$core$async$state_machine__14218__auto__ = null;
var cljs$core$async$state_machine__14218__auto____0 = (function (){
var statearr_18444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18444[(0)] = cljs$core$async$state_machine__14218__auto__);

(statearr_18444[(1)] = (1));

return statearr_18444;
});
var cljs$core$async$state_machine__14218__auto____1 = (function (state_18315){
while(true){
var ret_value__14219__auto__ = (function (){try{while(true){
var result__14220__auto__ = switch__14217__auto__(state_18315);
if(cljs.core.keyword_identical_QMARK_(result__14220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14220__auto__;
}
break;
}
}catch (e18445){var ex__14221__auto__ = e18445;
var statearr_18446_19835 = state_18315;
(statearr_18446_19835[(2)] = ex__14221__auto__);


if(cljs.core.seq((state_18315[(4)]))){
var statearr_18449_19838 = state_18315;
(statearr_18449_19838[(1)] = cljs.core.first((state_18315[(4)])));

} else {
throw ex__14221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19839 = state_18315;
state_18315 = G__19839;
continue;
} else {
return ret_value__14219__auto__;
}
break;
}
});
cljs$core$async$state_machine__14218__auto__ = function(state_18315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14218__auto____1.call(this,state_18315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14218__auto____0;
cljs$core$async$state_machine__14218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14218__auto____1;
return cljs$core$async$state_machine__14218__auto__;
})()
})();
var state__15075__auto__ = (function (){var statearr_18451 = f__15074__auto__();
(statearr_18451[(6)] = c__15073__auto___19761);

return statearr_18451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15075__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

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
cljs.core.async.t_cljs$core$async15301 = (function (f,blockable,meta15302){
this.f = f;
this.blockable = blockable;
this.meta15302 = meta15302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15303,meta15302__$1){
var self__ = this;
var _15303__$1 = this;
return (new cljs.core.async.t_cljs$core$async15301(self__.f,self__.blockable,meta15302__$1));
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15303){
var self__ = this;
var _15303__$1 = this;
return self__.meta15302;
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15302","meta15302",-1227009956,null)], null);
}));

(cljs.core.async.t_cljs$core$async15301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15301");

(cljs.core.async.t_cljs$core$async15301.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15301.
 */
cljs.core.async.__GT_t_cljs$core$async15301 = (function cljs$core$async$__GT_t_cljs$core$async15301(f,blockable,meta15302){
return (new cljs.core.async.t_cljs$core$async15301(f,blockable,meta15302));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15290 = arguments.length;
switch (G__15290) {
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
return (new cljs.core.async.t_cljs$core$async15301(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15336 = arguments.length;
switch (G__15336) {
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
var G__15340 = arguments.length;
switch (G__15340) {
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
var G__15351 = arguments.length;
switch (G__15351) {
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
var val_18787 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18787) : fn1.call(null, val_18787));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18787) : fn1.call(null, val_18787));
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
var G__15364 = arguments.length;
switch (G__15364) {
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
var n__5593__auto___18812 = n;
var x_18813 = (0);
while(true){
if((x_18813 < n__5593__auto___18812)){
(a[x_18813] = x_18813);

var G__18814 = (x_18813 + (1));
x_18813 = G__18814;
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
cljs.core.async.t_cljs$core$async15379 = (function (flag,meta15380){
this.flag = flag;
this.meta15380 = meta15380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15381,meta15380__$1){
var self__ = this;
var _15381__$1 = this;
return (new cljs.core.async.t_cljs$core$async15379(self__.flag,meta15380__$1));
}));

(cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15381){
var self__ = this;
var _15381__$1 = this;
return self__.meta15380;
}));

(cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15380","meta15380",-1891413419,null)], null);
}));

(cljs.core.async.t_cljs$core$async15379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15379");

(cljs.core.async.t_cljs$core$async15379.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15379.
 */
cljs.core.async.__GT_t_cljs$core$async15379 = (function cljs$core$async$__GT_t_cljs$core$async15379(flag,meta15380){
return (new cljs.core.async.t_cljs$core$async15379(flag,meta15380));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15379(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15389 = (function (flag,cb,meta15390){
this.flag = flag;
this.cb = cb;
this.meta15390 = meta15390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15391,meta15390__$1){
var self__ = this;
var _15391__$1 = this;
return (new cljs.core.async.t_cljs$core$async15389(self__.flag,self__.cb,meta15390__$1));
}));

(cljs.core.async.t_cljs$core$async15389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15391){
var self__ = this;
var _15391__$1 = this;
return self__.meta15390;
}));

(cljs.core.async.t_cljs$core$async15389.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15389.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15390","meta15390",-921632050,null)], null);
}));

(cljs.core.async.t_cljs$core$async15389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15389");

(cljs.core.async.t_cljs$core$async15389.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15389.
 */
cljs.core.async.__GT_t_cljs$core$async15389 = (function cljs$core$async$__GT_t_cljs$core$async15389(flag,cb,meta15390){
return (new cljs.core.async.t_cljs$core$async15389(flag,cb,meta15390));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15389(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15407_SHARP_){
var G__15412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15407_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15412) : fret.call(null, G__15412));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15408_SHARP_){
var G__15413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15408_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15413) : fret.call(null, G__15413));
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
var G__18867 = (i + (1));
i = G__18867;
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
var len__5726__auto___18868 = arguments.length;
var i__5727__auto___18869 = (0);
while(true){
if((i__5727__auto___18869 < len__5726__auto___18868)){
args__5732__auto__.push((arguments[i__5727__auto___18869]));

var G__18870 = (i__5727__auto___18869 + (1));
i__5727__auto___18869 = G__18870;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15422){
var map__15423 = p__15422;
var map__15423__$1 = cljs.core.__destructure_map(map__15423);
var opts = map__15423__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15420){
var G__15421 = cljs.core.first(seq15420);
var seq15420__$1 = cljs.core.next(seq15420);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15421,seq15420__$1);
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
var G__15425 = arguments.length;
switch (G__15425) {
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
var c__15140__auto___18878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_15475){
var state_val_15476 = (state_15475[(1)]);
if((state_val_15476 === (7))){
var inst_15469 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15484_18879 = state_15475__$1;
(statearr_15484_18879[(2)] = inst_15469);

(statearr_15484_18879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (1))){
var state_15475__$1 = state_15475;
var statearr_15485_18882 = state_15475__$1;
(statearr_15485_18882[(2)] = null);

(statearr_15485_18882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (4))){
var inst_15446 = (state_15475[(7)]);
var inst_15446__$1 = (state_15475[(2)]);
var inst_15449 = (inst_15446__$1 == null);
var state_15475__$1 = (function (){var statearr_15488 = state_15475;
(statearr_15488[(7)] = inst_15446__$1);

return statearr_15488;
})();
if(cljs.core.truth_(inst_15449)){
var statearr_15489_18889 = state_15475__$1;
(statearr_15489_18889[(1)] = (5));

} else {
var statearr_15490_18890 = state_15475__$1;
(statearr_15490_18890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (13))){
var state_15475__$1 = state_15475;
var statearr_15494_18893 = state_15475__$1;
(statearr_15494_18893[(2)] = null);

(statearr_15494_18893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (6))){
var inst_15446 = (state_15475[(7)]);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15475__$1,(11),to,inst_15446);
} else {
if((state_val_15476 === (3))){
var inst_15471 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15475__$1,inst_15471);
} else {
if((state_val_15476 === (12))){
var state_15475__$1 = state_15475;
var statearr_15496_18900 = state_15475__$1;
(statearr_15496_18900[(2)] = null);

(statearr_15496_18900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (2))){
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15475__$1,(4),from);
} else {
if((state_val_15476 === (11))){
var inst_15462 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
if(cljs.core.truth_(inst_15462)){
var statearr_15497_18901 = state_15475__$1;
(statearr_15497_18901[(1)] = (12));

} else {
var statearr_15498_18902 = state_15475__$1;
(statearr_15498_18902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (9))){
var state_15475__$1 = state_15475;
var statearr_15499_18903 = state_15475__$1;
(statearr_15499_18903[(2)] = null);

(statearr_15499_18903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (5))){
var state_15475__$1 = state_15475;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15502_18904 = state_15475__$1;
(statearr_15502_18904[(1)] = (8));

} else {
var statearr_15503_18905 = state_15475__$1;
(statearr_15503_18905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (14))){
var inst_15467 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15504_18906 = state_15475__$1;
(statearr_15504_18906[(2)] = inst_15467);

(statearr_15504_18906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (10))){
var inst_15459 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15505_18907 = state_15475__$1;
(statearr_15505_18907[(2)] = inst_15459);

(statearr_15505_18907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15476 === (8))){
var inst_15452 = cljs.core.async.close_BANG_(to);
var state_15475__$1 = state_15475;
var statearr_15506_18908 = state_15475__$1;
(statearr_15506_18908[(2)] = inst_15452);

(statearr_15506_18908[(1)] = (10));


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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_15507 = [null,null,null,null,null,null,null,null];
(statearr_15507[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_15507[(1)] = (1));

return statearr_15507;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_15475){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_15475);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e15508){var ex__14368__auto__ = e15508;
var statearr_15509_18910 = state_15475;
(statearr_15509_18910[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_15475[(4)]))){
var statearr_15511_18911 = state_15475;
(statearr_15511_18911[(1)] = cljs.core.first((state_15475[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18924 = state_15475;
state_15475 = G__18924;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_15475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_15475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_15512 = f__15141__auto__();
(statearr_15512[(6)] = c__15140__auto___18878);

return statearr_15512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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
var process__$1 = (function (p__15515){
var vec__15516 = p__15515;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15516,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15516,(1),null);
var job = vec__15516;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15140__auto___18925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_15523){
var state_val_15524 = (state_15523[(1)]);
if((state_val_15524 === (1))){
var state_15523__$1 = state_15523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15523__$1,(2),res,v);
} else {
if((state_val_15524 === (2))){
var inst_15520 = (state_15523[(2)]);
var inst_15521 = cljs.core.async.close_BANG_(res);
var state_15523__$1 = (function (){var statearr_15529 = state_15523;
(statearr_15529[(7)] = inst_15520);

return statearr_15529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15523__$1,inst_15521);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0 = (function (){
var statearr_15532 = [null,null,null,null,null,null,null,null];
(statearr_15532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__);

(statearr_15532[(1)] = (1));

return statearr_15532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1 = (function (state_15523){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_15523);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e15533){var ex__14368__auto__ = e15533;
var statearr_15534_18932 = state_15523;
(statearr_15534_18932[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_15523[(4)]))){
var statearr_15535_18933 = state_15523;
(statearr_15535_18933[(1)] = cljs.core.first((state_15523[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18935 = state_15523;
state_15523 = G__18935;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = function(state_15523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1.call(this,state_15523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_15537 = f__15141__auto__();
(statearr_15537[(6)] = c__15140__auto___18925);

return statearr_15537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15540){
var vec__15541 = p__15540;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541,(1),null);
var job = vec__15541;
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
var n__5593__auto___18937 = n;
var __18938 = (0);
while(true){
if((__18938 < n__5593__auto___18937)){
var G__15549_18939 = type;
var G__15549_18940__$1 = (((G__15549_18939 instanceof cljs.core.Keyword))?G__15549_18939.fqn:null);
switch (G__15549_18940__$1) {
case "compute":
var c__15140__auto___18943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18938,c__15140__auto___18943,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async){
return (function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = ((function (__18938,c__15140__auto___18943,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async){
return (function (state_15562){
var state_val_15563 = (state_15562[(1)]);
if((state_val_15563 === (1))){
var state_15562__$1 = state_15562;
var statearr_15565_18944 = state_15562__$1;
(statearr_15565_18944[(2)] = null);

(statearr_15565_18944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (2))){
var state_15562__$1 = state_15562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15562__$1,(4),jobs);
} else {
if((state_val_15563 === (3))){
var inst_15560 = (state_15562[(2)]);
var state_15562__$1 = state_15562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15562__$1,inst_15560);
} else {
if((state_val_15563 === (4))){
var inst_15552 = (state_15562[(2)]);
var inst_15553 = process__$1(inst_15552);
var state_15562__$1 = state_15562;
if(cljs.core.truth_(inst_15553)){
var statearr_15566_18945 = state_15562__$1;
(statearr_15566_18945[(1)] = (5));

} else {
var statearr_15567_18946 = state_15562__$1;
(statearr_15567_18946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (5))){
var state_15562__$1 = state_15562;
var statearr_15568_18947 = state_15562__$1;
(statearr_15568_18947[(2)] = null);

(statearr_15568_18947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (6))){
var state_15562__$1 = state_15562;
var statearr_15570_18948 = state_15562__$1;
(statearr_15570_18948[(2)] = null);

(statearr_15570_18948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (7))){
var inst_15558 = (state_15562[(2)]);
var state_15562__$1 = state_15562;
var statearr_15572_18949 = state_15562__$1;
(statearr_15572_18949[(2)] = inst_15558);

(statearr_15572_18949[(1)] = (3));


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
});})(__18938,c__15140__auto___18943,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async))
;
return ((function (__18938,switch__14363__auto__,c__15140__auto___18943,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0 = (function (){
var statearr_15574 = [null,null,null,null,null,null,null];
(statearr_15574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__);

(statearr_15574[(1)] = (1));

return statearr_15574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1 = (function (state_15562){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_15562);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e15575){var ex__14368__auto__ = e15575;
var statearr_15576_18951 = state_15562;
(statearr_15576_18951[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_15562[(4)]))){
var statearr_15577_18952 = state_15562;
(statearr_15577_18952[(1)] = cljs.core.first((state_15562[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18957 = state_15562;
state_15562 = G__18957;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = function(state_15562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1.call(this,state_15562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__;
})()
;})(__18938,switch__14363__auto__,c__15140__auto___18943,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async))
})();
var state__15142__auto__ = (function (){var statearr_15578 = f__15141__auto__();
(statearr_15578[(6)] = c__15140__auto___18943);

return statearr_15578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
});})(__18938,c__15140__auto___18943,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async))
);


break;
case "async":
var c__15140__auto___18958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18938,c__15140__auto___18958,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async){
return (function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = ((function (__18938,c__15140__auto___18958,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async){
return (function (state_15591){
var state_val_15592 = (state_15591[(1)]);
if((state_val_15592 === (1))){
var state_15591__$1 = state_15591;
var statearr_15595_18962 = state_15591__$1;
(statearr_15595_18962[(2)] = null);

(statearr_15595_18962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (2))){
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15591__$1,(4),jobs);
} else {
if((state_val_15592 === (3))){
var inst_15589 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15591__$1,inst_15589);
} else {
if((state_val_15592 === (4))){
var inst_15581 = (state_15591[(2)]);
var inst_15582 = async(inst_15581);
var state_15591__$1 = state_15591;
if(cljs.core.truth_(inst_15582)){
var statearr_15599_18966 = state_15591__$1;
(statearr_15599_18966[(1)] = (5));

} else {
var statearr_15600_18967 = state_15591__$1;
(statearr_15600_18967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (5))){
var state_15591__$1 = state_15591;
var statearr_15601_18968 = state_15591__$1;
(statearr_15601_18968[(2)] = null);

(statearr_15601_18968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (6))){
var state_15591__$1 = state_15591;
var statearr_15603_18969 = state_15591__$1;
(statearr_15603_18969[(2)] = null);

(statearr_15603_18969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (7))){
var inst_15587 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
var statearr_15604_18974 = state_15591__$1;
(statearr_15604_18974[(2)] = inst_15587);

(statearr_15604_18974[(1)] = (3));


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
});})(__18938,c__15140__auto___18958,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async))
;
return ((function (__18938,switch__14363__auto__,c__15140__auto___18958,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0 = (function (){
var statearr_15605 = [null,null,null,null,null,null,null];
(statearr_15605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__);

(statearr_15605[(1)] = (1));

return statearr_15605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1 = (function (state_15591){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_15591);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e15606){var ex__14368__auto__ = e15606;
var statearr_15607_18975 = state_15591;
(statearr_15607_18975[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_15591[(4)]))){
var statearr_15608_18976 = state_15591;
(statearr_15608_18976[(1)] = cljs.core.first((state_15591[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18977 = state_15591;
state_15591 = G__18977;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = function(state_15591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1.call(this,state_15591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__;
})()
;})(__18938,switch__14363__auto__,c__15140__auto___18958,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async))
})();
var state__15142__auto__ = (function (){var statearr_15609 = f__15141__auto__();
(statearr_15609[(6)] = c__15140__auto___18958);

return statearr_15609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
});})(__18938,c__15140__auto___18958,G__15549_18939,G__15549_18940__$1,n__5593__auto___18937,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15549_18940__$1)].join('')));

}

var G__18979 = (__18938 + (1));
__18938 = G__18979;
continue;
} else {
}
break;
}

var c__15140__auto___18981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_15634){
var state_val_15635 = (state_15634[(1)]);
if((state_val_15635 === (7))){
var inst_15630 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
var statearr_15647_18983 = state_15634__$1;
(statearr_15647_18983[(2)] = inst_15630);

(statearr_15647_18983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (1))){
var state_15634__$1 = state_15634;
var statearr_15648_18984 = state_15634__$1;
(statearr_15648_18984[(2)] = null);

(statearr_15648_18984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (4))){
var inst_15613 = (state_15634[(7)]);
var inst_15613__$1 = (state_15634[(2)]);
var inst_15614 = (inst_15613__$1 == null);
var state_15634__$1 = (function (){var statearr_15649 = state_15634;
(statearr_15649[(7)] = inst_15613__$1);

return statearr_15649;
})();
if(cljs.core.truth_(inst_15614)){
var statearr_15650_18985 = state_15634__$1;
(statearr_15650_18985[(1)] = (5));

} else {
var statearr_15651_18986 = state_15634__$1;
(statearr_15651_18986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (6))){
var inst_15613 = (state_15634[(7)]);
var inst_15619 = (state_15634[(8)]);
var inst_15619__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15622 = [inst_15613,inst_15619__$1];
var inst_15623 = (new cljs.core.PersistentVector(null,2,(5),inst_15621,inst_15622,null));
var state_15634__$1 = (function (){var statearr_15654 = state_15634;
(statearr_15654[(8)] = inst_15619__$1);

return statearr_15654;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15634__$1,(8),jobs,inst_15623);
} else {
if((state_val_15635 === (3))){
var inst_15632 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15634__$1,inst_15632);
} else {
if((state_val_15635 === (2))){
var state_15634__$1 = state_15634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15634__$1,(4),from);
} else {
if((state_val_15635 === (9))){
var inst_15627 = (state_15634[(2)]);
var state_15634__$1 = (function (){var statearr_15657 = state_15634;
(statearr_15657[(9)] = inst_15627);

return statearr_15657;
})();
var statearr_15659_18987 = state_15634__$1;
(statearr_15659_18987[(2)] = null);

(statearr_15659_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (5))){
var inst_15617 = cljs.core.async.close_BANG_(jobs);
var state_15634__$1 = state_15634;
var statearr_15663_18988 = state_15634__$1;
(statearr_15663_18988[(2)] = inst_15617);

(statearr_15663_18988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (8))){
var inst_15619 = (state_15634[(8)]);
var inst_15625 = (state_15634[(2)]);
var state_15634__$1 = (function (){var statearr_15664 = state_15634;
(statearr_15664[(10)] = inst_15625);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15634__$1,(9),results,inst_15619);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0 = (function (){
var statearr_15666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__);

(statearr_15666[(1)] = (1));

return statearr_15666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1 = (function (state_15634){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_15634);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e15667){var ex__14368__auto__ = e15667;
var statearr_15668_18995 = state_15634;
(statearr_15668_18995[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_15634[(4)]))){
var statearr_15669_18996 = state_15634;
(statearr_15669_18996[(1)] = cljs.core.first((state_15634[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19003 = state_15634;
state_15634 = G__19003;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = function(state_15634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1.call(this,state_15634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_15670 = f__15141__auto__();
(statearr_15670[(6)] = c__15140__auto___18981);

return statearr_15670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));


var c__15140__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_15710){
var state_val_15711 = (state_15710[(1)]);
if((state_val_15711 === (7))){
var inst_15706 = (state_15710[(2)]);
var state_15710__$1 = state_15710;
var statearr_15712_19004 = state_15710__$1;
(statearr_15712_19004[(2)] = inst_15706);

(statearr_15712_19004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (20))){
var state_15710__$1 = state_15710;
var statearr_15713_19005 = state_15710__$1;
(statearr_15713_19005[(2)] = null);

(statearr_15713_19005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (1))){
var state_15710__$1 = state_15710;
var statearr_15715_19006 = state_15710__$1;
(statearr_15715_19006[(2)] = null);

(statearr_15715_19006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (4))){
var inst_15673 = (state_15710[(7)]);
var inst_15673__$1 = (state_15710[(2)]);
var inst_15674 = (inst_15673__$1 == null);
var state_15710__$1 = (function (){var statearr_15716 = state_15710;
(statearr_15716[(7)] = inst_15673__$1);

return statearr_15716;
})();
if(cljs.core.truth_(inst_15674)){
var statearr_15717_19008 = state_15710__$1;
(statearr_15717_19008[(1)] = (5));

} else {
var statearr_15719_19009 = state_15710__$1;
(statearr_15719_19009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (15))){
var inst_15688 = (state_15710[(8)]);
var state_15710__$1 = state_15710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15710__$1,(18),to,inst_15688);
} else {
if((state_val_15711 === (21))){
var inst_15701 = (state_15710[(2)]);
var state_15710__$1 = state_15710;
var statearr_15720_19010 = state_15710__$1;
(statearr_15720_19010[(2)] = inst_15701);

(statearr_15720_19010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (13))){
var inst_15703 = (state_15710[(2)]);
var state_15710__$1 = (function (){var statearr_15724 = state_15710;
(statearr_15724[(9)] = inst_15703);

return statearr_15724;
})();
var statearr_15725_19011 = state_15710__$1;
(statearr_15725_19011[(2)] = null);

(statearr_15725_19011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (6))){
var inst_15673 = (state_15710[(7)]);
var state_15710__$1 = state_15710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15710__$1,(11),inst_15673);
} else {
if((state_val_15711 === (17))){
var inst_15696 = (state_15710[(2)]);
var state_15710__$1 = state_15710;
if(cljs.core.truth_(inst_15696)){
var statearr_15727_19012 = state_15710__$1;
(statearr_15727_19012[(1)] = (19));

} else {
var statearr_15728_19013 = state_15710__$1;
(statearr_15728_19013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (3))){
var inst_15708 = (state_15710[(2)]);
var state_15710__$1 = state_15710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15710__$1,inst_15708);
} else {
if((state_val_15711 === (12))){
var inst_15684 = (state_15710[(10)]);
var state_15710__$1 = state_15710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15710__$1,(14),inst_15684);
} else {
if((state_val_15711 === (2))){
var state_15710__$1 = state_15710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15710__$1,(4),results);
} else {
if((state_val_15711 === (19))){
var state_15710__$1 = state_15710;
var statearr_15729_19016 = state_15710__$1;
(statearr_15729_19016[(2)] = null);

(statearr_15729_19016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (11))){
var inst_15684 = (state_15710[(2)]);
var state_15710__$1 = (function (){var statearr_15731 = state_15710;
(statearr_15731[(10)] = inst_15684);

return statearr_15731;
})();
var statearr_15734_19017 = state_15710__$1;
(statearr_15734_19017[(2)] = null);

(statearr_15734_19017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (9))){
var state_15710__$1 = state_15710;
var statearr_15736_19018 = state_15710__$1;
(statearr_15736_19018[(2)] = null);

(statearr_15736_19018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (5))){
var state_15710__$1 = state_15710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15738_19019 = state_15710__$1;
(statearr_15738_19019[(1)] = (8));

} else {
var statearr_15739_19020 = state_15710__$1;
(statearr_15739_19020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (14))){
var inst_15688 = (state_15710[(8)]);
var inst_15690 = (state_15710[(11)]);
var inst_15688__$1 = (state_15710[(2)]);
var inst_15689 = (inst_15688__$1 == null);
var inst_15690__$1 = cljs.core.not(inst_15689);
var state_15710__$1 = (function (){var statearr_15743 = state_15710;
(statearr_15743[(8)] = inst_15688__$1);

(statearr_15743[(11)] = inst_15690__$1);

return statearr_15743;
})();
if(inst_15690__$1){
var statearr_15744_19021 = state_15710__$1;
(statearr_15744_19021[(1)] = (15));

} else {
var statearr_15745_19022 = state_15710__$1;
(statearr_15745_19022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (16))){
var inst_15690 = (state_15710[(11)]);
var state_15710__$1 = state_15710;
var statearr_15746_19023 = state_15710__$1;
(statearr_15746_19023[(2)] = inst_15690);

(statearr_15746_19023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (10))){
var inst_15680 = (state_15710[(2)]);
var state_15710__$1 = state_15710;
var statearr_15748_19025 = state_15710__$1;
(statearr_15748_19025[(2)] = inst_15680);

(statearr_15748_19025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (18))){
var inst_15693 = (state_15710[(2)]);
var state_15710__$1 = state_15710;
var statearr_15750_19026 = state_15710__$1;
(statearr_15750_19026[(2)] = inst_15693);

(statearr_15750_19026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15711 === (8))){
var inst_15677 = cljs.core.async.close_BANG_(to);
var state_15710__$1 = state_15710;
var statearr_15751_19027 = state_15710__$1;
(statearr_15751_19027[(2)] = inst_15677);

(statearr_15751_19027[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0 = (function (){
var statearr_15760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__);

(statearr_15760[(1)] = (1));

return statearr_15760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1 = (function (state_15710){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_15710);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e15763){var ex__14368__auto__ = e15763;
var statearr_15764_19030 = state_15710;
(statearr_15764_19030[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_15710[(4)]))){
var statearr_15765_19031 = state_15710;
(statearr_15765_19031[(1)] = cljs.core.first((state_15710[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19032 = state_15710;
state_15710 = G__19032;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__ = function(state_15710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1.call(this,state_15710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_15766 = f__15141__auto__();
(statearr_15766[(6)] = c__15140__auto__);

return statearr_15766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));

return c__15140__auto__;
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
var G__15769 = arguments.length;
switch (G__15769) {
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
var G__15776 = arguments.length;
switch (G__15776) {
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
var G__15782 = arguments.length;
switch (G__15782) {
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
var c__15140__auto___19048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_15812){
var state_val_15813 = (state_15812[(1)]);
if((state_val_15813 === (7))){
var inst_15808 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15814_19049 = state_15812__$1;
(statearr_15814_19049[(2)] = inst_15808);

(statearr_15814_19049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (1))){
var state_15812__$1 = state_15812;
var statearr_15815_19050 = state_15812__$1;
(statearr_15815_19050[(2)] = null);

(statearr_15815_19050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (4))){
var inst_15786 = (state_15812[(7)]);
var inst_15786__$1 = (state_15812[(2)]);
var inst_15787 = (inst_15786__$1 == null);
var state_15812__$1 = (function (){var statearr_15819 = state_15812;
(statearr_15819[(7)] = inst_15786__$1);

return statearr_15819;
})();
if(cljs.core.truth_(inst_15787)){
var statearr_15820_19051 = state_15812__$1;
(statearr_15820_19051[(1)] = (5));

} else {
var statearr_15821_19052 = state_15812__$1;
(statearr_15821_19052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (13))){
var state_15812__$1 = state_15812;
var statearr_15825_19053 = state_15812__$1;
(statearr_15825_19053[(2)] = null);

(statearr_15825_19053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (6))){
var inst_15786 = (state_15812[(7)]);
var inst_15795 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15786) : p.call(null, inst_15786));
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15795)){
var statearr_15828_19054 = state_15812__$1;
(statearr_15828_19054[(1)] = (9));

} else {
var statearr_15830_19055 = state_15812__$1;
(statearr_15830_19055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (3))){
var inst_15810 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15812__$1,inst_15810);
} else {
if((state_val_15813 === (12))){
var state_15812__$1 = state_15812;
var statearr_15832_19056 = state_15812__$1;
(statearr_15832_19056[(2)] = null);

(statearr_15832_19056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (2))){
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15812__$1,(4),ch);
} else {
if((state_val_15813 === (11))){
var inst_15786 = (state_15812[(7)]);
var inst_15799 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15812__$1,(8),inst_15799,inst_15786);
} else {
if((state_val_15813 === (9))){
var state_15812__$1 = state_15812;
var statearr_15837_19060 = state_15812__$1;
(statearr_15837_19060[(2)] = tc);

(statearr_15837_19060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (5))){
var inst_15789 = cljs.core.async.close_BANG_(tc);
var inst_15790 = cljs.core.async.close_BANG_(fc);
var state_15812__$1 = (function (){var statearr_15842 = state_15812;
(statearr_15842[(8)] = inst_15789);

return statearr_15842;
})();
var statearr_15847_19061 = state_15812__$1;
(statearr_15847_19061[(2)] = inst_15790);

(statearr_15847_19061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (14))){
var inst_15806 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15848_19062 = state_15812__$1;
(statearr_15848_19062[(2)] = inst_15806);

(statearr_15848_19062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (10))){
var state_15812__$1 = state_15812;
var statearr_15853_19063 = state_15812__$1;
(statearr_15853_19063[(2)] = fc);

(statearr_15853_19063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (8))){
var inst_15801 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15801)){
var statearr_15856_19066 = state_15812__$1;
(statearr_15856_19066[(1)] = (12));

} else {
var statearr_15857_19067 = state_15812__$1;
(statearr_15857_19067[(1)] = (13));

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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_15859 = [null,null,null,null,null,null,null,null,null];
(statearr_15859[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_15859[(1)] = (1));

return statearr_15859;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_15812){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_15812);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e15860){var ex__14368__auto__ = e15860;
var statearr_15861_19068 = state_15812;
(statearr_15861_19068[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_15812[(4)]))){
var statearr_15863_19069 = state_15812;
(statearr_15863_19069[(1)] = cljs.core.first((state_15812[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19075 = state_15812;
state_15812 = G__19075;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_15812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_15812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_15864 = f__15141__auto__();
(statearr_15864[(6)] = c__15140__auto___19048);

return statearr_15864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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
var c__15140__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_16051){
var state_val_16053 = (state_16051[(1)]);
if((state_val_16053 === (7))){
var inst_16047 = (state_16051[(2)]);
var state_16051__$1 = state_16051;
var statearr_16061_19079 = state_16051__$1;
(statearr_16061_19079[(2)] = inst_16047);

(statearr_16061_19079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (1))){
var inst_16030 = init;
var inst_16031 = inst_16030;
var state_16051__$1 = (function (){var statearr_16066 = state_16051;
(statearr_16066[(7)] = inst_16031);

return statearr_16066;
})();
var statearr_16068_19080 = state_16051__$1;
(statearr_16068_19080[(2)] = null);

(statearr_16068_19080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (4))){
var inst_16034 = (state_16051[(8)]);
var inst_16034__$1 = (state_16051[(2)]);
var inst_16035 = (inst_16034__$1 == null);
var state_16051__$1 = (function (){var statearr_16071 = state_16051;
(statearr_16071[(8)] = inst_16034__$1);

return statearr_16071;
})();
if(cljs.core.truth_(inst_16035)){
var statearr_16073_19081 = state_16051__$1;
(statearr_16073_19081[(1)] = (5));

} else {
var statearr_16074_19082 = state_16051__$1;
(statearr_16074_19082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (6))){
var inst_16038 = (state_16051[(9)]);
var inst_16034 = (state_16051[(8)]);
var inst_16031 = (state_16051[(7)]);
var inst_16038__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16031,inst_16034) : f.call(null, inst_16031,inst_16034));
var inst_16039 = cljs.core.reduced_QMARK_(inst_16038__$1);
var state_16051__$1 = (function (){var statearr_16079 = state_16051;
(statearr_16079[(9)] = inst_16038__$1);

return statearr_16079;
})();
if(inst_16039){
var statearr_16081_19093 = state_16051__$1;
(statearr_16081_19093[(1)] = (8));

} else {
var statearr_16082_19094 = state_16051__$1;
(statearr_16082_19094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (3))){
var inst_16049 = (state_16051[(2)]);
var state_16051__$1 = state_16051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16051__$1,inst_16049);
} else {
if((state_val_16053 === (2))){
var state_16051__$1 = state_16051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16051__$1,(4),ch);
} else {
if((state_val_16053 === (9))){
var inst_16038 = (state_16051[(9)]);
var inst_16031 = inst_16038;
var state_16051__$1 = (function (){var statearr_16093 = state_16051;
(statearr_16093[(7)] = inst_16031);

return statearr_16093;
})();
var statearr_16095_19095 = state_16051__$1;
(statearr_16095_19095[(2)] = null);

(statearr_16095_19095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (5))){
var inst_16031 = (state_16051[(7)]);
var state_16051__$1 = state_16051;
var statearr_16096_19096 = state_16051__$1;
(statearr_16096_19096[(2)] = inst_16031);

(statearr_16096_19096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (10))){
var inst_16045 = (state_16051[(2)]);
var state_16051__$1 = state_16051;
var statearr_16103_19097 = state_16051__$1;
(statearr_16103_19097[(2)] = inst_16045);

(statearr_16103_19097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16053 === (8))){
var inst_16038 = (state_16051[(9)]);
var inst_16041 = cljs.core.deref(inst_16038);
var state_16051__$1 = state_16051;
var statearr_16105_19098 = state_16051__$1;
(statearr_16105_19098[(2)] = inst_16041);

(statearr_16105_19098[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14364__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14364__auto____0 = (function (){
var statearr_16107 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16107[(0)] = cljs$core$async$reduce_$_state_machine__14364__auto__);

(statearr_16107[(1)] = (1));

return statearr_16107;
});
var cljs$core$async$reduce_$_state_machine__14364__auto____1 = (function (state_16051){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_16051);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e16110){var ex__14368__auto__ = e16110;
var statearr_16112_19099 = state_16051;
(statearr_16112_19099[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_16051[(4)]))){
var statearr_16113_19100 = state_16051;
(statearr_16113_19100[(1)] = cljs.core.first((state_16051[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19101 = state_16051;
state_16051 = G__19101;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14364__auto__ = function(state_16051){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14364__auto____1.call(this,state_16051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14364__auto____0;
cljs$core$async$reduce_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14364__auto____1;
return cljs$core$async$reduce_$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_16116 = f__15141__auto__();
(statearr_16116[(6)] = c__15140__auto__);

return statearr_16116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));

return c__15140__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__15140__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_16139){
var state_val_16141 = (state_16139[(1)]);
if((state_val_16141 === (1))){
var inst_16133 = cljs.core.async.reduce(f__$1,init,ch);
var state_16139__$1 = state_16139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16139__$1,(2),inst_16133);
} else {
if((state_val_16141 === (2))){
var inst_16135 = (state_16139[(2)]);
var inst_16136 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16135) : f__$1.call(null, inst_16135));
var state_16139__$1 = state_16139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16139__$1,inst_16136);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14364__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14364__auto____0 = (function (){
var statearr_16146 = [null,null,null,null,null,null,null];
(statearr_16146[(0)] = cljs$core$async$transduce_$_state_machine__14364__auto__);

(statearr_16146[(1)] = (1));

return statearr_16146;
});
var cljs$core$async$transduce_$_state_machine__14364__auto____1 = (function (state_16139){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_16139);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e16148){var ex__14368__auto__ = e16148;
var statearr_16149_19103 = state_16139;
(statearr_16149_19103[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_16139[(4)]))){
var statearr_16150_19104 = state_16139;
(statearr_16150_19104[(1)] = cljs.core.first((state_16139[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19105 = state_16139;
state_16139 = G__19105;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14364__auto__ = function(state_16139){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14364__auto____1.call(this,state_16139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14364__auto____0;
cljs$core$async$transduce_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14364__auto____1;
return cljs$core$async$transduce_$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_16154 = f__15141__auto__();
(statearr_16154[(6)] = c__15140__auto__);

return statearr_16154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));

return c__15140__auto__;
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
var G__16161 = arguments.length;
switch (G__16161) {
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
var c__15140__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_16197){
var state_val_16198 = (state_16197[(1)]);
if((state_val_16198 === (7))){
var inst_16174 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
var statearr_16204_19116 = state_16197__$1;
(statearr_16204_19116[(2)] = inst_16174);

(statearr_16204_19116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (1))){
var inst_16168 = cljs.core.seq(coll);
var inst_16169 = inst_16168;
var state_16197__$1 = (function (){var statearr_16206 = state_16197;
(statearr_16206[(7)] = inst_16169);

return statearr_16206;
})();
var statearr_16207_19117 = state_16197__$1;
(statearr_16207_19117[(2)] = null);

(statearr_16207_19117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (4))){
var inst_16169 = (state_16197[(7)]);
var inst_16172 = cljs.core.first(inst_16169);
var state_16197__$1 = state_16197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16197__$1,(7),ch,inst_16172);
} else {
if((state_val_16198 === (13))){
var inst_16189 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
var statearr_16211_19118 = state_16197__$1;
(statearr_16211_19118[(2)] = inst_16189);

(statearr_16211_19118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (6))){
var inst_16177 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
if(cljs.core.truth_(inst_16177)){
var statearr_16215_19119 = state_16197__$1;
(statearr_16215_19119[(1)] = (8));

} else {
var statearr_16216_19120 = state_16197__$1;
(statearr_16216_19120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (3))){
var inst_16193 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16197__$1,inst_16193);
} else {
if((state_val_16198 === (12))){
var state_16197__$1 = state_16197;
var statearr_16219_19121 = state_16197__$1;
(statearr_16219_19121[(2)] = null);

(statearr_16219_19121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (2))){
var inst_16169 = (state_16197[(7)]);
var state_16197__$1 = state_16197;
if(cljs.core.truth_(inst_16169)){
var statearr_16223_19122 = state_16197__$1;
(statearr_16223_19122[(1)] = (4));

} else {
var statearr_16224_19123 = state_16197__$1;
(statearr_16224_19123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (11))){
var inst_16185 = cljs.core.async.close_BANG_(ch);
var state_16197__$1 = state_16197;
var statearr_16225_19124 = state_16197__$1;
(statearr_16225_19124[(2)] = inst_16185);

(statearr_16225_19124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (9))){
var state_16197__$1 = state_16197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16227_19128 = state_16197__$1;
(statearr_16227_19128[(1)] = (11));

} else {
var statearr_16228_19129 = state_16197__$1;
(statearr_16228_19129[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (5))){
var inst_16169 = (state_16197[(7)]);
var state_16197__$1 = state_16197;
var statearr_16232_19130 = state_16197__$1;
(statearr_16232_19130[(2)] = inst_16169);

(statearr_16232_19130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (10))){
var inst_16191 = (state_16197[(2)]);
var state_16197__$1 = state_16197;
var statearr_16234_19131 = state_16197__$1;
(statearr_16234_19131[(2)] = inst_16191);

(statearr_16234_19131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16198 === (8))){
var inst_16169 = (state_16197[(7)]);
var inst_16179 = cljs.core.next(inst_16169);
var inst_16169__$1 = inst_16179;
var state_16197__$1 = (function (){var statearr_16236 = state_16197;
(statearr_16236[(7)] = inst_16169__$1);

return statearr_16236;
})();
var statearr_16237_19132 = state_16197__$1;
(statearr_16237_19132[(2)] = null);

(statearr_16237_19132[(1)] = (2));


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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_16241 = [null,null,null,null,null,null,null,null];
(statearr_16241[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_16241[(1)] = (1));

return statearr_16241;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_16197){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_16197);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e16242){var ex__14368__auto__ = e16242;
var statearr_16244_19133 = state_16197;
(statearr_16244_19133[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_16197[(4)]))){
var statearr_16246_19134 = state_16197;
(statearr_16246_19134[(1)] = cljs.core.first((state_16197[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19135 = state_16197;
state_16197 = G__19135;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_16197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_16197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_16247 = f__15141__auto__();
(statearr_16247[(6)] = c__15140__auto__);

return statearr_16247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));

return c__15140__auto__;
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
var G__16249 = arguments.length;
switch (G__16249) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19140 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19140(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19141 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19141(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19146 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19146(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19147 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19147(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16263 = (function (ch,cs,meta16264){
this.ch = ch;
this.cs = cs;
this.meta16264 = meta16264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16265,meta16264__$1){
var self__ = this;
var _16265__$1 = this;
return (new cljs.core.async.t_cljs$core$async16263(self__.ch,self__.cs,meta16264__$1));
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16265){
var self__ = this;
var _16265__$1 = this;
return self__.meta16264;
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16263.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16264","meta16264",-1260425860,null)], null);
}));

(cljs.core.async.t_cljs$core$async16263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16263");

(cljs.core.async.t_cljs$core$async16263.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16263.
 */
cljs.core.async.__GT_t_cljs$core$async16263 = (function cljs$core$async$__GT_t_cljs$core$async16263(ch,cs,meta16264){
return (new cljs.core.async.t_cljs$core$async16263(ch,cs,meta16264));
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
var m = (new cljs.core.async.t_cljs$core$async16263(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15140__auto___19151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_16472){
var state_val_16474 = (state_16472[(1)]);
if((state_val_16474 === (7))){
var inst_16458 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16478_19152 = state_16472__$1;
(statearr_16478_19152[(2)] = inst_16458);

(statearr_16478_19152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (20))){
var inst_16312 = (state_16472[(7)]);
var inst_16326 = cljs.core.first(inst_16312);
var inst_16327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16326,(0),null);
var inst_16328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16326,(1),null);
var state_16472__$1 = (function (){var statearr_16481 = state_16472;
(statearr_16481[(8)] = inst_16327);

return statearr_16481;
})();
if(cljs.core.truth_(inst_16328)){
var statearr_16482_19153 = state_16472__$1;
(statearr_16482_19153[(1)] = (22));

} else {
var statearr_16483_19154 = state_16472__$1;
(statearr_16483_19154[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (27))){
var inst_16408 = (state_16472[(9)]);
var inst_16401 = (state_16472[(10)]);
var inst_16403 = (state_16472[(11)]);
var inst_16278 = (state_16472[(12)]);
var inst_16408__$1 = cljs.core._nth(inst_16401,inst_16403);
var inst_16409 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16408__$1,inst_16278,done);
var state_16472__$1 = (function (){var statearr_16490 = state_16472;
(statearr_16490[(9)] = inst_16408__$1);

return statearr_16490;
})();
if(cljs.core.truth_(inst_16409)){
var statearr_16491_19155 = state_16472__$1;
(statearr_16491_19155[(1)] = (30));

} else {
var statearr_16492_19156 = state_16472__$1;
(statearr_16492_19156[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (1))){
var state_16472__$1 = state_16472;
var statearr_16496_19157 = state_16472__$1;
(statearr_16496_19157[(2)] = null);

(statearr_16496_19157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (24))){
var inst_16312 = (state_16472[(7)]);
var inst_16333 = (state_16472[(2)]);
var inst_16334 = cljs.core.next(inst_16312);
var inst_16288 = inst_16334;
var inst_16289 = null;
var inst_16290 = (0);
var inst_16291 = (0);
var state_16472__$1 = (function (){var statearr_16498 = state_16472;
(statearr_16498[(13)] = inst_16288);

(statearr_16498[(14)] = inst_16333);

(statearr_16498[(15)] = inst_16290);

(statearr_16498[(16)] = inst_16289);

(statearr_16498[(17)] = inst_16291);

return statearr_16498;
})();
var statearr_16499_19162 = state_16472__$1;
(statearr_16499_19162[(2)] = null);

(statearr_16499_19162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (39))){
var state_16472__$1 = state_16472;
var statearr_16506_19163 = state_16472__$1;
(statearr_16506_19163[(2)] = null);

(statearr_16506_19163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (4))){
var inst_16278 = (state_16472[(12)]);
var inst_16278__$1 = (state_16472[(2)]);
var inst_16279 = (inst_16278__$1 == null);
var state_16472__$1 = (function (){var statearr_16510 = state_16472;
(statearr_16510[(12)] = inst_16278__$1);

return statearr_16510;
})();
if(cljs.core.truth_(inst_16279)){
var statearr_16511_19167 = state_16472__$1;
(statearr_16511_19167[(1)] = (5));

} else {
var statearr_16512_19168 = state_16472__$1;
(statearr_16512_19168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (15))){
var inst_16288 = (state_16472[(13)]);
var inst_16290 = (state_16472[(15)]);
var inst_16289 = (state_16472[(16)]);
var inst_16291 = (state_16472[(17)]);
var inst_16307 = (state_16472[(2)]);
var inst_16308 = (inst_16291 + (1));
var tmp16501 = inst_16288;
var tmp16502 = inst_16290;
var tmp16503 = inst_16289;
var inst_16288__$1 = tmp16501;
var inst_16289__$1 = tmp16503;
var inst_16290__$1 = tmp16502;
var inst_16291__$1 = inst_16308;
var state_16472__$1 = (function (){var statearr_16517 = state_16472;
(statearr_16517[(13)] = inst_16288__$1);

(statearr_16517[(15)] = inst_16290__$1);

(statearr_16517[(16)] = inst_16289__$1);

(statearr_16517[(17)] = inst_16291__$1);

(statearr_16517[(18)] = inst_16307);

return statearr_16517;
})();
var statearr_16518_19170 = state_16472__$1;
(statearr_16518_19170[(2)] = null);

(statearr_16518_19170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (21))){
var inst_16337 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16523_19172 = state_16472__$1;
(statearr_16523_19172[(2)] = inst_16337);

(statearr_16523_19172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (31))){
var inst_16408 = (state_16472[(9)]);
var inst_16412 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16408);
var state_16472__$1 = state_16472;
var statearr_16529_19173 = state_16472__$1;
(statearr_16529_19173[(2)] = inst_16412);

(statearr_16529_19173[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (32))){
var inst_16402 = (state_16472[(19)]);
var inst_16401 = (state_16472[(10)]);
var inst_16403 = (state_16472[(11)]);
var inst_16400 = (state_16472[(20)]);
var inst_16414 = (state_16472[(2)]);
var inst_16415 = (inst_16403 + (1));
var tmp16520 = inst_16402;
var tmp16521 = inst_16401;
var tmp16522 = inst_16400;
var inst_16400__$1 = tmp16522;
var inst_16401__$1 = tmp16521;
var inst_16402__$1 = tmp16520;
var inst_16403__$1 = inst_16415;
var state_16472__$1 = (function (){var statearr_16534 = state_16472;
(statearr_16534[(19)] = inst_16402__$1);

(statearr_16534[(21)] = inst_16414);

(statearr_16534[(10)] = inst_16401__$1);

(statearr_16534[(11)] = inst_16403__$1);

(statearr_16534[(20)] = inst_16400__$1);

return statearr_16534;
})();
var statearr_16536_19175 = state_16472__$1;
(statearr_16536_19175[(2)] = null);

(statearr_16536_19175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (40))){
var inst_16430 = (state_16472[(22)]);
var inst_16434 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_16430);
var state_16472__$1 = state_16472;
var statearr_16540_19178 = state_16472__$1;
(statearr_16540_19178[(2)] = inst_16434);

(statearr_16540_19178[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (33))){
var inst_16418 = (state_16472[(23)]);
var inst_16420 = cljs.core.chunked_seq_QMARK_(inst_16418);
var state_16472__$1 = state_16472;
if(inst_16420){
var statearr_16544_19179 = state_16472__$1;
(statearr_16544_19179[(1)] = (36));

} else {
var statearr_16546_19180 = state_16472__$1;
(statearr_16546_19180[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (13))){
var inst_16301 = (state_16472[(24)]);
var inst_16304 = cljs.core.async.close_BANG_(inst_16301);
var state_16472__$1 = state_16472;
var statearr_16552_19181 = state_16472__$1;
(statearr_16552_19181[(2)] = inst_16304);

(statearr_16552_19181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (22))){
var inst_16327 = (state_16472[(8)]);
var inst_16330 = cljs.core.async.close_BANG_(inst_16327);
var state_16472__$1 = state_16472;
var statearr_16577_19182 = state_16472__$1;
(statearr_16577_19182[(2)] = inst_16330);

(statearr_16577_19182[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (36))){
var inst_16418 = (state_16472[(23)]);
var inst_16423 = cljs.core.chunk_first(inst_16418);
var inst_16425 = cljs.core.chunk_rest(inst_16418);
var inst_16426 = cljs.core.count(inst_16423);
var inst_16400 = inst_16425;
var inst_16401 = inst_16423;
var inst_16402 = inst_16426;
var inst_16403 = (0);
var state_16472__$1 = (function (){var statearr_16580 = state_16472;
(statearr_16580[(19)] = inst_16402);

(statearr_16580[(10)] = inst_16401);

(statearr_16580[(11)] = inst_16403);

(statearr_16580[(20)] = inst_16400);

return statearr_16580;
})();
var statearr_16581_19183 = state_16472__$1;
(statearr_16581_19183[(2)] = null);

(statearr_16581_19183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (41))){
var inst_16418 = (state_16472[(23)]);
var inst_16436 = (state_16472[(2)]);
var inst_16437 = cljs.core.next(inst_16418);
var inst_16400 = inst_16437;
var inst_16401 = null;
var inst_16402 = (0);
var inst_16403 = (0);
var state_16472__$1 = (function (){var statearr_16584 = state_16472;
(statearr_16584[(19)] = inst_16402);

(statearr_16584[(10)] = inst_16401);

(statearr_16584[(11)] = inst_16403);

(statearr_16584[(25)] = inst_16436);

(statearr_16584[(20)] = inst_16400);

return statearr_16584;
})();
var statearr_16586_19194 = state_16472__$1;
(statearr_16586_19194[(2)] = null);

(statearr_16586_19194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (43))){
var state_16472__$1 = state_16472;
var statearr_16587_19195 = state_16472__$1;
(statearr_16587_19195[(2)] = null);

(statearr_16587_19195[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (29))){
var inst_16446 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16592_19196 = state_16472__$1;
(statearr_16592_19196[(2)] = inst_16446);

(statearr_16592_19196[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (44))){
var inst_16455 = (state_16472[(2)]);
var state_16472__$1 = (function (){var statearr_16593 = state_16472;
(statearr_16593[(26)] = inst_16455);

return statearr_16593;
})();
var statearr_16599_19197 = state_16472__$1;
(statearr_16599_19197[(2)] = null);

(statearr_16599_19197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (6))){
var inst_16347 = (state_16472[(27)]);
var inst_16346 = cljs.core.deref(cs);
var inst_16347__$1 = cljs.core.keys(inst_16346);
var inst_16348 = cljs.core.count(inst_16347__$1);
var inst_16349 = cljs.core.reset_BANG_(dctr,inst_16348);
var inst_16399 = cljs.core.seq(inst_16347__$1);
var inst_16400 = inst_16399;
var inst_16401 = null;
var inst_16402 = (0);
var inst_16403 = (0);
var state_16472__$1 = (function (){var statearr_16611 = state_16472;
(statearr_16611[(19)] = inst_16402);

(statearr_16611[(28)] = inst_16349);

(statearr_16611[(10)] = inst_16401);

(statearr_16611[(27)] = inst_16347__$1);

(statearr_16611[(11)] = inst_16403);

(statearr_16611[(20)] = inst_16400);

return statearr_16611;
})();
var statearr_16613_19198 = state_16472__$1;
(statearr_16613_19198[(2)] = null);

(statearr_16613_19198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (28))){
var inst_16418 = (state_16472[(23)]);
var inst_16400 = (state_16472[(20)]);
var inst_16418__$1 = cljs.core.seq(inst_16400);
var state_16472__$1 = (function (){var statearr_16616 = state_16472;
(statearr_16616[(23)] = inst_16418__$1);

return statearr_16616;
})();
if(inst_16418__$1){
var statearr_16618_19199 = state_16472__$1;
(statearr_16618_19199[(1)] = (33));

} else {
var statearr_16619_19200 = state_16472__$1;
(statearr_16619_19200[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (25))){
var inst_16402 = (state_16472[(19)]);
var inst_16403 = (state_16472[(11)]);
var inst_16405 = (inst_16403 < inst_16402);
var inst_16406 = inst_16405;
var state_16472__$1 = state_16472;
if(cljs.core.truth_(inst_16406)){
var statearr_16621_19202 = state_16472__$1;
(statearr_16621_19202[(1)] = (27));

} else {
var statearr_16624_19203 = state_16472__$1;
(statearr_16624_19203[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (34))){
var state_16472__$1 = state_16472;
var statearr_16631_19204 = state_16472__$1;
(statearr_16631_19204[(2)] = null);

(statearr_16631_19204[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (17))){
var state_16472__$1 = state_16472;
var statearr_16634_19208 = state_16472__$1;
(statearr_16634_19208[(2)] = null);

(statearr_16634_19208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (3))){
var inst_16460 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16472__$1,inst_16460);
} else {
if((state_val_16474 === (12))){
var inst_16342 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16639_19209 = state_16472__$1;
(statearr_16639_19209[(2)] = inst_16342);

(statearr_16639_19209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (2))){
var state_16472__$1 = state_16472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16472__$1,(4),ch);
} else {
if((state_val_16474 === (23))){
var state_16472__$1 = state_16472;
var statearr_16643_19210 = state_16472__$1;
(statearr_16643_19210[(2)] = null);

(statearr_16643_19210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (35))){
var inst_16444 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16645_19215 = state_16472__$1;
(statearr_16645_19215[(2)] = inst_16444);

(statearr_16645_19215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (19))){
var inst_16312 = (state_16472[(7)]);
var inst_16316 = cljs.core.chunk_first(inst_16312);
var inst_16317 = cljs.core.chunk_rest(inst_16312);
var inst_16318 = cljs.core.count(inst_16316);
var inst_16288 = inst_16317;
var inst_16289 = inst_16316;
var inst_16290 = inst_16318;
var inst_16291 = (0);
var state_16472__$1 = (function (){var statearr_16655 = state_16472;
(statearr_16655[(13)] = inst_16288);

(statearr_16655[(15)] = inst_16290);

(statearr_16655[(16)] = inst_16289);

(statearr_16655[(17)] = inst_16291);

return statearr_16655;
})();
var statearr_16657_19216 = state_16472__$1;
(statearr_16657_19216[(2)] = null);

(statearr_16657_19216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (11))){
var inst_16288 = (state_16472[(13)]);
var inst_16312 = (state_16472[(7)]);
var inst_16312__$1 = cljs.core.seq(inst_16288);
var state_16472__$1 = (function (){var statearr_16671 = state_16472;
(statearr_16671[(7)] = inst_16312__$1);

return statearr_16671;
})();
if(inst_16312__$1){
var statearr_16672_19218 = state_16472__$1;
(statearr_16672_19218[(1)] = (16));

} else {
var statearr_16674_19219 = state_16472__$1;
(statearr_16674_19219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (9))){
var inst_16344 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16676_19223 = state_16472__$1;
(statearr_16676_19223[(2)] = inst_16344);

(statearr_16676_19223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (5))){
var inst_16286 = cljs.core.deref(cs);
var inst_16287 = cljs.core.seq(inst_16286);
var inst_16288 = inst_16287;
var inst_16289 = null;
var inst_16290 = (0);
var inst_16291 = (0);
var state_16472__$1 = (function (){var statearr_16680 = state_16472;
(statearr_16680[(13)] = inst_16288);

(statearr_16680[(15)] = inst_16290);

(statearr_16680[(16)] = inst_16289);

(statearr_16680[(17)] = inst_16291);

return statearr_16680;
})();
var statearr_16682_19224 = state_16472__$1;
(statearr_16682_19224[(2)] = null);

(statearr_16682_19224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (14))){
var state_16472__$1 = state_16472;
var statearr_16683_19225 = state_16472__$1;
(statearr_16683_19225[(2)] = null);

(statearr_16683_19225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (45))){
var inst_16452 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16692_19230 = state_16472__$1;
(statearr_16692_19230[(2)] = inst_16452);

(statearr_16692_19230[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (26))){
var inst_16347 = (state_16472[(27)]);
var inst_16448 = (state_16472[(2)]);
var inst_16449 = cljs.core.seq(inst_16347);
var state_16472__$1 = (function (){var statearr_16696 = state_16472;
(statearr_16696[(29)] = inst_16448);

return statearr_16696;
})();
if(inst_16449){
var statearr_16701_19231 = state_16472__$1;
(statearr_16701_19231[(1)] = (42));

} else {
var statearr_16705_19232 = state_16472__$1;
(statearr_16705_19232[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (16))){
var inst_16312 = (state_16472[(7)]);
var inst_16314 = cljs.core.chunked_seq_QMARK_(inst_16312);
var state_16472__$1 = state_16472;
if(inst_16314){
var statearr_16708_19233 = state_16472__$1;
(statearr_16708_19233[(1)] = (19));

} else {
var statearr_16710_19234 = state_16472__$1;
(statearr_16710_19234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (38))){
var inst_16440 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16713_19235 = state_16472__$1;
(statearr_16713_19235[(2)] = inst_16440);

(statearr_16713_19235[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (30))){
var state_16472__$1 = state_16472;
var statearr_16719_19236 = state_16472__$1;
(statearr_16719_19236[(2)] = null);

(statearr_16719_19236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (10))){
var inst_16289 = (state_16472[(16)]);
var inst_16291 = (state_16472[(17)]);
var inst_16300 = cljs.core._nth(inst_16289,inst_16291);
var inst_16301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16300,(0),null);
var inst_16302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16300,(1),null);
var state_16472__$1 = (function (){var statearr_16724 = state_16472;
(statearr_16724[(24)] = inst_16301);

return statearr_16724;
})();
if(cljs.core.truth_(inst_16302)){
var statearr_16725_19240 = state_16472__$1;
(statearr_16725_19240[(1)] = (13));

} else {
var statearr_16727_19241 = state_16472__$1;
(statearr_16727_19241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (18))){
var inst_16340 = (state_16472[(2)]);
var state_16472__$1 = state_16472;
var statearr_16734_19242 = state_16472__$1;
(statearr_16734_19242[(2)] = inst_16340);

(statearr_16734_19242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (42))){
var state_16472__$1 = state_16472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16472__$1,(45),dchan);
} else {
if((state_val_16474 === (37))){
var inst_16430 = (state_16472[(22)]);
var inst_16418 = (state_16472[(23)]);
var inst_16278 = (state_16472[(12)]);
var inst_16430__$1 = cljs.core.first(inst_16418);
var inst_16431 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16430__$1,inst_16278,done);
var state_16472__$1 = (function (){var statearr_16740 = state_16472;
(statearr_16740[(22)] = inst_16430__$1);

return statearr_16740;
})();
if(cljs.core.truth_(inst_16431)){
var statearr_16743_19243 = state_16472__$1;
(statearr_16743_19243[(1)] = (39));

} else {
var statearr_16744_19244 = state_16472__$1;
(statearr_16744_19244[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (8))){
var inst_16290 = (state_16472[(15)]);
var inst_16291 = (state_16472[(17)]);
var inst_16293 = (inst_16291 < inst_16290);
var inst_16294 = inst_16293;
var state_16472__$1 = state_16472;
if(cljs.core.truth_(inst_16294)){
var statearr_16745_19245 = state_16472__$1;
(statearr_16745_19245[(1)] = (10));

} else {
var statearr_16747_19246 = state_16472__$1;
(statearr_16747_19246[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14364__auto__ = null;
var cljs$core$async$mult_$_state_machine__14364__auto____0 = (function (){
var statearr_16750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16750[(0)] = cljs$core$async$mult_$_state_machine__14364__auto__);

(statearr_16750[(1)] = (1));

return statearr_16750;
});
var cljs$core$async$mult_$_state_machine__14364__auto____1 = (function (state_16472){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_16472);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e16751){var ex__14368__auto__ = e16751;
var statearr_16752_19247 = state_16472;
(statearr_16752_19247[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_16472[(4)]))){
var statearr_16753_19248 = state_16472;
(statearr_16753_19248[(1)] = cljs.core.first((state_16472[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19249 = state_16472;
state_16472 = G__19249;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14364__auto__ = function(state_16472){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14364__auto____1.call(this,state_16472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14364__auto____0;
cljs$core$async$mult_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14364__auto____1;
return cljs$core$async$mult_$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_16758 = f__15141__auto__();
(statearr_16758[(6)] = c__15140__auto___19151);

return statearr_16758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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
var G__16764 = arguments.length;
switch (G__16764) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19255 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19255(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19256 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19256(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19257 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19257(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19258 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19258(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19263 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19263(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19265 = arguments.length;
var i__5727__auto___19266 = (0);
while(true){
if((i__5727__auto___19266 < len__5726__auto___19265)){
args__5732__auto__.push((arguments[i__5727__auto___19266]));

var G__19267 = (i__5727__auto___19266 + (1));
i__5727__auto___19266 = G__19267;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16795){
var map__16796 = p__16795;
var map__16796__$1 = cljs.core.__destructure_map(map__16796);
var opts = map__16796__$1;
var statearr_16804_19268 = state;
(statearr_16804_19268[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16806_19269 = state;
(statearr_16806_19269[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16807_19271 = state;
(statearr_16807_19271[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16786){
var G__16787 = cljs.core.first(seq16786);
var seq16786__$1 = cljs.core.next(seq16786);
var G__16788 = cljs.core.first(seq16786__$1);
var seq16786__$2 = cljs.core.next(seq16786__$1);
var G__16789 = cljs.core.first(seq16786__$2);
var seq16786__$3 = cljs.core.next(seq16786__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16787,G__16788,G__16789,seq16786__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16813 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16814){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16814 = meta16814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16815,meta16814__$1){
var self__ = this;
var _16815__$1 = this;
return (new cljs.core.async.t_cljs$core$async16813(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16814__$1));
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16815){
var self__ = this;
var _16815__$1 = this;
return self__.meta16814;
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16814","meta16814",1225510402,null)], null);
}));

(cljs.core.async.t_cljs$core$async16813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16813");

(cljs.core.async.t_cljs$core$async16813.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16813.
 */
cljs.core.async.__GT_t_cljs$core$async16813 = (function cljs$core$async$__GT_t_cljs$core$async16813(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16814){
return (new cljs.core.async.t_cljs$core$async16813(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16814));
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
var m = (new cljs.core.async.t_cljs$core$async16813(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15140__auto___19276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_16960){
var state_val_16963 = (state_16960[(1)]);
if((state_val_16963 === (7))){
var inst_16906 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
if(cljs.core.truth_(inst_16906)){
var statearr_16968_19278 = state_16960__$1;
(statearr_16968_19278[(1)] = (8));

} else {
var statearr_16969_19279 = state_16960__$1;
(statearr_16969_19279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (20))){
var inst_16895 = (state_16960[(7)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16960__$1,(23),out,inst_16895);
} else {
if((state_val_16963 === (1))){
var inst_16878 = calc_state();
var inst_16879 = cljs.core.__destructure_map(inst_16878);
var inst_16880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16879,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16879,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16879,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16883 = inst_16878;
var state_16960__$1 = (function (){var statearr_16971 = state_16960;
(statearr_16971[(8)] = inst_16883);

(statearr_16971[(9)] = inst_16881);

(statearr_16971[(10)] = inst_16880);

(statearr_16971[(11)] = inst_16882);

return statearr_16971;
})();
var statearr_16974_19281 = state_16960__$1;
(statearr_16974_19281[(2)] = null);

(statearr_16974_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (24))){
var inst_16886 = (state_16960[(12)]);
var inst_16883 = inst_16886;
var state_16960__$1 = (function (){var statearr_16976 = state_16960;
(statearr_16976[(8)] = inst_16883);

return statearr_16976;
})();
var statearr_16977_19282 = state_16960__$1;
(statearr_16977_19282[(2)] = null);

(statearr_16977_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (4))){
var inst_16897 = (state_16960[(13)]);
var inst_16895 = (state_16960[(7)]);
var inst_16894 = (state_16960[(2)]);
var inst_16895__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16894,(0),null);
var inst_16896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16894,(1),null);
var inst_16897__$1 = (inst_16895__$1 == null);
var state_16960__$1 = (function (){var statearr_16978 = state_16960;
(statearr_16978[(13)] = inst_16897__$1);

(statearr_16978[(7)] = inst_16895__$1);

(statearr_16978[(14)] = inst_16896);

return statearr_16978;
})();
if(cljs.core.truth_(inst_16897__$1)){
var statearr_16979_19284 = state_16960__$1;
(statearr_16979_19284[(1)] = (5));

} else {
var statearr_16980_19285 = state_16960__$1;
(statearr_16980_19285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (15))){
var inst_16887 = (state_16960[(15)]);
var inst_16930 = (state_16960[(16)]);
var inst_16930__$1 = cljs.core.empty_QMARK_(inst_16887);
var state_16960__$1 = (function (){var statearr_16987 = state_16960;
(statearr_16987[(16)] = inst_16930__$1);

return statearr_16987;
})();
if(inst_16930__$1){
var statearr_16990_19292 = state_16960__$1;
(statearr_16990_19292[(1)] = (17));

} else {
var statearr_16991_19293 = state_16960__$1;
(statearr_16991_19293[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (21))){
var inst_16886 = (state_16960[(12)]);
var inst_16883 = inst_16886;
var state_16960__$1 = (function (){var statearr_16992 = state_16960;
(statearr_16992[(8)] = inst_16883);

return statearr_16992;
})();
var statearr_16993_19294 = state_16960__$1;
(statearr_16993_19294[(2)] = null);

(statearr_16993_19294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (13))){
var inst_16919 = (state_16960[(2)]);
var inst_16920 = calc_state();
var inst_16883 = inst_16920;
var state_16960__$1 = (function (){var statearr_16994 = state_16960;
(statearr_16994[(8)] = inst_16883);

(statearr_16994[(17)] = inst_16919);

return statearr_16994;
})();
var statearr_16996_19305 = state_16960__$1;
(statearr_16996_19305[(2)] = null);

(statearr_16996_19305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (22))){
var inst_16953 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_17000_19306 = state_16960__$1;
(statearr_17000_19306[(2)] = inst_16953);

(statearr_17000_19306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (6))){
var inst_16896 = (state_16960[(14)]);
var inst_16904 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16896,change);
var state_16960__$1 = state_16960;
var statearr_17001_19308 = state_16960__$1;
(statearr_17001_19308[(2)] = inst_16904);

(statearr_17001_19308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (25))){
var state_16960__$1 = state_16960;
var statearr_17007_19312 = state_16960__$1;
(statearr_17007_19312[(2)] = null);

(statearr_17007_19312[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (17))){
var inst_16888 = (state_16960[(18)]);
var inst_16896 = (state_16960[(14)]);
var inst_16932 = (inst_16888.cljs$core$IFn$_invoke$arity$1 ? inst_16888.cljs$core$IFn$_invoke$arity$1(inst_16896) : inst_16888.call(null, inst_16896));
var inst_16933 = cljs.core.not(inst_16932);
var state_16960__$1 = state_16960;
var statearr_17011_19313 = state_16960__$1;
(statearr_17011_19313[(2)] = inst_16933);

(statearr_17011_19313[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (3))){
var inst_16957 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16960__$1,inst_16957);
} else {
if((state_val_16963 === (12))){
var state_16960__$1 = state_16960;
var statearr_17012_19314 = state_16960__$1;
(statearr_17012_19314[(2)] = null);

(statearr_17012_19314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (2))){
var inst_16886 = (state_16960[(12)]);
var inst_16883 = (state_16960[(8)]);
var inst_16886__$1 = cljs.core.__destructure_map(inst_16883);
var inst_16887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16886__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16886__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16886__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16960__$1 = (function (){var statearr_17016 = state_16960;
(statearr_17016[(12)] = inst_16886__$1);

(statearr_17016[(15)] = inst_16887);

(statearr_17016[(18)] = inst_16888);

return statearr_17016;
})();
return cljs.core.async.ioc_alts_BANG_(state_16960__$1,(4),inst_16889);
} else {
if((state_val_16963 === (23))){
var inst_16941 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
if(cljs.core.truth_(inst_16941)){
var statearr_17020_19319 = state_16960__$1;
(statearr_17020_19319[(1)] = (24));

} else {
var statearr_17022_19320 = state_16960__$1;
(statearr_17022_19320[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (19))){
var inst_16936 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_17023_19325 = state_16960__$1;
(statearr_17023_19325[(2)] = inst_16936);

(statearr_17023_19325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (11))){
var inst_16896 = (state_16960[(14)]);
var inst_16916 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16896);
var state_16960__$1 = state_16960;
var statearr_17027_19326 = state_16960__$1;
(statearr_17027_19326[(2)] = inst_16916);

(statearr_17027_19326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (9))){
var inst_16927 = (state_16960[(19)]);
var inst_16887 = (state_16960[(15)]);
var inst_16896 = (state_16960[(14)]);
var inst_16927__$1 = (inst_16887.cljs$core$IFn$_invoke$arity$1 ? inst_16887.cljs$core$IFn$_invoke$arity$1(inst_16896) : inst_16887.call(null, inst_16896));
var state_16960__$1 = (function (){var statearr_17032 = state_16960;
(statearr_17032[(19)] = inst_16927__$1);

return statearr_17032;
})();
if(cljs.core.truth_(inst_16927__$1)){
var statearr_17033_19331 = state_16960__$1;
(statearr_17033_19331[(1)] = (14));

} else {
var statearr_17034_19335 = state_16960__$1;
(statearr_17034_19335[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (5))){
var inst_16897 = (state_16960[(13)]);
var state_16960__$1 = state_16960;
var statearr_17036_19336 = state_16960__$1;
(statearr_17036_19336[(2)] = inst_16897);

(statearr_17036_19336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (14))){
var inst_16927 = (state_16960[(19)]);
var state_16960__$1 = state_16960;
var statearr_17038_19337 = state_16960__$1;
(statearr_17038_19337[(2)] = inst_16927);

(statearr_17038_19337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (26))){
var inst_16946 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_17039_19338 = state_16960__$1;
(statearr_17039_19338[(2)] = inst_16946);

(statearr_17039_19338[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (16))){
var inst_16938 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
if(cljs.core.truth_(inst_16938)){
var statearr_17043_19339 = state_16960__$1;
(statearr_17043_19339[(1)] = (20));

} else {
var statearr_17049_19340 = state_16960__$1;
(statearr_17049_19340[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (10))){
var inst_16955 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_17050_19341 = state_16960__$1;
(statearr_17050_19341[(2)] = inst_16955);

(statearr_17050_19341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (18))){
var inst_16930 = (state_16960[(16)]);
var state_16960__$1 = state_16960;
var statearr_17051_19342 = state_16960__$1;
(statearr_17051_19342[(2)] = inst_16930);

(statearr_17051_19342[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16963 === (8))){
var inst_16895 = (state_16960[(7)]);
var inst_16912 = (inst_16895 == null);
var state_16960__$1 = state_16960;
if(cljs.core.truth_(inst_16912)){
var statearr_17052_19343 = state_16960__$1;
(statearr_17052_19343[(1)] = (11));

} else {
var statearr_17053_19344 = state_16960__$1;
(statearr_17053_19344[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14364__auto__ = null;
var cljs$core$async$mix_$_state_machine__14364__auto____0 = (function (){
var statearr_17057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17057[(0)] = cljs$core$async$mix_$_state_machine__14364__auto__);

(statearr_17057[(1)] = (1));

return statearr_17057;
});
var cljs$core$async$mix_$_state_machine__14364__auto____1 = (function (state_16960){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_16960);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e17058){var ex__14368__auto__ = e17058;
var statearr_17059_19345 = state_16960;
(statearr_17059_19345[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_16960[(4)]))){
var statearr_17060_19346 = state_16960;
(statearr_17060_19346[(1)] = cljs.core.first((state_16960[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19347 = state_16960;
state_16960 = G__19347;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14364__auto__ = function(state_16960){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14364__auto____1.call(this,state_16960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14364__auto____0;
cljs$core$async$mix_$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14364__auto____1;
return cljs$core$async$mix_$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_17062 = f__15141__auto__();
(statearr_17062[(6)] = c__15140__auto___19276);

return statearr_17062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19348 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19348(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19349 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19349(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19359 = (function() {
var G__19360 = null;
var G__19360__1 = (function (p){
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
var G__19360__2 = (function (p,v){
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
G__19360 = function(p,v){
switch(arguments.length){
case 1:
return G__19360__1.call(this,p);
case 2:
return G__19360__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19360.cljs$core$IFn$_invoke$arity$1 = G__19360__1;
G__19360.cljs$core$IFn$_invoke$arity$2 = G__19360__2;
return G__19360;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17096 = arguments.length;
switch (G__17096) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19359(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19359(p,v);
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
cljs.core.async.t_cljs$core$async17117 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17118){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17118 = meta17118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17119,meta17118__$1){
var self__ = this;
var _17119__$1 = this;
return (new cljs.core.async.t_cljs$core$async17117(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17118__$1));
}));

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17119){
var self__ = this;
var _17119__$1 = this;
return self__.meta17118;
}));

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17118","meta17118",-1778575793,null)], null);
}));

(cljs.core.async.t_cljs$core$async17117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17117");

(cljs.core.async.t_cljs$core$async17117.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17117.
 */
cljs.core.async.__GT_t_cljs$core$async17117 = (function cljs$core$async$__GT_t_cljs$core$async17117(ch,topic_fn,buf_fn,mults,ensure_mult,meta17118){
return (new cljs.core.async.t_cljs$core$async17117(ch,topic_fn,buf_fn,mults,ensure_mult,meta17118));
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
var G__17100 = arguments.length;
switch (G__17100) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17097_SHARP_){
if(cljs.core.truth_((p1__17097_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17097_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17097_SHARP_.call(null, topic)))){
return p1__17097_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17097_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17117(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15140__auto___19379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_17255){
var state_val_17256 = (state_17255[(1)]);
if((state_val_17256 === (7))){
var inst_17244 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
var statearr_17263_19380 = state_17255__$1;
(statearr_17263_19380[(2)] = inst_17244);

(statearr_17263_19380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (20))){
var state_17255__$1 = state_17255;
var statearr_17264_19381 = state_17255__$1;
(statearr_17264_19381[(2)] = null);

(statearr_17264_19381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (1))){
var state_17255__$1 = state_17255;
var statearr_17271_19382 = state_17255__$1;
(statearr_17271_19382[(2)] = null);

(statearr_17271_19382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (24))){
var inst_17227 = (state_17255[(7)]);
var inst_17236 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17227);
var state_17255__$1 = state_17255;
var statearr_17275_19384 = state_17255__$1;
(statearr_17275_19384[(2)] = inst_17236);

(statearr_17275_19384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (4))){
var inst_17161 = (state_17255[(8)]);
var inst_17161__$1 = (state_17255[(2)]);
var inst_17162 = (inst_17161__$1 == null);
var state_17255__$1 = (function (){var statearr_17283 = state_17255;
(statearr_17283[(8)] = inst_17161__$1);

return statearr_17283;
})();
if(cljs.core.truth_(inst_17162)){
var statearr_17284_19385 = state_17255__$1;
(statearr_17284_19385[(1)] = (5));

} else {
var statearr_17285_19386 = state_17255__$1;
(statearr_17285_19386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (15))){
var inst_17221 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
var statearr_17286_19387 = state_17255__$1;
(statearr_17286_19387[(2)] = inst_17221);

(statearr_17286_19387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (21))){
var inst_17241 = (state_17255[(2)]);
var state_17255__$1 = (function (){var statearr_17288 = state_17255;
(statearr_17288[(9)] = inst_17241);

return statearr_17288;
})();
var statearr_17289_19388 = state_17255__$1;
(statearr_17289_19388[(2)] = null);

(statearr_17289_19388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (13))){
var inst_17193 = (state_17255[(10)]);
var inst_17198 = cljs.core.chunked_seq_QMARK_(inst_17193);
var state_17255__$1 = state_17255;
if(inst_17198){
var statearr_17293_19389 = state_17255__$1;
(statearr_17293_19389[(1)] = (16));

} else {
var statearr_17294_19390 = state_17255__$1;
(statearr_17294_19390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (22))){
var inst_17233 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
if(cljs.core.truth_(inst_17233)){
var statearr_17296_19391 = state_17255__$1;
(statearr_17296_19391[(1)] = (23));

} else {
var statearr_17298_19392 = state_17255__$1;
(statearr_17298_19392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (6))){
var inst_17227 = (state_17255[(7)]);
var inst_17229 = (state_17255[(11)]);
var inst_17161 = (state_17255[(8)]);
var inst_17227__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17161) : topic_fn.call(null, inst_17161));
var inst_17228 = cljs.core.deref(mults);
var inst_17229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17228,inst_17227__$1);
var state_17255__$1 = (function (){var statearr_17299 = state_17255;
(statearr_17299[(7)] = inst_17227__$1);

(statearr_17299[(11)] = inst_17229__$1);

return statearr_17299;
})();
if(cljs.core.truth_(inst_17229__$1)){
var statearr_17300_19393 = state_17255__$1;
(statearr_17300_19393[(1)] = (19));

} else {
var statearr_17301_19394 = state_17255__$1;
(statearr_17301_19394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (25))){
var inst_17238 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
var statearr_17304_19395 = state_17255__$1;
(statearr_17304_19395[(2)] = inst_17238);

(statearr_17304_19395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (17))){
var inst_17193 = (state_17255[(10)]);
var inst_17208 = cljs.core.first(inst_17193);
var inst_17209 = cljs.core.async.muxch_STAR_(inst_17208);
var inst_17210 = cljs.core.async.close_BANG_(inst_17209);
var inst_17211 = cljs.core.next(inst_17193);
var inst_17171 = inst_17211;
var inst_17172 = null;
var inst_17173 = (0);
var inst_17174 = (0);
var state_17255__$1 = (function (){var statearr_17313 = state_17255;
(statearr_17313[(12)] = inst_17173);

(statearr_17313[(13)] = inst_17174);

(statearr_17313[(14)] = inst_17210);

(statearr_17313[(15)] = inst_17171);

(statearr_17313[(16)] = inst_17172);

return statearr_17313;
})();
var statearr_17314_19396 = state_17255__$1;
(statearr_17314_19396[(2)] = null);

(statearr_17314_19396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (3))){
var inst_17246 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17255__$1,inst_17246);
} else {
if((state_val_17256 === (12))){
var inst_17223 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
var statearr_17318_19397 = state_17255__$1;
(statearr_17318_19397[(2)] = inst_17223);

(statearr_17318_19397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (2))){
var state_17255__$1 = state_17255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17255__$1,(4),ch);
} else {
if((state_val_17256 === (23))){
var state_17255__$1 = state_17255;
var statearr_17323_19398 = state_17255__$1;
(statearr_17323_19398[(2)] = null);

(statearr_17323_19398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (19))){
var inst_17229 = (state_17255[(11)]);
var inst_17161 = (state_17255[(8)]);
var inst_17231 = cljs.core.async.muxch_STAR_(inst_17229);
var state_17255__$1 = state_17255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17255__$1,(22),inst_17231,inst_17161);
} else {
if((state_val_17256 === (11))){
var inst_17193 = (state_17255[(10)]);
var inst_17171 = (state_17255[(15)]);
var inst_17193__$1 = cljs.core.seq(inst_17171);
var state_17255__$1 = (function (){var statearr_17324 = state_17255;
(statearr_17324[(10)] = inst_17193__$1);

return statearr_17324;
})();
if(inst_17193__$1){
var statearr_17325_19400 = state_17255__$1;
(statearr_17325_19400[(1)] = (13));

} else {
var statearr_17326_19401 = state_17255__$1;
(statearr_17326_19401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (9))){
var inst_17225 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
var statearr_17328_19402 = state_17255__$1;
(statearr_17328_19402[(2)] = inst_17225);

(statearr_17328_19402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (5))){
var inst_17168 = cljs.core.deref(mults);
var inst_17169 = cljs.core.vals(inst_17168);
var inst_17170 = cljs.core.seq(inst_17169);
var inst_17171 = inst_17170;
var inst_17172 = null;
var inst_17173 = (0);
var inst_17174 = (0);
var state_17255__$1 = (function (){var statearr_17332 = state_17255;
(statearr_17332[(12)] = inst_17173);

(statearr_17332[(13)] = inst_17174);

(statearr_17332[(15)] = inst_17171);

(statearr_17332[(16)] = inst_17172);

return statearr_17332;
})();
var statearr_17336_19403 = state_17255__$1;
(statearr_17336_19403[(2)] = null);

(statearr_17336_19403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (14))){
var state_17255__$1 = state_17255;
var statearr_17340_19404 = state_17255__$1;
(statearr_17340_19404[(2)] = null);

(statearr_17340_19404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (16))){
var inst_17193 = (state_17255[(10)]);
var inst_17200 = cljs.core.chunk_first(inst_17193);
var inst_17204 = cljs.core.chunk_rest(inst_17193);
var inst_17205 = cljs.core.count(inst_17200);
var inst_17171 = inst_17204;
var inst_17172 = inst_17200;
var inst_17173 = inst_17205;
var inst_17174 = (0);
var state_17255__$1 = (function (){var statearr_17341 = state_17255;
(statearr_17341[(12)] = inst_17173);

(statearr_17341[(13)] = inst_17174);

(statearr_17341[(15)] = inst_17171);

(statearr_17341[(16)] = inst_17172);

return statearr_17341;
})();
var statearr_17342_19414 = state_17255__$1;
(statearr_17342_19414[(2)] = null);

(statearr_17342_19414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (10))){
var inst_17173 = (state_17255[(12)]);
var inst_17174 = (state_17255[(13)]);
var inst_17171 = (state_17255[(15)]);
var inst_17172 = (state_17255[(16)]);
var inst_17182 = cljs.core._nth(inst_17172,inst_17174);
var inst_17184 = cljs.core.async.muxch_STAR_(inst_17182);
var inst_17185 = cljs.core.async.close_BANG_(inst_17184);
var inst_17186 = (inst_17174 + (1));
var tmp17337 = inst_17173;
var tmp17338 = inst_17171;
var tmp17339 = inst_17172;
var inst_17171__$1 = tmp17338;
var inst_17172__$1 = tmp17339;
var inst_17173__$1 = tmp17337;
var inst_17174__$1 = inst_17186;
var state_17255__$1 = (function (){var statearr_17344 = state_17255;
(statearr_17344[(17)] = inst_17185);

(statearr_17344[(12)] = inst_17173__$1);

(statearr_17344[(13)] = inst_17174__$1);

(statearr_17344[(15)] = inst_17171__$1);

(statearr_17344[(16)] = inst_17172__$1);

return statearr_17344;
})();
var statearr_17345_19415 = state_17255__$1;
(statearr_17345_19415[(2)] = null);

(statearr_17345_19415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (18))){
var inst_17218 = (state_17255[(2)]);
var state_17255__$1 = state_17255;
var statearr_17347_19420 = state_17255__$1;
(statearr_17347_19420[(2)] = inst_17218);

(statearr_17347_19420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17256 === (8))){
var inst_17173 = (state_17255[(12)]);
var inst_17174 = (state_17255[(13)]);
var inst_17176 = (inst_17174 < inst_17173);
var inst_17177 = inst_17176;
var state_17255__$1 = state_17255;
if(cljs.core.truth_(inst_17177)){
var statearr_17350_19421 = state_17255__$1;
(statearr_17350_19421[(1)] = (10));

} else {
var statearr_17351_19422 = state_17255__$1;
(statearr_17351_19422[(1)] = (11));

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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_17352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17352[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_17352[(1)] = (1));

return statearr_17352;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_17255){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_17255);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e17354){var ex__14368__auto__ = e17354;
var statearr_17355_19427 = state_17255;
(statearr_17355_19427[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_17255[(4)]))){
var statearr_17356_19428 = state_17255;
(statearr_17356_19428[(1)] = cljs.core.first((state_17255[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19433 = state_17255;
state_17255 = G__19433;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_17255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_17255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_17360 = f__15141__auto__();
(statearr_17360[(6)] = c__15140__auto___19379);

return statearr_17360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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
var G__17374 = arguments.length;
switch (G__17374) {
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
var G__17382 = arguments.length;
switch (G__17382) {
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
var G__17387 = arguments.length;
switch (G__17387) {
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
var c__15140__auto___19440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_17470){
var state_val_17471 = (state_17470[(1)]);
if((state_val_17471 === (7))){
var state_17470__$1 = state_17470;
var statearr_17472_19445 = state_17470__$1;
(statearr_17472_19445[(2)] = null);

(statearr_17472_19445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (1))){
var state_17470__$1 = state_17470;
var statearr_17474_19446 = state_17470__$1;
(statearr_17474_19446[(2)] = null);

(statearr_17474_19446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (4))){
var inst_17390 = (state_17470[(7)]);
var inst_17391 = (state_17470[(8)]);
var inst_17393 = (inst_17391 < inst_17390);
var state_17470__$1 = state_17470;
if(cljs.core.truth_(inst_17393)){
var statearr_17476_19448 = state_17470__$1;
(statearr_17476_19448[(1)] = (6));

} else {
var statearr_17477_19449 = state_17470__$1;
(statearr_17477_19449[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (15))){
var inst_17455 = (state_17470[(9)]);
var inst_17460 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17455);
var state_17470__$1 = state_17470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17470__$1,(17),out,inst_17460);
} else {
if((state_val_17471 === (13))){
var inst_17455 = (state_17470[(9)]);
var inst_17455__$1 = (state_17470[(2)]);
var inst_17456 = cljs.core.some(cljs.core.nil_QMARK_,inst_17455__$1);
var state_17470__$1 = (function (){var statearr_17478 = state_17470;
(statearr_17478[(9)] = inst_17455__$1);

return statearr_17478;
})();
if(cljs.core.truth_(inst_17456)){
var statearr_17479_19455 = state_17470__$1;
(statearr_17479_19455[(1)] = (14));

} else {
var statearr_17480_19456 = state_17470__$1;
(statearr_17480_19456[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (6))){
var state_17470__$1 = state_17470;
var statearr_17482_19457 = state_17470__$1;
(statearr_17482_19457[(2)] = null);

(statearr_17482_19457[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (17))){
var inst_17462 = (state_17470[(2)]);
var state_17470__$1 = (function (){var statearr_17532 = state_17470;
(statearr_17532[(10)] = inst_17462);

return statearr_17532;
})();
var statearr_17533_19458 = state_17470__$1;
(statearr_17533_19458[(2)] = null);

(statearr_17533_19458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (3))){
var inst_17467 = (state_17470[(2)]);
var state_17470__$1 = state_17470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17470__$1,inst_17467);
} else {
if((state_val_17471 === (12))){
var _ = (function (){var statearr_17539 = state_17470;
(statearr_17539[(4)] = cljs.core.rest((state_17470[(4)])));

return statearr_17539;
})();
var state_17470__$1 = state_17470;
var ex17491 = (state_17470__$1[(2)]);
var statearr_17542_19463 = state_17470__$1;
(statearr_17542_19463[(5)] = ex17491);


if((ex17491 instanceof Object)){
var statearr_17543_19464 = state_17470__$1;
(statearr_17543_19464[(1)] = (11));

(statearr_17543_19464[(5)] = null);

} else {
throw ex17491;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (2))){
var inst_17389 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17390 = cnt;
var inst_17391 = (0);
var state_17470__$1 = (function (){var statearr_17553 = state_17470;
(statearr_17553[(7)] = inst_17390);

(statearr_17553[(11)] = inst_17389);

(statearr_17553[(8)] = inst_17391);

return statearr_17553;
})();
var statearr_17554_19465 = state_17470__$1;
(statearr_17554_19465[(2)] = null);

(statearr_17554_19465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (11))){
var inst_17432 = (state_17470[(2)]);
var inst_17434 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17470__$1 = (function (){var statearr_17555 = state_17470;
(statearr_17555[(12)] = inst_17432);

return statearr_17555;
})();
var statearr_17556_19466 = state_17470__$1;
(statearr_17556_19466[(2)] = inst_17434);

(statearr_17556_19466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (9))){
var inst_17391 = (state_17470[(8)]);
var _ = (function (){var statearr_17558 = state_17470;
(statearr_17558[(4)] = cljs.core.cons((12),(state_17470[(4)])));

return statearr_17558;
})();
var inst_17440 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17391) : chs__$1.call(null, inst_17391));
var inst_17441 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17391) : done.call(null, inst_17391));
var inst_17442 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17440,inst_17441);
var ___$1 = (function (){var statearr_17559 = state_17470;
(statearr_17559[(4)] = cljs.core.rest((state_17470[(4)])));

return statearr_17559;
})();
var state_17470__$1 = state_17470;
var statearr_17560_19471 = state_17470__$1;
(statearr_17560_19471[(2)] = inst_17442);

(statearr_17560_19471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (5))){
var inst_17453 = (state_17470[(2)]);
var state_17470__$1 = (function (){var statearr_17562 = state_17470;
(statearr_17562[(13)] = inst_17453);

return statearr_17562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17470__$1,(13),dchan);
} else {
if((state_val_17471 === (14))){
var inst_17458 = cljs.core.async.close_BANG_(out);
var state_17470__$1 = state_17470;
var statearr_17569_19472 = state_17470__$1;
(statearr_17569_19472[(2)] = inst_17458);

(statearr_17569_19472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (16))){
var inst_17465 = (state_17470[(2)]);
var state_17470__$1 = state_17470;
var statearr_17573_19473 = state_17470__$1;
(statearr_17573_19473[(2)] = inst_17465);

(statearr_17573_19473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (10))){
var inst_17391 = (state_17470[(8)]);
var inst_17445 = (state_17470[(2)]);
var inst_17446 = (inst_17391 + (1));
var inst_17391__$1 = inst_17446;
var state_17470__$1 = (function (){var statearr_17575 = state_17470;
(statearr_17575[(14)] = inst_17445);

(statearr_17575[(8)] = inst_17391__$1);

return statearr_17575;
})();
var statearr_17576_19474 = state_17470__$1;
(statearr_17576_19474[(2)] = null);

(statearr_17576_19474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17471 === (8))){
var inst_17451 = (state_17470[(2)]);
var state_17470__$1 = state_17470;
var statearr_17577_19475 = state_17470__$1;
(statearr_17577_19475[(2)] = inst_17451);

(statearr_17577_19475[(1)] = (5));


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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_17581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17581[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_17581[(1)] = (1));

return statearr_17581;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_17470){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_17470);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e17584){var ex__14368__auto__ = e17584;
var statearr_17585_19476 = state_17470;
(statearr_17585_19476[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_17470[(4)]))){
var statearr_17588_19477 = state_17470;
(statearr_17588_19477[(1)] = cljs.core.first((state_17470[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19478 = state_17470;
state_17470 = G__19478;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_17470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_17470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_17589 = f__15141__auto__();
(statearr_17589[(6)] = c__15140__auto___19440);

return statearr_17589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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
var G__17605 = arguments.length;
switch (G__17605) {
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
var c__15140__auto___19480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_17652){
var state_val_17653 = (state_17652[(1)]);
if((state_val_17653 === (7))){
var inst_17629 = (state_17652[(7)]);
var inst_17630 = (state_17652[(8)]);
var inst_17629__$1 = (state_17652[(2)]);
var inst_17630__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17629__$1,(0),null);
var inst_17631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17629__$1,(1),null);
var inst_17632 = (inst_17630__$1 == null);
var state_17652__$1 = (function (){var statearr_17655 = state_17652;
(statearr_17655[(7)] = inst_17629__$1);

(statearr_17655[(8)] = inst_17630__$1);

(statearr_17655[(9)] = inst_17631);

return statearr_17655;
})();
if(cljs.core.truth_(inst_17632)){
var statearr_17656_19487 = state_17652__$1;
(statearr_17656_19487[(1)] = (8));

} else {
var statearr_17657_19488 = state_17652__$1;
(statearr_17657_19488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17653 === (1))){
var inst_17617 = cljs.core.vec(chs);
var inst_17618 = inst_17617;
var state_17652__$1 = (function (){var statearr_17659 = state_17652;
(statearr_17659[(10)] = inst_17618);

return statearr_17659;
})();
var statearr_17660_19494 = state_17652__$1;
(statearr_17660_19494[(2)] = null);

(statearr_17660_19494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17653 === (4))){
var inst_17618 = (state_17652[(10)]);
var state_17652__$1 = state_17652;
return cljs.core.async.ioc_alts_BANG_(state_17652__$1,(7),inst_17618);
} else {
if((state_val_17653 === (6))){
var inst_17648 = (state_17652[(2)]);
var state_17652__$1 = state_17652;
var statearr_17666_19495 = state_17652__$1;
(statearr_17666_19495[(2)] = inst_17648);

(statearr_17666_19495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17653 === (3))){
var inst_17650 = (state_17652[(2)]);
var state_17652__$1 = state_17652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17652__$1,inst_17650);
} else {
if((state_val_17653 === (2))){
var inst_17618 = (state_17652[(10)]);
var inst_17622 = cljs.core.count(inst_17618);
var inst_17623 = (inst_17622 > (0));
var state_17652__$1 = state_17652;
if(cljs.core.truth_(inst_17623)){
var statearr_17682_19496 = state_17652__$1;
(statearr_17682_19496[(1)] = (4));

} else {
var statearr_17683_19497 = state_17652__$1;
(statearr_17683_19497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17653 === (11))){
var inst_17618 = (state_17652[(10)]);
var inst_17639 = (state_17652[(2)]);
var tmp17679 = inst_17618;
var inst_17618__$1 = tmp17679;
var state_17652__$1 = (function (){var statearr_17687 = state_17652;
(statearr_17687[(11)] = inst_17639);

(statearr_17687[(10)] = inst_17618__$1);

return statearr_17687;
})();
var statearr_17688_19500 = state_17652__$1;
(statearr_17688_19500[(2)] = null);

(statearr_17688_19500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17653 === (9))){
var inst_17630 = (state_17652[(8)]);
var state_17652__$1 = state_17652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17652__$1,(11),out,inst_17630);
} else {
if((state_val_17653 === (5))){
var inst_17646 = cljs.core.async.close_BANG_(out);
var state_17652__$1 = state_17652;
var statearr_17705_19501 = state_17652__$1;
(statearr_17705_19501[(2)] = inst_17646);

(statearr_17705_19501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17653 === (10))){
var inst_17642 = (state_17652[(2)]);
var state_17652__$1 = state_17652;
var statearr_17706_19502 = state_17652__$1;
(statearr_17706_19502[(2)] = inst_17642);

(statearr_17706_19502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17653 === (8))){
var inst_17629 = (state_17652[(7)]);
var inst_17630 = (state_17652[(8)]);
var inst_17631 = (state_17652[(9)]);
var inst_17618 = (state_17652[(10)]);
var inst_17634 = (function (){var cs = inst_17618;
var vec__17625 = inst_17629;
var v = inst_17630;
var c = inst_17631;
return (function (p1__17600_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17600_SHARP_);
});
})();
var inst_17635 = cljs.core.filterv(inst_17634,inst_17618);
var inst_17618__$1 = inst_17635;
var state_17652__$1 = (function (){var statearr_17711 = state_17652;
(statearr_17711[(10)] = inst_17618__$1);

return statearr_17711;
})();
var statearr_17712_19508 = state_17652__$1;
(statearr_17712_19508[(2)] = null);

(statearr_17712_19508[(1)] = (2));


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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_17713 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17713[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_17713[(1)] = (1));

return statearr_17713;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_17652){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_17652);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e17720){var ex__14368__auto__ = e17720;
var statearr_17721_19509 = state_17652;
(statearr_17721_19509[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_17652[(4)]))){
var statearr_17722_19510 = state_17652;
(statearr_17722_19510[(1)] = cljs.core.first((state_17652[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19512 = state_17652;
state_17652 = G__19512;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_17652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_17652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_17726 = f__15141__auto__();
(statearr_17726[(6)] = c__15140__auto___19480);

return statearr_17726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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
var G__17733 = arguments.length;
switch (G__17733) {
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
var c__15140__auto___19518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_17818){
var state_val_17819 = (state_17818[(1)]);
if((state_val_17819 === (7))){
var inst_17751 = (state_17818[(7)]);
var inst_17751__$1 = (state_17818[(2)]);
var inst_17752 = (inst_17751__$1 == null);
var inst_17753 = cljs.core.not(inst_17752);
var state_17818__$1 = (function (){var statearr_17830 = state_17818;
(statearr_17830[(7)] = inst_17751__$1);

return statearr_17830;
})();
if(inst_17753){
var statearr_17831_19519 = state_17818__$1;
(statearr_17831_19519[(1)] = (8));

} else {
var statearr_17832_19520 = state_17818__$1;
(statearr_17832_19520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (1))){
var inst_17746 = (0);
var state_17818__$1 = (function (){var statearr_17835 = state_17818;
(statearr_17835[(8)] = inst_17746);

return statearr_17835;
})();
var statearr_17837_19521 = state_17818__$1;
(statearr_17837_19521[(2)] = null);

(statearr_17837_19521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (4))){
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17818__$1,(7),ch);
} else {
if((state_val_17819 === (6))){
var inst_17768 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17845_19525 = state_17818__$1;
(statearr_17845_19525[(2)] = inst_17768);

(statearr_17845_19525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (3))){
var inst_17770 = (state_17818[(2)]);
var inst_17771 = cljs.core.async.close_BANG_(out);
var state_17818__$1 = (function (){var statearr_17849 = state_17818;
(statearr_17849[(9)] = inst_17770);

return statearr_17849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17818__$1,inst_17771);
} else {
if((state_val_17819 === (2))){
var inst_17746 = (state_17818[(8)]);
var inst_17748 = (inst_17746 < n);
var state_17818__$1 = state_17818;
if(cljs.core.truth_(inst_17748)){
var statearr_17853_19528 = state_17818__$1;
(statearr_17853_19528[(1)] = (4));

} else {
var statearr_17854_19529 = state_17818__$1;
(statearr_17854_19529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (11))){
var inst_17746 = (state_17818[(8)]);
var inst_17760 = (state_17818[(2)]);
var inst_17761 = (inst_17746 + (1));
var inst_17746__$1 = inst_17761;
var state_17818__$1 = (function (){var statearr_17858 = state_17818;
(statearr_17858[(8)] = inst_17746__$1);

(statearr_17858[(10)] = inst_17760);

return statearr_17858;
})();
var statearr_17862_19530 = state_17818__$1;
(statearr_17862_19530[(2)] = null);

(statearr_17862_19530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (9))){
var state_17818__$1 = state_17818;
var statearr_17863_19531 = state_17818__$1;
(statearr_17863_19531[(2)] = null);

(statearr_17863_19531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (5))){
var state_17818__$1 = state_17818;
var statearr_17867_19534 = state_17818__$1;
(statearr_17867_19534[(2)] = null);

(statearr_17867_19534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (10))){
var inst_17765 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17868_19535 = state_17818__$1;
(statearr_17868_19535[(2)] = inst_17765);

(statearr_17868_19535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (8))){
var inst_17751 = (state_17818[(7)]);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17818__$1,(11),out,inst_17751);
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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_17875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17875[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_17875[(1)] = (1));

return statearr_17875;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_17818){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_17818);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e17876){var ex__14368__auto__ = e17876;
var statearr_17877_19536 = state_17818;
(statearr_17877_19536[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_17818[(4)]))){
var statearr_17878_19537 = state_17818;
(statearr_17878_19537[(1)] = cljs.core.first((state_17818[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19538 = state_17818;
state_17818 = G__19538;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_17818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_17818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_17879 = f__15141__auto__();
(statearr_17879[(6)] = c__15140__auto___19518);

return statearr_17879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
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
cljs.core.async.t_cljs$core$async17890 = (function (f,ch,meta17888,_,fn1,meta17891){
this.f = f;
this.ch = ch;
this.meta17888 = meta17888;
this._ = _;
this.fn1 = fn1;
this.meta17891 = meta17891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17892,meta17891__$1){
var self__ = this;
var _17892__$1 = this;
return (new cljs.core.async.t_cljs$core$async17890(self__.f,self__.ch,self__.meta17888,self__._,self__.fn1,meta17891__$1));
}));

(cljs.core.async.t_cljs$core$async17890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17892){
var self__ = this;
var _17892__$1 = this;
return self__.meta17891;
}));

(cljs.core.async.t_cljs$core$async17890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17880_SHARP_){
var G__17893 = (((p1__17880_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17880_SHARP_) : self__.f.call(null, p1__17880_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17893) : f1.call(null, G__17893));
});
}));

(cljs.core.async.t_cljs$core$async17890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17888","meta17888",1700792885,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17887","cljs.core.async/t_cljs$core$async17887",-811018716,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17891","meta17891",628269232,null)], null);
}));

(cljs.core.async.t_cljs$core$async17890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17890");

(cljs.core.async.t_cljs$core$async17890.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17890.
 */
cljs.core.async.__GT_t_cljs$core$async17890 = (function cljs$core$async$__GT_t_cljs$core$async17890(f,ch,meta17888,_,fn1,meta17891){
return (new cljs.core.async.t_cljs$core$async17890(f,ch,meta17888,_,fn1,meta17891));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17887 = (function (f,ch,meta17888){
this.f = f;
this.ch = ch;
this.meta17888 = meta17888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17889,meta17888__$1){
var self__ = this;
var _17889__$1 = this;
return (new cljs.core.async.t_cljs$core$async17887(self__.f,self__.ch,meta17888__$1));
}));

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17889){
var self__ = this;
var _17889__$1 = this;
return self__.meta17888;
}));

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17890(self__.f,self__.ch,self__.meta17888,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17894 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17894) : self__.f.call(null, G__17894));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17888","meta17888",1700792885,null)], null);
}));

(cljs.core.async.t_cljs$core$async17887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17887");

(cljs.core.async.t_cljs$core$async17887.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17887.
 */
cljs.core.async.__GT_t_cljs$core$async17887 = (function cljs$core$async$__GT_t_cljs$core$async17887(f,ch,meta17888){
return (new cljs.core.async.t_cljs$core$async17887(f,ch,meta17888));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17887(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17905 = (function (f,ch,meta17906){
this.f = f;
this.ch = ch;
this.meta17906 = meta17906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17907,meta17906__$1){
var self__ = this;
var _17907__$1 = this;
return (new cljs.core.async.t_cljs$core$async17905(self__.f,self__.ch,meta17906__$1));
}));

(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17907){
var self__ = this;
var _17907__$1 = this;
return self__.meta17906;
}));

(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17906","meta17906",1610320,null)], null);
}));

(cljs.core.async.t_cljs$core$async17905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17905");

(cljs.core.async.t_cljs$core$async17905.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17905.
 */
cljs.core.async.__GT_t_cljs$core$async17905 = (function cljs$core$async$__GT_t_cljs$core$async17905(f,ch,meta17906){
return (new cljs.core.async.t_cljs$core$async17905(f,ch,meta17906));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17905(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17914 = (function (p,ch,meta17915){
this.p = p;
this.ch = ch;
this.meta17915 = meta17915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17916,meta17915__$1){
var self__ = this;
var _17916__$1 = this;
return (new cljs.core.async.t_cljs$core$async17914(self__.p,self__.ch,meta17915__$1));
}));

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17916){
var self__ = this;
var _17916__$1 = this;
return self__.meta17915;
}));

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17915","meta17915",1549923037,null)], null);
}));

(cljs.core.async.t_cljs$core$async17914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17914");

(cljs.core.async.t_cljs$core$async17914.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17914.
 */
cljs.core.async.__GT_t_cljs$core$async17914 = (function cljs$core$async$__GT_t_cljs$core$async17914(p,ch,meta17915){
return (new cljs.core.async.t_cljs$core$async17914(p,ch,meta17915));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17914(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17933 = arguments.length;
switch (G__17933) {
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
var c__15140__auto___19567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_17963){
var state_val_17964 = (state_17963[(1)]);
if((state_val_17964 === (7))){
var inst_17956 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_17967_19571 = state_17963__$1;
(statearr_17967_19571[(2)] = inst_17956);

(statearr_17967_19571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (1))){
var state_17963__$1 = state_17963;
var statearr_17969_19572 = state_17963__$1;
(statearr_17969_19572[(2)] = null);

(statearr_17969_19572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (4))){
var inst_17941 = (state_17963[(7)]);
var inst_17941__$1 = (state_17963[(2)]);
var inst_17942 = (inst_17941__$1 == null);
var state_17963__$1 = (function (){var statearr_17973 = state_17963;
(statearr_17973[(7)] = inst_17941__$1);

return statearr_17973;
})();
if(cljs.core.truth_(inst_17942)){
var statearr_17976_19573 = state_17963__$1;
(statearr_17976_19573[(1)] = (5));

} else {
var statearr_17978_19574 = state_17963__$1;
(statearr_17978_19574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (6))){
var inst_17941 = (state_17963[(7)]);
var inst_17947 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17941) : p.call(null, inst_17941));
var state_17963__$1 = state_17963;
if(cljs.core.truth_(inst_17947)){
var statearr_17979_19575 = state_17963__$1;
(statearr_17979_19575[(1)] = (8));

} else {
var statearr_17980_19576 = state_17963__$1;
(statearr_17980_19576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (3))){
var inst_17958 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17963__$1,inst_17958);
} else {
if((state_val_17964 === (2))){
var state_17963__$1 = state_17963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17963__$1,(4),ch);
} else {
if((state_val_17964 === (11))){
var inst_17950 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_17981_19577 = state_17963__$1;
(statearr_17981_19577[(2)] = inst_17950);

(statearr_17981_19577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (9))){
var state_17963__$1 = state_17963;
var statearr_17982_19579 = state_17963__$1;
(statearr_17982_19579[(2)] = null);

(statearr_17982_19579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (5))){
var inst_17944 = cljs.core.async.close_BANG_(out);
var state_17963__$1 = state_17963;
var statearr_17983_19580 = state_17963__$1;
(statearr_17983_19580[(2)] = inst_17944);

(statearr_17983_19580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (10))){
var inst_17953 = (state_17963[(2)]);
var state_17963__$1 = (function (){var statearr_17984 = state_17963;
(statearr_17984[(8)] = inst_17953);

return statearr_17984;
})();
var statearr_17987_19582 = state_17963__$1;
(statearr_17987_19582[(2)] = null);

(statearr_17987_19582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (8))){
var inst_17941 = (state_17963[(7)]);
var state_17963__$1 = state_17963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17963__$1,(11),out,inst_17941);
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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_17995 = [null,null,null,null,null,null,null,null,null];
(statearr_17995[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_17995[(1)] = (1));

return statearr_17995;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_17963){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_17963);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e17996){var ex__14368__auto__ = e17996;
var statearr_17997_19584 = state_17963;
(statearr_17997_19584[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_17963[(4)]))){
var statearr_17998_19585 = state_17963;
(statearr_17998_19585[(1)] = cljs.core.first((state_17963[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19586 = state_17963;
state_17963 = G__19586;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_17963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_17963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_18005 = f__15141__auto__();
(statearr_18005[(6)] = c__15140__auto___19567);

return statearr_18005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18009 = arguments.length;
switch (G__18009) {
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
var c__15140__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_18110){
var state_val_18111 = (state_18110[(1)]);
if((state_val_18111 === (7))){
var inst_18098 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18132_19589 = state_18110__$1;
(statearr_18132_19589[(2)] = inst_18098);

(statearr_18132_19589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (20))){
var inst_18055 = (state_18110[(7)]);
var inst_18073 = (state_18110[(2)]);
var inst_18078 = cljs.core.next(inst_18055);
var inst_18041 = inst_18078;
var inst_18042 = null;
var inst_18043 = (0);
var inst_18044 = (0);
var state_18110__$1 = (function (){var statearr_18134 = state_18110;
(statearr_18134[(8)] = inst_18043);

(statearr_18134[(9)] = inst_18044);

(statearr_18134[(10)] = inst_18042);

(statearr_18134[(11)] = inst_18073);

(statearr_18134[(12)] = inst_18041);

return statearr_18134;
})();
var statearr_18139_19591 = state_18110__$1;
(statearr_18139_19591[(2)] = null);

(statearr_18139_19591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (1))){
var state_18110__$1 = state_18110;
var statearr_18141_19592 = state_18110__$1;
(statearr_18141_19592[(2)] = null);

(statearr_18141_19592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (4))){
var inst_18027 = (state_18110[(13)]);
var inst_18027__$1 = (state_18110[(2)]);
var inst_18028 = (inst_18027__$1 == null);
var state_18110__$1 = (function (){var statearr_18142 = state_18110;
(statearr_18142[(13)] = inst_18027__$1);

return statearr_18142;
})();
if(cljs.core.truth_(inst_18028)){
var statearr_18144_19593 = state_18110__$1;
(statearr_18144_19593[(1)] = (5));

} else {
var statearr_18147_19594 = state_18110__$1;
(statearr_18147_19594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (15))){
var state_18110__$1 = state_18110;
var statearr_18156_19595 = state_18110__$1;
(statearr_18156_19595[(2)] = null);

(statearr_18156_19595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (21))){
var state_18110__$1 = state_18110;
var statearr_18157_19596 = state_18110__$1;
(statearr_18157_19596[(2)] = null);

(statearr_18157_19596[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (13))){
var inst_18043 = (state_18110[(8)]);
var inst_18044 = (state_18110[(9)]);
var inst_18042 = (state_18110[(10)]);
var inst_18041 = (state_18110[(12)]);
var inst_18051 = (state_18110[(2)]);
var inst_18052 = (inst_18044 + (1));
var tmp18150 = inst_18043;
var tmp18151 = inst_18042;
var tmp18152 = inst_18041;
var inst_18041__$1 = tmp18152;
var inst_18042__$1 = tmp18151;
var inst_18043__$1 = tmp18150;
var inst_18044__$1 = inst_18052;
var state_18110__$1 = (function (){var statearr_18165 = state_18110;
(statearr_18165[(8)] = inst_18043__$1);

(statearr_18165[(14)] = inst_18051);

(statearr_18165[(9)] = inst_18044__$1);

(statearr_18165[(10)] = inst_18042__$1);

(statearr_18165[(12)] = inst_18041__$1);

return statearr_18165;
})();
var statearr_18168_19597 = state_18110__$1;
(statearr_18168_19597[(2)] = null);

(statearr_18168_19597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (22))){
var state_18110__$1 = state_18110;
var statearr_18173_19598 = state_18110__$1;
(statearr_18173_19598[(2)] = null);

(statearr_18173_19598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (6))){
var inst_18027 = (state_18110[(13)]);
var inst_18039 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18027) : f.call(null, inst_18027));
var inst_18040 = cljs.core.seq(inst_18039);
var inst_18041 = inst_18040;
var inst_18042 = null;
var inst_18043 = (0);
var inst_18044 = (0);
var state_18110__$1 = (function (){var statearr_18178 = state_18110;
(statearr_18178[(8)] = inst_18043);

(statearr_18178[(9)] = inst_18044);

(statearr_18178[(10)] = inst_18042);

(statearr_18178[(12)] = inst_18041);

return statearr_18178;
})();
var statearr_18180_19599 = state_18110__$1;
(statearr_18180_19599[(2)] = null);

(statearr_18180_19599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (17))){
var inst_18055 = (state_18110[(7)]);
var inst_18059 = cljs.core.chunk_first(inst_18055);
var inst_18067 = cljs.core.chunk_rest(inst_18055);
var inst_18068 = cljs.core.count(inst_18059);
var inst_18041 = inst_18067;
var inst_18042 = inst_18059;
var inst_18043 = inst_18068;
var inst_18044 = (0);
var state_18110__$1 = (function (){var statearr_18181 = state_18110;
(statearr_18181[(8)] = inst_18043);

(statearr_18181[(9)] = inst_18044);

(statearr_18181[(10)] = inst_18042);

(statearr_18181[(12)] = inst_18041);

return statearr_18181;
})();
var statearr_18182_19600 = state_18110__$1;
(statearr_18182_19600[(2)] = null);

(statearr_18182_19600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (3))){
var inst_18101 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18110__$1,inst_18101);
} else {
if((state_val_18111 === (12))){
var inst_18086 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18190_19601 = state_18110__$1;
(statearr_18190_19601[(2)] = inst_18086);

(statearr_18190_19601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (2))){
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18110__$1,(4),in$);
} else {
if((state_val_18111 === (23))){
var inst_18096 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18192_19605 = state_18110__$1;
(statearr_18192_19605[(2)] = inst_18096);

(statearr_18192_19605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (19))){
var inst_18081 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18193_19610 = state_18110__$1;
(statearr_18193_19610[(2)] = inst_18081);

(statearr_18193_19610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (11))){
var inst_18055 = (state_18110[(7)]);
var inst_18041 = (state_18110[(12)]);
var inst_18055__$1 = cljs.core.seq(inst_18041);
var state_18110__$1 = (function (){var statearr_18200 = state_18110;
(statearr_18200[(7)] = inst_18055__$1);

return statearr_18200;
})();
if(inst_18055__$1){
var statearr_18201_19612 = state_18110__$1;
(statearr_18201_19612[(1)] = (14));

} else {
var statearr_18202_19613 = state_18110__$1;
(statearr_18202_19613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (9))){
var inst_18089 = (state_18110[(2)]);
var inst_18090 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18110__$1 = (function (){var statearr_18207 = state_18110;
(statearr_18207[(15)] = inst_18089);

return statearr_18207;
})();
if(cljs.core.truth_(inst_18090)){
var statearr_18209_19615 = state_18110__$1;
(statearr_18209_19615[(1)] = (21));

} else {
var statearr_18210_19616 = state_18110__$1;
(statearr_18210_19616[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (5))){
var inst_18030 = cljs.core.async.close_BANG_(out);
var state_18110__$1 = state_18110;
var statearr_18212_19617 = state_18110__$1;
(statearr_18212_19617[(2)] = inst_18030);

(statearr_18212_19617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (14))){
var inst_18055 = (state_18110[(7)]);
var inst_18057 = cljs.core.chunked_seq_QMARK_(inst_18055);
var state_18110__$1 = state_18110;
if(inst_18057){
var statearr_18213_19618 = state_18110__$1;
(statearr_18213_19618[(1)] = (17));

} else {
var statearr_18214_19619 = state_18110__$1;
(statearr_18214_19619[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (16))){
var inst_18084 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18215_19620 = state_18110__$1;
(statearr_18215_19620[(2)] = inst_18084);

(statearr_18215_19620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (10))){
var inst_18044 = (state_18110[(9)]);
var inst_18042 = (state_18110[(10)]);
var inst_18049 = cljs.core._nth(inst_18042,inst_18044);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18110__$1,(13),out,inst_18049);
} else {
if((state_val_18111 === (18))){
var inst_18055 = (state_18110[(7)]);
var inst_18071 = cljs.core.first(inst_18055);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18110__$1,(20),out,inst_18071);
} else {
if((state_val_18111 === (8))){
var inst_18043 = (state_18110[(8)]);
var inst_18044 = (state_18110[(9)]);
var inst_18046 = (inst_18044 < inst_18043);
var inst_18047 = inst_18046;
var state_18110__$1 = state_18110;
if(cljs.core.truth_(inst_18047)){
var statearr_18217_19621 = state_18110__$1;
(statearr_18217_19621[(1)] = (10));

} else {
var statearr_18218_19622 = state_18110__$1;
(statearr_18218_19622[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14364__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14364__auto____0 = (function (){
var statearr_18222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18222[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14364__auto__);

(statearr_18222[(1)] = (1));

return statearr_18222;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14364__auto____1 = (function (state_18110){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_18110);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e18223){var ex__14368__auto__ = e18223;
var statearr_18224_19627 = state_18110;
(statearr_18224_19627[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_18110[(4)]))){
var statearr_18225_19628 = state_18110;
(statearr_18225_19628[(1)] = cljs.core.first((state_18110[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19629 = state_18110;
state_18110 = G__19629;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14364__auto__ = function(state_18110){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14364__auto____1.call(this,state_18110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_18231 = f__15141__auto__();
(statearr_18231[(6)] = c__15140__auto__);

return statearr_18231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));

return c__15140__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18235 = arguments.length;
switch (G__18235) {
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
var G__18240 = arguments.length;
switch (G__18240) {
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
var G__18248 = arguments.length;
switch (G__18248) {
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
var c__15140__auto___19646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_18278){
var state_val_18279 = (state_18278[(1)]);
if((state_val_18279 === (7))){
var inst_18273 = (state_18278[(2)]);
var state_18278__$1 = state_18278;
var statearr_18281_19650 = state_18278__$1;
(statearr_18281_19650[(2)] = inst_18273);

(statearr_18281_19650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18279 === (1))){
var inst_18254 = null;
var state_18278__$1 = (function (){var statearr_18287 = state_18278;
(statearr_18287[(7)] = inst_18254);

return statearr_18287;
})();
var statearr_18288_19651 = state_18278__$1;
(statearr_18288_19651[(2)] = null);

(statearr_18288_19651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18279 === (4))){
var inst_18258 = (state_18278[(8)]);
var inst_18258__$1 = (state_18278[(2)]);
var inst_18259 = (inst_18258__$1 == null);
var inst_18260 = cljs.core.not(inst_18259);
var state_18278__$1 = (function (){var statearr_18291 = state_18278;
(statearr_18291[(8)] = inst_18258__$1);

return statearr_18291;
})();
if(inst_18260){
var statearr_18294_19655 = state_18278__$1;
(statearr_18294_19655[(1)] = (5));

} else {
var statearr_18295_19656 = state_18278__$1;
(statearr_18295_19656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18279 === (6))){
var state_18278__$1 = state_18278;
var statearr_18298_19657 = state_18278__$1;
(statearr_18298_19657[(2)] = null);

(statearr_18298_19657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18279 === (3))){
var inst_18275 = (state_18278[(2)]);
var inst_18276 = cljs.core.async.close_BANG_(out);
var state_18278__$1 = (function (){var statearr_18299 = state_18278;
(statearr_18299[(9)] = inst_18275);

return statearr_18299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18278__$1,inst_18276);
} else {
if((state_val_18279 === (2))){
var state_18278__$1 = state_18278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18278__$1,(4),ch);
} else {
if((state_val_18279 === (11))){
var inst_18258 = (state_18278[(8)]);
var inst_18267 = (state_18278[(2)]);
var inst_18254 = inst_18258;
var state_18278__$1 = (function (){var statearr_18300 = state_18278;
(statearr_18300[(7)] = inst_18254);

(statearr_18300[(10)] = inst_18267);

return statearr_18300;
})();
var statearr_18301_19658 = state_18278__$1;
(statearr_18301_19658[(2)] = null);

(statearr_18301_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18279 === (9))){
var inst_18258 = (state_18278[(8)]);
var state_18278__$1 = state_18278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18278__$1,(11),out,inst_18258);
} else {
if((state_val_18279 === (5))){
var inst_18254 = (state_18278[(7)]);
var inst_18258 = (state_18278[(8)]);
var inst_18262 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18258,inst_18254);
var state_18278__$1 = state_18278;
if(inst_18262){
var statearr_18304_19667 = state_18278__$1;
(statearr_18304_19667[(1)] = (8));

} else {
var statearr_18305_19668 = state_18278__$1;
(statearr_18305_19668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18279 === (10))){
var inst_18270 = (state_18278[(2)]);
var state_18278__$1 = state_18278;
var statearr_18306_19669 = state_18278__$1;
(statearr_18306_19669[(2)] = inst_18270);

(statearr_18306_19669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18279 === (8))){
var inst_18254 = (state_18278[(7)]);
var tmp18302 = inst_18254;
var inst_18254__$1 = tmp18302;
var state_18278__$1 = (function (){var statearr_18307 = state_18278;
(statearr_18307[(7)] = inst_18254__$1);

return statearr_18307;
})();
var statearr_18308_19670 = state_18278__$1;
(statearr_18308_19670[(2)] = null);

(statearr_18308_19670[(1)] = (2));


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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_18309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18309[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_18309[(1)] = (1));

return statearr_18309;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_18278){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_18278);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e18310){var ex__14368__auto__ = e18310;
var statearr_18311_19676 = state_18278;
(statearr_18311_19676[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_18278[(4)]))){
var statearr_18312_19677 = state_18278;
(statearr_18312_19677[(1)] = cljs.core.first((state_18278[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19678 = state_18278;
state_18278 = G__19678;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_18278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_18278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_18313 = f__15141__auto__();
(statearr_18313[(6)] = c__15140__auto___19646);

return statearr_18313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18315 = arguments.length;
switch (G__18315) {
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
var c__15140__auto___19680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_18361){
var state_val_18362 = (state_18361[(1)]);
if((state_val_18362 === (7))){
var inst_18352 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18365_19682 = state_18361__$1;
(statearr_18365_19682[(2)] = inst_18352);

(statearr_18365_19682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (1))){
var inst_18319 = (new Array(n));
var inst_18320 = inst_18319;
var inst_18321 = (0);
var state_18361__$1 = (function (){var statearr_18367 = state_18361;
(statearr_18367[(7)] = inst_18321);

(statearr_18367[(8)] = inst_18320);

return statearr_18367;
})();
var statearr_18368_19683 = state_18361__$1;
(statearr_18368_19683[(2)] = null);

(statearr_18368_19683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (4))){
var inst_18324 = (state_18361[(9)]);
var inst_18324__$1 = (state_18361[(2)]);
var inst_18325 = (inst_18324__$1 == null);
var inst_18326 = cljs.core.not(inst_18325);
var state_18361__$1 = (function (){var statearr_18376 = state_18361;
(statearr_18376[(9)] = inst_18324__$1);

return statearr_18376;
})();
if(inst_18326){
var statearr_18384_19684 = state_18361__$1;
(statearr_18384_19684[(1)] = (5));

} else {
var statearr_18388_19685 = state_18361__$1;
(statearr_18388_19685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (15))){
var inst_18346 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18407_19686 = state_18361__$1;
(statearr_18407_19686[(2)] = inst_18346);

(statearr_18407_19686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (13))){
var state_18361__$1 = state_18361;
var statearr_18408_19687 = state_18361__$1;
(statearr_18408_19687[(2)] = null);

(statearr_18408_19687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (6))){
var inst_18321 = (state_18361[(7)]);
var inst_18342 = (inst_18321 > (0));
var state_18361__$1 = state_18361;
if(cljs.core.truth_(inst_18342)){
var statearr_18410_19688 = state_18361__$1;
(statearr_18410_19688[(1)] = (12));

} else {
var statearr_18411_19689 = state_18361__$1;
(statearr_18411_19689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (3))){
var inst_18354 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18361__$1,inst_18354);
} else {
if((state_val_18362 === (12))){
var inst_18320 = (state_18361[(8)]);
var inst_18344 = cljs.core.vec(inst_18320);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18361__$1,(15),out,inst_18344);
} else {
if((state_val_18362 === (2))){
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18361__$1,(4),ch);
} else {
if((state_val_18362 === (11))){
var inst_18336 = (state_18361[(2)]);
var inst_18337 = (new Array(n));
var inst_18320 = inst_18337;
var inst_18321 = (0);
var state_18361__$1 = (function (){var statearr_18421 = state_18361;
(statearr_18421[(7)] = inst_18321);

(statearr_18421[(8)] = inst_18320);

(statearr_18421[(10)] = inst_18336);

return statearr_18421;
})();
var statearr_18422_19693 = state_18361__$1;
(statearr_18422_19693[(2)] = null);

(statearr_18422_19693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (9))){
var inst_18320 = (state_18361[(8)]);
var inst_18334 = cljs.core.vec(inst_18320);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18361__$1,(11),out,inst_18334);
} else {
if((state_val_18362 === (5))){
var inst_18324 = (state_18361[(9)]);
var inst_18321 = (state_18361[(7)]);
var inst_18320 = (state_18361[(8)]);
var inst_18329 = (state_18361[(11)]);
var inst_18328 = (inst_18320[inst_18321] = inst_18324);
var inst_18329__$1 = (inst_18321 + (1));
var inst_18330 = (inst_18329__$1 < n);
var state_18361__$1 = (function (){var statearr_18425 = state_18361;
(statearr_18425[(12)] = inst_18328);

(statearr_18425[(11)] = inst_18329__$1);

return statearr_18425;
})();
if(cljs.core.truth_(inst_18330)){
var statearr_18426_19694 = state_18361__$1;
(statearr_18426_19694[(1)] = (8));

} else {
var statearr_18427_19695 = state_18361__$1;
(statearr_18427_19695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (14))){
var inst_18349 = (state_18361[(2)]);
var inst_18350 = cljs.core.async.close_BANG_(out);
var state_18361__$1 = (function (){var statearr_18431 = state_18361;
(statearr_18431[(13)] = inst_18349);

return statearr_18431;
})();
var statearr_18436_19700 = state_18361__$1;
(statearr_18436_19700[(2)] = inst_18350);

(statearr_18436_19700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (10))){
var inst_18340 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18437_19701 = state_18361__$1;
(statearr_18437_19701[(2)] = inst_18340);

(statearr_18437_19701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (8))){
var inst_18320 = (state_18361[(8)]);
var inst_18329 = (state_18361[(11)]);
var tmp18430 = inst_18320;
var inst_18320__$1 = tmp18430;
var inst_18321 = inst_18329;
var state_18361__$1 = (function (){var statearr_18438 = state_18361;
(statearr_18438[(7)] = inst_18321);

(statearr_18438[(8)] = inst_18320__$1);

return statearr_18438;
})();
var statearr_18440_19702 = state_18361__$1;
(statearr_18440_19702[(2)] = null);

(statearr_18440_19702[(1)] = (2));


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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_18441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18441[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_18441[(1)] = (1));

return statearr_18441;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_18361){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_18361);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e18442){var ex__14368__auto__ = e18442;
var statearr_18444_19703 = state_18361;
(statearr_18444_19703[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_18361[(4)]))){
var statearr_18445_19704 = state_18361;
(statearr_18445_19704[(1)] = cljs.core.first((state_18361[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19705 = state_18361;
state_18361 = G__19705;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_18361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_18361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_18447 = f__15141__auto__();
(statearr_18447[(6)] = c__15140__auto___19680);

return statearr_18447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18457 = arguments.length;
switch (G__18457) {
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
var c__15140__auto___19707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15141__auto__ = (function (){var switch__14363__auto__ = (function (state_18534){
var state_val_18535 = (state_18534[(1)]);
if((state_val_18535 === (7))){
var inst_18530 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
var statearr_18553_19708 = state_18534__$1;
(statearr_18553_19708[(2)] = inst_18530);

(statearr_18553_19708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (1))){
var inst_18465 = [];
var inst_18466 = inst_18465;
var inst_18467 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18534__$1 = (function (){var statearr_18563 = state_18534;
(statearr_18563[(7)] = inst_18467);

(statearr_18563[(8)] = inst_18466);

return statearr_18563;
})();
var statearr_18572_19709 = state_18534__$1;
(statearr_18572_19709[(2)] = null);

(statearr_18572_19709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (4))){
var inst_18474 = (state_18534[(9)]);
var inst_18474__$1 = (state_18534[(2)]);
var inst_18475 = (inst_18474__$1 == null);
var inst_18476 = cljs.core.not(inst_18475);
var state_18534__$1 = (function (){var statearr_18589 = state_18534;
(statearr_18589[(9)] = inst_18474__$1);

return statearr_18589;
})();
if(inst_18476){
var statearr_18590_19710 = state_18534__$1;
(statearr_18590_19710[(1)] = (5));

} else {
var statearr_18595_19711 = state_18534__$1;
(statearr_18595_19711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (15))){
var inst_18466 = (state_18534[(8)]);
var inst_18522 = cljs.core.vec(inst_18466);
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18534__$1,(18),out,inst_18522);
} else {
if((state_val_18535 === (13))){
var inst_18515 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
var statearr_18611_19712 = state_18534__$1;
(statearr_18611_19712[(2)] = inst_18515);

(statearr_18611_19712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (6))){
var inst_18466 = (state_18534[(8)]);
var inst_18519 = inst_18466.length;
var inst_18520 = (inst_18519 > (0));
var state_18534__$1 = state_18534;
if(cljs.core.truth_(inst_18520)){
var statearr_18623_19713 = state_18534__$1;
(statearr_18623_19713[(1)] = (15));

} else {
var statearr_18624_19714 = state_18534__$1;
(statearr_18624_19714[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (17))){
var inst_18527 = (state_18534[(2)]);
var inst_18528 = cljs.core.async.close_BANG_(out);
var state_18534__$1 = (function (){var statearr_18629 = state_18534;
(statearr_18629[(10)] = inst_18527);

return statearr_18629;
})();
var statearr_18630_19719 = state_18534__$1;
(statearr_18630_19719[(2)] = inst_18528);

(statearr_18630_19719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (3))){
var inst_18532 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18534__$1,inst_18532);
} else {
if((state_val_18535 === (12))){
var inst_18466 = (state_18534[(8)]);
var inst_18493 = cljs.core.vec(inst_18466);
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18534__$1,(14),out,inst_18493);
} else {
if((state_val_18535 === (2))){
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18534__$1,(4),ch);
} else {
if((state_val_18535 === (11))){
var inst_18474 = (state_18534[(9)]);
var inst_18478 = (state_18534[(11)]);
var inst_18466 = (state_18534[(8)]);
var inst_18490 = inst_18466.push(inst_18474);
var tmp18638 = inst_18466;
var inst_18466__$1 = tmp18638;
var inst_18467 = inst_18478;
var state_18534__$1 = (function (){var statearr_18651 = state_18534;
(statearr_18651[(12)] = inst_18490);

(statearr_18651[(7)] = inst_18467);

(statearr_18651[(8)] = inst_18466__$1);

return statearr_18651;
})();
var statearr_18652_19724 = state_18534__$1;
(statearr_18652_19724[(2)] = null);

(statearr_18652_19724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (9))){
var inst_18467 = (state_18534[(7)]);
var inst_18482 = cljs.core.keyword_identical_QMARK_(inst_18467,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18534__$1 = state_18534;
var statearr_18654_19725 = state_18534__$1;
(statearr_18654_19725[(2)] = inst_18482);

(statearr_18654_19725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (5))){
var inst_18474 = (state_18534[(9)]);
var inst_18467 = (state_18534[(7)]);
var inst_18478 = (state_18534[(11)]);
var inst_18479 = (state_18534[(13)]);
var inst_18478__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18474) : f.call(null, inst_18474));
var inst_18479__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18478__$1,inst_18467);
var state_18534__$1 = (function (){var statearr_18657 = state_18534;
(statearr_18657[(11)] = inst_18478__$1);

(statearr_18657[(13)] = inst_18479__$1);

return statearr_18657;
})();
if(inst_18479__$1){
var statearr_18658_19733 = state_18534__$1;
(statearr_18658_19733[(1)] = (8));

} else {
var statearr_18660_19734 = state_18534__$1;
(statearr_18660_19734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (14))){
var inst_18474 = (state_18534[(9)]);
var inst_18478 = (state_18534[(11)]);
var inst_18495 = (state_18534[(2)]);
var inst_18500 = [];
var inst_18501 = inst_18500.push(inst_18474);
var inst_18466 = inst_18500;
var inst_18467 = inst_18478;
var state_18534__$1 = (function (){var statearr_18662 = state_18534;
(statearr_18662[(14)] = inst_18501);

(statearr_18662[(15)] = inst_18495);

(statearr_18662[(7)] = inst_18467);

(statearr_18662[(8)] = inst_18466);

return statearr_18662;
})();
var statearr_18665_19735 = state_18534__$1;
(statearr_18665_19735[(2)] = null);

(statearr_18665_19735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (16))){
var state_18534__$1 = state_18534;
var statearr_18667_19736 = state_18534__$1;
(statearr_18667_19736[(2)] = null);

(statearr_18667_19736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (10))){
var inst_18484 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
if(cljs.core.truth_(inst_18484)){
var statearr_18671_19740 = state_18534__$1;
(statearr_18671_19740[(1)] = (11));

} else {
var statearr_18672_19745 = state_18534__$1;
(statearr_18672_19745[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (18))){
var inst_18524 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
var statearr_18674_19746 = state_18534__$1;
(statearr_18674_19746[(2)] = inst_18524);

(statearr_18674_19746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18535 === (8))){
var inst_18479 = (state_18534[(13)]);
var state_18534__$1 = state_18534;
var statearr_18675_19747 = state_18534__$1;
(statearr_18675_19747[(2)] = inst_18479);

(statearr_18675_19747[(1)] = (10));


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
var cljs$core$async$state_machine__14364__auto__ = null;
var cljs$core$async$state_machine__14364__auto____0 = (function (){
var statearr_18677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18677[(0)] = cljs$core$async$state_machine__14364__auto__);

(statearr_18677[(1)] = (1));

return statearr_18677;
});
var cljs$core$async$state_machine__14364__auto____1 = (function (state_18534){
while(true){
var ret_value__14365__auto__ = (function (){try{while(true){
var result__14367__auto__ = switch__14363__auto__(state_18534);
if(cljs.core.keyword_identical_QMARK_(result__14367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14367__auto__;
}
break;
}
}catch (e18683){var ex__14368__auto__ = e18683;
var statearr_18684_19755 = state_18534;
(statearr_18684_19755[(2)] = ex__14368__auto__);


if(cljs.core.seq((state_18534[(4)]))){
var statearr_18686_19756 = state_18534;
(statearr_18686_19756[(1)] = cljs.core.first((state_18534[(4)])));

} else {
throw ex__14368__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19757 = state_18534;
state_18534 = G__19757;
continue;
} else {
return ret_value__14365__auto__;
}
break;
}
});
cljs$core$async$state_machine__14364__auto__ = function(state_18534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14364__auto____1.call(this,state_18534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14364__auto____0;
cljs$core$async$state_machine__14364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14364__auto____1;
return cljs$core$async$state_machine__14364__auto__;
})()
})();
var state__15142__auto__ = (function (){var statearr_18693 = f__15141__auto__();
(statearr_18693[(6)] = c__15140__auto___19707);

return statearr_18693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15142__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

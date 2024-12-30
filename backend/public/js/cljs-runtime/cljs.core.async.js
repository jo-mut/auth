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
cljs.core.async.t_cljs$core$async18707 = (function (f,blockable,meta18708){
this.f = f;
this.blockable = blockable;
this.meta18708 = meta18708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18709,meta18708__$1){
var self__ = this;
var _18709__$1 = this;
return (new cljs.core.async.t_cljs$core$async18707(self__.f,self__.blockable,meta18708__$1));
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18709){
var self__ = this;
var _18709__$1 = this;
return self__.meta18708;
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18708","meta18708",625402187,null)], null);
}));

(cljs.core.async.t_cljs$core$async18707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18707");

(cljs.core.async.t_cljs$core$async18707.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18707.
 */
cljs.core.async.__GT_t_cljs$core$async18707 = (function cljs$core$async$__GT_t_cljs$core$async18707(f,blockable,meta18708){
return (new cljs.core.async.t_cljs$core$async18707(f,blockable,meta18708));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18703 = arguments.length;
switch (G__18703) {
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
return (new cljs.core.async.t_cljs$core$async18707(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18755 = arguments.length;
switch (G__18755) {
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
var G__18760 = arguments.length;
switch (G__18760) {
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
var G__18765 = arguments.length;
switch (G__18765) {
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
var val_20815 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20815) : fn1.call(null, val_20815));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20815) : fn1.call(null, val_20815));
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
var G__18770 = arguments.length;
switch (G__18770) {
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
var n__5593__auto___20821 = n;
var x_20822 = (0);
while(true){
if((x_20822 < n__5593__auto___20821)){
(a[x_20822] = x_20822);

var G__20823 = (x_20822 + (1));
x_20822 = G__20823;
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
cljs.core.async.t_cljs$core$async18771 = (function (flag,meta18772){
this.flag = flag;
this.meta18772 = meta18772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18773,meta18772__$1){
var self__ = this;
var _18773__$1 = this;
return (new cljs.core.async.t_cljs$core$async18771(self__.flag,meta18772__$1));
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18773){
var self__ = this;
var _18773__$1 = this;
return self__.meta18772;
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18772","meta18772",-554933180,null)], null);
}));

(cljs.core.async.t_cljs$core$async18771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18771");

(cljs.core.async.t_cljs$core$async18771.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18771.
 */
cljs.core.async.__GT_t_cljs$core$async18771 = (function cljs$core$async$__GT_t_cljs$core$async18771(flag,meta18772){
return (new cljs.core.async.t_cljs$core$async18771(flag,meta18772));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18771(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18774 = (function (flag,cb,meta18775){
this.flag = flag;
this.cb = cb;
this.meta18775 = meta18775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18776,meta18775__$1){
var self__ = this;
var _18776__$1 = this;
return (new cljs.core.async.t_cljs$core$async18774(self__.flag,self__.cb,meta18775__$1));
}));

(cljs.core.async.t_cljs$core$async18774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18776){
var self__ = this;
var _18776__$1 = this;
return self__.meta18775;
}));

(cljs.core.async.t_cljs$core$async18774.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18775","meta18775",1942920168,null)], null);
}));

(cljs.core.async.t_cljs$core$async18774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18774");

(cljs.core.async.t_cljs$core$async18774.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18774.
 */
cljs.core.async.__GT_t_cljs$core$async18774 = (function cljs$core$async$__GT_t_cljs$core$async18774(flag,cb,meta18775){
return (new cljs.core.async.t_cljs$core$async18774(flag,cb,meta18775));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18774(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18777_SHARP_){
var G__18779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18777_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18779) : fret.call(null, G__18779));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18778_SHARP_){
var G__18780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18778_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18780) : fret.call(null, G__18780));
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
var G__20829 = (i + (1));
i = G__20829;
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
var len__5726__auto___20831 = arguments.length;
var i__5727__auto___20832 = (0);
while(true){
if((i__5727__auto___20832 < len__5726__auto___20831)){
args__5732__auto__.push((arguments[i__5727__auto___20832]));

var G__20833 = (i__5727__auto___20832 + (1));
i__5727__auto___20832 = G__20833;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18783){
var map__18784 = p__18783;
var map__18784__$1 = cljs.core.__destructure_map(map__18784);
var opts = map__18784__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18781){
var G__18782 = cljs.core.first(seq18781);
var seq18781__$1 = cljs.core.next(seq18781);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18782,seq18781__$1);
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
var G__18786 = arguments.length;
switch (G__18786) {
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
var c__18601__auto___20836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_18815){
var state_val_18817 = (state_18815[(1)]);
if((state_val_18817 === (7))){
var inst_18810 = (state_18815[(2)]);
var state_18815__$1 = state_18815;
var statearr_18819_20837 = state_18815__$1;
(statearr_18819_20837[(2)] = inst_18810);

(statearr_18819_20837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (1))){
var state_18815__$1 = state_18815;
var statearr_18820_20838 = state_18815__$1;
(statearr_18820_20838[(2)] = null);

(statearr_18820_20838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (4))){
var inst_18793 = (state_18815[(7)]);
var inst_18793__$1 = (state_18815[(2)]);
var inst_18794 = (inst_18793__$1 == null);
var state_18815__$1 = (function (){var statearr_18822 = state_18815;
(statearr_18822[(7)] = inst_18793__$1);

return statearr_18822;
})();
if(cljs.core.truth_(inst_18794)){
var statearr_18823_20843 = state_18815__$1;
(statearr_18823_20843[(1)] = (5));

} else {
var statearr_18824_20844 = state_18815__$1;
(statearr_18824_20844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (13))){
var state_18815__$1 = state_18815;
var statearr_18825_20845 = state_18815__$1;
(statearr_18825_20845[(2)] = null);

(statearr_18825_20845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (6))){
var inst_18793 = (state_18815[(7)]);
var state_18815__$1 = state_18815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18815__$1,(11),to,inst_18793);
} else {
if((state_val_18817 === (3))){
var inst_18813 = (state_18815[(2)]);
var state_18815__$1 = state_18815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18815__$1,inst_18813);
} else {
if((state_val_18817 === (12))){
var state_18815__$1 = state_18815;
var statearr_18827_20846 = state_18815__$1;
(statearr_18827_20846[(2)] = null);

(statearr_18827_20846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (2))){
var state_18815__$1 = state_18815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18815__$1,(4),from);
} else {
if((state_val_18817 === (11))){
var inst_18803 = (state_18815[(2)]);
var state_18815__$1 = state_18815;
if(cljs.core.truth_(inst_18803)){
var statearr_18828_20848 = state_18815__$1;
(statearr_18828_20848[(1)] = (12));

} else {
var statearr_18829_20849 = state_18815__$1;
(statearr_18829_20849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (9))){
var state_18815__$1 = state_18815;
var statearr_18830_20851 = state_18815__$1;
(statearr_18830_20851[(2)] = null);

(statearr_18830_20851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (5))){
var state_18815__$1 = state_18815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18832_20852 = state_18815__$1;
(statearr_18832_20852[(1)] = (8));

} else {
var statearr_18833_20853 = state_18815__$1;
(statearr_18833_20853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (14))){
var inst_18808 = (state_18815[(2)]);
var state_18815__$1 = state_18815;
var statearr_18834_20855 = state_18815__$1;
(statearr_18834_20855[(2)] = inst_18808);

(statearr_18834_20855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (10))){
var inst_18800 = (state_18815[(2)]);
var state_18815__$1 = state_18815;
var statearr_18835_20856 = state_18815__$1;
(statearr_18835_20856[(2)] = inst_18800);

(statearr_18835_20856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (8))){
var inst_18797 = cljs.core.async.close_BANG_(to);
var state_18815__$1 = state_18815;
var statearr_18836_20863 = state_18815__$1;
(statearr_18836_20863[(2)] = inst_18797);

(statearr_18836_20863[(1)] = (10));


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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_18837 = [null,null,null,null,null,null,null,null];
(statearr_18837[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_18837[(1)] = (1));

return statearr_18837;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_18815){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_18815);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e18838){var ex__18268__auto__ = e18838;
var statearr_18840_20868 = state_18815;
(statearr_18840_20868[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_18815[(4)]))){
var statearr_18841_20869 = state_18815;
(statearr_18841_20869[(1)] = cljs.core.first((state_18815[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20870 = state_18815;
state_18815 = G__20870;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_18815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_18815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_18842 = f__18602__auto__();
(statearr_18842[(6)] = c__18601__auto___20836);

return statearr_18842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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
var process__$1 = (function (p__18844){
var vec__18845 = p__18844;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18845,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18845,(1),null);
var job = vec__18845;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18601__auto___20876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_18853){
var state_val_18854 = (state_18853[(1)]);
if((state_val_18854 === (1))){
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18853__$1,(2),res,v);
} else {
if((state_val_18854 === (2))){
var inst_18849 = (state_18853[(2)]);
var inst_18850 = cljs.core.async.close_BANG_(res);
var state_18853__$1 = (function (){var statearr_18855 = state_18853;
(statearr_18855[(7)] = inst_18849);

return statearr_18855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18853__$1,inst_18850);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0 = (function (){
var statearr_18856 = [null,null,null,null,null,null,null,null];
(statearr_18856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__);

(statearr_18856[(1)] = (1));

return statearr_18856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1 = (function (state_18853){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_18853);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e18857){var ex__18268__auto__ = e18857;
var statearr_18858_20885 = state_18853;
(statearr_18858_20885[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_18853[(4)]))){
var statearr_18860_20886 = state_18853;
(statearr_18860_20886[(1)] = cljs.core.first((state_18853[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20887 = state_18853;
state_18853 = G__20887;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = function(state_18853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1.call(this,state_18853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_18861 = f__18602__auto__();
(statearr_18861[(6)] = c__18601__auto___20876);

return statearr_18861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18862){
var vec__18863 = p__18862;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863,(1),null);
var job = vec__18863;
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
var n__5593__auto___20896 = n;
var __20897 = (0);
while(true){
if((__20897 < n__5593__auto___20896)){
var G__18867_20899 = type;
var G__18867_20900__$1 = (((G__18867_20899 instanceof cljs.core.Keyword))?G__18867_20899.fqn:null);
switch (G__18867_20900__$1) {
case "compute":
var c__18601__auto___20902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20897,c__18601__auto___20902,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async){
return (function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = ((function (__20897,c__18601__auto___20902,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async){
return (function (state_18880){
var state_val_18881 = (state_18880[(1)]);
if((state_val_18881 === (1))){
var state_18880__$1 = state_18880;
var statearr_18882_20903 = state_18880__$1;
(statearr_18882_20903[(2)] = null);

(statearr_18882_20903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18881 === (2))){
var state_18880__$1 = state_18880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18880__$1,(4),jobs);
} else {
if((state_val_18881 === (3))){
var inst_18878 = (state_18880[(2)]);
var state_18880__$1 = state_18880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18880__$1,inst_18878);
} else {
if((state_val_18881 === (4))){
var inst_18870 = (state_18880[(2)]);
var inst_18871 = process__$1(inst_18870);
var state_18880__$1 = state_18880;
if(cljs.core.truth_(inst_18871)){
var statearr_18884_20904 = state_18880__$1;
(statearr_18884_20904[(1)] = (5));

} else {
var statearr_18885_20905 = state_18880__$1;
(statearr_18885_20905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18881 === (5))){
var state_18880__$1 = state_18880;
var statearr_18886_20907 = state_18880__$1;
(statearr_18886_20907[(2)] = null);

(statearr_18886_20907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18881 === (6))){
var state_18880__$1 = state_18880;
var statearr_18887_20908 = state_18880__$1;
(statearr_18887_20908[(2)] = null);

(statearr_18887_20908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18881 === (7))){
var inst_18876 = (state_18880[(2)]);
var state_18880__$1 = state_18880;
var statearr_18888_20909 = state_18880__$1;
(statearr_18888_20909[(2)] = inst_18876);

(statearr_18888_20909[(1)] = (3));


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
});})(__20897,c__18601__auto___20902,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async))
;
return ((function (__20897,switch__18264__auto__,c__18601__auto___20902,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0 = (function (){
var statearr_18889 = [null,null,null,null,null,null,null];
(statearr_18889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__);

(statearr_18889[(1)] = (1));

return statearr_18889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1 = (function (state_18880){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_18880);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e18891){var ex__18268__auto__ = e18891;
var statearr_18892_20911 = state_18880;
(statearr_18892_20911[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_18880[(4)]))){
var statearr_18893_20912 = state_18880;
(statearr_18893_20912[(1)] = cljs.core.first((state_18880[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20913 = state_18880;
state_18880 = G__20913;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = function(state_18880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1.call(this,state_18880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__;
})()
;})(__20897,switch__18264__auto__,c__18601__auto___20902,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async))
})();
var state__18603__auto__ = (function (){var statearr_18894 = f__18602__auto__();
(statearr_18894[(6)] = c__18601__auto___20902);

return statearr_18894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
});})(__20897,c__18601__auto___20902,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async))
);


break;
case "async":
var c__18601__auto___20914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20897,c__18601__auto___20914,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async){
return (function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = ((function (__20897,c__18601__auto___20914,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async){
return (function (state_18907){
var state_val_18908 = (state_18907[(1)]);
if((state_val_18908 === (1))){
var state_18907__$1 = state_18907;
var statearr_18910_20915 = state_18907__$1;
(statearr_18910_20915[(2)] = null);

(statearr_18910_20915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (2))){
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18907__$1,(4),jobs);
} else {
if((state_val_18908 === (3))){
var inst_18905 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18907__$1,inst_18905);
} else {
if((state_val_18908 === (4))){
var inst_18897 = (state_18907[(2)]);
var inst_18898 = async(inst_18897);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18898)){
var statearr_18911_20919 = state_18907__$1;
(statearr_18911_20919[(1)] = (5));

} else {
var statearr_18912_20920 = state_18907__$1;
(statearr_18912_20920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (5))){
var state_18907__$1 = state_18907;
var statearr_18913_20921 = state_18907__$1;
(statearr_18913_20921[(2)] = null);

(statearr_18913_20921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (6))){
var state_18907__$1 = state_18907;
var statearr_18915_20922 = state_18907__$1;
(statearr_18915_20922[(2)] = null);

(statearr_18915_20922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (7))){
var inst_18903 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18916_20928 = state_18907__$1;
(statearr_18916_20928[(2)] = inst_18903);

(statearr_18916_20928[(1)] = (3));


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
});})(__20897,c__18601__auto___20914,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async))
;
return ((function (__20897,switch__18264__auto__,c__18601__auto___20914,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0 = (function (){
var statearr_18917 = [null,null,null,null,null,null,null];
(statearr_18917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__);

(statearr_18917[(1)] = (1));

return statearr_18917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1 = (function (state_18907){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_18907);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e18918){var ex__18268__auto__ = e18918;
var statearr_18919_20934 = state_18907;
(statearr_18919_20934[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_18907[(4)]))){
var statearr_18920_20935 = state_18907;
(statearr_18920_20935[(1)] = cljs.core.first((state_18907[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20940 = state_18907;
state_18907 = G__20940;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = function(state_18907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1.call(this,state_18907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__;
})()
;})(__20897,switch__18264__auto__,c__18601__auto___20914,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async))
})();
var state__18603__auto__ = (function (){var statearr_18921 = f__18602__auto__();
(statearr_18921[(6)] = c__18601__auto___20914);

return statearr_18921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
});})(__20897,c__18601__auto___20914,G__18867_20899,G__18867_20900__$1,n__5593__auto___20896,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18867_20900__$1)].join('')));

}

var G__20941 = (__20897 + (1));
__20897 = G__20941;
continue;
} else {
}
break;
}

var c__18601__auto___20942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_18944){
var state_val_18945 = (state_18944[(1)]);
if((state_val_18945 === (7))){
var inst_18940 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
var statearr_18947_20943 = state_18944__$1;
(statearr_18947_20943[(2)] = inst_18940);

(statearr_18947_20943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (1))){
var state_18944__$1 = state_18944;
var statearr_18948_20944 = state_18944__$1;
(statearr_18948_20944[(2)] = null);

(statearr_18948_20944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (4))){
var inst_18925 = (state_18944[(7)]);
var inst_18925__$1 = (state_18944[(2)]);
var inst_18926 = (inst_18925__$1 == null);
var state_18944__$1 = (function (){var statearr_18949 = state_18944;
(statearr_18949[(7)] = inst_18925__$1);

return statearr_18949;
})();
if(cljs.core.truth_(inst_18926)){
var statearr_18950_20946 = state_18944__$1;
(statearr_18950_20946[(1)] = (5));

} else {
var statearr_18951_20947 = state_18944__$1;
(statearr_18951_20947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (6))){
var inst_18925 = (state_18944[(7)]);
var inst_18930 = (state_18944[(8)]);
var inst_18930__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18931 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18932 = [inst_18925,inst_18930__$1];
var inst_18933 = (new cljs.core.PersistentVector(null,2,(5),inst_18931,inst_18932,null));
var state_18944__$1 = (function (){var statearr_18952 = state_18944;
(statearr_18952[(8)] = inst_18930__$1);

return statearr_18952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18944__$1,(8),jobs,inst_18933);
} else {
if((state_val_18945 === (3))){
var inst_18942 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18944__$1,inst_18942);
} else {
if((state_val_18945 === (2))){
var state_18944__$1 = state_18944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18944__$1,(4),from);
} else {
if((state_val_18945 === (9))){
var inst_18937 = (state_18944[(2)]);
var state_18944__$1 = (function (){var statearr_18953 = state_18944;
(statearr_18953[(9)] = inst_18937);

return statearr_18953;
})();
var statearr_18954_20949 = state_18944__$1;
(statearr_18954_20949[(2)] = null);

(statearr_18954_20949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (5))){
var inst_18928 = cljs.core.async.close_BANG_(jobs);
var state_18944__$1 = state_18944;
var statearr_18955_20950 = state_18944__$1;
(statearr_18955_20950[(2)] = inst_18928);

(statearr_18955_20950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (8))){
var inst_18930 = (state_18944[(8)]);
var inst_18935 = (state_18944[(2)]);
var state_18944__$1 = (function (){var statearr_18956 = state_18944;
(statearr_18956[(10)] = inst_18935);

return statearr_18956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18944__$1,(9),results,inst_18930);
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
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0 = (function (){
var statearr_18958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__);

(statearr_18958[(1)] = (1));

return statearr_18958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1 = (function (state_18944){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_18944);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e18959){var ex__18268__auto__ = e18959;
var statearr_18960_20956 = state_18944;
(statearr_18960_20956[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_18944[(4)]))){
var statearr_18961_20957 = state_18944;
(statearr_18961_20957[(1)] = cljs.core.first((state_18944[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20958 = state_18944;
state_18944 = G__20958;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = function(state_18944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1.call(this,state_18944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_18962 = f__18602__auto__();
(statearr_18962[(6)] = c__18601__auto___20942);

return statearr_18962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));


var c__18601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19001){
var state_val_19002 = (state_19001[(1)]);
if((state_val_19002 === (7))){
var inst_18997 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19004_20963 = state_19001__$1;
(statearr_19004_20963[(2)] = inst_18997);

(statearr_19004_20963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (20))){
var state_19001__$1 = state_19001;
var statearr_19005_20964 = state_19001__$1;
(statearr_19005_20964[(2)] = null);

(statearr_19005_20964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (1))){
var state_19001__$1 = state_19001;
var statearr_19006_20965 = state_19001__$1;
(statearr_19006_20965[(2)] = null);

(statearr_19006_20965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (4))){
var inst_18966 = (state_19001[(7)]);
var inst_18966__$1 = (state_19001[(2)]);
var inst_18967 = (inst_18966__$1 == null);
var state_19001__$1 = (function (){var statearr_19007 = state_19001;
(statearr_19007[(7)] = inst_18966__$1);

return statearr_19007;
})();
if(cljs.core.truth_(inst_18967)){
var statearr_19008_20966 = state_19001__$1;
(statearr_19008_20966[(1)] = (5));

} else {
var statearr_19009_20967 = state_19001__$1;
(statearr_19009_20967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (15))){
var inst_18979 = (state_19001[(8)]);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19001__$1,(18),to,inst_18979);
} else {
if((state_val_19002 === (21))){
var inst_18992 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19010_20968 = state_19001__$1;
(statearr_19010_20968[(2)] = inst_18992);

(statearr_19010_20968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (13))){
var inst_18994 = (state_19001[(2)]);
var state_19001__$1 = (function (){var statearr_19012 = state_19001;
(statearr_19012[(9)] = inst_18994);

return statearr_19012;
})();
var statearr_19013_20969 = state_19001__$1;
(statearr_19013_20969[(2)] = null);

(statearr_19013_20969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (6))){
var inst_18966 = (state_19001[(7)]);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19001__$1,(11),inst_18966);
} else {
if((state_val_19002 === (17))){
var inst_18987 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
if(cljs.core.truth_(inst_18987)){
var statearr_19014_20971 = state_19001__$1;
(statearr_19014_20971[(1)] = (19));

} else {
var statearr_19015_20975 = state_19001__$1;
(statearr_19015_20975[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (3))){
var inst_18999 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19001__$1,inst_18999);
} else {
if((state_val_19002 === (12))){
var inst_18976 = (state_19001[(10)]);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19001__$1,(14),inst_18976);
} else {
if((state_val_19002 === (2))){
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19001__$1,(4),results);
} else {
if((state_val_19002 === (19))){
var state_19001__$1 = state_19001;
var statearr_19016_20976 = state_19001__$1;
(statearr_19016_20976[(2)] = null);

(statearr_19016_20976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (11))){
var inst_18976 = (state_19001[(2)]);
var state_19001__$1 = (function (){var statearr_19018 = state_19001;
(statearr_19018[(10)] = inst_18976);

return statearr_19018;
})();
var statearr_19019_20978 = state_19001__$1;
(statearr_19019_20978[(2)] = null);

(statearr_19019_20978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (9))){
var state_19001__$1 = state_19001;
var statearr_19021_20981 = state_19001__$1;
(statearr_19021_20981[(2)] = null);

(statearr_19021_20981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (5))){
var state_19001__$1 = state_19001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19022_20982 = state_19001__$1;
(statearr_19022_20982[(1)] = (8));

} else {
var statearr_19023_20983 = state_19001__$1;
(statearr_19023_20983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (14))){
var inst_18981 = (state_19001[(11)]);
var inst_18979 = (state_19001[(8)]);
var inst_18979__$1 = (state_19001[(2)]);
var inst_18980 = (inst_18979__$1 == null);
var inst_18981__$1 = cljs.core.not(inst_18980);
var state_19001__$1 = (function (){var statearr_19024 = state_19001;
(statearr_19024[(11)] = inst_18981__$1);

(statearr_19024[(8)] = inst_18979__$1);

return statearr_19024;
})();
if(inst_18981__$1){
var statearr_19025_20984 = state_19001__$1;
(statearr_19025_20984[(1)] = (15));

} else {
var statearr_19026_20985 = state_19001__$1;
(statearr_19026_20985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (16))){
var inst_18981 = (state_19001[(11)]);
var state_19001__$1 = state_19001;
var statearr_19027_20986 = state_19001__$1;
(statearr_19027_20986[(2)] = inst_18981);

(statearr_19027_20986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (10))){
var inst_18973 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19029_20987 = state_19001__$1;
(statearr_19029_20987[(2)] = inst_18973);

(statearr_19029_20987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (18))){
var inst_18984 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19030_20992 = state_19001__$1;
(statearr_19030_20992[(2)] = inst_18984);

(statearr_19030_20992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (8))){
var inst_18970 = cljs.core.async.close_BANG_(to);
var state_19001__$1 = state_19001;
var statearr_19031_20996 = state_19001__$1;
(statearr_19031_20996[(2)] = inst_18970);

(statearr_19031_20996[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0 = (function (){
var statearr_19032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__);

(statearr_19032[(1)] = (1));

return statearr_19032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1 = (function (state_19001){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19001);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19033){var ex__18268__auto__ = e19033;
var statearr_19034_21000 = state_19001;
(statearr_19034_21000[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19001[(4)]))){
var statearr_19035_21001 = state_19001;
(statearr_19035_21001[(1)] = cljs.core.first((state_19001[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21002 = state_19001;
state_19001 = G__21002;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__ = function(state_19001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1.call(this,state_19001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18265__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19037 = f__18602__auto__();
(statearr_19037[(6)] = c__18601__auto__);

return statearr_19037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));

return c__18601__auto__;
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
var G__19039 = arguments.length;
switch (G__19039) {
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
var G__19043 = arguments.length;
switch (G__19043) {
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
var G__19046 = arguments.length;
switch (G__19046) {
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
var c__18601__auto___21012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19073){
var state_val_19074 = (state_19073[(1)]);
if((state_val_19074 === (7))){
var inst_19069 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
var statearr_19076_21016 = state_19073__$1;
(statearr_19076_21016[(2)] = inst_19069);

(statearr_19076_21016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (1))){
var state_19073__$1 = state_19073;
var statearr_19077_21017 = state_19073__$1;
(statearr_19077_21017[(2)] = null);

(statearr_19077_21017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (4))){
var inst_19050 = (state_19073[(7)]);
var inst_19050__$1 = (state_19073[(2)]);
var inst_19051 = (inst_19050__$1 == null);
var state_19073__$1 = (function (){var statearr_19078 = state_19073;
(statearr_19078[(7)] = inst_19050__$1);

return statearr_19078;
})();
if(cljs.core.truth_(inst_19051)){
var statearr_19079_21018 = state_19073__$1;
(statearr_19079_21018[(1)] = (5));

} else {
var statearr_19080_21019 = state_19073__$1;
(statearr_19080_21019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (13))){
var state_19073__$1 = state_19073;
var statearr_19082_21020 = state_19073__$1;
(statearr_19082_21020[(2)] = null);

(statearr_19082_21020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (6))){
var inst_19050 = (state_19073[(7)]);
var inst_19056 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19050) : p.call(null, inst_19050));
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_19056)){
var statearr_19083_21021 = state_19073__$1;
(statearr_19083_21021[(1)] = (9));

} else {
var statearr_19084_21022 = state_19073__$1;
(statearr_19084_21022[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (3))){
var inst_19071 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19073__$1,inst_19071);
} else {
if((state_val_19074 === (12))){
var state_19073__$1 = state_19073;
var statearr_19085_21023 = state_19073__$1;
(statearr_19085_21023[(2)] = null);

(statearr_19085_21023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (2))){
var state_19073__$1 = state_19073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19073__$1,(4),ch);
} else {
if((state_val_19074 === (11))){
var inst_19050 = (state_19073[(7)]);
var inst_19060 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19073__$1,(8),inst_19060,inst_19050);
} else {
if((state_val_19074 === (9))){
var state_19073__$1 = state_19073;
var statearr_19086_21024 = state_19073__$1;
(statearr_19086_21024[(2)] = tc);

(statearr_19086_21024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (5))){
var inst_19053 = cljs.core.async.close_BANG_(tc);
var inst_19054 = cljs.core.async.close_BANG_(fc);
var state_19073__$1 = (function (){var statearr_19088 = state_19073;
(statearr_19088[(8)] = inst_19053);

return statearr_19088;
})();
var statearr_19089_21025 = state_19073__$1;
(statearr_19089_21025[(2)] = inst_19054);

(statearr_19089_21025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (14))){
var inst_19067 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
var statearr_19090_21026 = state_19073__$1;
(statearr_19090_21026[(2)] = inst_19067);

(statearr_19090_21026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (10))){
var state_19073__$1 = state_19073;
var statearr_19091_21027 = state_19073__$1;
(statearr_19091_21027[(2)] = fc);

(statearr_19091_21027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (8))){
var inst_19062 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_19062)){
var statearr_19092_21028 = state_19073__$1;
(statearr_19092_21028[(1)] = (12));

} else {
var statearr_19093_21029 = state_19073__$1;
(statearr_19093_21029[(1)] = (13));

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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_19094 = [null,null,null,null,null,null,null,null,null];
(statearr_19094[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_19094[(1)] = (1));

return statearr_19094;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_19073){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19073);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19096){var ex__18268__auto__ = e19096;
var statearr_19097_21030 = state_19073;
(statearr_19097_21030[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19073[(4)]))){
var statearr_19098_21031 = state_19073;
(statearr_19098_21031[(1)] = cljs.core.first((state_19073[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21032 = state_19073;
state_19073 = G__21032;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_19073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_19073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19099 = f__18602__auto__();
(statearr_19099[(6)] = c__18601__auto___21012);

return statearr_19099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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
var c__18601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19123){
var state_val_19124 = (state_19123[(1)]);
if((state_val_19124 === (7))){
var inst_19119 = (state_19123[(2)]);
var state_19123__$1 = state_19123;
var statearr_19125_21033 = state_19123__$1;
(statearr_19125_21033[(2)] = inst_19119);

(statearr_19125_21033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (1))){
var inst_19101 = init;
var inst_19102 = inst_19101;
var state_19123__$1 = (function (){var statearr_19126 = state_19123;
(statearr_19126[(7)] = inst_19102);

return statearr_19126;
})();
var statearr_19127_21034 = state_19123__$1;
(statearr_19127_21034[(2)] = null);

(statearr_19127_21034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (4))){
var inst_19106 = (state_19123[(8)]);
var inst_19106__$1 = (state_19123[(2)]);
var inst_19107 = (inst_19106__$1 == null);
var state_19123__$1 = (function (){var statearr_19128 = state_19123;
(statearr_19128[(8)] = inst_19106__$1);

return statearr_19128;
})();
if(cljs.core.truth_(inst_19107)){
var statearr_19129_21035 = state_19123__$1;
(statearr_19129_21035[(1)] = (5));

} else {
var statearr_19130_21036 = state_19123__$1;
(statearr_19130_21036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (6))){
var inst_19102 = (state_19123[(7)]);
var inst_19110 = (state_19123[(9)]);
var inst_19106 = (state_19123[(8)]);
var inst_19110__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19102,inst_19106) : f.call(null, inst_19102,inst_19106));
var inst_19111 = cljs.core.reduced_QMARK_(inst_19110__$1);
var state_19123__$1 = (function (){var statearr_19131 = state_19123;
(statearr_19131[(9)] = inst_19110__$1);

return statearr_19131;
})();
if(inst_19111){
var statearr_19132_21039 = state_19123__$1;
(statearr_19132_21039[(1)] = (8));

} else {
var statearr_19133_21040 = state_19123__$1;
(statearr_19133_21040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (3))){
var inst_19121 = (state_19123[(2)]);
var state_19123__$1 = state_19123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19123__$1,inst_19121);
} else {
if((state_val_19124 === (2))){
var state_19123__$1 = state_19123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19123__$1,(4),ch);
} else {
if((state_val_19124 === (9))){
var inst_19110 = (state_19123[(9)]);
var inst_19102 = inst_19110;
var state_19123__$1 = (function (){var statearr_19134 = state_19123;
(statearr_19134[(7)] = inst_19102);

return statearr_19134;
})();
var statearr_19135_21041 = state_19123__$1;
(statearr_19135_21041[(2)] = null);

(statearr_19135_21041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (5))){
var inst_19102 = (state_19123[(7)]);
var state_19123__$1 = state_19123;
var statearr_19136_21043 = state_19123__$1;
(statearr_19136_21043[(2)] = inst_19102);

(statearr_19136_21043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (10))){
var inst_19117 = (state_19123[(2)]);
var state_19123__$1 = state_19123;
var statearr_19137_21045 = state_19123__$1;
(statearr_19137_21045[(2)] = inst_19117);

(statearr_19137_21045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (8))){
var inst_19110 = (state_19123[(9)]);
var inst_19113 = cljs.core.deref(inst_19110);
var state_19123__$1 = state_19123;
var statearr_19138_21046 = state_19123__$1;
(statearr_19138_21046[(2)] = inst_19113);

(statearr_19138_21046[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__18265__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18265__auto____0 = (function (){
var statearr_19139 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19139[(0)] = cljs$core$async$reduce_$_state_machine__18265__auto__);

(statearr_19139[(1)] = (1));

return statearr_19139;
});
var cljs$core$async$reduce_$_state_machine__18265__auto____1 = (function (state_19123){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19123);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19140){var ex__18268__auto__ = e19140;
var statearr_19141_21047 = state_19123;
(statearr_19141_21047[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19123[(4)]))){
var statearr_19142_21048 = state_19123;
(statearr_19142_21048[(1)] = cljs.core.first((state_19123[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21049 = state_19123;
state_19123 = G__21049;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18265__auto__ = function(state_19123){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18265__auto____1.call(this,state_19123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18265__auto____0;
cljs$core$async$reduce_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18265__auto____1;
return cljs$core$async$reduce_$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19143 = f__18602__auto__();
(statearr_19143[(6)] = c__18601__auto__);

return statearr_19143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));

return c__18601__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__18601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19149){
var state_val_19150 = (state_19149[(1)]);
if((state_val_19150 === (1))){
var inst_19144 = cljs.core.async.reduce(f__$1,init,ch);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19149__$1,(2),inst_19144);
} else {
if((state_val_19150 === (2))){
var inst_19146 = (state_19149[(2)]);
var inst_19147 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19146) : f__$1.call(null, inst_19146));
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19149__$1,inst_19147);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18265__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18265__auto____0 = (function (){
var statearr_19151 = [null,null,null,null,null,null,null];
(statearr_19151[(0)] = cljs$core$async$transduce_$_state_machine__18265__auto__);

(statearr_19151[(1)] = (1));

return statearr_19151;
});
var cljs$core$async$transduce_$_state_machine__18265__auto____1 = (function (state_19149){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19149);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19152){var ex__18268__auto__ = e19152;
var statearr_19153_21055 = state_19149;
(statearr_19153_21055[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19149[(4)]))){
var statearr_19154_21059 = state_19149;
(statearr_19154_21059[(1)] = cljs.core.first((state_19149[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21060 = state_19149;
state_19149 = G__21060;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18265__auto__ = function(state_19149){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18265__auto____1.call(this,state_19149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18265__auto____0;
cljs$core$async$transduce_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18265__auto____1;
return cljs$core$async$transduce_$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19155 = f__18602__auto__();
(statearr_19155[(6)] = c__18601__auto__);

return statearr_19155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));

return c__18601__auto__;
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
var G__19158 = arguments.length;
switch (G__19158) {
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
var c__18601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19183){
var state_val_19184 = (state_19183[(1)]);
if((state_val_19184 === (7))){
var inst_19165 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19186_21065 = state_19183__$1;
(statearr_19186_21065[(2)] = inst_19165);

(statearr_19186_21065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (1))){
var inst_19159 = cljs.core.seq(coll);
var inst_19160 = inst_19159;
var state_19183__$1 = (function (){var statearr_19187 = state_19183;
(statearr_19187[(7)] = inst_19160);

return statearr_19187;
})();
var statearr_19188_21066 = state_19183__$1;
(statearr_19188_21066[(2)] = null);

(statearr_19188_21066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (4))){
var inst_19160 = (state_19183[(7)]);
var inst_19163 = cljs.core.first(inst_19160);
var state_19183__$1 = state_19183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19183__$1,(7),ch,inst_19163);
} else {
if((state_val_19184 === (13))){
var inst_19177 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19189_21070 = state_19183__$1;
(statearr_19189_21070[(2)] = inst_19177);

(statearr_19189_21070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (6))){
var inst_19168 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
if(cljs.core.truth_(inst_19168)){
var statearr_19190_21071 = state_19183__$1;
(statearr_19190_21071[(1)] = (8));

} else {
var statearr_19191_21075 = state_19183__$1;
(statearr_19191_21075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (3))){
var inst_19181 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19183__$1,inst_19181);
} else {
if((state_val_19184 === (12))){
var state_19183__$1 = state_19183;
var statearr_19193_21076 = state_19183__$1;
(statearr_19193_21076[(2)] = null);

(statearr_19193_21076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (2))){
var inst_19160 = (state_19183[(7)]);
var state_19183__$1 = state_19183;
if(cljs.core.truth_(inst_19160)){
var statearr_19194_21077 = state_19183__$1;
(statearr_19194_21077[(1)] = (4));

} else {
var statearr_19195_21078 = state_19183__$1;
(statearr_19195_21078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (11))){
var inst_19174 = cljs.core.async.close_BANG_(ch);
var state_19183__$1 = state_19183;
var statearr_19196_21079 = state_19183__$1;
(statearr_19196_21079[(2)] = inst_19174);

(statearr_19196_21079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (9))){
var state_19183__$1 = state_19183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19197_21080 = state_19183__$1;
(statearr_19197_21080[(1)] = (11));

} else {
var statearr_19198_21081 = state_19183__$1;
(statearr_19198_21081[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (5))){
var inst_19160 = (state_19183[(7)]);
var state_19183__$1 = state_19183;
var statearr_19200_21082 = state_19183__$1;
(statearr_19200_21082[(2)] = inst_19160);

(statearr_19200_21082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (10))){
var inst_19179 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19202_21086 = state_19183__$1;
(statearr_19202_21086[(2)] = inst_19179);

(statearr_19202_21086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19184 === (8))){
var inst_19160 = (state_19183[(7)]);
var inst_19170 = cljs.core.next(inst_19160);
var inst_19160__$1 = inst_19170;
var state_19183__$1 = (function (){var statearr_19203 = state_19183;
(statearr_19203[(7)] = inst_19160__$1);

return statearr_19203;
})();
var statearr_19204_21087 = state_19183__$1;
(statearr_19204_21087[(2)] = null);

(statearr_19204_21087[(1)] = (2));


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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_19205 = [null,null,null,null,null,null,null,null];
(statearr_19205[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_19205[(1)] = (1));

return statearr_19205;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_19183){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19183);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19206){var ex__18268__auto__ = e19206;
var statearr_19207_21088 = state_19183;
(statearr_19207_21088[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19183[(4)]))){
var statearr_19208_21089 = state_19183;
(statearr_19208_21089[(1)] = cljs.core.first((state_19183[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21090 = state_19183;
state_19183 = G__21090;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_19183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_19183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19209 = f__18602__auto__();
(statearr_19209[(6)] = c__18601__auto__);

return statearr_19209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));

return c__18601__auto__;
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
var G__19213 = arguments.length;
switch (G__19213) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_21095 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_21095(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21097 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_21097(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21098 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_21098(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21103 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_21103(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19216 = (function (ch,cs,meta19217){
this.ch = ch;
this.cs = cs;
this.meta19217 = meta19217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19218,meta19217__$1){
var self__ = this;
var _19218__$1 = this;
return (new cljs.core.async.t_cljs$core$async19216(self__.ch,self__.cs,meta19217__$1));
}));

(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19218){
var self__ = this;
var _19218__$1 = this;
return self__.meta19217;
}));

(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19216.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19217","meta19217",1095502192,null)], null);
}));

(cljs.core.async.t_cljs$core$async19216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19216");

(cljs.core.async.t_cljs$core$async19216.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19216.
 */
cljs.core.async.__GT_t_cljs$core$async19216 = (function cljs$core$async$__GT_t_cljs$core$async19216(ch,cs,meta19217){
return (new cljs.core.async.t_cljs$core$async19216(ch,cs,meta19217));
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
var m = (new cljs.core.async.t_cljs$core$async19216(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18601__auto___21112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19380){
var state_val_19382 = (state_19380[(1)]);
if((state_val_19382 === (7))){
var inst_19373 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19389_21113 = state_19380__$1;
(statearr_19389_21113[(2)] = inst_19373);

(statearr_19389_21113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (20))){
var inst_19261 = (state_19380[(7)]);
var inst_19277 = cljs.core.first(inst_19261);
var inst_19278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19277,(0),null);
var inst_19279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19277,(1),null);
var state_19380__$1 = (function (){var statearr_19392 = state_19380;
(statearr_19392[(8)] = inst_19278);

return statearr_19392;
})();
if(cljs.core.truth_(inst_19279)){
var statearr_19393_21114 = state_19380__$1;
(statearr_19393_21114[(1)] = (22));

} else {
var statearr_19396_21115 = state_19380__$1;
(statearr_19396_21115[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (27))){
var inst_19311 = (state_19380[(9)]);
var inst_19313 = (state_19380[(10)]);
var inst_19319 = (state_19380[(11)]);
var inst_19227 = (state_19380[(12)]);
var inst_19319__$1 = cljs.core._nth(inst_19311,inst_19313);
var inst_19321 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19319__$1,inst_19227,done);
var state_19380__$1 = (function (){var statearr_19401 = state_19380;
(statearr_19401[(11)] = inst_19319__$1);

return statearr_19401;
})();
if(cljs.core.truth_(inst_19321)){
var statearr_19403_21116 = state_19380__$1;
(statearr_19403_21116[(1)] = (30));

} else {
var statearr_19404_21117 = state_19380__$1;
(statearr_19404_21117[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (1))){
var state_19380__$1 = state_19380;
var statearr_19406_21118 = state_19380__$1;
(statearr_19406_21118[(2)] = null);

(statearr_19406_21118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (24))){
var inst_19261 = (state_19380[(7)]);
var inst_19284 = (state_19380[(2)]);
var inst_19286 = cljs.core.next(inst_19261);
var inst_19239 = inst_19286;
var inst_19240 = null;
var inst_19241 = (0);
var inst_19242 = (0);
var state_19380__$1 = (function (){var statearr_19410 = state_19380;
(statearr_19410[(13)] = inst_19240);

(statearr_19410[(14)] = inst_19241);

(statearr_19410[(15)] = inst_19239);

(statearr_19410[(16)] = inst_19284);

(statearr_19410[(17)] = inst_19242);

return statearr_19410;
})();
var statearr_19412_21119 = state_19380__$1;
(statearr_19412_21119[(2)] = null);

(statearr_19412_21119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (39))){
var state_19380__$1 = state_19380;
var statearr_19420_21120 = state_19380__$1;
(statearr_19420_21120[(2)] = null);

(statearr_19420_21120[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (4))){
var inst_19227 = (state_19380[(12)]);
var inst_19227__$1 = (state_19380[(2)]);
var inst_19228 = (inst_19227__$1 == null);
var state_19380__$1 = (function (){var statearr_19423 = state_19380;
(statearr_19423[(12)] = inst_19227__$1);

return statearr_19423;
})();
if(cljs.core.truth_(inst_19228)){
var statearr_19425_21123 = state_19380__$1;
(statearr_19425_21123[(1)] = (5));

} else {
var statearr_19426_21124 = state_19380__$1;
(statearr_19426_21124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (15))){
var inst_19240 = (state_19380[(13)]);
var inst_19241 = (state_19380[(14)]);
var inst_19239 = (state_19380[(15)]);
var inst_19242 = (state_19380[(17)]);
var inst_19257 = (state_19380[(2)]);
var inst_19258 = (inst_19242 + (1));
var tmp19416 = inst_19240;
var tmp19417 = inst_19241;
var tmp19418 = inst_19239;
var inst_19239__$1 = tmp19418;
var inst_19240__$1 = tmp19416;
var inst_19241__$1 = tmp19417;
var inst_19242__$1 = inst_19258;
var state_19380__$1 = (function (){var statearr_19431 = state_19380;
(statearr_19431[(18)] = inst_19257);

(statearr_19431[(13)] = inst_19240__$1);

(statearr_19431[(14)] = inst_19241__$1);

(statearr_19431[(15)] = inst_19239__$1);

(statearr_19431[(17)] = inst_19242__$1);

return statearr_19431;
})();
var statearr_19432_21127 = state_19380__$1;
(statearr_19432_21127[(2)] = null);

(statearr_19432_21127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (21))){
var inst_19289 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19439_21128 = state_19380__$1;
(statearr_19439_21128[(2)] = inst_19289);

(statearr_19439_21128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (31))){
var inst_19319 = (state_19380[(11)]);
var inst_19326 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_19319);
var state_19380__$1 = state_19380;
var statearr_19442_21129 = state_19380__$1;
(statearr_19442_21129[(2)] = inst_19326);

(statearr_19442_21129[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (32))){
var inst_19310 = (state_19380[(19)]);
var inst_19311 = (state_19380[(9)]);
var inst_19313 = (state_19380[(10)]);
var inst_19312 = (state_19380[(20)]);
var inst_19328 = (state_19380[(2)]);
var inst_19329 = (inst_19313 + (1));
var tmp19434 = inst_19310;
var tmp19435 = inst_19311;
var tmp19436 = inst_19312;
var inst_19310__$1 = tmp19434;
var inst_19311__$1 = tmp19435;
var inst_19312__$1 = tmp19436;
var inst_19313__$1 = inst_19329;
var state_19380__$1 = (function (){var statearr_19446 = state_19380;
(statearr_19446[(19)] = inst_19310__$1);

(statearr_19446[(9)] = inst_19311__$1);

(statearr_19446[(10)] = inst_19313__$1);

(statearr_19446[(21)] = inst_19328);

(statearr_19446[(20)] = inst_19312__$1);

return statearr_19446;
})();
var statearr_19448_21131 = state_19380__$1;
(statearr_19448_21131[(2)] = null);

(statearr_19448_21131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (40))){
var inst_19345 = (state_19380[(22)]);
var inst_19349 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_19345);
var state_19380__$1 = state_19380;
var statearr_19452_21132 = state_19380__$1;
(statearr_19452_21132[(2)] = inst_19349);

(statearr_19452_21132[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (33))){
var inst_19332 = (state_19380[(23)]);
var inst_19335 = cljs.core.chunked_seq_QMARK_(inst_19332);
var state_19380__$1 = state_19380;
if(inst_19335){
var statearr_19454_21133 = state_19380__$1;
(statearr_19454_21133[(1)] = (36));

} else {
var statearr_19455_21134 = state_19380__$1;
(statearr_19455_21134[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (13))){
var inst_19251 = (state_19380[(24)]);
var inst_19254 = cljs.core.async.close_BANG_(inst_19251);
var state_19380__$1 = state_19380;
var statearr_19459_21135 = state_19380__$1;
(statearr_19459_21135[(2)] = inst_19254);

(statearr_19459_21135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (22))){
var inst_19278 = (state_19380[(8)]);
var inst_19281 = cljs.core.async.close_BANG_(inst_19278);
var state_19380__$1 = state_19380;
var statearr_19461_21136 = state_19380__$1;
(statearr_19461_21136[(2)] = inst_19281);

(statearr_19461_21136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (36))){
var inst_19332 = (state_19380[(23)]);
var inst_19337 = cljs.core.chunk_first(inst_19332);
var inst_19338 = cljs.core.chunk_rest(inst_19332);
var inst_19341 = cljs.core.count(inst_19337);
var inst_19310 = inst_19338;
var inst_19311 = inst_19337;
var inst_19312 = inst_19341;
var inst_19313 = (0);
var state_19380__$1 = (function (){var statearr_19465 = state_19380;
(statearr_19465[(19)] = inst_19310);

(statearr_19465[(9)] = inst_19311);

(statearr_19465[(10)] = inst_19313);

(statearr_19465[(20)] = inst_19312);

return statearr_19465;
})();
var statearr_19467_21137 = state_19380__$1;
(statearr_19467_21137[(2)] = null);

(statearr_19467_21137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (41))){
var inst_19332 = (state_19380[(23)]);
var inst_19351 = (state_19380[(2)]);
var inst_19352 = cljs.core.next(inst_19332);
var inst_19310 = inst_19352;
var inst_19311 = null;
var inst_19312 = (0);
var inst_19313 = (0);
var state_19380__$1 = (function (){var statearr_19471 = state_19380;
(statearr_19471[(19)] = inst_19310);

(statearr_19471[(9)] = inst_19311);

(statearr_19471[(10)] = inst_19313);

(statearr_19471[(20)] = inst_19312);

(statearr_19471[(25)] = inst_19351);

return statearr_19471;
})();
var statearr_19473_21138 = state_19380__$1;
(statearr_19473_21138[(2)] = null);

(statearr_19473_21138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (43))){
var state_19380__$1 = state_19380;
var statearr_19474_21139 = state_19380__$1;
(statearr_19474_21139[(2)] = null);

(statearr_19474_21139[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (29))){
var inst_19361 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19478_21140 = state_19380__$1;
(statearr_19478_21140[(2)] = inst_19361);

(statearr_19478_21140[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (44))){
var inst_19370 = (state_19380[(2)]);
var state_19380__$1 = (function (){var statearr_19480 = state_19380;
(statearr_19480[(26)] = inst_19370);

return statearr_19480;
})();
var statearr_19481_21141 = state_19380__$1;
(statearr_19481_21141[(2)] = null);

(statearr_19481_21141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (6))){
var inst_19302 = (state_19380[(27)]);
var inst_19301 = cljs.core.deref(cs);
var inst_19302__$1 = cljs.core.keys(inst_19301);
var inst_19303 = cljs.core.count(inst_19302__$1);
var inst_19304 = cljs.core.reset_BANG_(dctr,inst_19303);
var inst_19309 = cljs.core.seq(inst_19302__$1);
var inst_19310 = inst_19309;
var inst_19311 = null;
var inst_19312 = (0);
var inst_19313 = (0);
var state_19380__$1 = (function (){var statearr_19486 = state_19380;
(statearr_19486[(19)] = inst_19310);

(statearr_19486[(9)] = inst_19311);

(statearr_19486[(10)] = inst_19313);

(statearr_19486[(27)] = inst_19302__$1);

(statearr_19486[(28)] = inst_19304);

(statearr_19486[(20)] = inst_19312);

return statearr_19486;
})();
var statearr_19487_21144 = state_19380__$1;
(statearr_19487_21144[(2)] = null);

(statearr_19487_21144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (28))){
var inst_19310 = (state_19380[(19)]);
var inst_19332 = (state_19380[(23)]);
var inst_19332__$1 = cljs.core.seq(inst_19310);
var state_19380__$1 = (function (){var statearr_19491 = state_19380;
(statearr_19491[(23)] = inst_19332__$1);

return statearr_19491;
})();
if(inst_19332__$1){
var statearr_19492_21145 = state_19380__$1;
(statearr_19492_21145[(1)] = (33));

} else {
var statearr_19494_21146 = state_19380__$1;
(statearr_19494_21146[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (25))){
var inst_19313 = (state_19380[(10)]);
var inst_19312 = (state_19380[(20)]);
var inst_19316 = (inst_19313 < inst_19312);
var inst_19317 = inst_19316;
var state_19380__$1 = state_19380;
if(cljs.core.truth_(inst_19317)){
var statearr_19497_21147 = state_19380__$1;
(statearr_19497_21147[(1)] = (27));

} else {
var statearr_19499_21148 = state_19380__$1;
(statearr_19499_21148[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (34))){
var state_19380__$1 = state_19380;
var statearr_19500_21149 = state_19380__$1;
(statearr_19500_21149[(2)] = null);

(statearr_19500_21149[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (17))){
var state_19380__$1 = state_19380;
var statearr_19502_21150 = state_19380__$1;
(statearr_19502_21150[(2)] = null);

(statearr_19502_21150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (3))){
var inst_19375 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19380__$1,inst_19375);
} else {
if((state_val_19382 === (12))){
var inst_19294 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19506_21152 = state_19380__$1;
(statearr_19506_21152[(2)] = inst_19294);

(statearr_19506_21152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (2))){
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19380__$1,(4),ch);
} else {
if((state_val_19382 === (23))){
var state_19380__$1 = state_19380;
var statearr_19510_21153 = state_19380__$1;
(statearr_19510_21153[(2)] = null);

(statearr_19510_21153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (35))){
var inst_19358 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19512_21154 = state_19380__$1;
(statearr_19512_21154[(2)] = inst_19358);

(statearr_19512_21154[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (19))){
var inst_19261 = (state_19380[(7)]);
var inst_19266 = cljs.core.chunk_first(inst_19261);
var inst_19267 = cljs.core.chunk_rest(inst_19261);
var inst_19268 = cljs.core.count(inst_19266);
var inst_19239 = inst_19267;
var inst_19240 = inst_19266;
var inst_19241 = inst_19268;
var inst_19242 = (0);
var state_19380__$1 = (function (){var statearr_19515 = state_19380;
(statearr_19515[(13)] = inst_19240);

(statearr_19515[(14)] = inst_19241);

(statearr_19515[(15)] = inst_19239);

(statearr_19515[(17)] = inst_19242);

return statearr_19515;
})();
var statearr_19518_21159 = state_19380__$1;
(statearr_19518_21159[(2)] = null);

(statearr_19518_21159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (11))){
var inst_19261 = (state_19380[(7)]);
var inst_19239 = (state_19380[(15)]);
var inst_19261__$1 = cljs.core.seq(inst_19239);
var state_19380__$1 = (function (){var statearr_19580 = state_19380;
(statearr_19580[(7)] = inst_19261__$1);

return statearr_19580;
})();
if(inst_19261__$1){
var statearr_19584_21160 = state_19380__$1;
(statearr_19584_21160[(1)] = (16));

} else {
var statearr_19585_21161 = state_19380__$1;
(statearr_19585_21161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (9))){
var inst_19296 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19586_21163 = state_19380__$1;
(statearr_19586_21163[(2)] = inst_19296);

(statearr_19586_21163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (5))){
var inst_19237 = cljs.core.deref(cs);
var inst_19238 = cljs.core.seq(inst_19237);
var inst_19239 = inst_19238;
var inst_19240 = null;
var inst_19241 = (0);
var inst_19242 = (0);
var state_19380__$1 = (function (){var statearr_19588 = state_19380;
(statearr_19588[(13)] = inst_19240);

(statearr_19588[(14)] = inst_19241);

(statearr_19588[(15)] = inst_19239);

(statearr_19588[(17)] = inst_19242);

return statearr_19588;
})();
var statearr_19589_21164 = state_19380__$1;
(statearr_19589_21164[(2)] = null);

(statearr_19589_21164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (14))){
var state_19380__$1 = state_19380;
var statearr_19590_21165 = state_19380__$1;
(statearr_19590_21165[(2)] = null);

(statearr_19590_21165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (45))){
var inst_19367 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19591_21166 = state_19380__$1;
(statearr_19591_21166[(2)] = inst_19367);

(statearr_19591_21166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (26))){
var inst_19302 = (state_19380[(27)]);
var inst_19363 = (state_19380[(2)]);
var inst_19364 = cljs.core.seq(inst_19302);
var state_19380__$1 = (function (){var statearr_19593 = state_19380;
(statearr_19593[(29)] = inst_19363);

return statearr_19593;
})();
if(inst_19364){
var statearr_19594_21167 = state_19380__$1;
(statearr_19594_21167[(1)] = (42));

} else {
var statearr_19595_21168 = state_19380__$1;
(statearr_19595_21168[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (16))){
var inst_19261 = (state_19380[(7)]);
var inst_19263 = cljs.core.chunked_seq_QMARK_(inst_19261);
var state_19380__$1 = state_19380;
if(inst_19263){
var statearr_19596_21170 = state_19380__$1;
(statearr_19596_21170[(1)] = (19));

} else {
var statearr_19597_21171 = state_19380__$1;
(statearr_19597_21171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (38))){
var inst_19355 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19598_21172 = state_19380__$1;
(statearr_19598_21172[(2)] = inst_19355);

(statearr_19598_21172[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (30))){
var state_19380__$1 = state_19380;
var statearr_19599_21173 = state_19380__$1;
(statearr_19599_21173[(2)] = null);

(statearr_19599_21173[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (10))){
var inst_19240 = (state_19380[(13)]);
var inst_19242 = (state_19380[(17)]);
var inst_19250 = cljs.core._nth(inst_19240,inst_19242);
var inst_19251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19250,(0),null);
var inst_19252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19250,(1),null);
var state_19380__$1 = (function (){var statearr_19600 = state_19380;
(statearr_19600[(24)] = inst_19251);

return statearr_19600;
})();
if(cljs.core.truth_(inst_19252)){
var statearr_19601_21179 = state_19380__$1;
(statearr_19601_21179[(1)] = (13));

} else {
var statearr_19602_21180 = state_19380__$1;
(statearr_19602_21180[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (18))){
var inst_19292 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19603_21184 = state_19380__$1;
(statearr_19603_21184[(2)] = inst_19292);

(statearr_19603_21184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (42))){
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19380__$1,(45),dchan);
} else {
if((state_val_19382 === (37))){
var inst_19345 = (state_19380[(22)]);
var inst_19227 = (state_19380[(12)]);
var inst_19332 = (state_19380[(23)]);
var inst_19345__$1 = cljs.core.first(inst_19332);
var inst_19346 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19345__$1,inst_19227,done);
var state_19380__$1 = (function (){var statearr_19604 = state_19380;
(statearr_19604[(22)] = inst_19345__$1);

return statearr_19604;
})();
if(cljs.core.truth_(inst_19346)){
var statearr_19605_21185 = state_19380__$1;
(statearr_19605_21185[(1)] = (39));

} else {
var statearr_19607_21186 = state_19380__$1;
(statearr_19607_21186[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19382 === (8))){
var inst_19241 = (state_19380[(14)]);
var inst_19242 = (state_19380[(17)]);
var inst_19244 = (inst_19242 < inst_19241);
var inst_19245 = inst_19244;
var state_19380__$1 = state_19380;
if(cljs.core.truth_(inst_19245)){
var statearr_19608_21190 = state_19380__$1;
(statearr_19608_21190[(1)] = (10));

} else {
var statearr_19609_21191 = state_19380__$1;
(statearr_19609_21191[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__18265__auto__ = null;
var cljs$core$async$mult_$_state_machine__18265__auto____0 = (function (){
var statearr_19613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19613[(0)] = cljs$core$async$mult_$_state_machine__18265__auto__);

(statearr_19613[(1)] = (1));

return statearr_19613;
});
var cljs$core$async$mult_$_state_machine__18265__auto____1 = (function (state_19380){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19380);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19614){var ex__18268__auto__ = e19614;
var statearr_19615_21192 = state_19380;
(statearr_19615_21192[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19380[(4)]))){
var statearr_19616_21193 = state_19380;
(statearr_19616_21193[(1)] = cljs.core.first((state_19380[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21194 = state_19380;
state_19380 = G__21194;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18265__auto__ = function(state_19380){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18265__auto____1.call(this,state_19380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18265__auto____0;
cljs$core$async$mult_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18265__auto____1;
return cljs$core$async$mult_$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19617 = f__18602__auto__();
(statearr_19617[(6)] = c__18601__auto___21112);

return statearr_19617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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
var G__19621 = arguments.length;
switch (G__19621) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_21196 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_21196(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21197 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_21197(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21198 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21198(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21201 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_21201(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21205 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21205(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21206 = arguments.length;
var i__5727__auto___21207 = (0);
while(true){
if((i__5727__auto___21207 < len__5726__auto___21206)){
args__5732__auto__.push((arguments[i__5727__auto___21207]));

var G__21208 = (i__5727__auto___21207 + (1));
i__5727__auto___21207 = G__21208;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19628){
var map__19629 = p__19628;
var map__19629__$1 = cljs.core.__destructure_map(map__19629);
var opts = map__19629__$1;
var statearr_19630_21209 = state;
(statearr_19630_21209[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19631_21210 = state;
(statearr_19631_21210[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19632_21211 = state;
(statearr_19632_21211[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19624){
var G__19625 = cljs.core.first(seq19624);
var seq19624__$1 = cljs.core.next(seq19624);
var G__19626 = cljs.core.first(seq19624__$1);
var seq19624__$2 = cljs.core.next(seq19624__$1);
var G__19627 = cljs.core.first(seq19624__$2);
var seq19624__$3 = cljs.core.next(seq19624__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19625,G__19626,G__19627,seq19624__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19633 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19634){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19634 = meta19634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19635,meta19634__$1){
var self__ = this;
var _19635__$1 = this;
return (new cljs.core.async.t_cljs$core$async19633(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19634__$1));
}));

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19635){
var self__ = this;
var _19635__$1 = this;
return self__.meta19634;
}));

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19633.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19634","meta19634",-132880848,null)], null);
}));

(cljs.core.async.t_cljs$core$async19633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19633");

(cljs.core.async.t_cljs$core$async19633.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19633.
 */
cljs.core.async.__GT_t_cljs$core$async19633 = (function cljs$core$async$__GT_t_cljs$core$async19633(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19634){
return (new cljs.core.async.t_cljs$core$async19633(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19634));
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
var m = (new cljs.core.async.t_cljs$core$async19633(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18601__auto___21217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19726){
var state_val_19727 = (state_19726[(1)]);
if((state_val_19727 === (7))){
var inst_19678 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
if(cljs.core.truth_(inst_19678)){
var statearr_19732_21218 = state_19726__$1;
(statearr_19732_21218[(1)] = (8));

} else {
var statearr_19733_21219 = state_19726__$1;
(statearr_19733_21219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (20))){
var inst_19667 = (state_19726[(7)]);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19726__$1,(23),out,inst_19667);
} else {
if((state_val_19727 === (1))){
var inst_19650 = calc_state();
var inst_19651 = cljs.core.__destructure_map(inst_19650);
var inst_19652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19651,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19651,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19651,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19655 = inst_19650;
var state_19726__$1 = (function (){var statearr_19738 = state_19726;
(statearr_19738[(8)] = inst_19653);

(statearr_19738[(9)] = inst_19655);

(statearr_19738[(10)] = inst_19652);

(statearr_19738[(11)] = inst_19654);

return statearr_19738;
})();
var statearr_19739_21220 = state_19726__$1;
(statearr_19739_21220[(2)] = null);

(statearr_19739_21220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (24))){
var inst_19658 = (state_19726[(12)]);
var inst_19655 = inst_19658;
var state_19726__$1 = (function (){var statearr_19740 = state_19726;
(statearr_19740[(9)] = inst_19655);

return statearr_19740;
})();
var statearr_19741_21221 = state_19726__$1;
(statearr_19741_21221[(2)] = null);

(statearr_19741_21221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (4))){
var inst_19667 = (state_19726[(7)]);
var inst_19673 = (state_19726[(13)]);
var inst_19666 = (state_19726[(2)]);
var inst_19667__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19666,(0),null);
var inst_19668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19666,(1),null);
var inst_19673__$1 = (inst_19667__$1 == null);
var state_19726__$1 = (function (){var statearr_19743 = state_19726;
(statearr_19743[(14)] = inst_19668);

(statearr_19743[(7)] = inst_19667__$1);

(statearr_19743[(13)] = inst_19673__$1);

return statearr_19743;
})();
if(cljs.core.truth_(inst_19673__$1)){
var statearr_19744_21223 = state_19726__$1;
(statearr_19744_21223[(1)] = (5));

} else {
var statearr_19745_21224 = state_19726__$1;
(statearr_19745_21224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (15))){
var inst_19659 = (state_19726[(15)]);
var inst_19696 = (state_19726[(16)]);
var inst_19696__$1 = cljs.core.empty_QMARK_(inst_19659);
var state_19726__$1 = (function (){var statearr_19746 = state_19726;
(statearr_19746[(16)] = inst_19696__$1);

return statearr_19746;
})();
if(inst_19696__$1){
var statearr_19747_21226 = state_19726__$1;
(statearr_19747_21226[(1)] = (17));

} else {
var statearr_19752_21227 = state_19726__$1;
(statearr_19752_21227[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (21))){
var inst_19658 = (state_19726[(12)]);
var inst_19655 = inst_19658;
var state_19726__$1 = (function (){var statearr_19756 = state_19726;
(statearr_19756[(9)] = inst_19655);

return statearr_19756;
})();
var statearr_19757_21229 = state_19726__$1;
(statearr_19757_21229[(2)] = null);

(statearr_19757_21229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (13))){
var inst_19688 = (state_19726[(2)]);
var inst_19689 = calc_state();
var inst_19655 = inst_19689;
var state_19726__$1 = (function (){var statearr_19759 = state_19726;
(statearr_19759[(9)] = inst_19655);

(statearr_19759[(17)] = inst_19688);

return statearr_19759;
})();
var statearr_19760_21230 = state_19726__$1;
(statearr_19760_21230[(2)] = null);

(statearr_19760_21230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (22))){
var inst_19716 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19761_21231 = state_19726__$1;
(statearr_19761_21231[(2)] = inst_19716);

(statearr_19761_21231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (6))){
var inst_19668 = (state_19726[(14)]);
var inst_19676 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19668,change);
var state_19726__$1 = state_19726;
var statearr_19766_21232 = state_19726__$1;
(statearr_19766_21232[(2)] = inst_19676);

(statearr_19766_21232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (25))){
var state_19726__$1 = state_19726;
var statearr_19767_21233 = state_19726__$1;
(statearr_19767_21233[(2)] = null);

(statearr_19767_21233[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (17))){
var inst_19668 = (state_19726[(14)]);
var inst_19660 = (state_19726[(18)]);
var inst_19698 = (inst_19660.cljs$core$IFn$_invoke$arity$1 ? inst_19660.cljs$core$IFn$_invoke$arity$1(inst_19668) : inst_19660.call(null, inst_19668));
var inst_19699 = cljs.core.not(inst_19698);
var state_19726__$1 = state_19726;
var statearr_19772_21234 = state_19726__$1;
(statearr_19772_21234[(2)] = inst_19699);

(statearr_19772_21234[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (3))){
var inst_19720 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19726__$1,inst_19720);
} else {
if((state_val_19727 === (12))){
var state_19726__$1 = state_19726;
var statearr_19777_21235 = state_19726__$1;
(statearr_19777_21235[(2)] = null);

(statearr_19777_21235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (2))){
var inst_19655 = (state_19726[(9)]);
var inst_19658 = (state_19726[(12)]);
var inst_19658__$1 = cljs.core.__destructure_map(inst_19655);
var inst_19659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19658__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19658__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19658__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19726__$1 = (function (){var statearr_19779 = state_19726;
(statearr_19779[(18)] = inst_19660);

(statearr_19779[(15)] = inst_19659);

(statearr_19779[(12)] = inst_19658__$1);

return statearr_19779;
})();
return cljs.core.async.ioc_alts_BANG_(state_19726__$1,(4),inst_19661);
} else {
if((state_val_19727 === (23))){
var inst_19707 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
if(cljs.core.truth_(inst_19707)){
var statearr_19780_21240 = state_19726__$1;
(statearr_19780_21240[(1)] = (24));

} else {
var statearr_19781_21241 = state_19726__$1;
(statearr_19781_21241[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (19))){
var inst_19702 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19782_21243 = state_19726__$1;
(statearr_19782_21243[(2)] = inst_19702);

(statearr_19782_21243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (11))){
var inst_19668 = (state_19726[(14)]);
var inst_19685 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19668);
var state_19726__$1 = state_19726;
var statearr_19790_21244 = state_19726__$1;
(statearr_19790_21244[(2)] = inst_19685);

(statearr_19790_21244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (9))){
var inst_19668 = (state_19726[(14)]);
var inst_19659 = (state_19726[(15)]);
var inst_19693 = (state_19726[(19)]);
var inst_19693__$1 = (inst_19659.cljs$core$IFn$_invoke$arity$1 ? inst_19659.cljs$core$IFn$_invoke$arity$1(inst_19668) : inst_19659.call(null, inst_19668));
var state_19726__$1 = (function (){var statearr_19792 = state_19726;
(statearr_19792[(19)] = inst_19693__$1);

return statearr_19792;
})();
if(cljs.core.truth_(inst_19693__$1)){
var statearr_19793_21245 = state_19726__$1;
(statearr_19793_21245[(1)] = (14));

} else {
var statearr_19794_21246 = state_19726__$1;
(statearr_19794_21246[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (5))){
var inst_19673 = (state_19726[(13)]);
var state_19726__$1 = state_19726;
var statearr_19795_21247 = state_19726__$1;
(statearr_19795_21247[(2)] = inst_19673);

(statearr_19795_21247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (14))){
var inst_19693 = (state_19726[(19)]);
var state_19726__$1 = state_19726;
var statearr_19800_21249 = state_19726__$1;
(statearr_19800_21249[(2)] = inst_19693);

(statearr_19800_21249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (26))){
var inst_19712 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19801_21250 = state_19726__$1;
(statearr_19801_21250[(2)] = inst_19712);

(statearr_19801_21250[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (16))){
var inst_19704 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
if(cljs.core.truth_(inst_19704)){
var statearr_19805_21251 = state_19726__$1;
(statearr_19805_21251[(1)] = (20));

} else {
var statearr_19806_21252 = state_19726__$1;
(statearr_19806_21252[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (10))){
var inst_19718 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19808_21254 = state_19726__$1;
(statearr_19808_21254[(2)] = inst_19718);

(statearr_19808_21254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (18))){
var inst_19696 = (state_19726[(16)]);
var state_19726__$1 = state_19726;
var statearr_19809_21255 = state_19726__$1;
(statearr_19809_21255[(2)] = inst_19696);

(statearr_19809_21255[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (8))){
var inst_19667 = (state_19726[(7)]);
var inst_19683 = (inst_19667 == null);
var state_19726__$1 = state_19726;
if(cljs.core.truth_(inst_19683)){
var statearr_19810_21256 = state_19726__$1;
(statearr_19810_21256[(1)] = (11));

} else {
var statearr_19814_21257 = state_19726__$1;
(statearr_19814_21257[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__18265__auto__ = null;
var cljs$core$async$mix_$_state_machine__18265__auto____0 = (function (){
var statearr_19816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19816[(0)] = cljs$core$async$mix_$_state_machine__18265__auto__);

(statearr_19816[(1)] = (1));

return statearr_19816;
});
var cljs$core$async$mix_$_state_machine__18265__auto____1 = (function (state_19726){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19726);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19817){var ex__18268__auto__ = e19817;
var statearr_19819_21259 = state_19726;
(statearr_19819_21259[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19726[(4)]))){
var statearr_19820_21260 = state_19726;
(statearr_19820_21260[(1)] = cljs.core.first((state_19726[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21261 = state_19726;
state_19726 = G__21261;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18265__auto__ = function(state_19726){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18265__auto____1.call(this,state_19726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18265__auto____0;
cljs$core$async$mix_$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18265__auto____1;
return cljs$core$async$mix_$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19821 = f__18602__auto__();
(statearr_19821[(6)] = c__18601__auto___21217);

return statearr_19821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_21266 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_21266(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21275 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_21275(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21276 = (function() {
var G__21277 = null;
var G__21277__1 = (function (p){
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
var G__21277__2 = (function (p,v){
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
G__21277 = function(p,v){
switch(arguments.length){
case 1:
return G__21277__1.call(this,p);
case 2:
return G__21277__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21277.cljs$core$IFn$_invoke$arity$1 = G__21277__1;
G__21277.cljs$core$IFn$_invoke$arity$2 = G__21277__2;
return G__21277;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19848 = arguments.length;
switch (G__19848) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21276(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21276(p,v);
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
cljs.core.async.t_cljs$core$async19854 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19855){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19855 = meta19855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19856,meta19855__$1){
var self__ = this;
var _19856__$1 = this;
return (new cljs.core.async.t_cljs$core$async19854(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19855__$1));
}));

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19856){
var self__ = this;
var _19856__$1 = this;
return self__.meta19855;
}));

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19855","meta19855",1321718275,null)], null);
}));

(cljs.core.async.t_cljs$core$async19854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19854");

(cljs.core.async.t_cljs$core$async19854.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19854.
 */
cljs.core.async.__GT_t_cljs$core$async19854 = (function cljs$core$async$__GT_t_cljs$core$async19854(ch,topic_fn,buf_fn,mults,ensure_mult,meta19855){
return (new cljs.core.async.t_cljs$core$async19854(ch,topic_fn,buf_fn,mults,ensure_mult,meta19855));
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
var G__19853 = arguments.length;
switch (G__19853) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19851_SHARP_){
if(cljs.core.truth_((p1__19851_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19851_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19851_SHARP_.call(null, topic)))){
return p1__19851_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19851_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19854(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18601__auto___21284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_19930){
var state_val_19931 = (state_19930[(1)]);
if((state_val_19931 === (7))){
var inst_19926 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19934_21285 = state_19930__$1;
(statearr_19934_21285[(2)] = inst_19926);

(statearr_19934_21285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (20))){
var state_19930__$1 = state_19930;
var statearr_19935_21286 = state_19930__$1;
(statearr_19935_21286[(2)] = null);

(statearr_19935_21286[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (1))){
var state_19930__$1 = state_19930;
var statearr_19936_21287 = state_19930__$1;
(statearr_19936_21287[(2)] = null);

(statearr_19936_21287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (24))){
var inst_19909 = (state_19930[(7)]);
var inst_19918 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19909);
var state_19930__$1 = state_19930;
var statearr_19937_21289 = state_19930__$1;
(statearr_19937_21289[(2)] = inst_19918);

(statearr_19937_21289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (4))){
var inst_19859 = (state_19930[(8)]);
var inst_19859__$1 = (state_19930[(2)]);
var inst_19860 = (inst_19859__$1 == null);
var state_19930__$1 = (function (){var statearr_19938 = state_19930;
(statearr_19938[(8)] = inst_19859__$1);

return statearr_19938;
})();
if(cljs.core.truth_(inst_19860)){
var statearr_19939_21290 = state_19930__$1;
(statearr_19939_21290[(1)] = (5));

} else {
var statearr_19940_21291 = state_19930__$1;
(statearr_19940_21291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (15))){
var inst_19902 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19941_21292 = state_19930__$1;
(statearr_19941_21292[(2)] = inst_19902);

(statearr_19941_21292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (21))){
var inst_19923 = (state_19930[(2)]);
var state_19930__$1 = (function (){var statearr_19942 = state_19930;
(statearr_19942[(9)] = inst_19923);

return statearr_19942;
})();
var statearr_19944_21293 = state_19930__$1;
(statearr_19944_21293[(2)] = null);

(statearr_19944_21293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (13))){
var inst_19883 = (state_19930[(10)]);
var inst_19885 = cljs.core.chunked_seq_QMARK_(inst_19883);
var state_19930__$1 = state_19930;
if(inst_19885){
var statearr_19946_21294 = state_19930__$1;
(statearr_19946_21294[(1)] = (16));

} else {
var statearr_19947_21295 = state_19930__$1;
(statearr_19947_21295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (22))){
var inst_19915 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
if(cljs.core.truth_(inst_19915)){
var statearr_19948_21296 = state_19930__$1;
(statearr_19948_21296[(1)] = (23));

} else {
var statearr_19949_21297 = state_19930__$1;
(statearr_19949_21297[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (6))){
var inst_19911 = (state_19930[(11)]);
var inst_19859 = (state_19930[(8)]);
var inst_19909 = (state_19930[(7)]);
var inst_19909__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19859) : topic_fn.call(null, inst_19859));
var inst_19910 = cljs.core.deref(mults);
var inst_19911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19910,inst_19909__$1);
var state_19930__$1 = (function (){var statearr_19950 = state_19930;
(statearr_19950[(11)] = inst_19911__$1);

(statearr_19950[(7)] = inst_19909__$1);

return statearr_19950;
})();
if(cljs.core.truth_(inst_19911__$1)){
var statearr_19951_21298 = state_19930__$1;
(statearr_19951_21298[(1)] = (19));

} else {
var statearr_19952_21299 = state_19930__$1;
(statearr_19952_21299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (25))){
var inst_19920 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19953_21300 = state_19930__$1;
(statearr_19953_21300[(2)] = inst_19920);

(statearr_19953_21300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (17))){
var inst_19883 = (state_19930[(10)]);
var inst_19893 = cljs.core.first(inst_19883);
var inst_19894 = cljs.core.async.muxch_STAR_(inst_19893);
var inst_19895 = cljs.core.async.close_BANG_(inst_19894);
var inst_19896 = cljs.core.next(inst_19883);
var inst_19869 = inst_19896;
var inst_19870 = null;
var inst_19871 = (0);
var inst_19872 = (0);
var state_19930__$1 = (function (){var statearr_19954 = state_19930;
(statearr_19954[(12)] = inst_19870);

(statearr_19954[(13)] = inst_19895);

(statearr_19954[(14)] = inst_19869);

(statearr_19954[(15)] = inst_19871);

(statearr_19954[(16)] = inst_19872);

return statearr_19954;
})();
var statearr_19955_21301 = state_19930__$1;
(statearr_19955_21301[(2)] = null);

(statearr_19955_21301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (3))){
var inst_19928 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19930__$1,inst_19928);
} else {
if((state_val_19931 === (12))){
var inst_19904 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19956_21305 = state_19930__$1;
(statearr_19956_21305[(2)] = inst_19904);

(statearr_19956_21305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (2))){
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19930__$1,(4),ch);
} else {
if((state_val_19931 === (23))){
var state_19930__$1 = state_19930;
var statearr_19957_21306 = state_19930__$1;
(statearr_19957_21306[(2)] = null);

(statearr_19957_21306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (19))){
var inst_19911 = (state_19930[(11)]);
var inst_19859 = (state_19930[(8)]);
var inst_19913 = cljs.core.async.muxch_STAR_(inst_19911);
var state_19930__$1 = state_19930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19930__$1,(22),inst_19913,inst_19859);
} else {
if((state_val_19931 === (11))){
var inst_19883 = (state_19930[(10)]);
var inst_19869 = (state_19930[(14)]);
var inst_19883__$1 = cljs.core.seq(inst_19869);
var state_19930__$1 = (function (){var statearr_19959 = state_19930;
(statearr_19959[(10)] = inst_19883__$1);

return statearr_19959;
})();
if(inst_19883__$1){
var statearr_19960_21307 = state_19930__$1;
(statearr_19960_21307[(1)] = (13));

} else {
var statearr_19962_21308 = state_19930__$1;
(statearr_19962_21308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (9))){
var inst_19907 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19963_21309 = state_19930__$1;
(statearr_19963_21309[(2)] = inst_19907);

(statearr_19963_21309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (5))){
var inst_19866 = cljs.core.deref(mults);
var inst_19867 = cljs.core.vals(inst_19866);
var inst_19868 = cljs.core.seq(inst_19867);
var inst_19869 = inst_19868;
var inst_19870 = null;
var inst_19871 = (0);
var inst_19872 = (0);
var state_19930__$1 = (function (){var statearr_19964 = state_19930;
(statearr_19964[(12)] = inst_19870);

(statearr_19964[(14)] = inst_19869);

(statearr_19964[(15)] = inst_19871);

(statearr_19964[(16)] = inst_19872);

return statearr_19964;
})();
var statearr_19965_21310 = state_19930__$1;
(statearr_19965_21310[(2)] = null);

(statearr_19965_21310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (14))){
var state_19930__$1 = state_19930;
var statearr_19973_21311 = state_19930__$1;
(statearr_19973_21311[(2)] = null);

(statearr_19973_21311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (16))){
var inst_19883 = (state_19930[(10)]);
var inst_19887 = cljs.core.chunk_first(inst_19883);
var inst_19888 = cljs.core.chunk_rest(inst_19883);
var inst_19889 = cljs.core.count(inst_19887);
var inst_19869 = inst_19888;
var inst_19870 = inst_19887;
var inst_19871 = inst_19889;
var inst_19872 = (0);
var state_19930__$1 = (function (){var statearr_19974 = state_19930;
(statearr_19974[(12)] = inst_19870);

(statearr_19974[(14)] = inst_19869);

(statearr_19974[(15)] = inst_19871);

(statearr_19974[(16)] = inst_19872);

return statearr_19974;
})();
var statearr_19975_21312 = state_19930__$1;
(statearr_19975_21312[(2)] = null);

(statearr_19975_21312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (10))){
var inst_19870 = (state_19930[(12)]);
var inst_19869 = (state_19930[(14)]);
var inst_19871 = (state_19930[(15)]);
var inst_19872 = (state_19930[(16)]);
var inst_19877 = cljs.core._nth(inst_19870,inst_19872);
var inst_19878 = cljs.core.async.muxch_STAR_(inst_19877);
var inst_19879 = cljs.core.async.close_BANG_(inst_19878);
var inst_19880 = (inst_19872 + (1));
var tmp19967 = inst_19870;
var tmp19968 = inst_19869;
var tmp19969 = inst_19871;
var inst_19869__$1 = tmp19968;
var inst_19870__$1 = tmp19967;
var inst_19871__$1 = tmp19969;
var inst_19872__$1 = inst_19880;
var state_19930__$1 = (function (){var statearr_19977 = state_19930;
(statearr_19977[(12)] = inst_19870__$1);

(statearr_19977[(14)] = inst_19869__$1);

(statearr_19977[(15)] = inst_19871__$1);

(statearr_19977[(17)] = inst_19879);

(statearr_19977[(16)] = inst_19872__$1);

return statearr_19977;
})();
var statearr_19979_21313 = state_19930__$1;
(statearr_19979_21313[(2)] = null);

(statearr_19979_21313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (18))){
var inst_19899 = (state_19930[(2)]);
var state_19930__$1 = state_19930;
var statearr_19980_21315 = state_19930__$1;
(statearr_19980_21315[(2)] = inst_19899);

(statearr_19980_21315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19931 === (8))){
var inst_19871 = (state_19930[(15)]);
var inst_19872 = (state_19930[(16)]);
var inst_19874 = (inst_19872 < inst_19871);
var inst_19875 = inst_19874;
var state_19930__$1 = state_19930;
if(cljs.core.truth_(inst_19875)){
var statearr_19982_21316 = state_19930__$1;
(statearr_19982_21316[(1)] = (10));

} else {
var statearr_19983_21317 = state_19930__$1;
(statearr_19983_21317[(1)] = (11));

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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_19986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19986[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_19986[(1)] = (1));

return statearr_19986;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_19930){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_19930);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e19987){var ex__18268__auto__ = e19987;
var statearr_19988_21325 = state_19930;
(statearr_19988_21325[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_19930[(4)]))){
var statearr_19989_21326 = state_19930;
(statearr_19989_21326[(1)] = cljs.core.first((state_19930[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21327 = state_19930;
state_19930 = G__21327;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_19930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_19930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_19993 = f__18602__auto__();
(statearr_19993[(6)] = c__18601__auto___21284);

return statearr_19993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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
var G__19995 = arguments.length;
switch (G__19995) {
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
var G__20016 = arguments.length;
switch (G__20016) {
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
var G__20031 = arguments.length;
switch (G__20031) {
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
var c__18601__auto___21340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20082){
var state_val_20083 = (state_20082[(1)]);
if((state_val_20083 === (7))){
var state_20082__$1 = state_20082;
var statearr_20086_21341 = state_20082__$1;
(statearr_20086_21341[(2)] = null);

(statearr_20086_21341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (1))){
var state_20082__$1 = state_20082;
var statearr_20088_21342 = state_20082__$1;
(statearr_20088_21342[(2)] = null);

(statearr_20088_21342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (4))){
var inst_20039 = (state_20082[(7)]);
var inst_20038 = (state_20082[(8)]);
var inst_20041 = (inst_20039 < inst_20038);
var state_20082__$1 = state_20082;
if(cljs.core.truth_(inst_20041)){
var statearr_20090_21343 = state_20082__$1;
(statearr_20090_21343[(1)] = (6));

} else {
var statearr_20091_21344 = state_20082__$1;
(statearr_20091_21344[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (15))){
var inst_20064 = (state_20082[(9)]);
var inst_20070 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20064);
var state_20082__$1 = state_20082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20082__$1,(17),out,inst_20070);
} else {
if((state_val_20083 === (13))){
var inst_20064 = (state_20082[(9)]);
var inst_20064__$1 = (state_20082[(2)]);
var inst_20065 = cljs.core.some(cljs.core.nil_QMARK_,inst_20064__$1);
var state_20082__$1 = (function (){var statearr_20092 = state_20082;
(statearr_20092[(9)] = inst_20064__$1);

return statearr_20092;
})();
if(cljs.core.truth_(inst_20065)){
var statearr_20093_21347 = state_20082__$1;
(statearr_20093_21347[(1)] = (14));

} else {
var statearr_20094_21348 = state_20082__$1;
(statearr_20094_21348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (6))){
var state_20082__$1 = state_20082;
var statearr_20095_21350 = state_20082__$1;
(statearr_20095_21350[(2)] = null);

(statearr_20095_21350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (17))){
var inst_20072 = (state_20082[(2)]);
var state_20082__$1 = (function (){var statearr_20099 = state_20082;
(statearr_20099[(10)] = inst_20072);

return statearr_20099;
})();
var statearr_20100_21351 = state_20082__$1;
(statearr_20100_21351[(2)] = null);

(statearr_20100_21351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (3))){
var inst_20077 = (state_20082[(2)]);
var state_20082__$1 = state_20082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20082__$1,inst_20077);
} else {
if((state_val_20083 === (12))){
var _ = (function (){var statearr_20102 = state_20082;
(statearr_20102[(4)] = cljs.core.rest((state_20082[(4)])));

return statearr_20102;
})();
var state_20082__$1 = state_20082;
var ex20098 = (state_20082__$1[(2)]);
var statearr_20103_21352 = state_20082__$1;
(statearr_20103_21352[(5)] = ex20098);


if((ex20098 instanceof Object)){
var statearr_20108_21353 = state_20082__$1;
(statearr_20108_21353[(1)] = (11));

(statearr_20108_21353[(5)] = null);

} else {
throw ex20098;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (2))){
var inst_20037 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20038 = cnt;
var inst_20039 = (0);
var state_20082__$1 = (function (){var statearr_20109 = state_20082;
(statearr_20109[(11)] = inst_20037);

(statearr_20109[(7)] = inst_20039);

(statearr_20109[(8)] = inst_20038);

return statearr_20109;
})();
var statearr_20110_21355 = state_20082__$1;
(statearr_20110_21355[(2)] = null);

(statearr_20110_21355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (11))){
var inst_20043 = (state_20082[(2)]);
var inst_20044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20082__$1 = (function (){var statearr_20111 = state_20082;
(statearr_20111[(12)] = inst_20043);

return statearr_20111;
})();
var statearr_20112_21356 = state_20082__$1;
(statearr_20112_21356[(2)] = inst_20044);

(statearr_20112_21356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (9))){
var inst_20039 = (state_20082[(7)]);
var _ = (function (){var statearr_20113 = state_20082;
(statearr_20113[(4)] = cljs.core.cons((12),(state_20082[(4)])));

return statearr_20113;
})();
var inst_20050 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20039) : chs__$1.call(null, inst_20039));
var inst_20051 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20039) : done.call(null, inst_20039));
var inst_20052 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20050,inst_20051);
var ___$1 = (function (){var statearr_20114 = state_20082;
(statearr_20114[(4)] = cljs.core.rest((state_20082[(4)])));

return statearr_20114;
})();
var state_20082__$1 = state_20082;
var statearr_20115_21357 = state_20082__$1;
(statearr_20115_21357[(2)] = inst_20052);

(statearr_20115_21357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (5))){
var inst_20062 = (state_20082[(2)]);
var state_20082__$1 = (function (){var statearr_20116 = state_20082;
(statearr_20116[(13)] = inst_20062);

return statearr_20116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20082__$1,(13),dchan);
} else {
if((state_val_20083 === (14))){
var inst_20067 = cljs.core.async.close_BANG_(out);
var state_20082__$1 = state_20082;
var statearr_20117_21358 = state_20082__$1;
(statearr_20117_21358[(2)] = inst_20067);

(statearr_20117_21358[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (16))){
var inst_20075 = (state_20082[(2)]);
var state_20082__$1 = state_20082;
var statearr_20118_21359 = state_20082__$1;
(statearr_20118_21359[(2)] = inst_20075);

(statearr_20118_21359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (10))){
var inst_20039 = (state_20082[(7)]);
var inst_20055 = (state_20082[(2)]);
var inst_20056 = (inst_20039 + (1));
var inst_20039__$1 = inst_20056;
var state_20082__$1 = (function (){var statearr_20119 = state_20082;
(statearr_20119[(7)] = inst_20039__$1);

(statearr_20119[(14)] = inst_20055);

return statearr_20119;
})();
var statearr_20120_21360 = state_20082__$1;
(statearr_20120_21360[(2)] = null);

(statearr_20120_21360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20083 === (8))){
var inst_20060 = (state_20082[(2)]);
var state_20082__$1 = state_20082;
var statearr_20121_21361 = state_20082__$1;
(statearr_20121_21361[(2)] = inst_20060);

(statearr_20121_21361[(1)] = (5));


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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_20122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20122[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_20122[(1)] = (1));

return statearr_20122;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_20082){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20082);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20123){var ex__18268__auto__ = e20123;
var statearr_20124_21362 = state_20082;
(statearr_20124_21362[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20082[(4)]))){
var statearr_20126_21363 = state_20082;
(statearr_20126_21363[(1)] = cljs.core.first((state_20082[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21365 = state_20082;
state_20082 = G__21365;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_20082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_20082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20130 = f__18602__auto__();
(statearr_20130[(6)] = c__18601__auto___21340);

return statearr_20130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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
var G__20136 = arguments.length;
switch (G__20136) {
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
var c__18601__auto___21372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20173){
var state_val_20174 = (state_20173[(1)]);
if((state_val_20174 === (7))){
var inst_20148 = (state_20173[(7)]);
var inst_20150 = (state_20173[(8)]);
var inst_20148__$1 = (state_20173[(2)]);
var inst_20150__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20148__$1,(0),null);
var inst_20151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20148__$1,(1),null);
var inst_20152 = (inst_20150__$1 == null);
var state_20173__$1 = (function (){var statearr_20175 = state_20173;
(statearr_20175[(7)] = inst_20148__$1);

(statearr_20175[(9)] = inst_20151);

(statearr_20175[(8)] = inst_20150__$1);

return statearr_20175;
})();
if(cljs.core.truth_(inst_20152)){
var statearr_20176_21373 = state_20173__$1;
(statearr_20176_21373[(1)] = (8));

} else {
var statearr_20177_21375 = state_20173__$1;
(statearr_20177_21375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (1))){
var inst_20137 = cljs.core.vec(chs);
var inst_20138 = inst_20137;
var state_20173__$1 = (function (){var statearr_20178 = state_20173;
(statearr_20178[(10)] = inst_20138);

return statearr_20178;
})();
var statearr_20179_21376 = state_20173__$1;
(statearr_20179_21376[(2)] = null);

(statearr_20179_21376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (4))){
var inst_20138 = (state_20173[(10)]);
var state_20173__$1 = state_20173;
return cljs.core.async.ioc_alts_BANG_(state_20173__$1,(7),inst_20138);
} else {
if((state_val_20174 === (6))){
var inst_20166 = (state_20173[(2)]);
var state_20173__$1 = state_20173;
var statearr_20180_21379 = state_20173__$1;
(statearr_20180_21379[(2)] = inst_20166);

(statearr_20180_21379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (3))){
var inst_20168 = (state_20173[(2)]);
var state_20173__$1 = state_20173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20173__$1,inst_20168);
} else {
if((state_val_20174 === (2))){
var inst_20138 = (state_20173[(10)]);
var inst_20141 = cljs.core.count(inst_20138);
var inst_20142 = (inst_20141 > (0));
var state_20173__$1 = state_20173;
if(cljs.core.truth_(inst_20142)){
var statearr_20182_21381 = state_20173__$1;
(statearr_20182_21381[(1)] = (4));

} else {
var statearr_20183_21382 = state_20173__$1;
(statearr_20183_21382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (11))){
var inst_20138 = (state_20173[(10)]);
var inst_20159 = (state_20173[(2)]);
var tmp20181 = inst_20138;
var inst_20138__$1 = tmp20181;
var state_20173__$1 = (function (){var statearr_20184 = state_20173;
(statearr_20184[(10)] = inst_20138__$1);

(statearr_20184[(11)] = inst_20159);

return statearr_20184;
})();
var statearr_20185_21384 = state_20173__$1;
(statearr_20185_21384[(2)] = null);

(statearr_20185_21384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (9))){
var inst_20150 = (state_20173[(8)]);
var state_20173__$1 = state_20173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20173__$1,(11),out,inst_20150);
} else {
if((state_val_20174 === (5))){
var inst_20164 = cljs.core.async.close_BANG_(out);
var state_20173__$1 = state_20173;
var statearr_20190_21390 = state_20173__$1;
(statearr_20190_21390[(2)] = inst_20164);

(statearr_20190_21390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (10))){
var inst_20162 = (state_20173[(2)]);
var state_20173__$1 = state_20173;
var statearr_20191_21391 = state_20173__$1;
(statearr_20191_21391[(2)] = inst_20162);

(statearr_20191_21391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20174 === (8))){
var inst_20148 = (state_20173[(7)]);
var inst_20138 = (state_20173[(10)]);
var inst_20151 = (state_20173[(9)]);
var inst_20150 = (state_20173[(8)]);
var inst_20154 = (function (){var cs = inst_20138;
var vec__20144 = inst_20148;
var v = inst_20150;
var c = inst_20151;
return (function (p1__20132_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20132_SHARP_);
});
})();
var inst_20155 = cljs.core.filterv(inst_20154,inst_20138);
var inst_20138__$1 = inst_20155;
var state_20173__$1 = (function (){var statearr_20193 = state_20173;
(statearr_20193[(10)] = inst_20138__$1);

return statearr_20193;
})();
var statearr_20197_21395 = state_20173__$1;
(statearr_20197_21395[(2)] = null);

(statearr_20197_21395[(1)] = (2));


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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_20198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20198[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_20198[(1)] = (1));

return statearr_20198;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_20173){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20173);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20199){var ex__18268__auto__ = e20199;
var statearr_20200_21397 = state_20173;
(statearr_20200_21397[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20173[(4)]))){
var statearr_20201_21398 = state_20173;
(statearr_20201_21398[(1)] = cljs.core.first((state_20173[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21399 = state_20173;
state_20173 = G__21399;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_20173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_20173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20202 = f__18602__auto__();
(statearr_20202[(6)] = c__18601__auto___21372);

return statearr_20202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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
var G__20204 = arguments.length;
switch (G__20204) {
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
var c__18601__auto___21402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20230){
var state_val_20231 = (state_20230[(1)]);
if((state_val_20231 === (7))){
var inst_20211 = (state_20230[(7)]);
var inst_20211__$1 = (state_20230[(2)]);
var inst_20212 = (inst_20211__$1 == null);
var inst_20214 = cljs.core.not(inst_20212);
var state_20230__$1 = (function (){var statearr_20232 = state_20230;
(statearr_20232[(7)] = inst_20211__$1);

return statearr_20232;
})();
if(inst_20214){
var statearr_20233_21406 = state_20230__$1;
(statearr_20233_21406[(1)] = (8));

} else {
var statearr_20237_21407 = state_20230__$1;
(statearr_20237_21407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (1))){
var inst_20205 = (0);
var state_20230__$1 = (function (){var statearr_20238 = state_20230;
(statearr_20238[(8)] = inst_20205);

return statearr_20238;
})();
var statearr_20239_21412 = state_20230__$1;
(statearr_20239_21412[(2)] = null);

(statearr_20239_21412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (4))){
var state_20230__$1 = state_20230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20230__$1,(7),ch);
} else {
if((state_val_20231 === (6))){
var inst_20225 = (state_20230[(2)]);
var state_20230__$1 = state_20230;
var statearr_20240_21422 = state_20230__$1;
(statearr_20240_21422[(2)] = inst_20225);

(statearr_20240_21422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (3))){
var inst_20227 = (state_20230[(2)]);
var inst_20228 = cljs.core.async.close_BANG_(out);
var state_20230__$1 = (function (){var statearr_20241 = state_20230;
(statearr_20241[(9)] = inst_20227);

return statearr_20241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20230__$1,inst_20228);
} else {
if((state_val_20231 === (2))){
var inst_20205 = (state_20230[(8)]);
var inst_20208 = (inst_20205 < n);
var state_20230__$1 = state_20230;
if(cljs.core.truth_(inst_20208)){
var statearr_20242_21425 = state_20230__$1;
(statearr_20242_21425[(1)] = (4));

} else {
var statearr_20243_21426 = state_20230__$1;
(statearr_20243_21426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (11))){
var inst_20205 = (state_20230[(8)]);
var inst_20217 = (state_20230[(2)]);
var inst_20218 = (inst_20205 + (1));
var inst_20205__$1 = inst_20218;
var state_20230__$1 = (function (){var statearr_20244 = state_20230;
(statearr_20244[(10)] = inst_20217);

(statearr_20244[(8)] = inst_20205__$1);

return statearr_20244;
})();
var statearr_20245_21427 = state_20230__$1;
(statearr_20245_21427[(2)] = null);

(statearr_20245_21427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (9))){
var state_20230__$1 = state_20230;
var statearr_20246_21432 = state_20230__$1;
(statearr_20246_21432[(2)] = null);

(statearr_20246_21432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (5))){
var state_20230__$1 = state_20230;
var statearr_20247_21433 = state_20230__$1;
(statearr_20247_21433[(2)] = null);

(statearr_20247_21433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (10))){
var inst_20222 = (state_20230[(2)]);
var state_20230__$1 = state_20230;
var statearr_20248_21436 = state_20230__$1;
(statearr_20248_21436[(2)] = inst_20222);

(statearr_20248_21436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (8))){
var inst_20211 = (state_20230[(7)]);
var state_20230__$1 = state_20230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20230__$1,(11),out,inst_20211);
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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_20249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20249[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_20249[(1)] = (1));

return statearr_20249;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_20230){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20230);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20250){var ex__18268__auto__ = e20250;
var statearr_20251_21441 = state_20230;
(statearr_20251_21441[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20230[(4)]))){
var statearr_20252_21442 = state_20230;
(statearr_20252_21442[(1)] = cljs.core.first((state_20230[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21443 = state_20230;
state_20230 = G__21443;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_20230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_20230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20253 = f__18602__auto__();
(statearr_20253[(6)] = c__18601__auto___21402);

return statearr_20253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
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
cljs.core.async.t_cljs$core$async20258 = (function (f,ch,meta20256,_,fn1,meta20259){
this.f = f;
this.ch = ch;
this.meta20256 = meta20256;
this._ = _;
this.fn1 = fn1;
this.meta20259 = meta20259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20260,meta20259__$1){
var self__ = this;
var _20260__$1 = this;
return (new cljs.core.async.t_cljs$core$async20258(self__.f,self__.ch,self__.meta20256,self__._,self__.fn1,meta20259__$1));
}));

(cljs.core.async.t_cljs$core$async20258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20260){
var self__ = this;
var _20260__$1 = this;
return self__.meta20259;
}));

(cljs.core.async.t_cljs$core$async20258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20254_SHARP_){
var G__20261 = (((p1__20254_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20254_SHARP_) : self__.f.call(null, p1__20254_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20261) : f1.call(null, G__20261));
});
}));

(cljs.core.async.t_cljs$core$async20258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20256","meta20256",1777136669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20255","cljs.core.async/t_cljs$core$async20255",-893683763,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20259","meta20259",1388774534,null)], null);
}));

(cljs.core.async.t_cljs$core$async20258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20258");

(cljs.core.async.t_cljs$core$async20258.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20258.
 */
cljs.core.async.__GT_t_cljs$core$async20258 = (function cljs$core$async$__GT_t_cljs$core$async20258(f,ch,meta20256,_,fn1,meta20259){
return (new cljs.core.async.t_cljs$core$async20258(f,ch,meta20256,_,fn1,meta20259));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20255 = (function (f,ch,meta20256){
this.f = f;
this.ch = ch;
this.meta20256 = meta20256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20257,meta20256__$1){
var self__ = this;
var _20257__$1 = this;
return (new cljs.core.async.t_cljs$core$async20255(self__.f,self__.ch,meta20256__$1));
}));

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20257){
var self__ = this;
var _20257__$1 = this;
return self__.meta20256;
}));

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20258(self__.f,self__.ch,self__.meta20256,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20262 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20262) : self__.f.call(null, G__20262));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20256","meta20256",1777136669,null)], null);
}));

(cljs.core.async.t_cljs$core$async20255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20255");

(cljs.core.async.t_cljs$core$async20255.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20255.
 */
cljs.core.async.__GT_t_cljs$core$async20255 = (function cljs$core$async$__GT_t_cljs$core$async20255(f,ch,meta20256){
return (new cljs.core.async.t_cljs$core$async20255(f,ch,meta20256));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20255(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20264 = (function (f,ch,meta20265){
this.f = f;
this.ch = ch;
this.meta20265 = meta20265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20266,meta20265__$1){
var self__ = this;
var _20266__$1 = this;
return (new cljs.core.async.t_cljs$core$async20264(self__.f,self__.ch,meta20265__$1));
}));

(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20266){
var self__ = this;
var _20266__$1 = this;
return self__.meta20265;
}));

(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20265","meta20265",-2083870340,null)], null);
}));

(cljs.core.async.t_cljs$core$async20264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20264");

(cljs.core.async.t_cljs$core$async20264.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20264.
 */
cljs.core.async.__GT_t_cljs$core$async20264 = (function cljs$core$async$__GT_t_cljs$core$async20264(f,ch,meta20265){
return (new cljs.core.async.t_cljs$core$async20264(f,ch,meta20265));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20274 = (function (p,ch,meta20275){
this.p = p;
this.ch = ch;
this.meta20275 = meta20275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20276,meta20275__$1){
var self__ = this;
var _20276__$1 = this;
return (new cljs.core.async.t_cljs$core$async20274(self__.p,self__.ch,meta20275__$1));
}));

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20276){
var self__ = this;
var _20276__$1 = this;
return self__.meta20275;
}));

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20274.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20275","meta20275",-169769384,null)], null);
}));

(cljs.core.async.t_cljs$core$async20274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20274");

(cljs.core.async.t_cljs$core$async20274.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20274.
 */
cljs.core.async.__GT_t_cljs$core$async20274 = (function cljs$core$async$__GT_t_cljs$core$async20274(p,ch,meta20275){
return (new cljs.core.async.t_cljs$core$async20274(p,ch,meta20275));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20274(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20298 = arguments.length;
switch (G__20298) {
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
var c__18601__auto___21479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20333){
var state_val_20334 = (state_20333[(1)]);
if((state_val_20334 === (7))){
var inst_20329 = (state_20333[(2)]);
var state_20333__$1 = state_20333;
var statearr_20341_21484 = state_20333__$1;
(statearr_20341_21484[(2)] = inst_20329);

(statearr_20341_21484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (1))){
var state_20333__$1 = state_20333;
var statearr_20342_21488 = state_20333__$1;
(statearr_20342_21488[(2)] = null);

(statearr_20342_21488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (4))){
var inst_20309 = (state_20333[(7)]);
var inst_20309__$1 = (state_20333[(2)]);
var inst_20310 = (inst_20309__$1 == null);
var state_20333__$1 = (function (){var statearr_20343 = state_20333;
(statearr_20343[(7)] = inst_20309__$1);

return statearr_20343;
})();
if(cljs.core.truth_(inst_20310)){
var statearr_20346_21489 = state_20333__$1;
(statearr_20346_21489[(1)] = (5));

} else {
var statearr_20347_21490 = state_20333__$1;
(statearr_20347_21490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (6))){
var inst_20309 = (state_20333[(7)]);
var inst_20320 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20309) : p.call(null, inst_20309));
var state_20333__$1 = state_20333;
if(cljs.core.truth_(inst_20320)){
var statearr_20348_21496 = state_20333__$1;
(statearr_20348_21496[(1)] = (8));

} else {
var statearr_20349_21498 = state_20333__$1;
(statearr_20349_21498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (3))){
var inst_20331 = (state_20333[(2)]);
var state_20333__$1 = state_20333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20333__$1,inst_20331);
} else {
if((state_val_20334 === (2))){
var state_20333__$1 = state_20333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20333__$1,(4),ch);
} else {
if((state_val_20334 === (11))){
var inst_20323 = (state_20333[(2)]);
var state_20333__$1 = state_20333;
var statearr_20351_21513 = state_20333__$1;
(statearr_20351_21513[(2)] = inst_20323);

(statearr_20351_21513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (9))){
var state_20333__$1 = state_20333;
var statearr_20352_21518 = state_20333__$1;
(statearr_20352_21518[(2)] = null);

(statearr_20352_21518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (5))){
var inst_20318 = cljs.core.async.close_BANG_(out);
var state_20333__$1 = state_20333;
var statearr_20353_21523 = state_20333__$1;
(statearr_20353_21523[(2)] = inst_20318);

(statearr_20353_21523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (10))){
var inst_20326 = (state_20333[(2)]);
var state_20333__$1 = (function (){var statearr_20354 = state_20333;
(statearr_20354[(8)] = inst_20326);

return statearr_20354;
})();
var statearr_20355_21536 = state_20333__$1;
(statearr_20355_21536[(2)] = null);

(statearr_20355_21536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (8))){
var inst_20309 = (state_20333[(7)]);
var state_20333__$1 = state_20333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20333__$1,(11),out,inst_20309);
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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_20359 = [null,null,null,null,null,null,null,null,null];
(statearr_20359[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_20359[(1)] = (1));

return statearr_20359;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_20333){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20333);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20360){var ex__18268__auto__ = e20360;
var statearr_20361_21557 = state_20333;
(statearr_20361_21557[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20333[(4)]))){
var statearr_20362_21558 = state_20333;
(statearr_20362_21558[(1)] = cljs.core.first((state_20333[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21563 = state_20333;
state_20333 = G__21563;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_20333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_20333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20363 = f__18602__auto__();
(statearr_20363[(6)] = c__18601__auto___21479);

return statearr_20363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20365 = arguments.length;
switch (G__20365) {
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
var c__18601__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20427){
var state_val_20428 = (state_20427[(1)]);
if((state_val_20428 === (7))){
var inst_20423 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
var statearr_20429_21601 = state_20427__$1;
(statearr_20429_21601[(2)] = inst_20423);

(statearr_20429_21601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (20))){
var inst_20393 = (state_20427[(7)]);
var inst_20404 = (state_20427[(2)]);
var inst_20405 = cljs.core.next(inst_20393);
var inst_20379 = inst_20405;
var inst_20380 = null;
var inst_20381 = (0);
var inst_20382 = (0);
var state_20427__$1 = (function (){var statearr_20430 = state_20427;
(statearr_20430[(8)] = inst_20404);

(statearr_20430[(9)] = inst_20382);

(statearr_20430[(10)] = inst_20379);

(statearr_20430[(11)] = inst_20380);

(statearr_20430[(12)] = inst_20381);

return statearr_20430;
})();
var statearr_20431_21613 = state_20427__$1;
(statearr_20431_21613[(2)] = null);

(statearr_20431_21613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (1))){
var state_20427__$1 = state_20427;
var statearr_20432_21614 = state_20427__$1;
(statearr_20432_21614[(2)] = null);

(statearr_20432_21614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (4))){
var inst_20368 = (state_20427[(13)]);
var inst_20368__$1 = (state_20427[(2)]);
var inst_20369 = (inst_20368__$1 == null);
var state_20427__$1 = (function (){var statearr_20433 = state_20427;
(statearr_20433[(13)] = inst_20368__$1);

return statearr_20433;
})();
if(cljs.core.truth_(inst_20369)){
var statearr_20434_21622 = state_20427__$1;
(statearr_20434_21622[(1)] = (5));

} else {
var statearr_20435_21628 = state_20427__$1;
(statearr_20435_21628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (15))){
var state_20427__$1 = state_20427;
var statearr_20439_21629 = state_20427__$1;
(statearr_20439_21629[(2)] = null);

(statearr_20439_21629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (21))){
var state_20427__$1 = state_20427;
var statearr_20440_21630 = state_20427__$1;
(statearr_20440_21630[(2)] = null);

(statearr_20440_21630[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (13))){
var inst_20382 = (state_20427[(9)]);
var inst_20379 = (state_20427[(10)]);
var inst_20380 = (state_20427[(11)]);
var inst_20381 = (state_20427[(12)]);
var inst_20389 = (state_20427[(2)]);
var inst_20390 = (inst_20382 + (1));
var tmp20436 = inst_20379;
var tmp20437 = inst_20380;
var tmp20438 = inst_20381;
var inst_20379__$1 = tmp20436;
var inst_20380__$1 = tmp20437;
var inst_20381__$1 = tmp20438;
var inst_20382__$1 = inst_20390;
var state_20427__$1 = (function (){var statearr_20441 = state_20427;
(statearr_20441[(14)] = inst_20389);

(statearr_20441[(9)] = inst_20382__$1);

(statearr_20441[(10)] = inst_20379__$1);

(statearr_20441[(11)] = inst_20380__$1);

(statearr_20441[(12)] = inst_20381__$1);

return statearr_20441;
})();
var statearr_20445_21634 = state_20427__$1;
(statearr_20445_21634[(2)] = null);

(statearr_20445_21634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (22))){
var state_20427__$1 = state_20427;
var statearr_20451_21637 = state_20427__$1;
(statearr_20451_21637[(2)] = null);

(statearr_20451_21637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (6))){
var inst_20368 = (state_20427[(13)]);
var inst_20377 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20368) : f.call(null, inst_20368));
var inst_20378 = cljs.core.seq(inst_20377);
var inst_20379 = inst_20378;
var inst_20380 = null;
var inst_20381 = (0);
var inst_20382 = (0);
var state_20427__$1 = (function (){var statearr_20455 = state_20427;
(statearr_20455[(9)] = inst_20382);

(statearr_20455[(10)] = inst_20379);

(statearr_20455[(11)] = inst_20380);

(statearr_20455[(12)] = inst_20381);

return statearr_20455;
})();
var statearr_20456_21639 = state_20427__$1;
(statearr_20456_21639[(2)] = null);

(statearr_20456_21639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (17))){
var inst_20393 = (state_20427[(7)]);
var inst_20397 = cljs.core.chunk_first(inst_20393);
var inst_20398 = cljs.core.chunk_rest(inst_20393);
var inst_20399 = cljs.core.count(inst_20397);
var inst_20379 = inst_20398;
var inst_20380 = inst_20397;
var inst_20381 = inst_20399;
var inst_20382 = (0);
var state_20427__$1 = (function (){var statearr_20457 = state_20427;
(statearr_20457[(9)] = inst_20382);

(statearr_20457[(10)] = inst_20379);

(statearr_20457[(11)] = inst_20380);

(statearr_20457[(12)] = inst_20381);

return statearr_20457;
})();
var statearr_20458_21641 = state_20427__$1;
(statearr_20458_21641[(2)] = null);

(statearr_20458_21641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (3))){
var inst_20425 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20427__$1,inst_20425);
} else {
if((state_val_20428 === (12))){
var inst_20413 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
var statearr_20459_21642 = state_20427__$1;
(statearr_20459_21642[(2)] = inst_20413);

(statearr_20459_21642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (2))){
var state_20427__$1 = state_20427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20427__$1,(4),in$);
} else {
if((state_val_20428 === (23))){
var inst_20421 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
var statearr_20460_21643 = state_20427__$1;
(statearr_20460_21643[(2)] = inst_20421);

(statearr_20460_21643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (19))){
var inst_20408 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
var statearr_20461_21644 = state_20427__$1;
(statearr_20461_21644[(2)] = inst_20408);

(statearr_20461_21644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (11))){
var inst_20393 = (state_20427[(7)]);
var inst_20379 = (state_20427[(10)]);
var inst_20393__$1 = cljs.core.seq(inst_20379);
var state_20427__$1 = (function (){var statearr_20462 = state_20427;
(statearr_20462[(7)] = inst_20393__$1);

return statearr_20462;
})();
if(inst_20393__$1){
var statearr_20463_21645 = state_20427__$1;
(statearr_20463_21645[(1)] = (14));

} else {
var statearr_20464_21647 = state_20427__$1;
(statearr_20464_21647[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (9))){
var inst_20415 = (state_20427[(2)]);
var inst_20416 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20427__$1 = (function (){var statearr_20465 = state_20427;
(statearr_20465[(15)] = inst_20415);

return statearr_20465;
})();
if(cljs.core.truth_(inst_20416)){
var statearr_20466_21649 = state_20427__$1;
(statearr_20466_21649[(1)] = (21));

} else {
var statearr_20467_21650 = state_20427__$1;
(statearr_20467_21650[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (5))){
var inst_20371 = cljs.core.async.close_BANG_(out);
var state_20427__$1 = state_20427;
var statearr_20468_21654 = state_20427__$1;
(statearr_20468_21654[(2)] = inst_20371);

(statearr_20468_21654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (14))){
var inst_20393 = (state_20427[(7)]);
var inst_20395 = cljs.core.chunked_seq_QMARK_(inst_20393);
var state_20427__$1 = state_20427;
if(inst_20395){
var statearr_20469_21655 = state_20427__$1;
(statearr_20469_21655[(1)] = (17));

} else {
var statearr_20470_21657 = state_20427__$1;
(statearr_20470_21657[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (16))){
var inst_20411 = (state_20427[(2)]);
var state_20427__$1 = state_20427;
var statearr_20471_21658 = state_20427__$1;
(statearr_20471_21658[(2)] = inst_20411);

(statearr_20471_21658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20428 === (10))){
var inst_20382 = (state_20427[(9)]);
var inst_20380 = (state_20427[(11)]);
var inst_20387 = cljs.core._nth(inst_20380,inst_20382);
var state_20427__$1 = state_20427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20427__$1,(13),out,inst_20387);
} else {
if((state_val_20428 === (18))){
var inst_20393 = (state_20427[(7)]);
var inst_20402 = cljs.core.first(inst_20393);
var state_20427__$1 = state_20427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20427__$1,(20),out,inst_20402);
} else {
if((state_val_20428 === (8))){
var inst_20382 = (state_20427[(9)]);
var inst_20381 = (state_20427[(12)]);
var inst_20384 = (inst_20382 < inst_20381);
var inst_20385 = inst_20384;
var state_20427__$1 = state_20427;
if(cljs.core.truth_(inst_20385)){
var statearr_20472_21661 = state_20427__$1;
(statearr_20472_21661[(1)] = (10));

} else {
var statearr_20473_21666 = state_20427__$1;
(statearr_20473_21666[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18265__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18265__auto____0 = (function (){
var statearr_20474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20474[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18265__auto__);

(statearr_20474[(1)] = (1));

return statearr_20474;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18265__auto____1 = (function (state_20427){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20427);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20476){var ex__18268__auto__ = e20476;
var statearr_20477_21671 = state_20427;
(statearr_20477_21671[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20427[(4)]))){
var statearr_20478_21674 = state_20427;
(statearr_20478_21674[(1)] = cljs.core.first((state_20427[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21676 = state_20427;
state_20427 = G__21676;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18265__auto__ = function(state_20427){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18265__auto____1.call(this,state_20427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18265__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18265__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20480 = f__18602__auto__();
(statearr_20480[(6)] = c__18601__auto__);

return statearr_20480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));

return c__18601__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20484 = arguments.length;
switch (G__20484) {
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
var G__20488 = arguments.length;
switch (G__20488) {
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
var G__20492 = arguments.length;
switch (G__20492) {
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
var c__18601__auto___21707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20516){
var state_val_20517 = (state_20516[(1)]);
if((state_val_20517 === (7))){
var inst_20511 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
var statearr_20518_21714 = state_20516__$1;
(statearr_20518_21714[(2)] = inst_20511);

(statearr_20518_21714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (1))){
var inst_20493 = null;
var state_20516__$1 = (function (){var statearr_20519 = state_20516;
(statearr_20519[(7)] = inst_20493);

return statearr_20519;
})();
var statearr_20523_21715 = state_20516__$1;
(statearr_20523_21715[(2)] = null);

(statearr_20523_21715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (4))){
var inst_20496 = (state_20516[(8)]);
var inst_20496__$1 = (state_20516[(2)]);
var inst_20497 = (inst_20496__$1 == null);
var inst_20498 = cljs.core.not(inst_20497);
var state_20516__$1 = (function (){var statearr_20524 = state_20516;
(statearr_20524[(8)] = inst_20496__$1);

return statearr_20524;
})();
if(inst_20498){
var statearr_20525_21717 = state_20516__$1;
(statearr_20525_21717[(1)] = (5));

} else {
var statearr_20526_21718 = state_20516__$1;
(statearr_20526_21718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (6))){
var state_20516__$1 = state_20516;
var statearr_20527_21720 = state_20516__$1;
(statearr_20527_21720[(2)] = null);

(statearr_20527_21720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (3))){
var inst_20513 = (state_20516[(2)]);
var inst_20514 = cljs.core.async.close_BANG_(out);
var state_20516__$1 = (function (){var statearr_20528 = state_20516;
(statearr_20528[(9)] = inst_20513);

return statearr_20528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20516__$1,inst_20514);
} else {
if((state_val_20517 === (2))){
var state_20516__$1 = state_20516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20516__$1,(4),ch);
} else {
if((state_val_20517 === (11))){
var inst_20496 = (state_20516[(8)]);
var inst_20505 = (state_20516[(2)]);
var inst_20493 = inst_20496;
var state_20516__$1 = (function (){var statearr_20529 = state_20516;
(statearr_20529[(10)] = inst_20505);

(statearr_20529[(7)] = inst_20493);

return statearr_20529;
})();
var statearr_20530_21728 = state_20516__$1;
(statearr_20530_21728[(2)] = null);

(statearr_20530_21728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (9))){
var inst_20496 = (state_20516[(8)]);
var state_20516__$1 = state_20516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20516__$1,(11),out,inst_20496);
} else {
if((state_val_20517 === (5))){
var inst_20496 = (state_20516[(8)]);
var inst_20493 = (state_20516[(7)]);
var inst_20500 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20496,inst_20493);
var state_20516__$1 = state_20516;
if(inst_20500){
var statearr_20535_21731 = state_20516__$1;
(statearr_20535_21731[(1)] = (8));

} else {
var statearr_20540_21734 = state_20516__$1;
(statearr_20540_21734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (10))){
var inst_20508 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
var statearr_20544_21740 = state_20516__$1;
(statearr_20544_21740[(2)] = inst_20508);

(statearr_20544_21740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (8))){
var inst_20493 = (state_20516[(7)]);
var tmp20531 = inst_20493;
var inst_20493__$1 = tmp20531;
var state_20516__$1 = (function (){var statearr_20548 = state_20516;
(statearr_20548[(7)] = inst_20493__$1);

return statearr_20548;
})();
var statearr_20549_21749 = state_20516__$1;
(statearr_20549_21749[(2)] = null);

(statearr_20549_21749[(1)] = (2));


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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_20550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20550[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_20550[(1)] = (1));

return statearr_20550;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_20516){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20516);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20551){var ex__18268__auto__ = e20551;
var statearr_20552_21763 = state_20516;
(statearr_20552_21763[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20516[(4)]))){
var statearr_20553_21764 = state_20516;
(statearr_20553_21764[(1)] = cljs.core.first((state_20516[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21766 = state_20516;
state_20516 = G__21766;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_20516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_20516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20561 = f__18602__auto__();
(statearr_20561[(6)] = c__18601__auto___21707);

return statearr_20561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20569 = arguments.length;
switch (G__20569) {
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
var c__18601__auto___21783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20623){
var state_val_20624 = (state_20623[(1)]);
if((state_val_20624 === (7))){
var inst_20619 = (state_20623[(2)]);
var state_20623__$1 = state_20623;
var statearr_20625_21791 = state_20623__$1;
(statearr_20625_21791[(2)] = inst_20619);

(statearr_20625_21791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (1))){
var inst_20584 = (new Array(n));
var inst_20585 = inst_20584;
var inst_20586 = (0);
var state_20623__$1 = (function (){var statearr_20626 = state_20623;
(statearr_20626[(7)] = inst_20585);

(statearr_20626[(8)] = inst_20586);

return statearr_20626;
})();
var statearr_20627_21798 = state_20623__$1;
(statearr_20627_21798[(2)] = null);

(statearr_20627_21798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (4))){
var inst_20589 = (state_20623[(9)]);
var inst_20589__$1 = (state_20623[(2)]);
var inst_20590 = (inst_20589__$1 == null);
var inst_20591 = cljs.core.not(inst_20590);
var state_20623__$1 = (function (){var statearr_20628 = state_20623;
(statearr_20628[(9)] = inst_20589__$1);

return statearr_20628;
})();
if(inst_20591){
var statearr_20629_21806 = state_20623__$1;
(statearr_20629_21806[(1)] = (5));

} else {
var statearr_20630_21809 = state_20623__$1;
(statearr_20630_21809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (15))){
var inst_20613 = (state_20623[(2)]);
var state_20623__$1 = state_20623;
var statearr_20631_21811 = state_20623__$1;
(statearr_20631_21811[(2)] = inst_20613);

(statearr_20631_21811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (13))){
var state_20623__$1 = state_20623;
var statearr_20632_21818 = state_20623__$1;
(statearr_20632_21818[(2)] = null);

(statearr_20632_21818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (6))){
var inst_20586 = (state_20623[(8)]);
var inst_20607 = (inst_20586 > (0));
var state_20623__$1 = state_20623;
if(cljs.core.truth_(inst_20607)){
var statearr_20633_21828 = state_20623__$1;
(statearr_20633_21828[(1)] = (12));

} else {
var statearr_20634_21830 = state_20623__$1;
(statearr_20634_21830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (3))){
var inst_20621 = (state_20623[(2)]);
var state_20623__$1 = state_20623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20623__$1,inst_20621);
} else {
if((state_val_20624 === (12))){
var inst_20585 = (state_20623[(7)]);
var inst_20611 = cljs.core.vec(inst_20585);
var state_20623__$1 = state_20623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20623__$1,(15),out,inst_20611);
} else {
if((state_val_20624 === (2))){
var state_20623__$1 = state_20623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20623__$1,(4),ch);
} else {
if((state_val_20624 === (11))){
var inst_20601 = (state_20623[(2)]);
var inst_20602 = (new Array(n));
var inst_20585 = inst_20602;
var inst_20586 = (0);
var state_20623__$1 = (function (){var statearr_20635 = state_20623;
(statearr_20635[(7)] = inst_20585);

(statearr_20635[(10)] = inst_20601);

(statearr_20635[(8)] = inst_20586);

return statearr_20635;
})();
var statearr_20636_21843 = state_20623__$1;
(statearr_20636_21843[(2)] = null);

(statearr_20636_21843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (9))){
var inst_20585 = (state_20623[(7)]);
var inst_20599 = cljs.core.vec(inst_20585);
var state_20623__$1 = state_20623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20623__$1,(11),out,inst_20599);
} else {
if((state_val_20624 === (5))){
var inst_20589 = (state_20623[(9)]);
var inst_20594 = (state_20623[(11)]);
var inst_20585 = (state_20623[(7)]);
var inst_20586 = (state_20623[(8)]);
var inst_20593 = (inst_20585[inst_20586] = inst_20589);
var inst_20594__$1 = (inst_20586 + (1));
var inst_20595 = (inst_20594__$1 < n);
var state_20623__$1 = (function (){var statearr_20637 = state_20623;
(statearr_20637[(12)] = inst_20593);

(statearr_20637[(11)] = inst_20594__$1);

return statearr_20637;
})();
if(cljs.core.truth_(inst_20595)){
var statearr_20638_21857 = state_20623__$1;
(statearr_20638_21857[(1)] = (8));

} else {
var statearr_20639_21859 = state_20623__$1;
(statearr_20639_21859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (14))){
var inst_20616 = (state_20623[(2)]);
var inst_20617 = cljs.core.async.close_BANG_(out);
var state_20623__$1 = (function (){var statearr_20641 = state_20623;
(statearr_20641[(13)] = inst_20616);

return statearr_20641;
})();
var statearr_20642_21869 = state_20623__$1;
(statearr_20642_21869[(2)] = inst_20617);

(statearr_20642_21869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (10))){
var inst_20605 = (state_20623[(2)]);
var state_20623__$1 = state_20623;
var statearr_20643_21876 = state_20623__$1;
(statearr_20643_21876[(2)] = inst_20605);

(statearr_20643_21876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20624 === (8))){
var inst_20594 = (state_20623[(11)]);
var inst_20585 = (state_20623[(7)]);
var tmp20640 = inst_20585;
var inst_20585__$1 = tmp20640;
var inst_20586 = inst_20594;
var state_20623__$1 = (function (){var statearr_20644 = state_20623;
(statearr_20644[(7)] = inst_20585__$1);

(statearr_20644[(8)] = inst_20586);

return statearr_20644;
})();
var statearr_20645_21883 = state_20623__$1;
(statearr_20645_21883[(2)] = null);

(statearr_20645_21883[(1)] = (2));


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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_20646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20646[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_20646[(1)] = (1));

return statearr_20646;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_20623){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20623);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20647){var ex__18268__auto__ = e20647;
var statearr_20648_21887 = state_20623;
(statearr_20648_21887[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20623[(4)]))){
var statearr_20649_21888 = state_20623;
(statearr_20649_21888[(1)] = cljs.core.first((state_20623[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21889 = state_20623;
state_20623 = G__21889;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_20623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_20623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20651 = f__18602__auto__();
(statearr_20651[(6)] = c__18601__auto___21783);

return statearr_20651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20654 = arguments.length;
switch (G__20654) {
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
var c__18601__auto___21896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18602__auto__ = (function (){var switch__18264__auto__ = (function (state_20712){
var state_val_20713 = (state_20712[(1)]);
if((state_val_20713 === (7))){
var inst_20707 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20714_21899 = state_20712__$1;
(statearr_20714_21899[(2)] = inst_20707);

(statearr_20714_21899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (1))){
var inst_20666 = [];
var inst_20667 = inst_20666;
var inst_20668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20712__$1 = (function (){var statearr_20715 = state_20712;
(statearr_20715[(7)] = inst_20668);

(statearr_20715[(8)] = inst_20667);

return statearr_20715;
})();
var statearr_20716_21901 = state_20712__$1;
(statearr_20716_21901[(2)] = null);

(statearr_20716_21901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (4))){
var inst_20671 = (state_20712[(9)]);
var inst_20671__$1 = (state_20712[(2)]);
var inst_20672 = (inst_20671__$1 == null);
var inst_20673 = cljs.core.not(inst_20672);
var state_20712__$1 = (function (){var statearr_20717 = state_20712;
(statearr_20717[(9)] = inst_20671__$1);

return statearr_20717;
})();
if(inst_20673){
var statearr_20718_21902 = state_20712__$1;
(statearr_20718_21902[(1)] = (5));

} else {
var statearr_20719_21903 = state_20712__$1;
(statearr_20719_21903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (15))){
var inst_20667 = (state_20712[(8)]);
var inst_20699 = cljs.core.vec(inst_20667);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20712__$1,(18),out,inst_20699);
} else {
if((state_val_20713 === (13))){
var inst_20694 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20720_21904 = state_20712__$1;
(statearr_20720_21904[(2)] = inst_20694);

(statearr_20720_21904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (6))){
var inst_20667 = (state_20712[(8)]);
var inst_20696 = inst_20667.length;
var inst_20697 = (inst_20696 > (0));
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20697)){
var statearr_20721_21905 = state_20712__$1;
(statearr_20721_21905[(1)] = (15));

} else {
var statearr_20722_21906 = state_20712__$1;
(statearr_20722_21906[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (17))){
var inst_20704 = (state_20712[(2)]);
var inst_20705 = cljs.core.async.close_BANG_(out);
var state_20712__$1 = (function (){var statearr_20723 = state_20712;
(statearr_20723[(10)] = inst_20704);

return statearr_20723;
})();
var statearr_20724_21907 = state_20712__$1;
(statearr_20724_21907[(2)] = inst_20705);

(statearr_20724_21907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (3))){
var inst_20709 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20712__$1,inst_20709);
} else {
if((state_val_20713 === (12))){
var inst_20667 = (state_20712[(8)]);
var inst_20687 = cljs.core.vec(inst_20667);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20712__$1,(14),out,inst_20687);
} else {
if((state_val_20713 === (2))){
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20712__$1,(4),ch);
} else {
if((state_val_20713 === (11))){
var inst_20675 = (state_20712[(11)]);
var inst_20667 = (state_20712[(8)]);
var inst_20671 = (state_20712[(9)]);
var inst_20683 = inst_20667.push(inst_20671);
var tmp20725 = inst_20667;
var inst_20667__$1 = tmp20725;
var inst_20668 = inst_20675;
var state_20712__$1 = (function (){var statearr_20726 = state_20712;
(statearr_20726[(7)] = inst_20668);

(statearr_20726[(8)] = inst_20667__$1);

(statearr_20726[(12)] = inst_20683);

return statearr_20726;
})();
var statearr_20727_21915 = state_20712__$1;
(statearr_20727_21915[(2)] = null);

(statearr_20727_21915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (9))){
var inst_20668 = (state_20712[(7)]);
var inst_20679 = cljs.core.keyword_identical_QMARK_(inst_20668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20712__$1 = state_20712;
var statearr_20728_21916 = state_20712__$1;
(statearr_20728_21916[(2)] = inst_20679);

(statearr_20728_21916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (5))){
var inst_20668 = (state_20712[(7)]);
var inst_20675 = (state_20712[(11)]);
var inst_20676 = (state_20712[(13)]);
var inst_20671 = (state_20712[(9)]);
var inst_20675__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20671) : f.call(null, inst_20671));
var inst_20676__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20675__$1,inst_20668);
var state_20712__$1 = (function (){var statearr_20731 = state_20712;
(statearr_20731[(11)] = inst_20675__$1);

(statearr_20731[(13)] = inst_20676__$1);

return statearr_20731;
})();
if(inst_20676__$1){
var statearr_20732_21922 = state_20712__$1;
(statearr_20732_21922[(1)] = (8));

} else {
var statearr_20733_21924 = state_20712__$1;
(statearr_20733_21924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (14))){
var inst_20675 = (state_20712[(11)]);
var inst_20671 = (state_20712[(9)]);
var inst_20689 = (state_20712[(2)]);
var inst_20690 = [];
var inst_20691 = inst_20690.push(inst_20671);
var inst_20667 = inst_20690;
var inst_20668 = inst_20675;
var state_20712__$1 = (function (){var statearr_20734 = state_20712;
(statearr_20734[(7)] = inst_20668);

(statearr_20734[(14)] = inst_20689);

(statearr_20734[(15)] = inst_20691);

(statearr_20734[(8)] = inst_20667);

return statearr_20734;
})();
var statearr_20736_21942 = state_20712__$1;
(statearr_20736_21942[(2)] = null);

(statearr_20736_21942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (16))){
var state_20712__$1 = state_20712;
var statearr_20737_21943 = state_20712__$1;
(statearr_20737_21943[(2)] = null);

(statearr_20737_21943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (10))){
var inst_20681 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20681)){
var statearr_20738_21944 = state_20712__$1;
(statearr_20738_21944[(1)] = (11));

} else {
var statearr_20739_21945 = state_20712__$1;
(statearr_20739_21945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (18))){
var inst_20701 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20740_21950 = state_20712__$1;
(statearr_20740_21950[(2)] = inst_20701);

(statearr_20740_21950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (8))){
var inst_20676 = (state_20712[(13)]);
var state_20712__$1 = state_20712;
var statearr_20741_21951 = state_20712__$1;
(statearr_20741_21951[(2)] = inst_20676);

(statearr_20741_21951[(1)] = (10));


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
var cljs$core$async$state_machine__18265__auto__ = null;
var cljs$core$async$state_machine__18265__auto____0 = (function (){
var statearr_20742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20742[(0)] = cljs$core$async$state_machine__18265__auto__);

(statearr_20742[(1)] = (1));

return statearr_20742;
});
var cljs$core$async$state_machine__18265__auto____1 = (function (state_20712){
while(true){
var ret_value__18266__auto__ = (function (){try{while(true){
var result__18267__auto__ = switch__18264__auto__(state_20712);
if(cljs.core.keyword_identical_QMARK_(result__18267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18267__auto__;
}
break;
}
}catch (e20752){var ex__18268__auto__ = e20752;
var statearr_20753_21952 = state_20712;
(statearr_20753_21952[(2)] = ex__18268__auto__);


if(cljs.core.seq((state_20712[(4)]))){
var statearr_20754_21955 = state_20712;
(statearr_20754_21955[(1)] = cljs.core.first((state_20712[(4)])));

} else {
throw ex__18268__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18266__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21956 = state_20712;
state_20712 = G__21956;
continue;
} else {
return ret_value__18266__auto__;
}
break;
}
});
cljs$core$async$state_machine__18265__auto__ = function(state_20712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18265__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18265__auto____1.call(this,state_20712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18265__auto____0;
cljs$core$async$state_machine__18265__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18265__auto____1;
return cljs$core$async$state_machine__18265__auto__;
})()
})();
var state__18603__auto__ = (function (){var statearr_20755 = f__18602__auto__();
(statearr_20755[(6)] = c__18601__auto___21896);

return statearr_20755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18603__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

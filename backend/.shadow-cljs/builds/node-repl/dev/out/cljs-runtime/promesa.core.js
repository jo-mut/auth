goog.provide('promesa.core');
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.resolved(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.rejected(v);
});
/**
 * Creates an empty promise instance.
 */
promesa.core.deferred = (function promesa$core$deferred(){
return promesa.impl.deferred();
});
/**
 * The coerce based promise constructor. Creates an appropriate promise
 *   instance depending on the provided value.
 * 
 *   If an executor is provided, it will be used to resolve this
 *   promise.
 */
promesa.core.promise = (function promesa$core$promise(var_args){
var G__12290 = arguments.length;
switch (G__12290) {
case 1:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (v){
return promesa.protocols._promise(v);
}));

(promesa.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (v,executor){
return promesa.protocols._map(promesa.protocols._promise(v),cljs.core.identity,executor);
}));

(promesa.core.promise.cljs$lang$maxFixedArity = 2);

/**
 * A convenience alias for `promise` coercion function that only accepts
 *   a single argument.
 */
promesa.core.wrap = (function promesa$core$wrap(v){
return promesa.protocols._promise(v);
});
/**
 * Create a promise instance from a factory function. If an executor is
 *   provided, the factory will be executed in the provided executor.
 * 
 *   A factory function looks like `(fn [resolve reject] (resolve 1))`.
 */
promesa.core.create = (function promesa$core$create(var_args){
var G__12296 = arguments.length;
switch (G__12296) {
case 1:
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.create.cljs$core$IFn$_invoke$arity$1 = (function (f){
var d = promesa.impl.deferred();
try{var G__12298_12403 = (function (p1__12291_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__12291_SHARP_);
});
var G__12299_12404 = (function (p1__12292_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__12292_SHARP_);
});
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12298_12403,G__12299_12404) : f.call(null, G__12298_12403,G__12299_12404));
}catch (e12297){var e_12405 = e12297;
promesa.protocols._reject_BANG_(d,e_12405);
}
return d;
}));

(promesa.core.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred();
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(executor,(function (){
try{var G__12301 = (function (p1__12293_SHARP_){
return promesa.protocols._resolve_BANG_(d,p1__12293_SHARP_);
});
var G__12302 = (function (p1__12294_SHARP_){
return promesa.protocols._reject_BANG_(d,p1__12294_SHARP_);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12301,G__12302) : f.call(null, G__12301,G__12302));
}catch (e12300){var e = e12300;
return promesa.protocols._reject_BANG_(d,e);
}}));

return d;
}));

(promesa.core.create.cljs$lang$maxFixedArity = 2);

/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
if((!((v == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === v.promesa$protocols$IPromise$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IPromise,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IPromise,v);
}
});
/**
 * Return true if `v` is a promise instance (alias to `promise?`).
 */
promesa.core.deferred_QMARK_ = (function promesa$core$deferred_QMARK_(v){
return (v instanceof promesa.impl._STAR_default_promise_STAR_);
});
/**
 * Returns true if `v` is a promise like object.
 */
promesa.core.thenable_QMARK_ = (function promesa$core$thenable_QMARK_(v){
return ((cljs.core.object_QMARK_(v)) && (cljs.core.fn_QMARK_((v["then"]))));
});
/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument; `f`
 *   can return a plain value or promise instance, an automatic
 *   unwrapping will be performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.then = (function promesa$core$then(var_args){
var G__12305 = arguments.length;
switch (G__12305) {
case 2:
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._bind(promesa.protocols._promise(p),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,f));
}));

(promesa.core.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._bind(promesa.protocols._promise(p),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,f),executor);
}));

(promesa.core.then.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument; `f`
 *   should return a plain value, no automatic unwrapping will be
 *   performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.then_SINGLEQUOTE_ = (function promesa$core$then_SINGLEQUOTE_(var_args){
var G__12307 = arguments.length;
switch (G__12307) {
case 2:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._map(promesa.protocols._promise(p),f);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._map(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed with when the promise `p` is
 *   successfully resolved. Returns a promise that will mirror the
 *   promise instance returned by calling `f` with the value as single
 *   argument; `f` **must** return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.bind = (function promesa$core$bind(var_args){
var G__12309 = arguments.length;
switch (G__12309) {
case 2:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._bind(promesa.protocols._promise(p),f);
}));

(promesa.core.bind.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._bind(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.bind.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This function is intended to be used with `->>`.
 */
promesa.core.map = (function promesa$core$map(var_args){
var G__12311 = arguments.length;
switch (G__12311) {
case 2:
return promesa.core.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.map.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._map(promesa.protocols._promise(p),f);
}));

(promesa.core.map.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._map(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.map.cljs$lang$maxFixedArity = 3);

/**
 * A convenience alias for `map`.
 */
promesa.core.fmap = (function promesa$core$fmap(var_args){
var G__12313 = arguments.length;
switch (G__12313) {
case 2:
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._map(promesa.protocols._promise(p),f);
}));

(promesa.core.fmap.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._map(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.fmap.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will mirror the
 *   promise instance returned by calling `f` with the value as single
 *   argument; `f` **must** return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This funciton is intended to be used with `->>`.
 */
promesa.core.mapcat = (function promesa$core$mapcat(var_args){
var G__12315 = arguments.length;
switch (G__12315) {
case 2:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._bind(promesa.protocols._promise(p),f);
}));

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._bind(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.mapcat.cljs$lang$maxFixedArity = 3);

/**
 * A convenience alias for `mapcat`.
 */
promesa.core.mcat = (function promesa$core$mcat(var_args){
var G__12317 = arguments.length;
switch (G__12317) {
case 2:
return promesa.core.mcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._bind(promesa.protocols._promise(p),f);
}));

(promesa.core.mcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._bind(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.mcat.cljs$lang$maxFixedArity = 3);

/**
 * Chain variable number of functions to be executed serially using
 *   `then`.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var G__12322 = arguments.length;
switch (G__12322) {
case 2:
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___12414 = arguments.length;
var i__5727__auto___12415 = (0);
while(true){
if((i__5727__auto___12415 < len__5726__auto___12414)){
args_arr__5751__auto__.push((arguments[i__5727__auto___12415]));

var G__12416 = (i__5727__auto___12415 + (1));
i__5727__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(promesa.core.chain.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(promesa.core.then,p,cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core.chain.cljs$lang$applyTo = (function (seq12319){
var G__12320 = cljs.core.first(seq12319);
var seq12319__$1 = cljs.core.next(seq12319);
var G__12321 = cljs.core.first(seq12319__$1);
var seq12319__$2 = cljs.core.next(seq12319__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12320,G__12321,seq12319__$2);
}));

(promesa.core.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of functions to be executed serially using
 *   `map`.
 */
promesa.core.chain_SINGLEQUOTE_ = (function promesa$core$chain_SINGLEQUOTE_(var_args){
var G__12329 = arguments.length;
switch (G__12329) {
case 2:
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___12418 = arguments.length;
var i__5727__auto___12419 = (0);
while(true){
if((i__5727__auto___12419 < len__5726__auto___12418)){
args_arr__5751__auto__.push((arguments[i__5727__auto___12419]));

var G__12420 = (i__5727__auto___12419 + (1));
i__5727__auto___12419 = G__12420;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12324_SHARP_,p2__12323_SHARP_){
return promesa.core.map.cljs$core$IFn$_invoke$arity$2(p2__12323_SHARP_,p1__12324_SHARP_);
}),promesa.protocols._promise(p),cljs.core.cons(f,fs));
}));

/** @this {Function} */
(promesa.core.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq12326){
var G__12327 = cljs.core.first(seq12326);
var seq12326__$1 = cljs.core.next(seq12326);
var G__12328 = cljs.core.first(seq12326__$1);
var seq12326__$2 = cljs.core.next(seq12326__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12327,G__12328,seq12326__$2);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$lang$maxFixedArity = (2));

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise completed (resolving or
 *   rejecting) with the return value of calling `f` with both: value and
 *   the exception; `f` can return a new plain value or promise instance,
 *   and automatic unwrapping will be performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   For performance sensitive code, look at `hmap` and `hcat`.
 */
promesa.core.handle = (function promesa$core$handle(var_args){
var G__12331 = arguments.length;
switch (G__12331) {
case 2:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.handle.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._handle(promesa.protocols._promise(p),f);
}));

(promesa.core.handle.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._handle(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.handle.cljs$lang$maxFixedArity = 3);

/**
 * Like `handle` but ignores the return value. Returns a promise that
 *   will mirror the original one.
 */
promesa.core.finally$ = (function promesa$core$finally(var_args){
var G__12333 = arguments.length;
switch (G__12333) {
case 2:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._finally(promesa.protocols._promise(p),f);
}));

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._finally(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.finally$.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise completed (resolving or
 *   rejecting) with the return value of calling `f` with both: value and
 *   the exception.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   Intended to be used with `->>`.
 */
promesa.core.hmap = (function promesa$core$hmap(var_args){
var G__12335 = arguments.length;
switch (G__12335) {
case 2:
return promesa.core.hmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.hmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.hmap.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._handle(promesa.protocols._promise(p),f);
}));

(promesa.core.hmap.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._handle(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.hmap.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise that will mirror the
 *   promise instance returned by calling `f` with both: value and the
 *   exception.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   Intended to be used with `->>`.
 */
promesa.core.hcat = (function promesa$core$hcat(var_args){
var G__12337 = arguments.length;
switch (G__12337) {
case 2:
return promesa.core.hcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.hcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.hcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._handle(promesa.protocols._promise(p),f);
}));

(promesa.core.hcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._handle(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.hcat.cljs$lang$maxFixedArity = 3);

/**
 * Inverted arguments version of `finally`; intended to be used with
 *   `->>`.
 */
promesa.core.fnly = (function promesa$core$fnly(var_args){
var G__12339 = arguments.length;
switch (G__12339) {
case 2:
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.fnly.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._finally(promesa.protocols._promise(p),f);
}));

(promesa.core.fnly.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._finally(promesa.protocols._promise(p),f,executor);
}));

(promesa.core.fnly.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   rejected. Returns a promise that will be resolved with the return
 *   value of calling `f` with exception as single argument; `f` can
 *   return a plain value or promise instance, an automatic unwrapping
 *   will be performed.
 * 
 *   The computation will be executed in the completion thread, look at
 *   `merr` if you want the ability to schedule the computation to other
 *   thread.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__12342 = arguments.length;
switch (G__12342) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._catch(promesa.protocols._promise(p),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,f));
}));

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_(pred_or_type))?pred_or_type:(function (p1__12340_SHARP_){
return (p1__12340_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._catch(promesa.protocols._promise(p),(function (e){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(e) : accept_QMARK_.call(null, e)))){
return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null, e)));
} else {
return promesa.impl.rejected(e);
}
}));
}));

(promesa.core.catch$.cljs$lang$maxFixedArity = 3);

promesa.core.catch_SINGLEQUOTE_ = (function promesa$core$catch_SINGLEQUOTE_(var_args){
var G__12344 = arguments.length;
switch (G__12344) {
case 2:
return promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.catch_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3(p,pred_or_type,f);
}));

(promesa.core.catch_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

promesa.core.error = (function promesa$core$error(var_args){
var G__12346 = arguments.length;
switch (G__12346) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(p,f);
}));

(promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,pred_or_type,p){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3(p,cljs.core.type,f);
}));

(promesa.core.error.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   rejected. Returns a promise that will mirror the promise returned by
 *   calling `f` with exception as single argument; `f` **must** return a
 *   promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This is intended to be used with `->>`.
 */
promesa.core.merr = (function promesa$core$merr(var_args){
var G__12348 = arguments.length;
switch (G__12348) {
case 2:
return promesa.core.merr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.merr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.merr.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._catch(p,f);
}));

(promesa.core.merr.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._catch(p,f,executor);
}));

(promesa.core.merr.cljs$lang$maxFixedArity = 3);

/**
 * Given an array of promises, return a promise that is fulfilled when
 *   all the items in the array are fulfilled.
 * 
 *   Example:
 * 
 *   ```
 *   (-> (p/all [(promise :first-promise)
 *            (promise :second-promise)])
 *    (then (fn [[first-result second-result]])
 *            (println (str first-result ", " second-result))))
 *   ```
 * 
 *   Will print to out `:first-promise, :second-promise`.
 * 
 *   If at least one of the promises is rejected, the resulting promise
 *   will be rejected.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.impl._STAR_default_promise_STAR_.all(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(promises)),cljs.core.vec);
});
promesa.core.race = (function promesa$core$race(promises){
return promesa.impl._STAR_default_promise_STAR_.race(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(promesa.protocols._promise,promises)));
});
/**
 * Given an array of promises, return a promise that is fulfilled when
 *   first one item in the array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(var_args){
var G__12350 = arguments.length;
switch (G__12350) {
case 1:
return promesa.core.any.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.any.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.any.cljs$core$IFn$_invoke$arity$1 = (function (promises){
return promesa.core.any.cljs$core$IFn$_invoke$arity$2(promises,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826));
}));

(promesa.core.any.cljs$core$IFn$_invoke$arity$2 = (function (promises,default$){
var items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,promises);
var state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pending","pending",-220036727),items,new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),false], null));
var lock = promesa.util.mutex();
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var seq__12351 = cljs.core.seq(promises);
var chunk__12352 = null;
var count__12353 = (0);
var i__12354 = (0);
while(true){
if((i__12354 < count__12353)){
var p = chunk__12352.cljs$core$IIndexed$_nth$arity$2(null, i__12354);
promesa.protocols._handle(promesa.protocols._promise(p),((function (seq__12351,chunk__12352,count__12353,i__12354,p,items,state,lock){
return (function (v,exception){
lock.promesa$protocols$ILock$_lock_BANG_$arity$1(null, );

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var state__$1 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, ((function (seq__12351,chunk__12352,count__12353,i__12354,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__12351,chunk__12352,count__12353,i__12354,p,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null, )));
if(cljs.core.seq(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(state__$1))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__12359 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),new cljs.core.Keyword(null,"rejections","rejections",-1620899911).cljs$core$IFn$_invoke$arity$1(state__$1)], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__12359) : reject.call(null, G__12359));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null, default$));
}
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var map__12360 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, ((function (seq__12351,chunk__12352,count__12353,i__12354,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__12351,chunk__12352,count__12353,i__12354,p,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null, )));
var map__12360__$1 = cljs.core.__destructure_map(map__12360);
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12360__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null, v));
}
}
}finally {lock.promesa$protocols$ILock$_unlock_BANG_$arity$1(null, );
}});})(seq__12351,chunk__12352,count__12353,i__12354,p,items,state,lock))
);


var G__12433 = seq__12351;
var G__12434 = chunk__12352;
var G__12435 = count__12353;
var G__12436 = (i__12354 + (1));
seq__12351 = G__12433;
chunk__12352 = G__12434;
count__12353 = G__12435;
i__12354 = G__12436;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12351);
if(temp__5804__auto__){
var seq__12351__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12351__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12351__$1);
var G__12437 = cljs.core.chunk_rest(seq__12351__$1);
var G__12438 = c__5525__auto__;
var G__12439 = cljs.core.count(c__5525__auto__);
var G__12440 = (0);
seq__12351 = G__12437;
chunk__12352 = G__12438;
count__12353 = G__12439;
i__12354 = G__12440;
continue;
} else {
var p = cljs.core.first(seq__12351__$1);
promesa.protocols._handle(promesa.protocols._promise(p),((function (seq__12351,chunk__12352,count__12353,i__12354,p,seq__12351__$1,temp__5804__auto__,items,state,lock){
return (function (v,exception){
lock.promesa$protocols$ILock$_lock_BANG_$arity$1(null, );

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var state__$1 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, ((function (seq__12351,chunk__12352,count__12353,i__12354,p,seq__12351__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__12351,chunk__12352,count__12353,i__12354,p,seq__12351__$1,temp__5804__auto__,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null, )));
if(cljs.core.seq(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(state__$1))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
var G__12361 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),new cljs.core.Keyword(null,"rejections","rejections",-1620899911).cljs$core$IFn$_invoke$arity$1(state__$1)], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__12361) : reject.call(null, G__12361));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(default$) : resolve.call(null, default$));
}
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var map__12362 = state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, ((function (seq__12351,chunk__12352,count__12353,i__12354,p,seq__12351__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__12351,chunk__12352,count__12353,i__12354,p,seq__12351__$1,temp__5804__auto__,items,state,lock))
(state.cljs$core$IDeref$_deref$arity$1(null, )));
var map__12362__$1 = cljs.core.__destructure_map(map__12362);
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12362__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null, v));
}
}
}finally {lock.promesa$protocols$ILock$_unlock_BANG_$arity$1(null, );
}});})(seq__12351,chunk__12352,count__12353,i__12354,p,seq__12351__$1,temp__5804__auto__,items,state,lock))
);


var G__12443 = cljs.core.next(seq__12351__$1);
var G__12444 = null;
var G__12445 = (0);
var G__12446 = (0);
seq__12351 = G__12443;
chunk__12352 = G__12444;
count__12353 = G__12445;
i__12354 = G__12446;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));

(promesa.core.any.cljs$lang$maxFixedArity = 2);

/**
 * A promise aware run! function. Executed in terms of `then` rules.
 */
promesa.core.run_BANG_ = (function promesa$core$run_BANG_(var_args){
var G__12366 = arguments.length;
switch (G__12366) {
case 2:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3(f,coll,promesa.exec.default_current_thread_executor);
}));

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12363_SHARP_,p2__12364_SHARP_){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p1__12363_SHARP_,(function (_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__12364_SHARP_) : f.call(null, p2__12364_SHARP_));
}));
}),promesa.core.promise.cljs$core$IFn$_invoke$arity$2(null,executor),coll);
}));

(promesa.core.run_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.protocols._cancel_BANG_(p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_(v);
});
/**
 * Resolve a completable promise with a value.
 */
promesa.core.resolve_BANG_ = (function promesa$core$resolve_BANG_(var_args){
var G__12368 = arguments.length;
switch (G__12368) {
case 1:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._resolve_BANG_(o,null);
}));

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,v){
return promesa.protocols._resolve_BANG_(o,v);
}));

(promesa.core.resolve_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Reject a completable promise with an error.
 */
promesa.core.reject_BANG_ = (function promesa$core$reject_BANG_(p,e){
return promesa.protocols._reject_BANG_(p,e);
});
/**
 * Given a function that accepts a callback as the last argument, return a
 *   function that returns a promise. Callback is expected to take one
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__12449__delegate = function (args){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
var args__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(args),resolve);
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callable,args__$1);
}catch (e12369){if((e12369 instanceof Error)){
var e = e12369;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(e) : reject.call(null, e));
} else {
throw e12369;

}
}}));
};
var G__12449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12450__i = 0, G__12450__a = new Array(arguments.length -  0);
while (G__12450__i < G__12450__a.length) {G__12450__a[G__12450__i] = arguments[G__12450__i + 0]; ++G__12450__i;}
  args = new cljs.core.IndexedSeq(G__12450__a,0,null);
} 
return G__12449__delegate.call(this,args);};
G__12449.cljs$lang$maxFixedArity = 0;
G__12449.cljs$lang$applyTo = (function (arglist__12451){
var args = cljs.core.seq(arglist__12451);
return G__12449__delegate(args);
});
G__12449.cljs$core$IFn$_invoke$arity$variadic = G__12449__delegate;
return G__12449;
})()
;
});
/**
 * @constructor
 */
promesa.core.TimeoutException = (function promesa$core$TimeoutException(message){
var it = this;
Error.call(it,message,cljs.core.PersistentArrayMap.EMPTY,null);

return it;
});
goog.inherits(promesa.core.TimeoutException,Error);
/**
 * Returns a cancellable promise that will be fulfilled with this
 *   promise's fulfillment value or rejection reason.  However, if this
 *   promise is not fulfilled or rejected within `ms` milliseconds, the
 *   returned promise is cancelled with a TimeoutError.
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__12371 = arguments.length;
switch (G__12371) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4(p,t,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826),new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4(p,t,v,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$4 = (function (p,t,v,scheduler){
var timeout = promesa.core.deferred();
var tid = promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return promesa.core.reject_BANG_(timeout,(new promesa.core.TimeoutException("Operation timed out.")));
} else {
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(timeout,v);
}
}));
return promesa.core.race(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (_,___$1){
return promesa.protocols._cancel_BANG_(tid);
}),p),timeout], null));
}));

(promesa.core.timeout.cljs$lang$maxFixedArity = 4);

/**
 * Given a timeout in miliseconds and optional value, returns a promise
 *   that will be fulfilled with provided value (or nil) after the time is
 *   reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__12373 = arguments.length;
switch (G__12373) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3(t,null,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3(t,v,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$3 = (function (t,v,scheduler){
var d = promesa.core.deferred();
promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3(scheduler,t,(function (){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(d,v);
}));

return d;
}));

(promesa.core.delay.cljs$lang$maxFixedArity = 3);

/**
 * Analogous to `clojure.core.async/thread` that returns a promise
 *   instance instead of the `Future`. Useful for executing synchronous
 *   code in a separate thread (also works in cljs).
 */
promesa.core.thread_call = (function promesa$core$thread_call(var_args){
var G__12379 = arguments.length;
switch (G__12379) {
case 1:
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.thread_call.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"thread","thread",947001524),promesa.exec.wrap_bindings(f));
}));

(promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2(executor,promesa.exec.wrap_bindings(f));
}));

(promesa.core.thread_call.cljs$lang$maxFixedArity = 2);

/**
 * A shortcut for `(p/thread-call :vthread f)`.
 */
promesa.core.vthread_call = (function promesa$core$vthread_call(f){
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),f);
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
promesa.core.Recur = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12381,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12385 = k12381;
var G__12385__$1 = (((G__12385 instanceof cljs.core.Keyword))?G__12385.fqn:null);
switch (G__12385__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12381,else__5303__auto__);

}
}));

(promesa.core.Recur.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12386){
var vec__12387 = p__12386;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12387,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12387,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(promesa.core.Recur.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#promesa.core.Recur{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12380){
var self__ = this;
var G__12380__$1 = this;
return (new cljs.core.RecordIter((0),G__12380__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(promesa.core.Recur.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(promesa.core.Recur.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(promesa.core.Recur.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-404494900 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(promesa.core.Recur.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12382,other12383){
var self__ = this;
var this12382__$1 = this;
return (((!((other12383 == null)))) && ((((this12382__$1.constructor === other12383.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12382__$1.bindings,other12383.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12382__$1.__extmap,other12383.__extmap)))))));
}));

(promesa.core.Recur.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12381){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12390 = k12381;
var G__12390__$1 = (((G__12390 instanceof cljs.core.Keyword))?G__12390.fqn:null);
switch (G__12390__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12381);

}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12380){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12391 = cljs.core.keyword_identical_QMARK_;
var expr__12392 = k__5309__auto__;
if(cljs.core.truth_((pred__12391.cljs$core$IFn$_invoke$arity$2 ? pred__12391.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__12392) : pred__12391.call(null, new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__12392)))){
return (new promesa.core.Recur(G__12380,self__.__meta,self__.__extmap,null));
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12380),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12380){
var self__ = this;
var this__5299__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,G__12380,self__.__extmap,self__.__hash));
}));

(promesa.core.Recur.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(promesa.core.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(promesa.core.Recur.cljs$lang$type = true);

(promesa.core.Recur.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"promesa.core/Recur",null,(1),null));
}));

(promesa.core.Recur.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"promesa.core/Recur");
}));

/**
 * Positional factory function for promesa.core/Recur.
 */
promesa.core.__GT_Recur = (function promesa$core$__GT_Recur(bindings){
return (new promesa.core.Recur(bindings,null,null,null));
});

/**
 * Factory function for promesa.core/Recur, taking a map of keywords to field values.
 */
promesa.core.map__GT_Recur = (function promesa$core$map__GT_Recur(G__12384){
var extmap__5342__auto__ = (function (){var G__12394 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12384,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_(G__12384)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12394);
} else {
return G__12394;
}
})();
return (new promesa.core.Recur(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__12384),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

promesa.core.recur_QMARK_ = (function promesa$core$recur_QMARK_(o){
return (o instanceof promesa.core.Recur);
});
promesa.core.wait_all_STAR_ = (function promesa$core$wait_all_STAR_(promises){
if(cljs.core.set_QMARK_(promises)){
} else {
throw (new Error(["Assert failed: ","expected a set instance","\n","(set? promises)"].join('')));
}

var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(promises);
var d = promesa.core.deferred();
cljs.core.run_BANG_((function (p){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (_,___$1){
if(cljs.core.seq(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.disj,p))){
return null;
} else {
return promesa.protocols._resolve_BANG_(d,null);
}
}),p);
}),promises);

return d;
});
/**
 * Given a variable number of promises, returns a promise which resolves
 *   to `nil` when all provided promises complete (rejected or resolved).
 * 
 *   **EXPERIMENTAL**
 */
promesa.core.wait_all = (function promesa$core$wait_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12457 = arguments.length;
var i__5727__auto___12458 = (0);
while(true){
if((i__5727__auto___12458 < len__5726__auto___12457)){
args__5732__auto__.push((arguments[i__5727__auto___12458]));

var G__12459 = (i__5727__auto___12458 + (1));
i__5727__auto___12458 = G__12459;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return promesa.core.wait_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(promesa.core.wait_all.cljs$core$IFn$_invoke$arity$variadic = (function (promises){
return promesa.core.wait_all_STAR_(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,promises));
}));

(promesa.core.wait_all.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.core.wait_all.cljs$lang$applyTo = (function (seq12400){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12400));
}));


//# sourceMappingURL=promesa.core.js.map

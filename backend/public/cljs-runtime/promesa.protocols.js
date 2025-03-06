goog.provide('promesa.protocols');

/**
 * A promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_bind$dyn_18312 = (function() {
var G__18313 = null;
var G__18313__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._bind[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5351__auto__.call(null, _,f));
} else {
var m__5349__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5349__auto__.call(null, _,f));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
var G__18313__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._bind[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5351__auto__.call(null, _,f,executor));
} else {
var m__5349__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5349__auto__.call(null, _,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
G__18313 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__18313__2.call(this,_,f);
case 3:
return G__18313__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18313.cljs$core$IFn$_invoke$arity$2 = G__18313__2;
G__18313.cljs$core$IFn$_invoke$arity$3 = G__18313__3;
return G__18313;
})()
;
/**
 * Apply function to a computation and flatten.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__18101 = arguments.length;
switch (G__18101) {
case 2:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_bind$dyn_18312(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_18312(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_map$dyn_18330 = (function() {
var G__18331 = null;
var G__18331__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._map[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5351__auto__.call(null, _,f));
} else {
var m__5349__auto__ = (promesa.protocols._map["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5349__auto__.call(null, _,f));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
var G__18331__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._map[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5351__auto__.call(null, _,f,executor));
} else {
var m__5349__auto__ = (promesa.protocols._map["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5349__auto__.call(null, _,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
G__18331 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__18331__2.call(this,_,f);
case 3:
return G__18331__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18331.cljs$core$IFn$_invoke$arity$2 = G__18331__2;
G__18331.cljs$core$IFn$_invoke$arity$3 = G__18331__3;
return G__18331;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__18113 = arguments.length;
switch (G__18113) {
case 2:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_map$dyn_18330(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_18330(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_catch$dyn_18333 = (function() {
var G__18334 = null;
var G__18334__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._catch[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5351__auto__.call(null, _,f));
} else {
var m__5349__auto__ = (promesa.protocols._catch["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5349__auto__.call(null, _,f));
} else {
throw cljs.core.missing_protocol("IPromise.-catch",_);
}
}
});
var G__18334__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._catch[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5351__auto__.call(null, _,f,executor));
} else {
var m__5349__auto__ = (promesa.protocols._catch["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5349__auto__.call(null, _,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-catch",_);
}
}
});
G__18334 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__18334__2.call(this,_,f);
case 3:
return G__18334__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18334.cljs$core$IFn$_invoke$arity$2 = G__18334__2;
G__18334.cljs$core$IFn$_invoke$arity$3 = G__18334__3;
return G__18334;
})()
;
/**
 * Apply function to a failed computation. and flatten if promise found.
 */
promesa.protocols._catch = (function promesa$protocols$_catch(var_args){
var G__18124 = arguments.length;
switch (G__18124) {
case 2:
return promesa.protocols._catch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._catch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._catch.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_catch$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_catch$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_catch$dyn_18333(_,f);
}
}));

(promesa.protocols._catch.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_catch$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_catch$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_catch$dyn_18333(_,f,executor);
}
}));

(promesa.protocols._catch.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_18342 = (function() {
var G__18343 = null;
var G__18343__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._handle[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5351__auto__.call(null, _,f));
} else {
var m__5349__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5349__auto__.call(null, _,f));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
var G__18343__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._handle[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5351__auto__.call(null, _,f,executor));
} else {
var m__5349__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5349__auto__.call(null, _,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
G__18343 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__18343__2.call(this,_,f);
case 3:
return G__18343__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18343.cljs$core$IFn$_invoke$arity$2 = G__18343__2;
G__18343.cljs$core$IFn$_invoke$arity$3 = G__18343__3;
return G__18343;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful and flatten if promise found.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__18135 = arguments.length;
switch (G__18135) {
case 2:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_handle$dyn_18342(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_18342(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_finally$dyn_18358 = (function() {
var G__18359 = null;
var G__18359__2 = (function (_,f){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._finally[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5351__auto__.call(null, _,f));
} else {
var m__5349__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5349__auto__.call(null, _,f));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
var G__18359__3 = (function (_,f,executor){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._finally[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5351__auto__.call(null, _,f,executor));
} else {
var m__5349__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5349__auto__.call(null, _,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
G__18359 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__18359__2.call(this,_,f);
case 3:
return G__18359__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18359.cljs$core$IFn$_invoke$arity$2 = G__18359__2;
G__18359.cljs$core$IFn$_invoke$arity$3 = G__18359__3;
return G__18359;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__18147 = arguments.length;
switch (G__18147) {
case 2:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_finally$dyn_18358(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_18358(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_18370 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._promise[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._promise["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IPromiseFactory.-promise",_);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return _.promesa$protocols$IPromiseFactory$_promise$arity$1(_);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_18370(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_18373 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancel!",_);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_18373(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_18377 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancelled?",_);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_18377(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_18378 = (function (_,v){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5351__auto__.call(null, _,v));
} else {
var m__5349__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5349__auto__.call(null, _,v));
} else {
throw cljs.core.missing_protocol("ICompletable.-resolve!",_);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(_,v){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(_,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_18378(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_18380 = (function (_,e){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5351__auto__.call(null, _,e));
} else {
var m__5349__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5349__auto__.call(null, _,e));
} else {
throw cljs.core.missing_protocol("ICompletable.-reject!",_);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(_,e){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_reject_BANG_$arity$2(_,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_18380(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_18382 = (function (_,task){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5351__auto__.call(null, _,task));
} else {
var m__5349__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5349__auto__.call(null, _,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-run!",_);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._run_BANG_ = (function promesa$protocols$_run_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_run_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_run_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_run_BANG_$dyn_18382(_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_18386 = (function (_,task){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5351__auto__.call(null, _,task));
} else {
var m__5349__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5349__auto__.call(null, _,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-submit!",_);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_submit_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_18386(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_18387 = (function (_,ms,func){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__5351__auto__.call(null, _,ms,func));
} else {
var m__5349__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__5349__auto__.call(null, _,ms,func));
} else {
throw cljs.core.missing_protocol("IScheduler.-schedule!",_);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(_,ms,func){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(_,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_18387(_,ms,func);
}
});


/**
 * An experimental semaphore protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ISemaphore = function(){};

var promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_18388 = (function() {
var G__18389 = null;
var G__18389__1 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISemaphore.-try-acquire!",_);
}
}
});
var G__18389__2 = (function (_,n){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5351__auto__.call(null, _,n));
} else {
var m__5349__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5349__auto__.call(null, _,n));
} else {
throw cljs.core.missing_protocol("ISemaphore.-try-acquire!",_);
}
}
});
G__18389 = function(_,n){
switch(arguments.length){
case 1:
return G__18389__1.call(this,_);
case 2:
return G__18389__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18389.cljs$core$IFn$_invoke$arity$1 = G__18389__1;
G__18389.cljs$core$IFn$_invoke$arity$2 = G__18389__2;
return G__18389;
})()
;
/**
 * Try acquire 1 or n permits; not blocking operation
 */
promesa.protocols._try_acquire_BANG_ = (function promesa$protocols$_try_acquire_BANG_(var_args){
var G__18194 = arguments.length;
switch (G__18194) {
case 1:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$1(_);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_18388(_);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_18388(_,n);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_acquire_BANG_$dyn_18392 = (function() {
var G__18395 = null;
var G__18395__1 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._acquire_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._acquire_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISemaphore.-acquire!",_);
}
}
});
var G__18395__2 = (function (_,n){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._acquire_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5351__auto__.call(null, _,n));
} else {
var m__5349__auto__ = (promesa.protocols._acquire_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5349__auto__.call(null, _,n));
} else {
throw cljs.core.missing_protocol("ISemaphore.-acquire!",_);
}
}
});
G__18395 = function(_,n){
switch(arguments.length){
case 1:
return G__18395__1.call(this,_);
case 2:
return G__18395__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18395.cljs$core$IFn$_invoke$arity$1 = G__18395__1;
G__18395.cljs$core$IFn$_invoke$arity$2 = G__18395__2;
return G__18395;
})()
;
/**
 * Acquire 1 or N permits
 */
promesa.protocols._acquire_BANG_ = (function promesa$protocols$_acquire_BANG_(var_args){
var G__18216 = arguments.length;
switch (G__18216) {
case 1:
return promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_acquire_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ISemaphore$_acquire_BANG_$arity$1(_);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_18392(_);
}
}));

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_18392(_,n);
}
}));

(promesa.protocols._acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_release_BANG_$dyn_18411 = (function() {
var G__18412 = null;
var G__18412__1 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._release_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._release_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISemaphore.-release!",_);
}
}
});
var G__18412__2 = (function (_,n){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._release_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5351__auto__.call(null, _,n));
} else {
var m__5349__auto__ = (promesa.protocols._release_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5349__auto__.call(null, _,n));
} else {
throw cljs.core.missing_protocol("ISemaphore.-release!",_);
}
}
});
G__18412 = function(_,n){
switch(arguments.length){
case 1:
return G__18412__1.call(this,_);
case 2:
return G__18412__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18412.cljs$core$IFn$_invoke$arity$1 = G__18412__1;
G__18412.cljs$core$IFn$_invoke$arity$2 = G__18412__2;
return G__18412;
})()
;
/**
 * Release 1 or N permits
 */
promesa.protocols._release_BANG_ = (function promesa$protocols$_release_BANG_(var_args){
var G__18242 = arguments.length;
switch (G__18242) {
case 1:
return promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_release_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ISemaphore$_release_BANG_$arity$1(_);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_18411(_);
}
}));

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_release_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_release_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_18411(_,n);
}
}));

(promesa.protocols._release_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * An experimental lock protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ILock = function(){};

var promesa$protocols$ILock$_lock_BANG_$dyn_18415 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._lock_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._lock_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ILock.-lock!",_);
}
}
});
promesa.protocols._lock_BANG_ = (function promesa$protocols$_lock_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ILock$_lock_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ILock$_lock_BANG_$arity$1(_);
} else {
return promesa$protocols$ILock$_lock_BANG_$dyn_18415(_);
}
});

var promesa$protocols$ILock$_unlock_BANG_$dyn_18416 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._unlock_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._unlock_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ILock.-unlock!",_);
}
}
});
promesa.protocols._unlock_BANG_ = (function promesa$protocols$_unlock_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ILock$_unlock_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ILock$_unlock_BANG_$arity$1(_);
} else {
return promesa$protocols$ILock$_unlock_BANG_$dyn_18416(_);
}
});


/**
 * @interface
 */
promesa.protocols.IReadChannel = function(){};

var promesa$protocols$IReadChannel$_take_BANG_$dyn_18417 = (function (_,handler){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._take_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,handler) : m__5351__auto__.call(null, _,handler));
} else {
var m__5349__auto__ = (promesa.protocols._take_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,handler) : m__5349__auto__.call(null, _,handler));
} else {
throw cljs.core.missing_protocol("IReadChannel.-take!",_);
}
}
});
promesa.protocols._take_BANG_ = (function promesa$protocols$_take_BANG_(_,handler){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IReadChannel$_take_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IReadChannel$_take_BANG_$arity$2(_,handler);
} else {
return promesa$protocols$IReadChannel$_take_BANG_$dyn_18417(_,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IWriteChannel = function(){};

var promesa$protocols$IWriteChannel$_put_BANG_$dyn_18418 = (function (_,val,handler){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._put_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,val,handler) : m__5351__auto__.call(null, _,val,handler));
} else {
var m__5349__auto__ = (promesa.protocols._put_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,val,handler) : m__5349__auto__.call(null, _,val,handler));
} else {
throw cljs.core.missing_protocol("IWriteChannel.-put!",_);
}
}
});
promesa.protocols._put_BANG_ = (function promesa$protocols$_put_BANG_(_,val,handler){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IWriteChannel$_put_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IWriteChannel$_put_BANG_$arity$3(_,val,handler);
} else {
return promesa$protocols$IWriteChannel$_put_BANG_$dyn_18418(_,val,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelInternal = function(){};

var promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_18421 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._cleanup_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._cleanup_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IChannelInternal.-cleanup!",_);
}
}
});
promesa.protocols._cleanup_BANG_ = (function promesa$protocols$_cleanup_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IChannelInternal$_cleanup_BANG_$arity$1 == null)))))){
return _.promesa$protocols$IChannelInternal$_cleanup_BANG_$arity$1(_);
} else {
return promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_18421(_);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelMultiplexer = function(){};

var promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_18422 = (function (_,ch,close_QMARK_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._tap_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,ch,close_QMARK_) : m__5351__auto__.call(null, _,ch,close_QMARK_));
} else {
var m__5349__auto__ = (promesa.protocols._tap_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,ch,close_QMARK_) : m__5349__auto__.call(null, _,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("IChannelMultiplexer.-tap!",_);
}
}
});
promesa.protocols._tap_BANG_ = (function promesa$protocols$_tap_BANG_(_,ch,close_QMARK_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IChannelMultiplexer$_tap_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IChannelMultiplexer$_tap_BANG_$arity$3(_,ch,close_QMARK_);
} else {
return promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_18422(_,ch,close_QMARK_);
}
});

var promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_18423 = (function (_,ch){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._untap_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,ch) : m__5351__auto__.call(null, _,ch));
} else {
var m__5349__auto__ = (promesa.protocols._untap_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,ch) : m__5349__auto__.call(null, _,ch));
} else {
throw cljs.core.missing_protocol("IChannelMultiplexer.-untap!",_);
}
}
});
promesa.protocols._untap_BANG_ = (function promesa$protocols$_untap_BANG_(_,ch){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IChannelMultiplexer$_untap_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IChannelMultiplexer$_untap_BANG_$arity$2(_,ch);
} else {
return promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_18423(_,ch);
}
});


/**
 * @interface
 */
promesa.protocols.ICloseable = function(){};

var promesa$protocols$ICloseable$_closed_QMARK_$dyn_18424 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._closed_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._closed_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ICloseable.-closed?",_);
}
}
});
promesa.protocols._closed_QMARK_ = (function promesa$protocols$_closed_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICloseable$_closed_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICloseable$_closed_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICloseable$_closed_QMARK_$dyn_18424(_);
}
});

var promesa$protocols$ICloseable$_close_BANG_$dyn_18425 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._close_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._close_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ICloseable.-close!",_);
}
}
});
promesa.protocols._close_BANG_ = (function promesa$protocols$_close_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICloseable$_close_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICloseable$_close_BANG_$arity$1(_);
} else {
return promesa$protocols$ICloseable$_close_BANG_$dyn_18425(_);
}
});


/**
 * @interface
 */
promesa.protocols.IBuffer = function(){};

var promesa$protocols$IBuffer$_full_QMARK_$dyn_18427 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._full_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._full_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IBuffer.-full?",_);
}
}
});
promesa.protocols._full_QMARK_ = (function promesa$protocols$_full_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IBuffer$_full_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IBuffer$_full_QMARK_$arity$1(_);
} else {
return promesa$protocols$IBuffer$_full_QMARK_$dyn_18427(_);
}
});

var promesa$protocols$IBuffer$_poll_BANG_$dyn_18429 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._poll_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._poll_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IBuffer.-poll!",_);
}
}
});
promesa.protocols._poll_BANG_ = (function promesa$protocols$_poll_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IBuffer$_poll_BANG_$arity$1 == null)))))){
return _.promesa$protocols$IBuffer$_poll_BANG_$arity$1(_);
} else {
return promesa$protocols$IBuffer$_poll_BANG_$dyn_18429(_);
}
});

var promesa$protocols$IBuffer$_offer_BANG_$dyn_18430 = (function (_,val){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._offer_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__5351__auto__.call(null, _,val));
} else {
var m__5349__auto__ = (promesa.protocols._offer_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,val) : m__5349__auto__.call(null, _,val));
} else {
throw cljs.core.missing_protocol("IBuffer.-offer!",_);
}
}
});
promesa.protocols._offer_BANG_ = (function promesa$protocols$_offer_BANG_(_,val){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IBuffer$_offer_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IBuffer$_offer_BANG_$arity$2(_,val);
} else {
return promesa$protocols$IBuffer$_offer_BANG_$dyn_18430(_,val);
}
});

var promesa$protocols$IBuffer$_size$dyn_18433 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._size[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._size["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IBuffer.-size",_);
}
}
});
promesa.protocols._size = (function promesa$protocols$_size(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IBuffer$_size$arity$1 == null)))))){
return _.promesa$protocols$IBuffer$_size$arity$1(_);
} else {
return promesa$protocols$IBuffer$_size$dyn_18433(_);
}
});


/**
 * @interface
 */
promesa.protocols.IHandler = function(){};

var promesa$protocols$IHandler$_active_QMARK_$dyn_18434 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._active_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._active_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IHandler.-active?",_);
}
}
});
promesa.protocols._active_QMARK_ = (function promesa$protocols$_active_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IHandler$_active_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IHandler$_active_QMARK_$arity$1(_);
} else {
return promesa$protocols$IHandler$_active_QMARK_$dyn_18434(_);
}
});

var promesa$protocols$IHandler$_commit_BANG_$dyn_18436 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._commit_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._commit_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IHandler.-commit!",_);
}
}
});
promesa.protocols._commit_BANG_ = (function promesa$protocols$_commit_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IHandler$_commit_BANG_$arity$1 == null)))))){
return _.promesa$protocols$IHandler$_commit_BANG_$arity$1(_);
} else {
return promesa$protocols$IHandler$_commit_BANG_$dyn_18436(_);
}
});

var promesa$protocols$IHandler$_blockable_QMARK_$dyn_18437 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (promesa.protocols._blockable_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (promesa.protocols._blockable_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IHandler.-blockable?",_);
}
}
});
promesa.protocols._blockable_QMARK_ = (function promesa$protocols$_blockable_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IHandler$_blockable_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IHandler$_blockable_QMARK_$arity$1(_);
} else {
return promesa$protocols$IHandler$_blockable_QMARK_$dyn_18437(_);
}
});


//# sourceMappingURL=promesa.protocols.js.map

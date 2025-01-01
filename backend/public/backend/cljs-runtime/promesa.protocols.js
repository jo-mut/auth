goog.provide('promesa.protocols');

/**
 * A promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_bind$dyn_10718 = (function() {
var G__10719 = null;
var G__10719__2 = (function (_,f){
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
var G__10719__3 = (function (_,f,executor){
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
G__10719 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__10719__2.call(this,_,f);
case 3:
return G__10719__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10719.cljs$core$IFn$_invoke$arity$2 = G__10719__2;
G__10719.cljs$core$IFn$_invoke$arity$3 = G__10719__3;
return G__10719;
})()
;
/**
 * Apply function to a computation and flatten.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__10650 = arguments.length;
switch (G__10650) {
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
return promesa$protocols$IPromise$_bind$dyn_10718(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_10718(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_map$dyn_10724 = (function() {
var G__10725 = null;
var G__10725__2 = (function (_,f){
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
var G__10725__3 = (function (_,f,executor){
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
G__10725 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__10725__2.call(this,_,f);
case 3:
return G__10725__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10725.cljs$core$IFn$_invoke$arity$2 = G__10725__2;
G__10725.cljs$core$IFn$_invoke$arity$3 = G__10725__3;
return G__10725;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__10685 = arguments.length;
switch (G__10685) {
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
return promesa$protocols$IPromise$_map$dyn_10724(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_10724(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_catch$dyn_10727 = (function() {
var G__10728 = null;
var G__10728__2 = (function (_,f){
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
var G__10728__3 = (function (_,f,executor){
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
G__10728 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__10728__2.call(this,_,f);
case 3:
return G__10728__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10728.cljs$core$IFn$_invoke$arity$2 = G__10728__2;
G__10728.cljs$core$IFn$_invoke$arity$3 = G__10728__3;
return G__10728;
})()
;
/**
 * Apply function to a failed computation. and flatten if promise found.
 */
promesa.protocols._catch = (function promesa$protocols$_catch(var_args){
var G__10687 = arguments.length;
switch (G__10687) {
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
return promesa$protocols$IPromise$_catch$dyn_10727(_,f);
}
}));

(promesa.protocols._catch.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_catch$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_catch$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_catch$dyn_10727(_,f,executor);
}
}));

(promesa.protocols._catch.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_10730 = (function() {
var G__10731 = null;
var G__10731__2 = (function (_,f){
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
var G__10731__3 = (function (_,f,executor){
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
G__10731 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__10731__2.call(this,_,f);
case 3:
return G__10731__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10731.cljs$core$IFn$_invoke$arity$2 = G__10731__2;
G__10731.cljs$core$IFn$_invoke$arity$3 = G__10731__3;
return G__10731;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful and flatten if promise found.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__10689 = arguments.length;
switch (G__10689) {
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
return promesa$protocols$IPromise$_handle$dyn_10730(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_10730(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_finally$dyn_10733 = (function() {
var G__10734 = null;
var G__10734__2 = (function (_,f){
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
var G__10734__3 = (function (_,f,executor){
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
G__10734 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__10734__2.call(this,_,f);
case 3:
return G__10734__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10734.cljs$core$IFn$_invoke$arity$2 = G__10734__2;
G__10734.cljs$core$IFn$_invoke$arity$3 = G__10734__3;
return G__10734;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__10691 = arguments.length;
switch (G__10691) {
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
return promesa$protocols$IPromise$_finally$dyn_10733(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_10733(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_10736 = (function (_){
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
return promesa$protocols$IPromiseFactory$_promise$dyn_10736(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_10737 = (function (_){
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
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_10737(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_10738 = (function (_){
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
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_10738(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_10739 = (function (_,v){
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
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_10739(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_10740 = (function (_,e){
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
return promesa$protocols$ICompletable$_reject_BANG_$dyn_10740(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_10742 = (function (_,task){
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
return promesa$protocols$IExecutor$_run_BANG_$dyn_10742(_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_10743 = (function (_,task){
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
return promesa$protocols$IExecutor$_submit_BANG_$dyn_10743(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_10746 = (function (_,ms,func){
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
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_10746(_,ms,func);
}
});


/**
 * An experimental semaphore protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ISemaphore = function(){};

var promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_10747 = (function() {
var G__10748 = null;
var G__10748__1 = (function (_){
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
var G__10748__2 = (function (_,n){
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
G__10748 = function(_,n){
switch(arguments.length){
case 1:
return G__10748__1.call(this,_);
case 2:
return G__10748__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10748.cljs$core$IFn$_invoke$arity$1 = G__10748__1;
G__10748.cljs$core$IFn$_invoke$arity$2 = G__10748__2;
return G__10748;
})()
;
/**
 * Try acquire 1 or n permits; not blocking operation
 */
promesa.protocols._try_acquire_BANG_ = (function promesa$protocols$_try_acquire_BANG_(var_args){
var G__10713 = arguments.length;
switch (G__10713) {
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
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_10747(_);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_10747(_,n);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_acquire_BANG_$dyn_10753 = (function() {
var G__10754 = null;
var G__10754__1 = (function (_){
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
var G__10754__2 = (function (_,n){
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
G__10754 = function(_,n){
switch(arguments.length){
case 1:
return G__10754__1.call(this,_);
case 2:
return G__10754__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10754.cljs$core$IFn$_invoke$arity$1 = G__10754__1;
G__10754.cljs$core$IFn$_invoke$arity$2 = G__10754__2;
return G__10754;
})()
;
/**
 * Acquire 1 or N permits
 */
promesa.protocols._acquire_BANG_ = (function promesa$protocols$_acquire_BANG_(var_args){
var G__10715 = arguments.length;
switch (G__10715) {
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
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_10753(_);
}
}));

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_10753(_,n);
}
}));

(promesa.protocols._acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_release_BANG_$dyn_10756 = (function() {
var G__10757 = null;
var G__10757__1 = (function (_){
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
var G__10757__2 = (function (_,n){
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
G__10757 = function(_,n){
switch(arguments.length){
case 1:
return G__10757__1.call(this,_);
case 2:
return G__10757__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10757.cljs$core$IFn$_invoke$arity$1 = G__10757__1;
G__10757.cljs$core$IFn$_invoke$arity$2 = G__10757__2;
return G__10757;
})()
;
/**
 * Release 1 or N permits
 */
promesa.protocols._release_BANG_ = (function promesa$protocols$_release_BANG_(var_args){
var G__10717 = arguments.length;
switch (G__10717) {
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
return promesa$protocols$ISemaphore$_release_BANG_$dyn_10756(_);
}
}));

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_release_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_release_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_10756(_,n);
}
}));

(promesa.protocols._release_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * An experimental lock protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ILock = function(){};

var promesa$protocols$ILock$_lock_BANG_$dyn_10762 = (function (_){
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
return promesa$protocols$ILock$_lock_BANG_$dyn_10762(_);
}
});

var promesa$protocols$ILock$_unlock_BANG_$dyn_10763 = (function (_){
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
return promesa$protocols$ILock$_unlock_BANG_$dyn_10763(_);
}
});


/**
 * @interface
 */
promesa.protocols.IReadChannel = function(){};

var promesa$protocols$IReadChannel$_take_BANG_$dyn_10764 = (function (_,handler){
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
return promesa$protocols$IReadChannel$_take_BANG_$dyn_10764(_,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IWriteChannel = function(){};

var promesa$protocols$IWriteChannel$_put_BANG_$dyn_10765 = (function (_,val,handler){
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
return promesa$protocols$IWriteChannel$_put_BANG_$dyn_10765(_,val,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelInternal = function(){};

var promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_10766 = (function (_){
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
return promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_10766(_);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelMultiplexer = function(){};

var promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_10767 = (function (_,ch,close_QMARK_){
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
return promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_10767(_,ch,close_QMARK_);
}
});

var promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_10769 = (function (_,ch){
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
return promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_10769(_,ch);
}
});


/**
 * @interface
 */
promesa.protocols.ICloseable = function(){};

var promesa$protocols$ICloseable$_closed_QMARK_$dyn_10770 = (function (_){
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
return promesa$protocols$ICloseable$_closed_QMARK_$dyn_10770(_);
}
});

var promesa$protocols$ICloseable$_close_BANG_$dyn_10771 = (function (_){
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
return promesa$protocols$ICloseable$_close_BANG_$dyn_10771(_);
}
});


/**
 * @interface
 */
promesa.protocols.IBuffer = function(){};

var promesa$protocols$IBuffer$_full_QMARK_$dyn_10774 = (function (_){
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
return promesa$protocols$IBuffer$_full_QMARK_$dyn_10774(_);
}
});

var promesa$protocols$IBuffer$_poll_BANG_$dyn_10775 = (function (_){
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
return promesa$protocols$IBuffer$_poll_BANG_$dyn_10775(_);
}
});

var promesa$protocols$IBuffer$_offer_BANG_$dyn_10776 = (function (_,val){
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
return promesa$protocols$IBuffer$_offer_BANG_$dyn_10776(_,val);
}
});

var promesa$protocols$IBuffer$_size$dyn_10777 = (function (_){
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
return promesa$protocols$IBuffer$_size$dyn_10777(_);
}
});


/**
 * @interface
 */
promesa.protocols.IHandler = function(){};

var promesa$protocols$IHandler$_active_QMARK_$dyn_10781 = (function (_){
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
return promesa$protocols$IHandler$_active_QMARK_$dyn_10781(_);
}
});

var promesa$protocols$IHandler$_commit_BANG_$dyn_10782 = (function (_){
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
return promesa$protocols$IHandler$_commit_BANG_$dyn_10782(_);
}
});

var promesa$protocols$IHandler$_blockable_QMARK_$dyn_10783 = (function (_){
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
return promesa$protocols$IHandler$_blockable_QMARK_$dyn_10783(_);
}
});


//# sourceMappingURL=promesa.protocols.js.map

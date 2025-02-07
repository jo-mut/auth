goog.provide('promesa.protocols');

/**
 * A promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_bind$dyn_12184 = (function() {
var G__12185 = null;
var G__12185__2 = (function (_,f){
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
var G__12185__3 = (function (_,f,executor){
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
G__12185 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__12185__2.call(this,_,f);
case 3:
return G__12185__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12185.cljs$core$IFn$_invoke$arity$2 = G__12185__2;
G__12185.cljs$core$IFn$_invoke$arity$3 = G__12185__3;
return G__12185;
})()
;
/**
 * Apply function to a computation and flatten.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__12169 = arguments.length;
switch (G__12169) {
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
return promesa$protocols$IPromise$_bind$dyn_12184(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_12184(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_map$dyn_12187 = (function() {
var G__12188 = null;
var G__12188__2 = (function (_,f){
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
var G__12188__3 = (function (_,f,executor){
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
G__12188 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__12188__2.call(this,_,f);
case 3:
return G__12188__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12188.cljs$core$IFn$_invoke$arity$2 = G__12188__2;
G__12188.cljs$core$IFn$_invoke$arity$3 = G__12188__3;
return G__12188;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__12171 = arguments.length;
switch (G__12171) {
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
return promesa$protocols$IPromise$_map$dyn_12187(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_12187(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_catch$dyn_12190 = (function() {
var G__12191 = null;
var G__12191__2 = (function (_,f){
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
var G__12191__3 = (function (_,f,executor){
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
G__12191 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__12191__2.call(this,_,f);
case 3:
return G__12191__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12191.cljs$core$IFn$_invoke$arity$2 = G__12191__2;
G__12191.cljs$core$IFn$_invoke$arity$3 = G__12191__3;
return G__12191;
})()
;
/**
 * Apply function to a failed computation. and flatten if promise found.
 */
promesa.protocols._catch = (function promesa$protocols$_catch(var_args){
var G__12173 = arguments.length;
switch (G__12173) {
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
return promesa$protocols$IPromise$_catch$dyn_12190(_,f);
}
}));

(promesa.protocols._catch.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_catch$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_catch$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_catch$dyn_12190(_,f,executor);
}
}));

(promesa.protocols._catch.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_12193 = (function() {
var G__12194 = null;
var G__12194__2 = (function (_,f){
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
var G__12194__3 = (function (_,f,executor){
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
G__12194 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__12194__2.call(this,_,f);
case 3:
return G__12194__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12194.cljs$core$IFn$_invoke$arity$2 = G__12194__2;
G__12194.cljs$core$IFn$_invoke$arity$3 = G__12194__3;
return G__12194;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful and flatten if promise found.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__12175 = arguments.length;
switch (G__12175) {
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
return promesa$protocols$IPromise$_handle$dyn_12193(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_12193(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_finally$dyn_12199 = (function() {
var G__12200 = null;
var G__12200__2 = (function (_,f){
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
var G__12200__3 = (function (_,f,executor){
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
G__12200 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__12200__2.call(this,_,f);
case 3:
return G__12200__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12200.cljs$core$IFn$_invoke$arity$2 = G__12200__2;
G__12200.cljs$core$IFn$_invoke$arity$3 = G__12200__3;
return G__12200;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__12177 = arguments.length;
switch (G__12177) {
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
return promesa$protocols$IPromise$_finally$dyn_12199(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_12199(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_12202 = (function (_){
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
return promesa$protocols$IPromiseFactory$_promise$dyn_12202(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_12203 = (function (_){
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
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_12203(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_12204 = (function (_){
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
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_12204(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_12205 = (function (_,v){
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
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_12205(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_12206 = (function (_,e){
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
return promesa$protocols$ICompletable$_reject_BANG_$dyn_12206(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_12207 = (function (_,task){
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
return promesa$protocols$IExecutor$_run_BANG_$dyn_12207(_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_12208 = (function (_,task){
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
return promesa$protocols$IExecutor$_submit_BANG_$dyn_12208(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_12209 = (function (_,ms,func){
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
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_12209(_,ms,func);
}
});


/**
 * An experimental semaphore protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ISemaphore = function(){};

var promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_12210 = (function() {
var G__12211 = null;
var G__12211__1 = (function (_){
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
var G__12211__2 = (function (_,n){
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
G__12211 = function(_,n){
switch(arguments.length){
case 1:
return G__12211__1.call(this,_);
case 2:
return G__12211__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12211.cljs$core$IFn$_invoke$arity$1 = G__12211__1;
G__12211.cljs$core$IFn$_invoke$arity$2 = G__12211__2;
return G__12211;
})()
;
/**
 * Try acquire 1 or n permits; not blocking operation
 */
promesa.protocols._try_acquire_BANG_ = (function promesa$protocols$_try_acquire_BANG_(var_args){
var G__12179 = arguments.length;
switch (G__12179) {
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
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_12210(_);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_12210(_,n);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_acquire_BANG_$dyn_12213 = (function() {
var G__12214 = null;
var G__12214__1 = (function (_){
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
var G__12214__2 = (function (_,n){
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
G__12214 = function(_,n){
switch(arguments.length){
case 1:
return G__12214__1.call(this,_);
case 2:
return G__12214__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12214.cljs$core$IFn$_invoke$arity$1 = G__12214__1;
G__12214.cljs$core$IFn$_invoke$arity$2 = G__12214__2;
return G__12214;
})()
;
/**
 * Acquire 1 or N permits
 */
promesa.protocols._acquire_BANG_ = (function promesa$protocols$_acquire_BANG_(var_args){
var G__12181 = arguments.length;
switch (G__12181) {
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
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_12213(_);
}
}));

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_12213(_,n);
}
}));

(promesa.protocols._acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_release_BANG_$dyn_12217 = (function() {
var G__12218 = null;
var G__12218__1 = (function (_){
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
var G__12218__2 = (function (_,n){
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
G__12218 = function(_,n){
switch(arguments.length){
case 1:
return G__12218__1.call(this,_);
case 2:
return G__12218__2.call(this,_,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12218.cljs$core$IFn$_invoke$arity$1 = G__12218__1;
G__12218.cljs$core$IFn$_invoke$arity$2 = G__12218__2;
return G__12218;
})()
;
/**
 * Release 1 or N permits
 */
promesa.protocols._release_BANG_ = (function promesa$protocols$_release_BANG_(var_args){
var G__12183 = arguments.length;
switch (G__12183) {
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
return promesa$protocols$ISemaphore$_release_BANG_$dyn_12217(_);
}
}));

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,n){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ISemaphore$_release_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ISemaphore$_release_BANG_$arity$2(_,n);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_12217(_,n);
}
}));

(promesa.protocols._release_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * An experimental lock protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ILock = function(){};

var promesa$protocols$ILock$_lock_BANG_$dyn_12222 = (function (_){
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
return promesa$protocols$ILock$_lock_BANG_$dyn_12222(_);
}
});

var promesa$protocols$ILock$_unlock_BANG_$dyn_12223 = (function (_){
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
return promesa$protocols$ILock$_unlock_BANG_$dyn_12223(_);
}
});


/**
 * @interface
 */
promesa.protocols.IReadChannel = function(){};

var promesa$protocols$IReadChannel$_take_BANG_$dyn_12224 = (function (_,handler){
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
return promesa$protocols$IReadChannel$_take_BANG_$dyn_12224(_,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IWriteChannel = function(){};

var promesa$protocols$IWriteChannel$_put_BANG_$dyn_12226 = (function (_,val,handler){
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
return promesa$protocols$IWriteChannel$_put_BANG_$dyn_12226(_,val,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelInternal = function(){};

var promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_12227 = (function (_){
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
return promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_12227(_);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelMultiplexer = function(){};

var promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_12230 = (function (_,ch,close_QMARK_){
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
return promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_12230(_,ch,close_QMARK_);
}
});

var promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_12231 = (function (_,ch){
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
return promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_12231(_,ch);
}
});


/**
 * @interface
 */
promesa.protocols.ICloseable = function(){};

var promesa$protocols$ICloseable$_closed_QMARK_$dyn_12232 = (function (_){
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
return promesa$protocols$ICloseable$_closed_QMARK_$dyn_12232(_);
}
});

var promesa$protocols$ICloseable$_close_BANG_$dyn_12233 = (function (_){
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
return promesa$protocols$ICloseable$_close_BANG_$dyn_12233(_);
}
});


/**
 * @interface
 */
promesa.protocols.IBuffer = function(){};

var promesa$protocols$IBuffer$_full_QMARK_$dyn_12236 = (function (_){
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
return promesa$protocols$IBuffer$_full_QMARK_$dyn_12236(_);
}
});

var promesa$protocols$IBuffer$_poll_BANG_$dyn_12237 = (function (_){
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
return promesa$protocols$IBuffer$_poll_BANG_$dyn_12237(_);
}
});

var promesa$protocols$IBuffer$_offer_BANG_$dyn_12239 = (function (_,val){
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
return promesa$protocols$IBuffer$_offer_BANG_$dyn_12239(_,val);
}
});

var promesa$protocols$IBuffer$_size$dyn_12241 = (function (_){
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
return promesa$protocols$IBuffer$_size$dyn_12241(_);
}
});


/**
 * @interface
 */
promesa.protocols.IHandler = function(){};

var promesa$protocols$IHandler$_active_QMARK_$dyn_12242 = (function (_){
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
return promesa$protocols$IHandler$_active_QMARK_$dyn_12242(_);
}
});

var promesa$protocols$IHandler$_commit_BANG_$dyn_12245 = (function (_){
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
return promesa$protocols$IHandler$_commit_BANG_$dyn_12245(_);
}
});

var promesa$protocols$IHandler$_blockable_QMARK_$dyn_12246 = (function (_){
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
return promesa$protocols$IHandler$_blockable_QMARK_$dyn_12246(_);
}
});


//# sourceMappingURL=promesa.protocols.js.map

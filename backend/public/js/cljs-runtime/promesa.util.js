goog.provide('promesa.util');
promesa.util.has_method_QMARK_ = (function promesa$util$has_method_QMARK_(klass,name){
var methods$ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (method){
return method.getName();
})),klass.getDeclaredMethods());
return cljs.core.contains_QMARK_(methods$,name);
});
promesa.util.maybe_deref = (function promesa$util$maybe_deref(o){
if(cljs.core.delay_QMARK_(o)){
return cljs.core.deref(o);
} else {
return o;
}
});

/**
* @constructor
 * @implements {promesa.protocols.ILock}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.util.t_promesa$util18364 = (function (meta18365){
this.meta18365 = meta18365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.util.t_promesa$util18364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18366,meta18365__$1){
var self__ = this;
var _18366__$1 = this;
return (new promesa.util.t_promesa$util18364(meta18365__$1));
}));

(promesa.util.t_promesa$util18364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18366){
var self__ = this;
var _18366__$1 = this;
return self__.meta18365;
}));

(promesa.util.t_promesa$util18364.prototype.promesa$protocols$ILock$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.util.t_promesa$util18364.prototype.promesa$protocols$ILock$_lock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util18364.prototype.promesa$protocols$ILock$_unlock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util18364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18365","meta18365",2078214824,null)], null);
}));

(promesa.util.t_promesa$util18364.cljs$lang$type = true);

(promesa.util.t_promesa$util18364.cljs$lang$ctorStr = "promesa.util/t_promesa$util18364");

(promesa.util.t_promesa$util18364.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.util/t_promesa$util18364");
}));

/**
 * Positional factory function for promesa.util/t_promesa$util18364.
 */
promesa.util.__GT_t_promesa$util18364 = (function promesa$util$__GT_t_promesa$util18364(meta18365){
return (new promesa.util.t_promesa$util18364(meta18365));
});


promesa.util.mutex = (function promesa$util$mutex(){
return (new promesa.util.t_promesa$util18364(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=promesa.util.js.map

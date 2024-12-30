goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16406 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16406(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16407 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16407(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15200 = coll;
var G__15201 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15200,G__15201) : shadow.dom.lazy_native_coll_seq.call(null, G__15200,G__15201));
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
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
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
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
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
var G__15218 = arguments.length;
switch (G__15218) {
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
var G__15230 = arguments.length;
switch (G__15230) {
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
var G__15236 = arguments.length;
switch (G__15236) {
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
var G__15244 = arguments.length;
switch (G__15244) {
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
var G__15259 = arguments.length;
switch (G__15259) {
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
var G__15334 = arguments.length;
switch (G__15334) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e15351){if((e15351 instanceof Object)){
var e = e15351;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15351;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15356 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15357 = null;
var count__15358 = (0);
var i__15359 = (0);
while(true){
if((i__15359 < count__15358)){
var el = chunk__15357.cljs$core$IIndexed$_nth$arity$2(null, i__15359);
var handler_16425__$1 = ((function (seq__15356,chunk__15357,count__15358,i__15359,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15356,chunk__15357,count__15358,i__15359,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16425__$1);


var G__16429 = seq__15356;
var G__16430 = chunk__15357;
var G__16431 = count__15358;
var G__16432 = (i__15359 + (1));
seq__15356 = G__16429;
chunk__15357 = G__16430;
count__15358 = G__16431;
i__15359 = G__16432;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15356);
if(temp__5804__auto__){
var seq__15356__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15356__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15356__$1);
var G__16436 = cljs.core.chunk_rest(seq__15356__$1);
var G__16437 = c__5525__auto__;
var G__16438 = cljs.core.count(c__5525__auto__);
var G__16439 = (0);
seq__15356 = G__16436;
chunk__15357 = G__16437;
count__15358 = G__16438;
i__15359 = G__16439;
continue;
} else {
var el = cljs.core.first(seq__15356__$1);
var handler_16440__$1 = ((function (seq__15356,chunk__15357,count__15358,i__15359,el,seq__15356__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15356,chunk__15357,count__15358,i__15359,el,seq__15356__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16440__$1);


var G__16443 = cljs.core.next(seq__15356__$1);
var G__16444 = null;
var G__16445 = (0);
var G__16446 = (0);
seq__15356 = G__16443;
chunk__15357 = G__16444;
count__15358 = G__16445;
i__15359 = G__16446;
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
var G__15389 = arguments.length;
switch (G__15389) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15403 = cljs.core.seq(events);
var chunk__15404 = null;
var count__15405 = (0);
var i__15406 = (0);
while(true){
if((i__15406 < count__15405)){
var vec__15421 = chunk__15404.cljs$core$IIndexed$_nth$arity$2(null, i__15406);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16459 = seq__15403;
var G__16460 = chunk__15404;
var G__16461 = count__15405;
var G__16462 = (i__15406 + (1));
seq__15403 = G__16459;
chunk__15404 = G__16460;
count__15405 = G__16461;
i__15406 = G__16462;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15403);
if(temp__5804__auto__){
var seq__15403__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15403__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15403__$1);
var G__16464 = cljs.core.chunk_rest(seq__15403__$1);
var G__16465 = c__5525__auto__;
var G__16466 = cljs.core.count(c__5525__auto__);
var G__16467 = (0);
seq__15403 = G__16464;
chunk__15404 = G__16465;
count__15405 = G__16466;
i__15406 = G__16467;
continue;
} else {
var vec__15428 = cljs.core.first(seq__15403__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15428,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16468 = cljs.core.next(seq__15403__$1);
var G__16469 = null;
var G__16470 = (0);
var G__16471 = (0);
seq__15403 = G__16468;
chunk__15404 = G__16469;
count__15405 = G__16470;
i__15406 = G__16471;
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
var seq__15439 = cljs.core.seq(styles);
var chunk__15440 = null;
var count__15441 = (0);
var i__15442 = (0);
while(true){
if((i__15442 < count__15441)){
var vec__15460 = chunk__15440.cljs$core$IIndexed$_nth$arity$2(null, i__15442);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16481 = seq__15439;
var G__16482 = chunk__15440;
var G__16483 = count__15441;
var G__16484 = (i__15442 + (1));
seq__15439 = G__16481;
chunk__15440 = G__16482;
count__15441 = G__16483;
i__15442 = G__16484;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15439);
if(temp__5804__auto__){
var seq__15439__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15439__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15439__$1);
var G__16485 = cljs.core.chunk_rest(seq__15439__$1);
var G__16486 = c__5525__auto__;
var G__16487 = cljs.core.count(c__5525__auto__);
var G__16488 = (0);
seq__15439 = G__16485;
chunk__15440 = G__16486;
count__15441 = G__16487;
i__15442 = G__16488;
continue;
} else {
var vec__15470 = cljs.core.first(seq__15439__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15470,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16495 = cljs.core.next(seq__15439__$1);
var G__16496 = null;
var G__16497 = (0);
var G__16498 = (0);
seq__15439 = G__16495;
chunk__15440 = G__16496;
count__15441 = G__16497;
i__15442 = G__16498;
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
var G__15482_16500 = key;
var G__15482_16501__$1 = (((G__15482_16500 instanceof cljs.core.Keyword))?G__15482_16500.fqn:null);
switch (G__15482_16501__$1) {
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
var ks_16511 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16511,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16511,"aria-");
}
})())){
el.setAttribute(ks_16511,value);
} else {
(el[ks_16511] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15526){
var map__15527 = p__15526;
var map__15527__$1 = cljs.core.__destructure_map(map__15527);
var props = map__15527__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15527__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15532 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15532,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15532,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15532,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15535 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15535,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15535;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15537 = arguments.length;
switch (G__15537) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15556){
var vec__15557 = p__15556;
var seq__15558 = cljs.core.seq(vec__15557);
var first__15559 = cljs.core.first(seq__15558);
var seq__15558__$1 = cljs.core.next(seq__15558);
var nn = first__15559;
var first__15559__$1 = cljs.core.first(seq__15558__$1);
var seq__15558__$2 = cljs.core.next(seq__15558__$1);
var np = first__15559__$1;
var nc = seq__15558__$2;
var node = vec__15557;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15561 = nn;
var G__15562 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15561,G__15562) : create_fn.call(null, G__15561,G__15562));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15563 = nn;
var G__15564 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15563,G__15564) : create_fn.call(null, G__15563,G__15564));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15565 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15565,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15565,(1),null);
var seq__15568_16562 = cljs.core.seq(node_children);
var chunk__15569_16563 = null;
var count__15570_16564 = (0);
var i__15571_16565 = (0);
while(true){
if((i__15571_16565 < count__15570_16564)){
var child_struct_16566 = chunk__15569_16563.cljs$core$IIndexed$_nth$arity$2(null, i__15571_16565);
var children_16567 = shadow.dom.dom_node(child_struct_16566);
if(cljs.core.seq_QMARK_(children_16567)){
var seq__15607_16568 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16567));
var chunk__15609_16569 = null;
var count__15610_16570 = (0);
var i__15611_16571 = (0);
while(true){
if((i__15611_16571 < count__15610_16570)){
var child_16573 = chunk__15609_16569.cljs$core$IIndexed$_nth$arity$2(null, i__15611_16571);
if(cljs.core.truth_(child_16573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16573);


var G__16574 = seq__15607_16568;
var G__16575 = chunk__15609_16569;
var G__16576 = count__15610_16570;
var G__16577 = (i__15611_16571 + (1));
seq__15607_16568 = G__16574;
chunk__15609_16569 = G__16575;
count__15610_16570 = G__16576;
i__15611_16571 = G__16577;
continue;
} else {
var G__16578 = seq__15607_16568;
var G__16579 = chunk__15609_16569;
var G__16580 = count__15610_16570;
var G__16581 = (i__15611_16571 + (1));
seq__15607_16568 = G__16578;
chunk__15609_16569 = G__16579;
count__15610_16570 = G__16580;
i__15611_16571 = G__16581;
continue;
}
} else {
var temp__5804__auto___16582 = cljs.core.seq(seq__15607_16568);
if(temp__5804__auto___16582){
var seq__15607_16583__$1 = temp__5804__auto___16582;
if(cljs.core.chunked_seq_QMARK_(seq__15607_16583__$1)){
var c__5525__auto___16584 = cljs.core.chunk_first(seq__15607_16583__$1);
var G__16586 = cljs.core.chunk_rest(seq__15607_16583__$1);
var G__16587 = c__5525__auto___16584;
var G__16588 = cljs.core.count(c__5525__auto___16584);
var G__16589 = (0);
seq__15607_16568 = G__16586;
chunk__15609_16569 = G__16587;
count__15610_16570 = G__16588;
i__15611_16571 = G__16589;
continue;
} else {
var child_16591 = cljs.core.first(seq__15607_16583__$1);
if(cljs.core.truth_(child_16591)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16591);


var G__16592 = cljs.core.next(seq__15607_16583__$1);
var G__16593 = null;
var G__16594 = (0);
var G__16595 = (0);
seq__15607_16568 = G__16592;
chunk__15609_16569 = G__16593;
count__15610_16570 = G__16594;
i__15611_16571 = G__16595;
continue;
} else {
var G__16602 = cljs.core.next(seq__15607_16583__$1);
var G__16603 = null;
var G__16604 = (0);
var G__16605 = (0);
seq__15607_16568 = G__16602;
chunk__15609_16569 = G__16603;
count__15610_16570 = G__16604;
i__15611_16571 = G__16605;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16567);
}


var G__16606 = seq__15568_16562;
var G__16607 = chunk__15569_16563;
var G__16608 = count__15570_16564;
var G__16609 = (i__15571_16565 + (1));
seq__15568_16562 = G__16606;
chunk__15569_16563 = G__16607;
count__15570_16564 = G__16608;
i__15571_16565 = G__16609;
continue;
} else {
var temp__5804__auto___16610 = cljs.core.seq(seq__15568_16562);
if(temp__5804__auto___16610){
var seq__15568_16611__$1 = temp__5804__auto___16610;
if(cljs.core.chunked_seq_QMARK_(seq__15568_16611__$1)){
var c__5525__auto___16612 = cljs.core.chunk_first(seq__15568_16611__$1);
var G__16613 = cljs.core.chunk_rest(seq__15568_16611__$1);
var G__16614 = c__5525__auto___16612;
var G__16615 = cljs.core.count(c__5525__auto___16612);
var G__16616 = (0);
seq__15568_16562 = G__16613;
chunk__15569_16563 = G__16614;
count__15570_16564 = G__16615;
i__15571_16565 = G__16616;
continue;
} else {
var child_struct_16617 = cljs.core.first(seq__15568_16611__$1);
var children_16618 = shadow.dom.dom_node(child_struct_16617);
if(cljs.core.seq_QMARK_(children_16618)){
var seq__15643_16619 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16618));
var chunk__15645_16620 = null;
var count__15646_16621 = (0);
var i__15647_16622 = (0);
while(true){
if((i__15647_16622 < count__15646_16621)){
var child_16623 = chunk__15645_16620.cljs$core$IIndexed$_nth$arity$2(null, i__15647_16622);
if(cljs.core.truth_(child_16623)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16623);


var G__16624 = seq__15643_16619;
var G__16625 = chunk__15645_16620;
var G__16626 = count__15646_16621;
var G__16627 = (i__15647_16622 + (1));
seq__15643_16619 = G__16624;
chunk__15645_16620 = G__16625;
count__15646_16621 = G__16626;
i__15647_16622 = G__16627;
continue;
} else {
var G__16628 = seq__15643_16619;
var G__16629 = chunk__15645_16620;
var G__16630 = count__15646_16621;
var G__16631 = (i__15647_16622 + (1));
seq__15643_16619 = G__16628;
chunk__15645_16620 = G__16629;
count__15646_16621 = G__16630;
i__15647_16622 = G__16631;
continue;
}
} else {
var temp__5804__auto___16632__$1 = cljs.core.seq(seq__15643_16619);
if(temp__5804__auto___16632__$1){
var seq__15643_16634__$1 = temp__5804__auto___16632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15643_16634__$1)){
var c__5525__auto___16635 = cljs.core.chunk_first(seq__15643_16634__$1);
var G__16636 = cljs.core.chunk_rest(seq__15643_16634__$1);
var G__16637 = c__5525__auto___16635;
var G__16638 = cljs.core.count(c__5525__auto___16635);
var G__16639 = (0);
seq__15643_16619 = G__16636;
chunk__15645_16620 = G__16637;
count__15646_16621 = G__16638;
i__15647_16622 = G__16639;
continue;
} else {
var child_16640 = cljs.core.first(seq__15643_16634__$1);
if(cljs.core.truth_(child_16640)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16640);


var G__16642 = cljs.core.next(seq__15643_16634__$1);
var G__16643 = null;
var G__16644 = (0);
var G__16645 = (0);
seq__15643_16619 = G__16642;
chunk__15645_16620 = G__16643;
count__15646_16621 = G__16644;
i__15647_16622 = G__16645;
continue;
} else {
var G__16646 = cljs.core.next(seq__15643_16634__$1);
var G__16647 = null;
var G__16648 = (0);
var G__16649 = (0);
seq__15643_16619 = G__16646;
chunk__15645_16620 = G__16647;
count__15646_16621 = G__16648;
i__15647_16622 = G__16649;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16618);
}


var G__16650 = cljs.core.next(seq__15568_16611__$1);
var G__16651 = null;
var G__16652 = (0);
var G__16653 = (0);
seq__15568_16562 = G__16650;
chunk__15569_16563 = G__16651;
count__15570_16564 = G__16652;
i__15571_16565 = G__16653;
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
var seq__15688 = cljs.core.seq(node);
var chunk__15689 = null;
var count__15690 = (0);
var i__15691 = (0);
while(true){
if((i__15691 < count__15690)){
var n = chunk__15689.cljs$core$IIndexed$_nth$arity$2(null, i__15691);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16665 = seq__15688;
var G__16666 = chunk__15689;
var G__16667 = count__15690;
var G__16668 = (i__15691 + (1));
seq__15688 = G__16665;
chunk__15689 = G__16666;
count__15690 = G__16667;
i__15691 = G__16668;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15688);
if(temp__5804__auto__){
var seq__15688__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15688__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15688__$1);
var G__16671 = cljs.core.chunk_rest(seq__15688__$1);
var G__16672 = c__5525__auto__;
var G__16673 = cljs.core.count(c__5525__auto__);
var G__16674 = (0);
seq__15688 = G__16671;
chunk__15689 = G__16672;
count__15690 = G__16673;
i__15691 = G__16674;
continue;
} else {
var n = cljs.core.first(seq__15688__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16675 = cljs.core.next(seq__15688__$1);
var G__16676 = null;
var G__16677 = (0);
var G__16678 = (0);
seq__15688 = G__16675;
chunk__15689 = G__16676;
count__15690 = G__16677;
i__15691 = G__16678;
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
var G__15705 = arguments.length;
switch (G__15705) {
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
var G__15719 = arguments.length;
switch (G__15719) {
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
var G__15739 = arguments.length;
switch (G__15739) {
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
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___16711 = arguments.length;
var i__5727__auto___16712 = (0);
while(true){
if((i__5727__auto___16712 < len__5726__auto___16711)){
args__5732__auto__.push((arguments[i__5727__auto___16712]));

var G__16714 = (i__5727__auto___16712 + (1));
i__5727__auto___16712 = G__16714;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15771_16717 = cljs.core.seq(nodes);
var chunk__15772_16718 = null;
var count__15773_16719 = (0);
var i__15774_16720 = (0);
while(true){
if((i__15774_16720 < count__15773_16719)){
var node_16721 = chunk__15772_16718.cljs$core$IIndexed$_nth$arity$2(null, i__15774_16720);
fragment.appendChild(shadow.dom._to_dom(node_16721));


var G__16722 = seq__15771_16717;
var G__16723 = chunk__15772_16718;
var G__16724 = count__15773_16719;
var G__16725 = (i__15774_16720 + (1));
seq__15771_16717 = G__16722;
chunk__15772_16718 = G__16723;
count__15773_16719 = G__16724;
i__15774_16720 = G__16725;
continue;
} else {
var temp__5804__auto___16726 = cljs.core.seq(seq__15771_16717);
if(temp__5804__auto___16726){
var seq__15771_16728__$1 = temp__5804__auto___16726;
if(cljs.core.chunked_seq_QMARK_(seq__15771_16728__$1)){
var c__5525__auto___16730 = cljs.core.chunk_first(seq__15771_16728__$1);
var G__16732 = cljs.core.chunk_rest(seq__15771_16728__$1);
var G__16733 = c__5525__auto___16730;
var G__16734 = cljs.core.count(c__5525__auto___16730);
var G__16735 = (0);
seq__15771_16717 = G__16732;
chunk__15772_16718 = G__16733;
count__15773_16719 = G__16734;
i__15774_16720 = G__16735;
continue;
} else {
var node_16736 = cljs.core.first(seq__15771_16728__$1);
fragment.appendChild(shadow.dom._to_dom(node_16736));


var G__16737 = cljs.core.next(seq__15771_16728__$1);
var G__16738 = null;
var G__16739 = (0);
var G__16740 = (0);
seq__15771_16717 = G__16737;
chunk__15772_16718 = G__16738;
count__15773_16719 = G__16739;
i__15774_16720 = G__16740;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15755){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15755));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15807_16741 = cljs.core.seq(scripts);
var chunk__15808_16742 = null;
var count__15809_16743 = (0);
var i__15810_16744 = (0);
while(true){
if((i__15810_16744 < count__15809_16743)){
var vec__15835_16745 = chunk__15808_16742.cljs$core$IIndexed$_nth$arity$2(null, i__15810_16744);
var script_tag_16746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15835_16745,(0),null);
var script_body_16747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15835_16745,(1),null);
eval(script_body_16747);


var G__16748 = seq__15807_16741;
var G__16749 = chunk__15808_16742;
var G__16750 = count__15809_16743;
var G__16751 = (i__15810_16744 + (1));
seq__15807_16741 = G__16748;
chunk__15808_16742 = G__16749;
count__15809_16743 = G__16750;
i__15810_16744 = G__16751;
continue;
} else {
var temp__5804__auto___16752 = cljs.core.seq(seq__15807_16741);
if(temp__5804__auto___16752){
var seq__15807_16753__$1 = temp__5804__auto___16752;
if(cljs.core.chunked_seq_QMARK_(seq__15807_16753__$1)){
var c__5525__auto___16754 = cljs.core.chunk_first(seq__15807_16753__$1);
var G__16755 = cljs.core.chunk_rest(seq__15807_16753__$1);
var G__16756 = c__5525__auto___16754;
var G__16757 = cljs.core.count(c__5525__auto___16754);
var G__16758 = (0);
seq__15807_16741 = G__16755;
chunk__15808_16742 = G__16756;
count__15809_16743 = G__16757;
i__15810_16744 = G__16758;
continue;
} else {
var vec__15844_16759 = cljs.core.first(seq__15807_16753__$1);
var script_tag_16760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15844_16759,(0),null);
var script_body_16761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15844_16759,(1),null);
eval(script_body_16761);


var G__16764 = cljs.core.next(seq__15807_16753__$1);
var G__16765 = null;
var G__16766 = (0);
var G__16767 = (0);
seq__15807_16741 = G__16764;
chunk__15808_16742 = G__16765;
count__15809_16743 = G__16766;
i__15810_16744 = G__16767;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15851){
var vec__15852 = p__15851;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(1),null);
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
var G__15860 = arguments.length;
switch (G__15860) {
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
var seq__15910 = cljs.core.seq(style_keys);
var chunk__15911 = null;
var count__15912 = (0);
var i__15913 = (0);
while(true){
if((i__15913 < count__15912)){
var it = chunk__15911.cljs$core$IIndexed$_nth$arity$2(null, i__15913);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16780 = seq__15910;
var G__16781 = chunk__15911;
var G__16782 = count__15912;
var G__16783 = (i__15913 + (1));
seq__15910 = G__16780;
chunk__15911 = G__16781;
count__15912 = G__16782;
i__15913 = G__16783;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15910);
if(temp__5804__auto__){
var seq__15910__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15910__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15910__$1);
var G__16785 = cljs.core.chunk_rest(seq__15910__$1);
var G__16786 = c__5525__auto__;
var G__16787 = cljs.core.count(c__5525__auto__);
var G__16788 = (0);
seq__15910 = G__16785;
chunk__15911 = G__16786;
count__15912 = G__16787;
i__15913 = G__16788;
continue;
} else {
var it = cljs.core.first(seq__15910__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16790 = cljs.core.next(seq__15910__$1);
var G__16791 = null;
var G__16792 = (0);
var G__16793 = (0);
seq__15910 = G__16790;
chunk__15911 = G__16791;
count__15912 = G__16792;
i__15913 = G__16793;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15942,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15959 = k15942;
var G__15959__$1 = (((G__15959 instanceof cljs.core.Keyword))?G__15959.fqn:null);
switch (G__15959__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15942,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15969){
var vec__15971 = p__15969;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15971,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15971,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15941){
var self__ = this;
var G__15941__$1 = this;
return (new cljs.core.RecordIter((0),G__15941__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15943,other15944){
var self__ = this;
var this15943__$1 = this;
return (((!((other15944 == null)))) && ((((this15943__$1.constructor === other15944.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15943__$1.x,other15944.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15943__$1.y,other15944.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15943__$1.__extmap,other15944.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15942){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16010 = k15942;
var G__16010__$1 = (((G__16010 instanceof cljs.core.Keyword))?G__16010.fqn:null);
switch (G__16010__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15942);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15941){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16016 = cljs.core.keyword_identical_QMARK_;
var expr__16017 = k__5309__auto__;
if(cljs.core.truth_((pred__16016.cljs$core$IFn$_invoke$arity$2 ? pred__16016.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16017) : pred__16016.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__16017)))){
return (new shadow.dom.Coordinate(G__15941,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16016.cljs$core$IFn$_invoke$arity$2 ? pred__16016.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16017) : pred__16016.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__16017)))){
return (new shadow.dom.Coordinate(self__.x,G__15941,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15941),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15941){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15941,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15948){
var extmap__5342__auto__ = (function (){var G__16028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15948,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15948)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16028);
} else {
return G__16028;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15948),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15948),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16052,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16072 = k16052;
var G__16072__$1 = (((G__16072 instanceof cljs.core.Keyword))?G__16072.fqn:null);
switch (G__16072__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16052,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16075){
var vec__16078 = p__16075;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16078,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16078,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16051){
var self__ = this;
var G__16051__$1 = this;
return (new cljs.core.RecordIter((0),G__16051__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16053,other16054){
var self__ = this;
var this16053__$1 = this;
return (((!((other16054 == null)))) && ((((this16053__$1.constructor === other16054.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16053__$1.w,other16054.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16053__$1.h,other16054.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16053__$1.__extmap,other16054.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16052){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16119 = k16052;
var G__16119__$1 = (((G__16119 instanceof cljs.core.Keyword))?G__16119.fqn:null);
switch (G__16119__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16052);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16051){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16121 = cljs.core.keyword_identical_QMARK_;
var expr__16122 = k__5309__auto__;
if(cljs.core.truth_((pred__16121.cljs$core$IFn$_invoke$arity$2 ? pred__16121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16122) : pred__16121.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__16122)))){
return (new shadow.dom.Size(G__16051,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16121.cljs$core$IFn$_invoke$arity$2 ? pred__16121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16122) : pred__16121.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__16122)))){
return (new shadow.dom.Size(self__.w,G__16051,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16051),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16051){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16051,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16061){
var extmap__5342__auto__ = (function (){var G__16135 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16061,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16061)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16135);
} else {
return G__16135;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16061),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16061),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16873 = (i + (1));
var G__16874 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16873;
ret = G__16874;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16174){
var vec__16175 = p__16174;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16175,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16181 = arguments.length;
switch (G__16181) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__16881 = ps;
var G__16882 = (i + (1));
el__$1 = G__16881;
i = G__16882;
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
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
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
var vec__16193 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16193,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16193,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16193,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16197_16891 = cljs.core.seq(props);
var chunk__16198_16892 = null;
var count__16199_16893 = (0);
var i__16200_16894 = (0);
while(true){
if((i__16200_16894 < count__16199_16893)){
var vec__16216_16895 = chunk__16198_16892.cljs$core$IIndexed$_nth$arity$2(null, i__16200_16894);
var k_16896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16216_16895,(0),null);
var v_16897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16216_16895,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16896);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16896),v_16897);


var G__16901 = seq__16197_16891;
var G__16902 = chunk__16198_16892;
var G__16903 = count__16199_16893;
var G__16904 = (i__16200_16894 + (1));
seq__16197_16891 = G__16901;
chunk__16198_16892 = G__16902;
count__16199_16893 = G__16903;
i__16200_16894 = G__16904;
continue;
} else {
var temp__5804__auto___16905 = cljs.core.seq(seq__16197_16891);
if(temp__5804__auto___16905){
var seq__16197_16906__$1 = temp__5804__auto___16905;
if(cljs.core.chunked_seq_QMARK_(seq__16197_16906__$1)){
var c__5525__auto___16907 = cljs.core.chunk_first(seq__16197_16906__$1);
var G__16908 = cljs.core.chunk_rest(seq__16197_16906__$1);
var G__16909 = c__5525__auto___16907;
var G__16910 = cljs.core.count(c__5525__auto___16907);
var G__16911 = (0);
seq__16197_16891 = G__16908;
chunk__16198_16892 = G__16909;
count__16199_16893 = G__16910;
i__16200_16894 = G__16911;
continue;
} else {
var vec__16220_16912 = cljs.core.first(seq__16197_16906__$1);
var k_16913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220_16912,(0),null);
var v_16914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220_16912,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16913);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16913),v_16914);


var G__16915 = cljs.core.next(seq__16197_16906__$1);
var G__16916 = null;
var G__16917 = (0);
var G__16918 = (0);
seq__16197_16891 = G__16915;
chunk__16198_16892 = G__16916;
count__16199_16893 = G__16917;
i__16200_16894 = G__16918;
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
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16226 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(1),null);
var seq__16229_16923 = cljs.core.seq(node_children);
var chunk__16231_16924 = null;
var count__16232_16925 = (0);
var i__16233_16926 = (0);
while(true){
if((i__16233_16926 < count__16232_16925)){
var child_struct_16928 = chunk__16231_16924.cljs$core$IIndexed$_nth$arity$2(null, i__16233_16926);
if((!((child_struct_16928 == null)))){
if(typeof child_struct_16928 === 'string'){
var text_16931 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16931),child_struct_16928].join(''));
} else {
var children_16933 = shadow.dom.svg_node(child_struct_16928);
if(cljs.core.seq_QMARK_(children_16933)){
var seq__16300_16935 = cljs.core.seq(children_16933);
var chunk__16302_16936 = null;
var count__16303_16937 = (0);
var i__16304_16938 = (0);
while(true){
if((i__16304_16938 < count__16303_16937)){
var child_16939 = chunk__16302_16936.cljs$core$IIndexed$_nth$arity$2(null, i__16304_16938);
if(cljs.core.truth_(child_16939)){
node.appendChild(child_16939);


var G__16941 = seq__16300_16935;
var G__16942 = chunk__16302_16936;
var G__16943 = count__16303_16937;
var G__16944 = (i__16304_16938 + (1));
seq__16300_16935 = G__16941;
chunk__16302_16936 = G__16942;
count__16303_16937 = G__16943;
i__16304_16938 = G__16944;
continue;
} else {
var G__16945 = seq__16300_16935;
var G__16946 = chunk__16302_16936;
var G__16947 = count__16303_16937;
var G__16948 = (i__16304_16938 + (1));
seq__16300_16935 = G__16945;
chunk__16302_16936 = G__16946;
count__16303_16937 = G__16947;
i__16304_16938 = G__16948;
continue;
}
} else {
var temp__5804__auto___16949 = cljs.core.seq(seq__16300_16935);
if(temp__5804__auto___16949){
var seq__16300_16950__$1 = temp__5804__auto___16949;
if(cljs.core.chunked_seq_QMARK_(seq__16300_16950__$1)){
var c__5525__auto___16951 = cljs.core.chunk_first(seq__16300_16950__$1);
var G__16952 = cljs.core.chunk_rest(seq__16300_16950__$1);
var G__16953 = c__5525__auto___16951;
var G__16954 = cljs.core.count(c__5525__auto___16951);
var G__16955 = (0);
seq__16300_16935 = G__16952;
chunk__16302_16936 = G__16953;
count__16303_16937 = G__16954;
i__16304_16938 = G__16955;
continue;
} else {
var child_16956 = cljs.core.first(seq__16300_16950__$1);
if(cljs.core.truth_(child_16956)){
node.appendChild(child_16956);


var G__16957 = cljs.core.next(seq__16300_16950__$1);
var G__16958 = null;
var G__16959 = (0);
var G__16960 = (0);
seq__16300_16935 = G__16957;
chunk__16302_16936 = G__16958;
count__16303_16937 = G__16959;
i__16304_16938 = G__16960;
continue;
} else {
var G__16961 = cljs.core.next(seq__16300_16950__$1);
var G__16962 = null;
var G__16963 = (0);
var G__16964 = (0);
seq__16300_16935 = G__16961;
chunk__16302_16936 = G__16962;
count__16303_16937 = G__16963;
i__16304_16938 = G__16964;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16933);
}
}


var G__16967 = seq__16229_16923;
var G__16968 = chunk__16231_16924;
var G__16969 = count__16232_16925;
var G__16970 = (i__16233_16926 + (1));
seq__16229_16923 = G__16967;
chunk__16231_16924 = G__16968;
count__16232_16925 = G__16969;
i__16233_16926 = G__16970;
continue;
} else {
var G__16971 = seq__16229_16923;
var G__16972 = chunk__16231_16924;
var G__16973 = count__16232_16925;
var G__16974 = (i__16233_16926 + (1));
seq__16229_16923 = G__16971;
chunk__16231_16924 = G__16972;
count__16232_16925 = G__16973;
i__16233_16926 = G__16974;
continue;
}
} else {
var temp__5804__auto___16975 = cljs.core.seq(seq__16229_16923);
if(temp__5804__auto___16975){
var seq__16229_16976__$1 = temp__5804__auto___16975;
if(cljs.core.chunked_seq_QMARK_(seq__16229_16976__$1)){
var c__5525__auto___16978 = cljs.core.chunk_first(seq__16229_16976__$1);
var G__16979 = cljs.core.chunk_rest(seq__16229_16976__$1);
var G__16980 = c__5525__auto___16978;
var G__16981 = cljs.core.count(c__5525__auto___16978);
var G__16982 = (0);
seq__16229_16923 = G__16979;
chunk__16231_16924 = G__16980;
count__16232_16925 = G__16981;
i__16233_16926 = G__16982;
continue;
} else {
var child_struct_16983 = cljs.core.first(seq__16229_16976__$1);
if((!((child_struct_16983 == null)))){
if(typeof child_struct_16983 === 'string'){
var text_16984 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16984),child_struct_16983].join(''));
} else {
var children_16985 = shadow.dom.svg_node(child_struct_16983);
if(cljs.core.seq_QMARK_(children_16985)){
var seq__16355_16987 = cljs.core.seq(children_16985);
var chunk__16357_16988 = null;
var count__16358_16989 = (0);
var i__16359_16990 = (0);
while(true){
if((i__16359_16990 < count__16358_16989)){
var child_16991 = chunk__16357_16988.cljs$core$IIndexed$_nth$arity$2(null, i__16359_16990);
if(cljs.core.truth_(child_16991)){
node.appendChild(child_16991);


var G__16992 = seq__16355_16987;
var G__16993 = chunk__16357_16988;
var G__16994 = count__16358_16989;
var G__16995 = (i__16359_16990 + (1));
seq__16355_16987 = G__16992;
chunk__16357_16988 = G__16993;
count__16358_16989 = G__16994;
i__16359_16990 = G__16995;
continue;
} else {
var G__16996 = seq__16355_16987;
var G__16997 = chunk__16357_16988;
var G__16998 = count__16358_16989;
var G__16999 = (i__16359_16990 + (1));
seq__16355_16987 = G__16996;
chunk__16357_16988 = G__16997;
count__16358_16989 = G__16998;
i__16359_16990 = G__16999;
continue;
}
} else {
var temp__5804__auto___17000__$1 = cljs.core.seq(seq__16355_16987);
if(temp__5804__auto___17000__$1){
var seq__16355_17001__$1 = temp__5804__auto___17000__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16355_17001__$1)){
var c__5525__auto___17002 = cljs.core.chunk_first(seq__16355_17001__$1);
var G__17003 = cljs.core.chunk_rest(seq__16355_17001__$1);
var G__17004 = c__5525__auto___17002;
var G__17005 = cljs.core.count(c__5525__auto___17002);
var G__17006 = (0);
seq__16355_16987 = G__17003;
chunk__16357_16988 = G__17004;
count__16358_16989 = G__17005;
i__16359_16990 = G__17006;
continue;
} else {
var child_17009 = cljs.core.first(seq__16355_17001__$1);
if(cljs.core.truth_(child_17009)){
node.appendChild(child_17009);


var G__17010 = cljs.core.next(seq__16355_17001__$1);
var G__17011 = null;
var G__17012 = (0);
var G__17013 = (0);
seq__16355_16987 = G__17010;
chunk__16357_16988 = G__17011;
count__16358_16989 = G__17012;
i__16359_16990 = G__17013;
continue;
} else {
var G__17014 = cljs.core.next(seq__16355_17001__$1);
var G__17015 = null;
var G__17016 = (0);
var G__17017 = (0);
seq__16355_16987 = G__17014;
chunk__16357_16988 = G__17015;
count__16358_16989 = G__17016;
i__16359_16990 = G__17017;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16985);
}
}


var G__17019 = cljs.core.next(seq__16229_16976__$1);
var G__17020 = null;
var G__17021 = (0);
var G__17022 = (0);
seq__16229_16923 = G__17019;
chunk__16231_16924 = G__17020;
count__16232_16925 = G__17021;
i__16233_16926 = G__17022;
continue;
} else {
var G__17023 = cljs.core.next(seq__16229_16976__$1);
var G__17024 = null;
var G__17025 = (0);
var G__17026 = (0);
seq__16229_16923 = G__17023;
chunk__16231_16924 = G__17024;
count__16232_16925 = G__17025;
i__16233_16926 = G__17026;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
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

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17030 = arguments.length;
var i__5727__auto___17031 = (0);
while(true){
if((i__5727__auto___17031 < len__5726__auto___17030)){
args__5732__auto__.push((arguments[i__5727__auto___17031]));

var G__17034 = (i__5727__auto___17031 + (1));
i__5727__auto___17031 = G__17034;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16403){
var G__16404 = cljs.core.first(seq16403);
var seq16403__$1 = cljs.core.next(seq16403);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16404,seq16403__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

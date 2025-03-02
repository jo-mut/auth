goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12523 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12523(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12530 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12530(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11737 = coll;
var G__11738 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11737,G__11738) : shadow.dom.lazy_native_coll_seq.call(null, G__11737,G__11738));
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
var G__11767 = arguments.length;
switch (G__11767) {
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
var G__11772 = arguments.length;
switch (G__11772) {
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
var G__11774 = arguments.length;
switch (G__11774) {
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
var G__11778 = arguments.length;
switch (G__11778) {
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
var G__11780 = arguments.length;
switch (G__11780) {
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
var G__11795 = arguments.length;
switch (G__11795) {
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
}catch (e11801){if((e11801 instanceof Object)){
var e = e11801;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11801;

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
var seq__11831 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11832 = null;
var count__11833 = (0);
var i__11834 = (0);
while(true){
if((i__11834 < count__11833)){
var el = chunk__11832.cljs$core$IIndexed$_nth$arity$2(null, i__11834);
var handler_12571__$1 = ((function (seq__11831,chunk__11832,count__11833,i__11834,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11831,chunk__11832,count__11833,i__11834,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12571__$1);


var G__12573 = seq__11831;
var G__12574 = chunk__11832;
var G__12575 = count__11833;
var G__12576 = (i__11834 + (1));
seq__11831 = G__12573;
chunk__11832 = G__12574;
count__11833 = G__12575;
i__11834 = G__12576;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11831);
if(temp__5804__auto__){
var seq__11831__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11831__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11831__$1);
var G__12577 = cljs.core.chunk_rest(seq__11831__$1);
var G__12578 = c__5525__auto__;
var G__12579 = cljs.core.count(c__5525__auto__);
var G__12580 = (0);
seq__11831 = G__12577;
chunk__11832 = G__12578;
count__11833 = G__12579;
i__11834 = G__12580;
continue;
} else {
var el = cljs.core.first(seq__11831__$1);
var handler_12581__$1 = ((function (seq__11831,chunk__11832,count__11833,i__11834,el,seq__11831__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11831,chunk__11832,count__11833,i__11834,el,seq__11831__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12581__$1);


var G__12583 = cljs.core.next(seq__11831__$1);
var G__12584 = null;
var G__12585 = (0);
var G__12586 = (0);
seq__11831 = G__12583;
chunk__11832 = G__12584;
count__11833 = G__12585;
i__11834 = G__12586;
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
var G__11848 = arguments.length;
switch (G__11848) {
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
var seq__11849 = cljs.core.seq(events);
var chunk__11850 = null;
var count__11851 = (0);
var i__11852 = (0);
while(true){
if((i__11852 < count__11851)){
var vec__11859 = chunk__11850.cljs$core$IIndexed$_nth$arity$2(null, i__11852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12596 = seq__11849;
var G__12597 = chunk__11850;
var G__12598 = count__11851;
var G__12599 = (i__11852 + (1));
seq__11849 = G__12596;
chunk__11850 = G__12597;
count__11851 = G__12598;
i__11852 = G__12599;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11849);
if(temp__5804__auto__){
var seq__11849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11849__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11849__$1);
var G__12600 = cljs.core.chunk_rest(seq__11849__$1);
var G__12601 = c__5525__auto__;
var G__12602 = cljs.core.count(c__5525__auto__);
var G__12603 = (0);
seq__11849 = G__12600;
chunk__11850 = G__12601;
count__11851 = G__12602;
i__11852 = G__12603;
continue;
} else {
var vec__11862 = cljs.core.first(seq__11849__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11862,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12607 = cljs.core.next(seq__11849__$1);
var G__12608 = null;
var G__12609 = (0);
var G__12610 = (0);
seq__11849 = G__12607;
chunk__11850 = G__12608;
count__11851 = G__12609;
i__11852 = G__12610;
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
var seq__11865 = cljs.core.seq(styles);
var chunk__11866 = null;
var count__11867 = (0);
var i__11868 = (0);
while(true){
if((i__11868 < count__11867)){
var vec__11876 = chunk__11866.cljs$core$IIndexed$_nth$arity$2(null, i__11868);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11876,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12621 = seq__11865;
var G__12622 = chunk__11866;
var G__12623 = count__11867;
var G__12624 = (i__11868 + (1));
seq__11865 = G__12621;
chunk__11866 = G__12622;
count__11867 = G__12623;
i__11868 = G__12624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11865);
if(temp__5804__auto__){
var seq__11865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11865__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11865__$1);
var G__12625 = cljs.core.chunk_rest(seq__11865__$1);
var G__12626 = c__5525__auto__;
var G__12627 = cljs.core.count(c__5525__auto__);
var G__12628 = (0);
seq__11865 = G__12625;
chunk__11866 = G__12626;
count__11867 = G__12627;
i__11868 = G__12628;
continue;
} else {
var vec__11879 = cljs.core.first(seq__11865__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11879,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12629 = cljs.core.next(seq__11865__$1);
var G__12630 = null;
var G__12631 = (0);
var G__12632 = (0);
seq__11865 = G__12629;
chunk__11866 = G__12630;
count__11867 = G__12631;
i__11868 = G__12632;
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
var G__11887_12634 = key;
var G__11887_12635__$1 = (((G__11887_12634 instanceof cljs.core.Keyword))?G__11887_12634.fqn:null);
switch (G__11887_12635__$1) {
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
var ks_12643 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12643,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12643,"aria-");
}
})())){
el.setAttribute(ks_12643,value);
} else {
(el[ks_12643] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11904){
var map__11906 = p__11904;
var map__11906__$1 = cljs.core.__destructure_map(map__11906);
var props = map__11906__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11906__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11907 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11907,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11907,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11907,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11910 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11910,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11910;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11917 = arguments.length;
switch (G__11917) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11939){
var vec__11944 = p__11939;
var seq__11945 = cljs.core.seq(vec__11944);
var first__11946 = cljs.core.first(seq__11945);
var seq__11945__$1 = cljs.core.next(seq__11945);
var nn = first__11946;
var first__11946__$1 = cljs.core.first(seq__11945__$1);
var seq__11945__$2 = cljs.core.next(seq__11945__$1);
var np = first__11946__$1;
var nc = seq__11945__$2;
var node = vec__11944;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11965 = nn;
var G__11966 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11965,G__11966) : create_fn.call(null, G__11965,G__11966));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11970 = nn;
var G__11971 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11970,G__11971) : create_fn.call(null, G__11970,G__11971));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11976 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,(1),null);
var seq__11979_12675 = cljs.core.seq(node_children);
var chunk__11980_12676 = null;
var count__11981_12677 = (0);
var i__11982_12678 = (0);
while(true){
if((i__11982_12678 < count__11981_12677)){
var child_struct_12679 = chunk__11980_12676.cljs$core$IIndexed$_nth$arity$2(null, i__11982_12678);
var children_12680 = shadow.dom.dom_node(child_struct_12679);
if(cljs.core.seq_QMARK_(children_12680)){
var seq__11999_12681 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12680));
var chunk__12001_12682 = null;
var count__12002_12683 = (0);
var i__12003_12684 = (0);
while(true){
if((i__12003_12684 < count__12002_12683)){
var child_12687 = chunk__12001_12682.cljs$core$IIndexed$_nth$arity$2(null, i__12003_12684);
if(cljs.core.truth_(child_12687)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12687);


var G__12688 = seq__11999_12681;
var G__12689 = chunk__12001_12682;
var G__12690 = count__12002_12683;
var G__12691 = (i__12003_12684 + (1));
seq__11999_12681 = G__12688;
chunk__12001_12682 = G__12689;
count__12002_12683 = G__12690;
i__12003_12684 = G__12691;
continue;
} else {
var G__12692 = seq__11999_12681;
var G__12693 = chunk__12001_12682;
var G__12694 = count__12002_12683;
var G__12695 = (i__12003_12684 + (1));
seq__11999_12681 = G__12692;
chunk__12001_12682 = G__12693;
count__12002_12683 = G__12694;
i__12003_12684 = G__12695;
continue;
}
} else {
var temp__5804__auto___12697 = cljs.core.seq(seq__11999_12681);
if(temp__5804__auto___12697){
var seq__11999_12698__$1 = temp__5804__auto___12697;
if(cljs.core.chunked_seq_QMARK_(seq__11999_12698__$1)){
var c__5525__auto___12699 = cljs.core.chunk_first(seq__11999_12698__$1);
var G__12700 = cljs.core.chunk_rest(seq__11999_12698__$1);
var G__12701 = c__5525__auto___12699;
var G__12702 = cljs.core.count(c__5525__auto___12699);
var G__12703 = (0);
seq__11999_12681 = G__12700;
chunk__12001_12682 = G__12701;
count__12002_12683 = G__12702;
i__12003_12684 = G__12703;
continue;
} else {
var child_12705 = cljs.core.first(seq__11999_12698__$1);
if(cljs.core.truth_(child_12705)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12705);


var G__12707 = cljs.core.next(seq__11999_12698__$1);
var G__12708 = null;
var G__12709 = (0);
var G__12710 = (0);
seq__11999_12681 = G__12707;
chunk__12001_12682 = G__12708;
count__12002_12683 = G__12709;
i__12003_12684 = G__12710;
continue;
} else {
var G__12712 = cljs.core.next(seq__11999_12698__$1);
var G__12713 = null;
var G__12714 = (0);
var G__12715 = (0);
seq__11999_12681 = G__12712;
chunk__12001_12682 = G__12713;
count__12002_12683 = G__12714;
i__12003_12684 = G__12715;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12680);
}


var G__12719 = seq__11979_12675;
var G__12720 = chunk__11980_12676;
var G__12721 = count__11981_12677;
var G__12722 = (i__11982_12678 + (1));
seq__11979_12675 = G__12719;
chunk__11980_12676 = G__12720;
count__11981_12677 = G__12721;
i__11982_12678 = G__12722;
continue;
} else {
var temp__5804__auto___12724 = cljs.core.seq(seq__11979_12675);
if(temp__5804__auto___12724){
var seq__11979_12726__$1 = temp__5804__auto___12724;
if(cljs.core.chunked_seq_QMARK_(seq__11979_12726__$1)){
var c__5525__auto___12729 = cljs.core.chunk_first(seq__11979_12726__$1);
var G__12730 = cljs.core.chunk_rest(seq__11979_12726__$1);
var G__12731 = c__5525__auto___12729;
var G__12732 = cljs.core.count(c__5525__auto___12729);
var G__12733 = (0);
seq__11979_12675 = G__12730;
chunk__11980_12676 = G__12731;
count__11981_12677 = G__12732;
i__11982_12678 = G__12733;
continue;
} else {
var child_struct_12735 = cljs.core.first(seq__11979_12726__$1);
var children_12736 = shadow.dom.dom_node(child_struct_12735);
if(cljs.core.seq_QMARK_(children_12736)){
var seq__12005_12737 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12736));
var chunk__12007_12738 = null;
var count__12008_12739 = (0);
var i__12009_12740 = (0);
while(true){
if((i__12009_12740 < count__12008_12739)){
var child_12741 = chunk__12007_12738.cljs$core$IIndexed$_nth$arity$2(null, i__12009_12740);
if(cljs.core.truth_(child_12741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12741);


var G__12745 = seq__12005_12737;
var G__12746 = chunk__12007_12738;
var G__12747 = count__12008_12739;
var G__12748 = (i__12009_12740 + (1));
seq__12005_12737 = G__12745;
chunk__12007_12738 = G__12746;
count__12008_12739 = G__12747;
i__12009_12740 = G__12748;
continue;
} else {
var G__12749 = seq__12005_12737;
var G__12750 = chunk__12007_12738;
var G__12751 = count__12008_12739;
var G__12752 = (i__12009_12740 + (1));
seq__12005_12737 = G__12749;
chunk__12007_12738 = G__12750;
count__12008_12739 = G__12751;
i__12009_12740 = G__12752;
continue;
}
} else {
var temp__5804__auto___12753__$1 = cljs.core.seq(seq__12005_12737);
if(temp__5804__auto___12753__$1){
var seq__12005_12754__$1 = temp__5804__auto___12753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12005_12754__$1)){
var c__5525__auto___12755 = cljs.core.chunk_first(seq__12005_12754__$1);
var G__12756 = cljs.core.chunk_rest(seq__12005_12754__$1);
var G__12757 = c__5525__auto___12755;
var G__12758 = cljs.core.count(c__5525__auto___12755);
var G__12759 = (0);
seq__12005_12737 = G__12756;
chunk__12007_12738 = G__12757;
count__12008_12739 = G__12758;
i__12009_12740 = G__12759;
continue;
} else {
var child_12760 = cljs.core.first(seq__12005_12754__$1);
if(cljs.core.truth_(child_12760)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12760);


var G__12761 = cljs.core.next(seq__12005_12754__$1);
var G__12762 = null;
var G__12763 = (0);
var G__12764 = (0);
seq__12005_12737 = G__12761;
chunk__12007_12738 = G__12762;
count__12008_12739 = G__12763;
i__12009_12740 = G__12764;
continue;
} else {
var G__12765 = cljs.core.next(seq__12005_12754__$1);
var G__12766 = null;
var G__12767 = (0);
var G__12768 = (0);
seq__12005_12737 = G__12765;
chunk__12007_12738 = G__12766;
count__12008_12739 = G__12767;
i__12009_12740 = G__12768;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12736);
}


var G__12770 = cljs.core.next(seq__11979_12726__$1);
var G__12771 = null;
var G__12772 = (0);
var G__12773 = (0);
seq__11979_12675 = G__12770;
chunk__11980_12676 = G__12771;
count__11981_12677 = G__12772;
i__11982_12678 = G__12773;
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
var seq__12043 = cljs.core.seq(node);
var chunk__12044 = null;
var count__12045 = (0);
var i__12046 = (0);
while(true){
if((i__12046 < count__12045)){
var n = chunk__12044.cljs$core$IIndexed$_nth$arity$2(null, i__12046);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12776 = seq__12043;
var G__12777 = chunk__12044;
var G__12778 = count__12045;
var G__12779 = (i__12046 + (1));
seq__12043 = G__12776;
chunk__12044 = G__12777;
count__12045 = G__12778;
i__12046 = G__12779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12043);
if(temp__5804__auto__){
var seq__12043__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12043__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12043__$1);
var G__12781 = cljs.core.chunk_rest(seq__12043__$1);
var G__12782 = c__5525__auto__;
var G__12783 = cljs.core.count(c__5525__auto__);
var G__12784 = (0);
seq__12043 = G__12781;
chunk__12044 = G__12782;
count__12045 = G__12783;
i__12046 = G__12784;
continue;
} else {
var n = cljs.core.first(seq__12043__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12785 = cljs.core.next(seq__12043__$1);
var G__12786 = null;
var G__12787 = (0);
var G__12788 = (0);
seq__12043 = G__12785;
chunk__12044 = G__12786;
count__12045 = G__12787;
i__12046 = G__12788;
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
var G__12074 = arguments.length;
switch (G__12074) {
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
var G__12076 = arguments.length;
switch (G__12076) {
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
var G__12078 = arguments.length;
switch (G__12078) {
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
var len__5726__auto___12797 = arguments.length;
var i__5727__auto___12798 = (0);
while(true){
if((i__5727__auto___12798 < len__5726__auto___12797)){
args__5732__auto__.push((arguments[i__5727__auto___12798]));

var G__12799 = (i__5727__auto___12798 + (1));
i__5727__auto___12798 = G__12799;
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
var seq__12085_12800 = cljs.core.seq(nodes);
var chunk__12086_12801 = null;
var count__12087_12802 = (0);
var i__12088_12803 = (0);
while(true){
if((i__12088_12803 < count__12087_12802)){
var node_12804 = chunk__12086_12801.cljs$core$IIndexed$_nth$arity$2(null, i__12088_12803);
fragment.appendChild(shadow.dom._to_dom(node_12804));


var G__12805 = seq__12085_12800;
var G__12806 = chunk__12086_12801;
var G__12807 = count__12087_12802;
var G__12808 = (i__12088_12803 + (1));
seq__12085_12800 = G__12805;
chunk__12086_12801 = G__12806;
count__12087_12802 = G__12807;
i__12088_12803 = G__12808;
continue;
} else {
var temp__5804__auto___12809 = cljs.core.seq(seq__12085_12800);
if(temp__5804__auto___12809){
var seq__12085_12810__$1 = temp__5804__auto___12809;
if(cljs.core.chunked_seq_QMARK_(seq__12085_12810__$1)){
var c__5525__auto___12811 = cljs.core.chunk_first(seq__12085_12810__$1);
var G__12812 = cljs.core.chunk_rest(seq__12085_12810__$1);
var G__12813 = c__5525__auto___12811;
var G__12814 = cljs.core.count(c__5525__auto___12811);
var G__12815 = (0);
seq__12085_12800 = G__12812;
chunk__12086_12801 = G__12813;
count__12087_12802 = G__12814;
i__12088_12803 = G__12815;
continue;
} else {
var node_12816 = cljs.core.first(seq__12085_12810__$1);
fragment.appendChild(shadow.dom._to_dom(node_12816));


var G__12817 = cljs.core.next(seq__12085_12810__$1);
var G__12818 = null;
var G__12819 = (0);
var G__12820 = (0);
seq__12085_12800 = G__12817;
chunk__12086_12801 = G__12818;
count__12087_12802 = G__12819;
i__12088_12803 = G__12820;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12079){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12079));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12090_12822 = cljs.core.seq(scripts);
var chunk__12091_12823 = null;
var count__12092_12824 = (0);
var i__12093_12825 = (0);
while(true){
if((i__12093_12825 < count__12092_12824)){
var vec__12101_12826 = chunk__12091_12823.cljs$core$IIndexed$_nth$arity$2(null, i__12093_12825);
var script_tag_12827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12101_12826,(0),null);
var script_body_12828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12101_12826,(1),null);
eval(script_body_12828);


var G__12829 = seq__12090_12822;
var G__12830 = chunk__12091_12823;
var G__12831 = count__12092_12824;
var G__12832 = (i__12093_12825 + (1));
seq__12090_12822 = G__12829;
chunk__12091_12823 = G__12830;
count__12092_12824 = G__12831;
i__12093_12825 = G__12832;
continue;
} else {
var temp__5804__auto___12833 = cljs.core.seq(seq__12090_12822);
if(temp__5804__auto___12833){
var seq__12090_12834__$1 = temp__5804__auto___12833;
if(cljs.core.chunked_seq_QMARK_(seq__12090_12834__$1)){
var c__5525__auto___12835 = cljs.core.chunk_first(seq__12090_12834__$1);
var G__12836 = cljs.core.chunk_rest(seq__12090_12834__$1);
var G__12837 = c__5525__auto___12835;
var G__12838 = cljs.core.count(c__5525__auto___12835);
var G__12839 = (0);
seq__12090_12822 = G__12836;
chunk__12091_12823 = G__12837;
count__12092_12824 = G__12838;
i__12093_12825 = G__12839;
continue;
} else {
var vec__12105_12840 = cljs.core.first(seq__12090_12834__$1);
var script_tag_12841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105_12840,(0),null);
var script_body_12842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105_12840,(1),null);
eval(script_body_12842);


var G__12843 = cljs.core.next(seq__12090_12834__$1);
var G__12844 = null;
var G__12845 = (0);
var G__12846 = (0);
seq__12090_12822 = G__12843;
chunk__12091_12823 = G__12844;
count__12092_12824 = G__12845;
i__12093_12825 = G__12846;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12109){
var vec__12111 = p__12109;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12111,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12111,(1),null);
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
var G__12115 = arguments.length;
switch (G__12115) {
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
var seq__12116 = cljs.core.seq(style_keys);
var chunk__12117 = null;
var count__12118 = (0);
var i__12119 = (0);
while(true){
if((i__12119 < count__12118)){
var it = chunk__12117.cljs$core$IIndexed$_nth$arity$2(null, i__12119);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12851 = seq__12116;
var G__12852 = chunk__12117;
var G__12853 = count__12118;
var G__12854 = (i__12119 + (1));
seq__12116 = G__12851;
chunk__12117 = G__12852;
count__12118 = G__12853;
i__12119 = G__12854;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12116);
if(temp__5804__auto__){
var seq__12116__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12116__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12116__$1);
var G__12855 = cljs.core.chunk_rest(seq__12116__$1);
var G__12856 = c__5525__auto__;
var G__12857 = cljs.core.count(c__5525__auto__);
var G__12858 = (0);
seq__12116 = G__12855;
chunk__12117 = G__12856;
count__12118 = G__12857;
i__12119 = G__12858;
continue;
} else {
var it = cljs.core.first(seq__12116__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12859 = cljs.core.next(seq__12116__$1);
var G__12860 = null;
var G__12861 = (0);
var G__12862 = (0);
seq__12116 = G__12859;
chunk__12117 = G__12860;
count__12118 = G__12861;
i__12119 = G__12862;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12121,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12137 = k12121;
var G__12137__$1 = (((G__12137 instanceof cljs.core.Keyword))?G__12137.fqn:null);
switch (G__12137__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12121,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12143){
var vec__12144 = p__12143;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12144,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12144,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12120){
var self__ = this;
var G__12120__$1 = this;
return (new cljs.core.RecordIter((0),G__12120__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12122,other12123){
var self__ = this;
var this12122__$1 = this;
return (((!((other12123 == null)))) && ((((this12122__$1.constructor === other12123.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12122__$1.x,other12123.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12122__$1.y,other12123.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12122__$1.__extmap,other12123.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12121){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12164 = k12121;
var G__12164__$1 = (((G__12164 instanceof cljs.core.Keyword))?G__12164.fqn:null);
switch (G__12164__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12121);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12120){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12168 = cljs.core.keyword_identical_QMARK_;
var expr__12169 = k__5309__auto__;
if(cljs.core.truth_((pred__12168.cljs$core$IFn$_invoke$arity$2 ? pred__12168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12169) : pred__12168.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12169)))){
return (new shadow.dom.Coordinate(G__12120,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12168.cljs$core$IFn$_invoke$arity$2 ? pred__12168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12169) : pred__12168.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12169)))){
return (new shadow.dom.Coordinate(self__.x,G__12120,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12120),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12120){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12120,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12132){
var extmap__5342__auto__ = (function (){var G__12187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12132,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12132)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12187);
} else {
return G__12187;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12132),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12132),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12202,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12210 = k12202;
var G__12210__$1 = (((G__12210 instanceof cljs.core.Keyword))?G__12210.fqn:null);
switch (G__12210__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12202,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12215){
var vec__12216 = p__12215;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12216,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12201){
var self__ = this;
var G__12201__$1 = this;
return (new cljs.core.RecordIter((0),G__12201__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12203,other12204){
var self__ = this;
var this12203__$1 = this;
return (((!((other12204 == null)))) && ((((this12203__$1.constructor === other12204.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12203__$1.w,other12204.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12203__$1.h,other12204.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12203__$1.__extmap,other12204.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12202){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12260 = k12202;
var G__12260__$1 = (((G__12260 instanceof cljs.core.Keyword))?G__12260.fqn:null);
switch (G__12260__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12202);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12201){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12262 = cljs.core.keyword_identical_QMARK_;
var expr__12263 = k__5309__auto__;
if(cljs.core.truth_((pred__12262.cljs$core$IFn$_invoke$arity$2 ? pred__12262.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12263) : pred__12262.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12263)))){
return (new shadow.dom.Size(G__12201,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12262.cljs$core$IFn$_invoke$arity$2 ? pred__12262.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12263) : pred__12262.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12263)))){
return (new shadow.dom.Size(self__.w,G__12201,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12201),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12201){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12201,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12206){
var extmap__5342__auto__ = (function (){var G__12267 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12206,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12206)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12267);
} else {
return G__12267;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12206),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12206),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__12917 = (i + (1));
var G__12918 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12917;
ret = G__12918;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12311){
var vec__12312 = p__12311;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12312,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12319 = arguments.length;
switch (G__12319) {
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
var G__12924 = ps;
var G__12925 = (i + (1));
el__$1 = G__12924;
i = G__12925;
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
var vec__12347 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12347,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12347,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12347,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12353_12928 = cljs.core.seq(props);
var chunk__12354_12929 = null;
var count__12355_12930 = (0);
var i__12356_12931 = (0);
while(true){
if((i__12356_12931 < count__12355_12930)){
var vec__12383_12933 = chunk__12354_12929.cljs$core$IIndexed$_nth$arity$2(null, i__12356_12931);
var k_12934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12383_12933,(0),null);
var v_12935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12383_12933,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12934);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12934),v_12935);


var G__12941 = seq__12353_12928;
var G__12942 = chunk__12354_12929;
var G__12943 = count__12355_12930;
var G__12944 = (i__12356_12931 + (1));
seq__12353_12928 = G__12941;
chunk__12354_12929 = G__12942;
count__12355_12930 = G__12943;
i__12356_12931 = G__12944;
continue;
} else {
var temp__5804__auto___12946 = cljs.core.seq(seq__12353_12928);
if(temp__5804__auto___12946){
var seq__12353_12948__$1 = temp__5804__auto___12946;
if(cljs.core.chunked_seq_QMARK_(seq__12353_12948__$1)){
var c__5525__auto___12949 = cljs.core.chunk_first(seq__12353_12948__$1);
var G__12950 = cljs.core.chunk_rest(seq__12353_12948__$1);
var G__12951 = c__5525__auto___12949;
var G__12952 = cljs.core.count(c__5525__auto___12949);
var G__12953 = (0);
seq__12353_12928 = G__12950;
chunk__12354_12929 = G__12951;
count__12355_12930 = G__12952;
i__12356_12931 = G__12953;
continue;
} else {
var vec__12391_12954 = cljs.core.first(seq__12353_12948__$1);
var k_12955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391_12954,(0),null);
var v_12956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391_12954,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12955);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12955),v_12956);


var G__12962 = cljs.core.next(seq__12353_12948__$1);
var G__12963 = null;
var G__12964 = (0);
var G__12965 = (0);
seq__12353_12928 = G__12962;
chunk__12354_12929 = G__12963;
count__12355_12930 = G__12964;
i__12356_12931 = G__12965;
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
var vec__12408 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(1),null);
var seq__12412_12971 = cljs.core.seq(node_children);
var chunk__12414_12972 = null;
var count__12415_12973 = (0);
var i__12416_12974 = (0);
while(true){
if((i__12416_12974 < count__12415_12973)){
var child_struct_12975 = chunk__12414_12972.cljs$core$IIndexed$_nth$arity$2(null, i__12416_12974);
if((!((child_struct_12975 == null)))){
if(typeof child_struct_12975 === 'string'){
var text_12976 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12976),child_struct_12975].join(''));
} else {
var children_12977 = shadow.dom.svg_node(child_struct_12975);
if(cljs.core.seq_QMARK_(children_12977)){
var seq__12469_12978 = cljs.core.seq(children_12977);
var chunk__12471_12979 = null;
var count__12472_12980 = (0);
var i__12473_12981 = (0);
while(true){
if((i__12473_12981 < count__12472_12980)){
var child_12982 = chunk__12471_12979.cljs$core$IIndexed$_nth$arity$2(null, i__12473_12981);
if(cljs.core.truth_(child_12982)){
node.appendChild(child_12982);


var G__12983 = seq__12469_12978;
var G__12984 = chunk__12471_12979;
var G__12985 = count__12472_12980;
var G__12986 = (i__12473_12981 + (1));
seq__12469_12978 = G__12983;
chunk__12471_12979 = G__12984;
count__12472_12980 = G__12985;
i__12473_12981 = G__12986;
continue;
} else {
var G__12987 = seq__12469_12978;
var G__12988 = chunk__12471_12979;
var G__12989 = count__12472_12980;
var G__12990 = (i__12473_12981 + (1));
seq__12469_12978 = G__12987;
chunk__12471_12979 = G__12988;
count__12472_12980 = G__12989;
i__12473_12981 = G__12990;
continue;
}
} else {
var temp__5804__auto___12991 = cljs.core.seq(seq__12469_12978);
if(temp__5804__auto___12991){
var seq__12469_12992__$1 = temp__5804__auto___12991;
if(cljs.core.chunked_seq_QMARK_(seq__12469_12992__$1)){
var c__5525__auto___12993 = cljs.core.chunk_first(seq__12469_12992__$1);
var G__12994 = cljs.core.chunk_rest(seq__12469_12992__$1);
var G__12995 = c__5525__auto___12993;
var G__12996 = cljs.core.count(c__5525__auto___12993);
var G__12997 = (0);
seq__12469_12978 = G__12994;
chunk__12471_12979 = G__12995;
count__12472_12980 = G__12996;
i__12473_12981 = G__12997;
continue;
} else {
var child_12998 = cljs.core.first(seq__12469_12992__$1);
if(cljs.core.truth_(child_12998)){
node.appendChild(child_12998);


var G__12999 = cljs.core.next(seq__12469_12992__$1);
var G__13000 = null;
var G__13001 = (0);
var G__13002 = (0);
seq__12469_12978 = G__12999;
chunk__12471_12979 = G__13000;
count__12472_12980 = G__13001;
i__12473_12981 = G__13002;
continue;
} else {
var G__13003 = cljs.core.next(seq__12469_12992__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__12469_12978 = G__13003;
chunk__12471_12979 = G__13004;
count__12472_12980 = G__13005;
i__12473_12981 = G__13006;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12977);
}
}


var G__13007 = seq__12412_12971;
var G__13008 = chunk__12414_12972;
var G__13009 = count__12415_12973;
var G__13010 = (i__12416_12974 + (1));
seq__12412_12971 = G__13007;
chunk__12414_12972 = G__13008;
count__12415_12973 = G__13009;
i__12416_12974 = G__13010;
continue;
} else {
var G__13011 = seq__12412_12971;
var G__13012 = chunk__12414_12972;
var G__13013 = count__12415_12973;
var G__13014 = (i__12416_12974 + (1));
seq__12412_12971 = G__13011;
chunk__12414_12972 = G__13012;
count__12415_12973 = G__13013;
i__12416_12974 = G__13014;
continue;
}
} else {
var temp__5804__auto___13015 = cljs.core.seq(seq__12412_12971);
if(temp__5804__auto___13015){
var seq__12412_13016__$1 = temp__5804__auto___13015;
if(cljs.core.chunked_seq_QMARK_(seq__12412_13016__$1)){
var c__5525__auto___13017 = cljs.core.chunk_first(seq__12412_13016__$1);
var G__13018 = cljs.core.chunk_rest(seq__12412_13016__$1);
var G__13019 = c__5525__auto___13017;
var G__13020 = cljs.core.count(c__5525__auto___13017);
var G__13021 = (0);
seq__12412_12971 = G__13018;
chunk__12414_12972 = G__13019;
count__12415_12973 = G__13020;
i__12416_12974 = G__13021;
continue;
} else {
var child_struct_13023 = cljs.core.first(seq__12412_13016__$1);
if((!((child_struct_13023 == null)))){
if(typeof child_struct_13023 === 'string'){
var text_13025 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13025),child_struct_13023].join(''));
} else {
var children_13027 = shadow.dom.svg_node(child_struct_13023);
if(cljs.core.seq_QMARK_(children_13027)){
var seq__12480_13029 = cljs.core.seq(children_13027);
var chunk__12482_13030 = null;
var count__12483_13031 = (0);
var i__12484_13032 = (0);
while(true){
if((i__12484_13032 < count__12483_13031)){
var child_13034 = chunk__12482_13030.cljs$core$IIndexed$_nth$arity$2(null, i__12484_13032);
if(cljs.core.truth_(child_13034)){
node.appendChild(child_13034);


var G__13035 = seq__12480_13029;
var G__13036 = chunk__12482_13030;
var G__13037 = count__12483_13031;
var G__13038 = (i__12484_13032 + (1));
seq__12480_13029 = G__13035;
chunk__12482_13030 = G__13036;
count__12483_13031 = G__13037;
i__12484_13032 = G__13038;
continue;
} else {
var G__13039 = seq__12480_13029;
var G__13040 = chunk__12482_13030;
var G__13041 = count__12483_13031;
var G__13042 = (i__12484_13032 + (1));
seq__12480_13029 = G__13039;
chunk__12482_13030 = G__13040;
count__12483_13031 = G__13041;
i__12484_13032 = G__13042;
continue;
}
} else {
var temp__5804__auto___13044__$1 = cljs.core.seq(seq__12480_13029);
if(temp__5804__auto___13044__$1){
var seq__12480_13045__$1 = temp__5804__auto___13044__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12480_13045__$1)){
var c__5525__auto___13047 = cljs.core.chunk_first(seq__12480_13045__$1);
var G__13048 = cljs.core.chunk_rest(seq__12480_13045__$1);
var G__13049 = c__5525__auto___13047;
var G__13050 = cljs.core.count(c__5525__auto___13047);
var G__13051 = (0);
seq__12480_13029 = G__13048;
chunk__12482_13030 = G__13049;
count__12483_13031 = G__13050;
i__12484_13032 = G__13051;
continue;
} else {
var child_13052 = cljs.core.first(seq__12480_13045__$1);
if(cljs.core.truth_(child_13052)){
node.appendChild(child_13052);


var G__13053 = cljs.core.next(seq__12480_13045__$1);
var G__13054 = null;
var G__13055 = (0);
var G__13056 = (0);
seq__12480_13029 = G__13053;
chunk__12482_13030 = G__13054;
count__12483_13031 = G__13055;
i__12484_13032 = G__13056;
continue;
} else {
var G__13057 = cljs.core.next(seq__12480_13045__$1);
var G__13058 = null;
var G__13059 = (0);
var G__13060 = (0);
seq__12480_13029 = G__13057;
chunk__12482_13030 = G__13058;
count__12483_13031 = G__13059;
i__12484_13032 = G__13060;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13027);
}
}


var G__13061 = cljs.core.next(seq__12412_13016__$1);
var G__13062 = null;
var G__13063 = (0);
var G__13064 = (0);
seq__12412_12971 = G__13061;
chunk__12414_12972 = G__13062;
count__12415_12973 = G__13063;
i__12416_12974 = G__13064;
continue;
} else {
var G__13065 = cljs.core.next(seq__12412_13016__$1);
var G__13066 = null;
var G__13067 = (0);
var G__13068 = (0);
seq__12412_12971 = G__13065;
chunk__12414_12972 = G__13066;
count__12415_12973 = G__13067;
i__12416_12974 = G__13068;
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
var len__5726__auto___13071 = arguments.length;
var i__5727__auto___13072 = (0);
while(true){
if((i__5727__auto___13072 < len__5726__auto___13071)){
args__5732__auto__.push((arguments[i__5727__auto___13072]));

var G__13073 = (i__5727__auto___13072 + (1));
i__5727__auto___13072 = G__13073;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12507){
var G__12508 = cljs.core.first(seq12507);
var seq12507__$1 = cljs.core.next(seq12507);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12508,seq12507__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

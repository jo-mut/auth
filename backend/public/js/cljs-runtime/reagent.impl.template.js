goog.provide('reagent.impl.template');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
});

(reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper");

(reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (((cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)))));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_(k)){
var temp__5806__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5806__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name(k)] = reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5806__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__23604 = o;
(G__23604[reagent.impl.template.cached_prop_name(k)] = (reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null, v)));

return G__23604;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__23640__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__23640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23641__i = 0, G__23641__a = new Array(arguments.length -  0);
while (G__23641__i < G__23641__a.length) {G__23641__a[G__23641__i] = arguments[G__23641__i + 0]; ++G__23641__i;}
  args = new cljs.core.IndexedSeq(G__23641__a,0,null);
} 
return G__23640__delegate.call(this,args);};
G__23640.cljs$lang$maxFixedArity = 0;
G__23640.cljs$lang$applyTo = (function (arglist__23642){
var args = cljs.core.seq(arglist__23642);
return G__23640__delegate(args);
});
G__23640.cljs$core$IFn$_invoke$arity$variadic = G__23640__delegate;
return G__23640;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__23605 = (((o == null))?({}):o);
(G__23605[k] = v);

return G__23605;
});
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = (((((!((id == null)))) && ((reagent.impl.template.oget(p,"id") == null))))?reagent.impl.template.oset(p,"id",id):p);
var temp__5806__auto__ = (id_class["className"]);
if((temp__5806__auto__ == null)){
return p__$1;
} else {
var class$ = temp__5806__auto__;
var old = reagent.impl.template.oget(p__$1,"className");
return reagent.impl.template.oset(p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
reagent.impl.template.stringify_class = (function reagent$impl$template$stringify_class(p__23606){
var map__23607 = p__23606;
var map__23607__$1 = cljs.core.__destructure_map(map__23607);
var props = map__23607__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23607__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,class$)));
} else {
return props;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class(reagent.impl.template.convert_prop_value(reagent.impl.template.stringify_class(props)),id_class);
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.find_dom_node !== 'undefined')){
} else {
reagent.impl.template.find_dom_node = null;
}
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_node_set_value = (function reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__23608){
var map__23609 = p__23608;
var map__23609__$1 = cljs.core.__destructure_map(map__23609);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23609__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === (document["activeElement"]))) && (((reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (((typeof rendered_value === 'string') && (typeof dom_value === 'string'))))))))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null, rendered_value));
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return reagent.impl.batching.do_after_render((function (){
return (reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : reagent.impl.template.input_component_set_value.call(null, component));
}));
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null, rendered_value));
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
reagent.impl.template.input_component_set_value = (function reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : reagent.impl.template.find_dom_node.call(null, this$));
var synthetic_on_update = (this$["cljsSyntheticOnUpdate"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
if(cljs.core.fn_QMARK_(synthetic_on_update)){
return (synthetic_on_update.cljs$core$IFn$_invoke$arity$5 ? synthetic_on_update.cljs$core$IFn$_invoke$arity$5(reagent.impl.template.input_node_set_value,node,rendered_value,dom_value,this$) : synthetic_on_update.call(null, reagent.impl.template.input_node_set_value,node,rendered_value,dom_value,this$));
} else {
return reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render((function (){
return reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null, e));
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(var_args){
var G__23612 = arguments.length;
switch (G__23612) {
case 3:
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3 = (function (this$,jsprops,p__23613){
var map__23614 = p__23613;
var map__23614__$1 = cljs.core.__destructure_map(map__23614);
var synthetic_on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23614__$1,new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932));
var synthetic_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23614__$1,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537));
if(cljs.core.truth_((function (){var and__5000__auto__ = (!((jsprops == null)));
if(and__5000__auto__){
var and__5000__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__5000__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.truth_(reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

if(cljs.core.truth_(synthetic_on_update)){
(this$["cljsSyntheticOnUpdate"] = synthetic_on_update);
} else {
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
var on_change__$1 = (cljs.core.truth_(synthetic_on_change)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(synthetic_on_change,on_change):on_change);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__23615 = jsprops;
(G__23615["defaultValue"] = value);

(G__23615["onChange"] = (function (p1__23610_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change__$1,p1__23610_SHARP_);
}));

return G__23615;
} else {
return null;
}
}));

(reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2 = (function (this$,jsprops){
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3(this$,jsprops,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent.impl.template.input_render_setup.cljs$lang$maxFixedArity = 3);

reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__23616 = x;
switch (G__23616) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.reagent_synthetic_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2(this$,jsprops);

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : reagent.impl.template.make_element.call(null, argv,comp,jsprops,first_child));
})], null);
reagent.impl.template.synthetic_input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentSyntheticInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (on_update,on_change,argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3(this$,jsprops,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932),on_update,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537),on_change], null));

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : reagent.impl.template.make_element.call(null, argv,comp,jsprops,first_child));
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
(reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec));
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.reagent_synthetic_input = (function reagent$impl$template$reagent_synthetic_input(){
if((reagent.impl.template.reagent_synthetic_input_class == null)){
(reagent.impl.template.reagent_synthetic_input_class = reagent.impl.component.create_class(reagent.impl.template.synthetic_input_spec));
} else {
}

return reagent.impl.template.reagent_synthetic_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__23617 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23617,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e23620){var e = e23620;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__5806__auto__ = reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5806__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5806__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__5808__auto___23645 = reagent.impl.template.key_from_vec(v);
if((temp__5808__auto___23645 == null)){
} else {
var key_23646 = temp__5808__auto___23645;
(jsprops["key"] = key_23646);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(var_args){
var G__23622 = arguments.length;
switch (G__23622) {
case 2:
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,p__23623){
var map__23624 = p__23623;
var map__23624__$1 = cljs.core.__destructure_map(map__23624);
var synthetic_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23624__$1,new cljs.core.Keyword(null,"synthetic-input","synthetic-input",-135147697));
var on_update = new cljs.core.Keyword(null,"on-update","on-update",1680216496).cljs$core$IFn$_invoke$arity$1(synthetic_input);
var on_change = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(synthetic_input);
if(cljs.core.truth_(synthetic_input)){
if(cljs.core.fn_QMARK_(on_update)){
} else {
throw (new Error("Assert failed: (fn? on-update)"));
}

if(cljs.core.fn_QMARK_(on_change)){
} else {
throw (new Error("Assert failed: (fn? on-change)"));
}
} else {
}

var wrapped = (function (){var G__23625 = reagent.impl.template.__GT_NativeWrapper();
(G__23625["name"] = c);

(G__23625["id"] = null);

(G__23625["class"] = null);

return G__23625;
})();
var wrapped__$1 = (cljs.core.truth_(synthetic_input)?(function (){var G__23626 = wrapped;
(G__23626["syntheticInput"] = true);

return G__23626;
})():wrapped);
var wrapped__$2 = (cljs.core.truth_(synthetic_input)?(function (){var G__23627 = wrapped__$1;
(G__23627["syntheticOnChange"] = on_change);

return G__23627;
})():wrapped__$1);
var wrapped__$3 = (cljs.core.truth_(synthetic_input)?(function (){var G__23628 = wrapped__$2;
(G__23628["syntheticOnUpdate"] = on_update);

return G__23628;
})():wrapped__$2);
return wrapped__$3;
}));

(reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent.impl.template.adapt_react_class.cljs$lang$maxFixedArity = 2);

reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__5806__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__5806__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag(x));
} else {
var s = temp__5806__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var synthetic_input = (parsed["syntheticInput"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(cljs.core.truth_((function (){var or__5002__auto__ = synthetic_input;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reagent.impl.template.input_component_QMARK_(comp);
}
})())){
var G__23629 = cljs.core.with_meta((cljs.core.truth_(synthetic_input)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_synthetic_input(),(parsed["syntheticOnUpdate"]),(parsed["syntheticOnChange"]),argv,comp,jsprops,first_child], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null)),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__23629) : reagent.impl.template.as_element.call(null, G__23629));
} else {
var key = reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset(jsprops,"key",key));
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : reagent.impl.template.make_element.call(null, argv,comp,p,first_child));
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = reagent.impl.util.fun_name(x);
var G__23631 = n;
switch (G__23631) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll));

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23653 = arguments.length;
var i__5727__auto___23654 = (0);
while(true){
if((i__5727__auto___23654 < len__5726__auto___23653)){
args__5732__auto__.push((arguments[i__5727__auto___23654]));

var G__23656 = (i__5727__auto___23654 + (1));
i__5727__auto___23654 = G__23656;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",reagent.impl.template.str_coll(v),"\n",reagent.impl.component.comp_name()].join('');
}));

(reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq23632){
var G__23633 = cljs.core.first(seq23632);
var seq23632__$1 = cljs.core.next(seq23632);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23633,seq23632__$1);
}));

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__23634 = pos;
switch (G__23634) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_(comp)))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected React component in"], 0)),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__23659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null);
v = G__23659;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1));
} else {
return reagent.impl.template.reag_element(tag,v);

}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : reagent.impl.template.expand_seq_check.call(null, x));

} else {
if(reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
(reagent.impl.component.as_element = reagent.impl.template.as_element);
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__5593__auto___23660 = a.length;
var i_23661 = (0);
while(true){
if((i_23661 < n__5593__auto___23660)){
(a[i_23661] = reagent.impl.template.as_element((a[i_23661])));

var G__23662 = (i_23661 + (1));
i_23661 = G__23662;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__5593__auto___23663 = a.length;
var i_23664 = (0);
while(true){
if((i_23664 < n__5593__auto___23663)){
var val_23666 = (a[i_23664]);
if(((cljs.core.vector_QMARK_(val_23666)) && ((reagent.impl.template.key_from_vec(val_23666) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_23664] = reagent.impl.template.as_element(val_23666));

var G__23670 = (i_23664 + (1));
i_23664 = G__23670;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__23636 = reagent.ratom.check_derefs((function (){
return reagent.impl.template.expand_seq_dev(x,ctx);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23636,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23636,(1),null);
if(cljs.core.truth_(derefed)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__23639 = (cljs.core.count(argv) - first_child);
switch (G__23639) {
case (0):
return module$node_modules$react$index.createElement(comp,jsprops);

break;
case (1):
return module$node_modules$react$index.createElement(comp,jsprops,reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
}),[comp,jsprops],argv));

}
});

//# sourceMappingURL=reagent.impl.template.js.map

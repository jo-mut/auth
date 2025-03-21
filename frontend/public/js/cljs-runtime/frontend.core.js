goog.provide('frontend.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
frontend.core.floating_shapes = (function frontend$core$floating_shapes(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.floating_shape.view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),"w-64 h-64",new cljs.core.Keyword(null,"color","color",1011675173),"bg-orange-500",new cljs.core.Keyword(null,"top","top",-1856271961),"-5%",new cljs.core.Keyword(null,"left","left",-399115937),"10%",new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.floating_shape.view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),"w-48 h-48",new cljs.core.Keyword(null,"color","color",1011675173),"bg-emerald-500",new cljs.core.Keyword(null,"top","top",-1856271961),"70%",new cljs.core.Keyword(null,"left","left",-399115937),"80%",new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.floating_shape.view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),"w-32 h-32",new cljs.core.Keyword(null,"color","color",1011675173),"bg-yellow-500",new cljs.core.Keyword(null,"top","top",-1856271961),"40%",new cljs.core.Keyword(null,"left","left",-399115937),"-10%",new cljs.core.Keyword(null,"delay","delay",-574225219),(0)], null)], null)], null);
});
frontend.core.checking_auth = (function frontend$core$checking_auth(){
return frontend.api.core.check_auth().then((function (auth_state){
return console.log("is user authenticated",auth_state);
}));
});
frontend.core.redirect_authenticated_user = (function frontend$core$redirect_authenticated_user(children){
var map__23396 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-auth-data","get-auth-data",-1689545573)], null)));
var map__23396__$1 = cljs.core.__destructure_map(map__23396);
var authenticated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_((function (){var and__5000__auto__ = authenticated_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"is-verified","is-verified",-2036107091).cljs$core$IFn$_invoke$arity$1(user);
} else {
return and__5000__auto__;
}
})())){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Navigate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"/",new cljs.core.Keyword(null,"replace","replace",-786587770),cljs.core.replace], null)], null));
} else {
return children;
}
});
frontend.core.protected_routes = (function frontend$core$protected_routes(children){
var map__23397 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-auth-data","get-auth-data",-1689545573)], null)));
var map__23397__$1 = cljs.core.__destructure_map(map__23397);
var authenticated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23397__$1,new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23397__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return children;

});
frontend.core.app_routes = (function frontend$core$app_routes(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Routes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"element","element",1974019749),frontend.core.protected_routes(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.pages.home.view], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/signup",new cljs.core.Keyword(null,"element","element",1974019749),frontend.core.redirect_authenticated_user(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.pages.sign_up.view], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/verify-email",new cljs.core.Keyword(null,"element","element",1974019749),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.pages.email_verification.view], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/forgot-password",new cljs.core.Keyword(null,"element","element",1974019749),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.pages.forgot_password.view], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/reset-password",new cljs.core.Keyword(null,"element","element",1974019749),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.pages.reset_password.view], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/login",new cljs.core.Keyword(null,"element","element",1974019749),frontend.core.redirect_authenticated_user(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.pages.login.view], null)))], null)], null)], null);
});
frontend.core.app = (function frontend$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_router_dom$dist$main.BrowserRouter,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-emerald-900 \n                      flex items-center justify-center relative overflow-hidden"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.floating_shapes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.app_routes], null)], null)], null);
});
frontend.core.init = (function frontend$core$init(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729)], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.app], null),document.getElementById("root"));
});
goog.exportSymbol('frontend.core.init', frontend.core.init);

//# sourceMappingURL=frontend.core.js.map

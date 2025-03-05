goog.provide('frontend.events');
frontend.events.app_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),false,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"checkingAuth?","checkingAuth?",1126626962),true], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),frontend.events.app_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),(function (p__15286,p__15287){
var map__15288 = p__15286;
var map__15288__$1 = cljs.core.__destructure_map(map__15288);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15288__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15289 = p__15287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15289,(0),null);
var auth_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15289,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"user","user",1532431356)], null),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(auth_object)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(auth_object)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123)], null),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123).cljs$core$IFn$_invoke$arity$1(auth_object))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),(function (p__15292,p__15293){
var map__15294 = p__15292;
var map__15294__$1 = cljs.core.__destructure_map(map__15294);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15294__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15295 = p__15293;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"error","error",-978969032)], null),error)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-loading-state","update-loading-state",1480978253),(function (p__15298,p__15299){
var map__15300 = p__15298;
var map__15300__$1 = cljs.core.__destructure_map(map__15300);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15300__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15301 = p__15299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_)], null);
}));

//# sourceMappingURL=frontend.events.js.map

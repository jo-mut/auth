goog.provide('frontend.events');
frontend.events.app_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),false,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"checking-auth?","checking-auth?",-1178213684),true,new cljs.core.Keyword(null,"password-reset?","password-reset?",-210988501),false,new cljs.core.Keyword(null,"reset-link-sent?","reset-link-sent?",485835087),false], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),frontend.events.app_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),(function (p__15973,p__15974){
var map__15975 = p__15973;
var map__15975__$1 = cljs.core.__destructure_map(map__15975);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15975__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15976 = p__15974;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15976,(0),null);
var auth_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15976,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926)], null),cljs.core.merge,auth_object)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),(function (p__15979,p__15980){
var map__15981 = p__15979;
var map__15981__$1 = cljs.core.__destructure_map(map__15981);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15981__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15982 = p__15980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15982,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15982,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"error","error",-978969032)], null),error)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checking-auth","checking-auth",-1406474543),(function (p__15985,p__15986){
var map__15987 = p__15985;
var map__15987__$1 = cljs.core.__destructure_map(map__15987);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15987__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15988 = p__15986;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"checking-auth?","checking-auth?",-1178213684)], null),error)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-loading-state","update-loading-state",1480978253),(function (p__15991,p__15992){
var map__15993 = p__15991;
var map__15993__$1 = cljs.core.__destructure_map(map__15993);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15993__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__15994 = p__15992;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15994,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_)], null);
}));

//# sourceMappingURL=frontend.events.js.map

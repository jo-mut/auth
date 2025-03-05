goog.provide('frontend.events');
frontend.events.app_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),false,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"checking-auth?","checking-auth?",-1178213684),true], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),frontend.events.app_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),(function (p__20520,p__20521){
var map__20522 = p__20520;
var map__20522__$1 = cljs.core.__destructure_map(map__20522);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20522__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20523 = p__20521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523,(0),null);
var auth_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926)], null),cljs.core.merge,auth_object)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),(function (p__20526,p__20527){
var map__20528 = p__20526;
var map__20528__$1 = cljs.core.__destructure_map(map__20528);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20528__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20529 = p__20527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20529,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20529,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"error","error",-978969032)], null),error)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checking-auth","checking-auth",-1406474543),(function (p__20532,p__20533){
var map__20534 = p__20532;
var map__20534__$1 = cljs.core.__destructure_map(map__20534);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20534__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20535 = p__20533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20535,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20535,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"checking-auth?","checking-auth?",-1178213684)], null),error)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-loading-state","update-loading-state",1480978253),(function (p__20538,p__20539){
var map__20540 = p__20538;
var map__20540__$1 = cljs.core.__destructure_map(map__20540);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20540__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20541 = p__20539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20541,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_)], null);
}));

//# sourceMappingURL=frontend.events.js.map

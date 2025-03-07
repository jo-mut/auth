goog.provide('frontend.events');
frontend.events.app_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),false,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"checking-auth?","checking-auth?",-1178213684),true,new cljs.core.Keyword(null,"password-reset?","password-reset?",-210988501),false,new cljs.core.Keyword(null,"reset-link-sent?","reset-link-sent?",485835087),false], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-app-db","init-app-db",-1099028729),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),frontend.events.app_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),(function (p__23278,p__23279){
var map__23280 = p__23278;
var map__23280__$1 = cljs.core.__destructure_map(map__23280);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23280__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23281 = p__23279;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23281,(0),null);
var auth_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23281,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926)], null),cljs.core.merge,auth_object)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),(function (p__23286,p__23287){
var map__23289 = p__23286;
var map__23289__$1 = cljs.core.__destructure_map(map__23289);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23289__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23290 = p__23287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"error","error",-978969032)], null),error)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checking-auth","checking-auth",-1406474543),(function (p__23293,p__23294){
var map__23295 = p__23293;
var map__23295__$1 = cljs.core.__destructure_map(map__23295);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23295__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23296 = p__23294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"checking-auth?","checking-auth?",-1178213684)], null),error)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-loading-state","update-loading-state",1480978253),(function (p__23302,p__23303){
var map__23304 = p__23302;
var map__23304__$1 = cljs.core.__destructure_map(map__23304);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23304__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23305 = p__23303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23305,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23305,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_)], null);
}));

//# sourceMappingURL=frontend.events.js.map

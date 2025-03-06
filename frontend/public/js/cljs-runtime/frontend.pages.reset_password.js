goog.provide('frontend.pages.reset_password');
var module$node_modules$framer_motion$dist$cjs$index=shadow.js.require("module$node_modules$framer_motion$dist$cjs$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$lucide_react$dist$cjs$lucide_react=shadow.js.require("module$node_modules$lucide_react$dist$cjs$lucide_react", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
frontend.pages.reset_password.handle_reset_password = (function frontend$pages$reset_password$handle_reset_password(password){
var navigate = module$node_modules$react_router_dom$dist$main.useNavigate();
var params = module$node_modules$react_router_dom$dist$main.useParams();
return (function (){var G__17186 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(params);
var G__17187 = password;
return (frontend.api.core.reset_passwrod.cljs$core$IFn$_invoke$arity$2 ? frontend.api.core.reset_passwrod.cljs$core$IFn$_invoke$arity$2(G__17186,G__17187) : frontend.api.core.reset_passwrod.call(null, G__17186,G__17187));
})().then((function (){
return (navigate.cljs$core$IFn$_invoke$arity$1 ? navigate.cljs$core$IFn$_invoke$arity$1("/reset-password") : navigate.call(null, "/reset-password"));
}));
});
frontend.pages.reset_password.f_view = (function frontend$pages$reset_password$f_view(props){
var vec__17188 = module$node_modules$react$index.useState("");
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17188,(0),null);
var set_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17188,(1),null);
var vec__17191 = module$node_modules$react$index.useState("");
var confirm_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17191,(0),null);
var set_confirm_password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17191,(1),null);
var vec__17194 = module$node_modules$react$index.useState("");
var confirm_password_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17194,(0),null);
var set_confirm_password_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17194,(1),null);
var map__17197 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-auth-data","get-auth-data",-1689545573)], null)));
var map__17197__$1 = cljs.core.__destructure_map(map__17197);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17197__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17197__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$framer_motion$dist$cjs$index.motion.div,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),0.5], null),new cljs.core.Keyword(null,"className","className",-1983287057),"max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter \n                    backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"p-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-3xl mb-6 font-bold text-center bg-gradient-to-r from-orange-400 \n                          to-emerald-500 text-transparent bg-clip-text"], null),"Reset Password"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(password,confirm_password)){
return (set_confirm_password_error.cljs$core$IFn$_invoke$arity$1 ? set_confirm_password_error.cljs$core$IFn$_invoke$arity$1("Password does not match") : set_confirm_password_error.call(null, "Password does not match"));
} else {
return frontend.pages.reset_password.handle_reset_password(password);
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.input.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$lucide_react$dist$cjs$lucide_react.Lock,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"sub-type","sub-type",-997954412),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-100 rounded-lg \n                       border border-gray-700 focus:border-orange-500 focus:ring-2 \n                       focus:ring-orange-500 text-white placeholder-gray-400 transition duration-200",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__17198 = e.target.value;
return (set_password.cljs$core$IFn$_invoke$arity$1 ? set_password.cljs$core$IFn$_invoke$arity$1(G__17198) : set_password.call(null, G__17198));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.input.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"icon","icon",1679606541),module$node_modules$lucide_react$dist$cjs$lucide_react.Lock,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Confirm new password",new cljs.core.Keyword(null,"value","value",305978217),confirm_password,new cljs.core.Keyword(null,"sub-type","sub-type",-997954412),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"class-name","class-name",945142584),"w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-100 rounded-lg \n                              border border-gray-700 focus:border-orange-500 focus:ring-2 \n                              focus:ring-orange-500 text-white placeholder-gray-400 transition duration-200",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__17199 = e.target.value;
return (set_confirm_password.cljs$core$IFn$_invoke$arity$1 ? set_confirm_password.cljs$core$IFn$_invoke$arity$1(G__17199) : set_confirm_password.call(null, G__17199));
})], null)], null),(cljs.core.truth_((function (){var or__5002__auto__ = error;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return confirm_password_error;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-red-500 font-semibold mb-2"], null),(function (){var or__5002__auto__ = error;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return confirm_password_error;
}
})()], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$framer_motion$dist$cjs$index.motion.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"mt-3 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white \n                           font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none \n                           focus:ring-2 focus:ring-orange-500 focus:fing-offset-2 focus:ring-offset-gray-900 transition \n                           duration-200",new cljs.core.Keyword(null,"whileHover","whileHover",-678588413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.02], null),new cljs.core.Keyword(null,"whileTop","whileTop",340419246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),0.98], null),new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),(cljs.core.truth_(loading_QMARK_)?"Resetting ...":"Set New Password")], null)], null)], null)], null);
});
frontend.pages.reset_password.view = (function frontend$pages$reset_password$view(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),frontend.pages.reset_password.f_view,props], null);
});

//# sourceMappingURL=frontend.pages.reset_password.js.map

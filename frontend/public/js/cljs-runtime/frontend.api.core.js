goog.provide('frontend.api.core');
frontend.api.core.url = "http://localhost:3000/api/auth";
frontend.api.core.sign_up = (function frontend$api$core$sign_up(name,email,password){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-loading-state","update-loading-state",1480978253),true], null));

return fetch([frontend.api.core.url,"/signup"].join(''),({"method": "POST", "headers": ({"Content-Type": "application/json", "Accept": "application/json"}), "body": JSON.stringify(({"email": email, "password": password, "name": name}))})).then((function (response){
console.log(response);

if(cljs.core.truth_(response.ok)){
return response.json();
} else {
throw Error("Failed to fetch sign up data");
}
})).then((function (data){
console.log("sign up response data ",data);

data.message;

var auth = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data.user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),true,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),auth], null));
})).catch((function (error){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),error], null));

throw Error("Failed to fetch data");
}));
});
frontend.api.core.login = (function frontend$api$core$login(email,password){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-loading-state","update-loading-state",1480978253),true], null));

return fetch([frontend.api.core.url,"/login"].join(''),({"method": "POST", "headers": ({"Content-Type": "application/json", "Accept": "application/json"}), "body": JSON.stringify(({"email": email, "password": password}))})).then((function (response){
console.log(response);

if(cljs.core.truth_(response.ok)){
return response.json();
} else {
throw Error("Failed to fetch login data");
}
})).then((function (data){
data.message;

var auth = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data.user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),true,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),auth], null));
})).catch((function (error){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),error], null));

throw Error("Failed to fetch login data");
}));
});
frontend.api.core.verify_email = (function frontend$api$core$verify_email(verification_code){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033)], null));

return fetch([frontend.api.core.url,"/verify-email"].join(''),({"method": "POST", "headers": ({"Content-Type": "application/json", "Accept": "application/json"}), "body": JSON.stringify(({"code": verification_code}))})).then((function (response){
if(cljs.core.truth_(response.ok)){
return response.json();
} else {
throw Error("Failed to fetch verification data");
}
})).then((function (data){
data.message;

var auth = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data.user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),true,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),auth], null));
})).catch((function (error){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),error], null));

throw Error("Failed to fetch data");
}));
});
frontend.api.core.check_auth = (function frontend$api$core$check_auth(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checking-auth","checking-auth",-1406474543)], null));

return fetch([frontend.api.core.url,"/check-auth"].join('')).then((function (response){
if(cljs.core.truth_(response.ok)){
return response.json();
} else {
throw Error("Failed to fetch auth status");
}
})).then((function (data){
data.message;

var auth = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data.user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),true,new cljs.core.Keyword(null,"checking-auth","checking-auth",-1406474543),false,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),auth], null));
})).catch((function (error){
throw Error("Failed to fetch data",error);
}));
});

//# sourceMappingURL=frontend.api.core.js.map

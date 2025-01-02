goog.provide('backend.controllers.auth_controllers');
backend.controllers.auth_controllers.get_env = (function backend$controllers$auth_controllers$get_env(key){
return (process.env[key]);
});
backend.controllers.auth_controllers.generate_token = (function backend$controllers$auth_controllers$generate_token(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((backend.utils.number.math.random() * (900000)) + (100000)).floor(backend.utils.number.math));
});
backend.controllers.auth_controllers.generate_token_and_set_cookies = (function backend$controllers$auth_controllers$generate_token_and_set_cookies(res,payload,secret){
var options = ({"expiresIn": "7d"});
var map__12659 = payload;
var map__12659__$1 = cljs.core.__destructure_map(map__12659);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12659__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var token = (function (){var fexpr__12660 = backend.controllers.auth_controllers.jwt.sign();
return (fexpr__12660.cljs$core$IFn$_invoke$arity$3 ? fexpr__12660.cljs$core$IFn$_invoke$arity$3(user_id,secret,options) : fexpr__12660.call(null, user_id,secret,options));
})();
var G__12662_12668 = "auth";
var G__12663_12669 = token;
var G__12664_12670 = ({"httpOnly": true, "secure": cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(backend.controllers.auth_controllers.get_env("NODE_ENV"),"production"), "sameSite": "strict", "maxAge": (((((7) * (24)) * (60)) * (60)) * (1000))});
var fexpr__12661_12671 = res.cookie();
(fexpr__12661_12671.cljs$core$IFn$_invoke$arity$3 ? fexpr__12661_12671.cljs$core$IFn$_invoke$arity$3(G__12662_12668,G__12663_12669,G__12664_12670) : fexpr__12661_12671.call(null, G__12662_12668,G__12663_12669,G__12664_12670));

return token;
});
backend.controllers.auth_controllers.sign_up = (function backend$controllers$auth_controllers$sign_up(res,p__12665){
var map__12666 = p__12665;
var map__12666__$1 = cljs.core.__destructure_map(map__12666);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12666__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12666__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12666__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var hashed_password = shadow.js.shim.module$bcryptjs.hash(password,(10));
var token_expires_at = ((((backend.utils.number.date + (24)) * (60)) * (60)) * (1000));
var verification_token = backend.controllers.auth_controllers.generate_token();
var user = (new backend.models.user_models.user(({"email": email, "password": hashed_password, "name": name, "token-expires-at": token_expires_at, "verification-token": verification_token})));
var new_user = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(user,new cljs.core.Keyword(null,"password","password",417022471),null);
user.save().then((function (user__$1){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["User saved successfully",user__$1], 0));
})).catch((function (err){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error while saving the user",err], 0));
}));

backend.controllers.auth_controllers.generate_token_and_set_cookies(res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user._id], null),backend.controllers.auth_controllers.get_env("JWT_SECRET"));

return res.json((201).status(),({"success": true, "message": "User created successfully", "user": new_user}));
});
backend.controllers.auth_controllers.handle_sign_up = (function backend$controllers$auth_controllers$handle_sign_up(){
return (function (req,res){
var map__12667 = req;
var map__12667__$1 = cljs.core.__destructure_map(map__12667);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12667__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12667__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12667__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_((function (){var or__5002__auto__ = email;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = password;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return name;
}
}
})())){
var user_exist_QMARK_ = backend.models.user_models.user.findOne(email);
if(cljs.core.truth_(user_exist_QMARK_)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["User already exists"], 0));
} else {
return backend.controllers.auth_controllers.sign_up(res,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
}
} else {
return null;
}
});
});
backend.controllers.auth_controllers.login = (function backend$controllers$auth_controllers$login(){
return (function (req,res){
return res.send("log in route");
});
});
backend.controllers.auth_controllers.logout = (function backend$controllers$auth_controllers$logout(){
return (function (req,res){
return res.send("log out route");
});
});

//# sourceMappingURL=backend.controllers.auth_controllers.js.map

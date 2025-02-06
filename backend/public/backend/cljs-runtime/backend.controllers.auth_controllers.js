goog.provide('backend.controllers.auth_controllers');
backend.controllers.auth_controllers.get_env = (function backend$controllers$auth_controllers$get_env(key){
return (process.env[key]);
});
backend.controllers.auth_controllers.generate_token = (function backend$controllers$auth_controllers$generate_token(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((Math.random() * (900000)) + (100000))));
});
backend.controllers.auth_controllers.generate_token_and_set_cookies = (function backend$controllers$auth_controllers$generate_token_and_set_cookies(res,user_id,secret){
var options = ({"expiresIn": "7d"});
var token = shadow.js.shim.module$jsonwebtoken.sign(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id], null)),secret,options);
res.cookie("auth",token,({"httpOnly": true, "secure": false, "sameSite": "strict", "maxAge": (((((7) * (24)) * (60)) * (60)) * (1000))}));

return token;
});
backend.controllers.auth_controllers.handle_sign_up = (function backend$controllers$auth_controllers$handle_sign_up(res,p__12142){
var map__12143 = p__12142;
var map__12143__$1 = cljs.core.__destructure_map(map__12143);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12143__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12143__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var token_expires_at = (((((24) * (60)) * (60)) * (1000)) + Date.now());
var verification_token = backend.controllers.auth_controllers.generate_token();
return shadow.js.shim.module$bcryptjs.hash(password,(10)).then((function (hashed_password){
var user = (new backend.models.user_models.user(({"email": email, "password": hashed_password, "name": name, "verificationTokenExpiredAt": token_expires_at, "verificationToken": verification_token})));
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___11991__auto__){
return promesa.protocols._bind(promesa.protocols._promise(user.save()),(function (saved_user){
return promesa.protocols._bind(promesa.protocols._promise(console.log("saved user: ",saved_user)),(function (___11959__auto__){
return promesa.protocols._bind(promesa.protocols._promise((saved_user.password = null)),(function (___11959__auto____$1){
return promesa.protocols._bind(promesa.protocols._promise(backend.controllers.auth_controllers.generate_token_and_set_cookies(res,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(saved_user)),"mysecret")),(function (___11959__auto____$2){
return promesa.protocols._bind(promesa.protocols._promise(res.status((201)).json(({"success": true, "message": "User created successfully", "user": cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(saved_user)}))),(function (___11959__auto____$3){
return promesa.protocols._promise(promesa.core.catch$((function (err){
return res.status((500)).json(({"success": false, "message": "Error saving user", "error": err.message}));
})));
}));
}));
}));
}));
}));
}));
})).catch((function (err){
return res.status((500)).json(({"success": false, "message": "Error hashing password", "error": err.message}));
}));
});
backend.controllers.auth_controllers.sign_up = (function backend$controllers$auth_controllers$sign_up(){
return (function (req,res){
var body = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(req.body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__12144 = body;
var map__12144__$1 = cljs.core.__destructure_map(map__12144);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12144__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12144__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res], 0));

return promesa.protocols._bind(promesa.protocols._promise(null),(function (___11991__auto__){
return promesa.protocols._bind(promesa.protocols._promise(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(backend.models.user_models.user.findOne(({"email": email})))),(function (user_exist_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(user_exist_QMARK_)?res.status((400)).json(({"success": false, "message": "User already exists"})):(function (){try{return backend.controllers.auth_controllers.handle_sign_up(res,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
}catch (e12145){var e = e12145;
return res.status((500)).json(({"success": false, "message": e.message}));
}})()));
}));
}));
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

goog.provide('backend.controllers.auth_controllers');
backend.controllers.auth_controllers.get_env = (function backend$controllers$auth_controllers$get_env(key){
return (process.env[key]);
});
backend.controllers.auth_controllers.generate_token = (function backend$controllers$auth_controllers$generate_token(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((Math.random() * (900000)) + (100000))));
});
backend.controllers.auth_controllers.generate_token_and_set_cookies = (function backend$controllers$auth_controllers$generate_token_and_set_cookies(res,user_id){
var secret = "mysecret";
var options = ({"expiresIn": "7d"});
var token = shadow.js.shim.module$jsonwebtoken.sign(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id], null)),secret,options);
res.cookie("auth",token,({"httpOnly": true, "secure": false, "sameSite": "strict", "maxAge": (((((7) * (24)) * (60)) * (60)) * (1000))}));

return token;
});
backend.controllers.auth_controllers.handle_sign_up = (function backend$controllers$auth_controllers$handle_sign_up(res,p__12158){
var map__12159 = p__12158;
var map__12159__$1 = cljs.core.__destructure_map(map__12159);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12159__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12159__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12159__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var token_expires_at = (((((24) * (60)) * (60)) * (1000)) + Date.now());
var verification_token = backend.controllers.auth_controllers.generate_token();
return shadow.js.shim.module$bcryptjs.hash(password,(10)).then((function (hashed_password){
var user = (new backend.db.models.user_models.user(({"email": email, "password": hashed_password, "name": name, "verificationTokenExpiredAt": token_expires_at, "verificationToken": verification_token})));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(promesa.protocols._promise(null),(function (___11991__auto__){
return promesa.protocols._bind(promesa.protocols._promise(user.save()),(function (saved_user){
return promesa.protocols._bind(promesa.protocols._promise((saved_user.password = null)),(function (___11959__auto__){
return promesa.protocols._bind(promesa.protocols._promise(backend.controllers.auth_controllers.generate_token_and_set_cookies(res,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(saved_user)))),(function (___11959__auto____$1){
return promesa.protocols._bind(promesa.protocols._promise(backend.mailtrap.emails.send_verification_email(backend.controllers.auth_controllers.get_env("EMAIL"),verification_token)),(function (___11959__auto____$2){
return promesa.protocols._promise(res.status((201)).json(({"success": true, "message": "User created successfully", "user": cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(saved_user)})));
}));
}));
}));
}));
})),(function (err){
return res.status((500)).json(({"success": false, "message": "Error saving user", "error": err.message}));
}));
})).catch((function (err){
return res.status((500)).json(({"success": false, "message": "Error hashing password", "error": err.message}));
}));
});
backend.controllers.auth_controllers.sign_up = (function backend$controllers$auth_controllers$sign_up(){
return (function (req,res){
var body = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(req.body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__12160 = body;
var map__12160__$1 = cljs.core.__destructure_map(map__12160);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12160__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12160__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res], 0));

return promesa.protocols._bind(promesa.protocols._promise(null),(function (___11991__auto__){
return promesa.protocols._bind(promesa.protocols._promise(backend.db.models.user_models.user.findOne(({"email": email}))),(function (user_exist_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(user_exist_QMARK_)?res.status((400)).json(({"success": false, "message": "User already exists"})):(function (){try{return backend.controllers.auth_controllers.handle_sign_up(res,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"name","name",1843675177),name], null));
}catch (e12161){var e = e12161;
return res.status((500)).json(({"success": false, "message": e.message}));
}})()));
}));
}));
});
});
backend.controllers.auth_controllers.isPasswordValid = (function backend$controllers$auth_controllers$isPasswordValid(res,password,user){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(shadow.js.shim.module$bcryptjs.compare(password,user.password),(function (isPasswordValid){
if(cljs.core.truth_(isPasswordValid)){
return null;
} else {
return res.status((400)).json(({"success": false, "message": "Invalid password"}));
}
}));
});
backend.controllers.auth_controllers.login = (function backend$controllers$auth_controllers$login(){
return (function (req,res){
var body = req.body;
var email = body.email;
var password = body.password;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(promesa.protocols._promise(null),(function (___11991__auto__){
return promesa.protocols._bind(promesa.protocols._promise(backend.db.models.user_models.user.findOne(({"email": email}))),(function (user){
return promesa.protocols._promise((cljs.core.truth_(user)?(function (){
backend.controllers.auth_controllers.isPasswordValid(res,password,user);

backend.controllers.auth_controllers.generate_token_and_set_cookies(res,user._id);

(user.lastLogin = (new Date()));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(user.save(),(function (_){
(user.password = null);

return res.status((200)).json(({"success": true, "message": "Logged in successfully", "user": user}));
}));
})()
:res.status((400)).json(({"subject": false, "message": "Invalid credentials"}))));
}));
})),(function (e){
return res.status((200)).json(({"success": true, "message": e.message}));
}));
});
});
backend.controllers.auth_controllers.logout = (function backend$controllers$auth_controllers$logout(){
return (function (req,res){
res.clearCookie("token");

return res.status((200)).json(({"success": true, "message": "Logged out successfully"}));
});
});
backend.controllers.auth_controllers.verify_email = (function backend$controllers$auth_controllers$verify_email(){
return (function (req,res){
var body = req.body;
var code = body.code;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._bind(promesa.protocols._promise(null),(function (___11991__auto__){
return promesa.protocols._bind(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(backend.db.models.user_models.user.findOne(({"verificationToken": code, "verificationTokenExpiredAt": ({"$gt": Date.now()})})),(function (e){
return console.log("user not found ",e);
}))),(function (user){
return promesa.protocols._bind(promesa.protocols._promise((cljs.core.truth_(user)?null:res.status((400)).json(({"subject": false, "message": "Invalid or expired verification code"})))),(function (___11959__auto__){
return promesa.protocols._bind(promesa.protocols._promise((user.isVerified = true)),(function (___11959__auto____$1){
return promesa.protocols._bind(promesa.protocols._promise((user.verificationToken = null)),(function (___11959__auto____$2){
return promesa.protocols._bind(promesa.protocols._promise((user.verificationTokenExpiredAt = null)),(function (___11959__auto____$3){
return promesa.protocols._promise(promesa.core.then.cljs$core$IFn$_invoke$arity$2(user.save(),(function (_){
backend.mailtrap.emails.send_welcome_email(user.email,user.name);

(user.password = null);

return res.status((200)).json(({"subject": true, "message": "Email verified successfully", "user": user}));
})));
}));
}));
}));
}));
}));
})),(function (e){
return res.status((500)).json(({"success": false, "message": e.message}));
}));
});
});

//# sourceMappingURL=backend.controllers.auth_controllers.js.map

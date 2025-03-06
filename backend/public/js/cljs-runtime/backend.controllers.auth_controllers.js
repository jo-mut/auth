goog.provide('backend.controllers.auth_controllers');
backend.controllers.auth_controllers.generate_token_and_set_cookies = (function backend$controllers$auth_controllers$generate_token_and_set_cookies(res,user_id){
var secret = "mysecret";
var options = ({"expiresIn": "7d"});
var token = shadow.js.shim.module$jsonwebtoken.sign(({"user-id": user_id}),secret,options);
res.cookie("auth",token,({"httpOnly": true, "secure": false, "sameSite": "strict", "maxAge": (((((7) * (24)) * (60)) * (60)) * (1000))}));

return token;
});
backend.controllers.auth_controllers.check_auth = (function backend$controllers$auth_controllers$check_auth(){
return (function (req,res){
return backend.db.models.user_models.user.findById(req.userId).then((function (user){
if(cljs.core.truth_(user)){
(user.password = null);

return res.status((200)).json(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"user","user",1532431356),user], null));
} else {
return res.status((400)).json(({"success": false, "message": "Invalid password"}));
}
})).catch((function (e){
return res.status((400)).json(({"success": false, "message": e.message}));
}));
});
});
backend.controllers.auth_controllers.handle_sign_up = (function backend$controllers$auth_controllers$handle_sign_up(res,p__13735){
var map__13736 = p__13735;
var map__13736__$1 = cljs.core.__destructure_map(map__13736);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13736__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13736__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var token_expires_at = (((((24) * (60)) * (60)) * (1000)) + Date.now());
var verification_token = backend.utils.core.generate_code();
return shadow.js.shim.module$bcryptjs.hash(password,(10)).then((function (hashed_password){
var user = (new backend.db.models.user_models.user(({"email": email, "password": hashed_password, "name": name, "verificationTokenExpiredAt": token_expires_at, "verificationToken": verification_token})));
return user.save();
})).then((function (user){
(user.password = null);

backend.controllers.auth_controllers.generate_token_and_set_cookies(res,user._id);

backend.mailtrap.emails.send_verification_email(backend.utils.core.get_env("EMAIL"),verification_token);

return res.status((201)).json(({"success": true, "message": "User created successfully", "user": cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(user)}));
})).catch((function (err){
return res.status((500)).json(({"success": false, "message": "Error saving user", "error": err.message}));
}));
});
backend.controllers.auth_controllers.sign_up = (function backend$controllers$auth_controllers$sign_up(){
return (function (req,res){
var body = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(req.body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__13737 = body;
var map__13737__$1 = cljs.core.__destructure_map(map__13737);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"password","password",417022471));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return backend.db.models.user_models.user.findOne(({"email": email})).then((function (user){
if(cljs.core.truth_(user)){
return res.status((400)).json(({"success": false, "message": "User already exists"}));
} else {
return backend.controllers.auth_controllers.handle_sign_up(res,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"name","name",1843675177),name], null)).catch((function (err){
return res.status((500)).json(({"success": false, "message": err.message}));
}));
}
})).catch((function (err){
return res.status((500)).json(({"success": false, "message": err.message}));
}));
});
});
backend.controllers.auth_controllers.isPasswordValid = (function backend$controllers$auth_controllers$isPasswordValid(res,password,user){
return shadow.js.shim.module$bcryptjs.compare(password,user.password).then((function (valid_password_QMARK_){
if(cljs.core.truth_(valid_password_QMARK_)){
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
return backend.db.models.user_models.user.findOne(({"email": email})).then((function (user){
if(cljs.core.truth_(user)){
} else {
res.status((400)).json(({"subject": false, "message": "Invalid credentials"}));
}

backend.controllers.auth_controllers.isPasswordValid(res,password,user);

backend.controllers.auth_controllers.generate_token_and_set_cookies(res,user._id);

(user.lastLogin = (new Date()));

return user.save().then((function (_){
(user.password = null);

return res.status((200)).json(({"success": true, "message": "Logged in successfully", "user": user}));
}));
})).catch((function (e){
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
return backend.db.models.user_models.user.findOne(({"verificationToken": code, "verificationTokenExpiredAt": ({"$gt": Date.now()})})).then((function (user){
if(cljs.core.truth_(user)){
} else {
res.status((400)).json(({"subject": false, "message": "Invalid or expired verification code"}));
}

(user.isVerified = true);

(user.verificationToken = null);

(user.verificationTokenExpiredAt = null);

return user.save().then((function (_){
backend.mailtrap.emails.send_welcome_email(user.email,user.name);

(user.password = null);

return res.status((200)).json(({"subject": true, "message": "Email verified successfully", "user": user}));
}));
})).catch((function (e){
return res.status((500)).json(({"success": false, "message": e.message}));
}));
});
});
backend.controllers.auth_controllers.forgot_password = (function backend$controllers$auth_controllers$forgot_password(){
return (function (req,res){
var body = req.body;
var email = body.email;
var token = shadow.js.shim.module$crypto.randomBytes((20)).toString("hex");
var expire_at = (((((1) * (60)) * (60)) * (1000)) + Date.now());
var reset_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(backend.utils.core.get_env("CLIENT_URL")),"/reset-password/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
return backend.db.models.user_models.user.findOne(({"email": email})).then((function (user){
if(cljs.core.truth_(user)){
} else {
res.status((400)).json(({"subject": false, "message": "User not found"}));
}

(user.resetPasswordToken = token);

(user.resetPasswordExpiredAt = expire_at);

return user.save().then((function (){
return backend.mailtrap.emails.send_password_reset_email(user.email,reset_url);
}));
})).catch((function (e){
return res.status((400)).json(({"success": false, "message": e.message}));
}));
});
});
backend.controllers.auth_controllers.reset_password = (function backend$controllers$auth_controllers$reset_password(){
return (function (req,res){
var body = req.body;
var params = req.params;
var token = params.token;
var password = body.password;
var hashed_password = shadow.js.shim.module$bcryptjs.hash(password,(10));
return backend.db.models.user_models.user.findOne(({"resetPasswordToken": token, "resetPasswordExpiredAt": ({"$gt": Date.now()})})).then((function (user){
if(cljs.core.truth_(user)){
} else {
res.status((400)).json(({"subject": false, "message": "User not found"}));
}

(user.password = hashed_password);

(user.resetPasswordToken = null);

(user.resetPasswordExpiredAt = null);

return user.save().then((function (){
return backend.mailtrap.emails.send_reset_password_success_email(user.email);
}));
})).catch((function (e){
return res.status((400)).json(({"success": false, "message": e.message}));
}));
});
});

//# sourceMappingURL=backend.controllers.auth_controllers.js.map

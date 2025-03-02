goog.provide('backend.middleware.verify_token');
backend.middleware.verify_token.verify_token = (function backend$middleware$verify_token$verify_token(){
return (function (req,res,next){
var token = req.cookies.token;
try{if(cljs.core.truth_(token)){
} else {
res.status((401)).json(({"success": false, "message": "Unauthorised - no token provided"}));
}

var decoded = shadow.js.shim.module$jsonwebtoken.verify(token,backend.utils.core.get_env("JWT_SECRET"));
if(cljs.core.truth_(decoded)){
} else {
res.status((401)).json(({"success": false, "message": "Unauthorised - no token provided"}));
}

(req.userId = decoded.userId);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null, ));
}catch (e11989){var e = e11989;
return res.status((500)).json(({"success": false, "message": "Server error"}));
}});
});

//# sourceMappingURL=backend.middleware.verify_token.js.map

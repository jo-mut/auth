goog.provide('frontend.api.core');
frontend.api.core.url = "http://localhost:3000/api/auth";
frontend.api.core.sign_up = (function frontend$api$core$sign_up(name,email,password){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-loading-state","update-loading-state",1480978253),true], null));

return fetch([frontend.api.core.url,"/signup"].join(''),({"method": "POST", "headers": ({"Content-Type": "application/json", "Accept": "application/json"}), "body": JSON.stringify(({"email": email, "password": password, "name": name}))})).then((function (response){
console.log(response);

if(cljs.core.truth_(response.ok)){
return response.json();
} else {
throw Error("Failed to fetch data");
}
})).then((function (data){
data.message;

var auth = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),data.user,new cljs.core.Keyword(null,"authenticated?","authenticated?",-1988130123),true,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-auth-response","save-auth-response",-2129202041),auth], null));
})).catch((function (error){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authentication-error","authentication-error",-1410602033),error], null));

throw Error("Failed to fetch data");
}));
});

//# sourceMappingURL=frontend.api.core.js.map

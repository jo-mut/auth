goog.provide('backend.db.connect_db');
backend.db.connect_db.connection_string = "mongodb+srv://jo_ngei:2078j.el@cluster0.l5plc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
backend.db.connect_db.get_env = (function backend$db$connect_db$get_env(){
return (process.env["MONGO_URI"]);
});
backend.db.connect_db.connect = (function backend$db$connect_db$connect(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(shadow.js.shim.module$mongoose.connect(backend.db.connect_db.connection_string),(function (conn){
return console.log("Database connection established");
})),(function (err){
console.log("Database connection failed",err);

return process.exit();
}));
});

//# sourceMappingURL=backend.db.connect_db.js.map

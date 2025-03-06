goog.provide('backend.db.connect_db');
backend.db.connect_db.connection_string = "mongodb+srv://jo_ngei:2078j.el@cluster0.l5plc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
backend.db.connect_db.connect = (function backend$db$connect_db$connect(){
return shadow.js.shim.module$mongoose.connect(backend.db.connect_db.connection_string).then((function (conn){
return console.log("Database connection established ",conn);
})).catch((function (err){
console.log("Database connection failed ",err);

return process.exit();
}));
});

//# sourceMappingURL=backend.db.connect_db.js.map

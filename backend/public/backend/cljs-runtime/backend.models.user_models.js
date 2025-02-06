goog.provide('backend.models.user_models');
backend.models.user_models.user_schema = shadow.js.shim.module$mongoose.Schema(({"verificationTokenExpiredAt": ({"type": Date}), "email": ({"type": String, "required": true, "unique": true}), "password": ({"type": String, "required": true}), "name": ({"type": String, "required": true}), "resetPasswordToken": ({"type": String}), "resetPasswordExpiredAt": ({"type": Date}), "isVerified": ({"type": Boolean, "default": false}), "verificationToken": ({"type": String}), "lastLogin": ({"type": Date, "default": Date.now})}),({"timestamps": true}));
backend.models.user_models.user = shadow.js.shim.module$mongoose.model("User",backend.models.user_models.user_schema);

//# sourceMappingURL=backend.models.user_models.js.map

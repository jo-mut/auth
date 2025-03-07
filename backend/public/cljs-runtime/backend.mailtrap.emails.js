goog.provide('backend.mailtrap.emails');
backend.mailtrap.emails.send_verification_email = (function backend$mailtrap$emails$send_verification_email(email,verification_token){
var recipients = [({"email": email})];
return backend.mailtrap.core.mailtrap_client.send(({"from": backend.mailtrap.core.sender, "to": recipients, "subject": "Verify your email!", "html": backend.mailtrap.email_templates.verification_email_template(verification_token), "category": "Email verification"})).then((function (res){
return console.log("Email sent successfully",res);
})).catch((function (err){
return console.log("Failed to send email",err);
}));
});
backend.mailtrap.emails.send_welcome_email = (function backend$mailtrap$emails$send_welcome_email(email,user_name){
var recipients = [({"email": email})];
return backend.mailtrap.core.mailtrap_client.send(({"from": backend.mailtrap.core.sender, "to": recipients, "subject": "Verify your email!", "template-uuid": "b31b68ef-cabb-4506-9b77-bc56a8b2fde3", "template_variables": ({"company_info_name": "Auth", "name": user_name}), "category": "Welcome email verification"})).then((function (res){
return console.log("Welcome email sent succefully",res);
})).catch((function (err){
return console.log("Failed to send welcome email",err);
}));
});
backend.mailtrap.emails.send_password_reset_email = (function backend$mailtrap$emails$send_password_reset_email(email,reset_url){
var recipient = [({"email": email})];
return backend.mailtrap.core.mailtrap_client.send(({"from": backend.mailtrap.core.sender, "to": recipient, "subject": "Reset your password!", "html": backend.mailtrap.email_templates.password_reset_request_template(reset_url), "category": "Password Reset"})).then((function (res){
return console.log("Password reset email sent successfully",res);
})).catch((function (err){
return console.log("Error sending password reset email",err);
}));
});
backend.mailtrap.emails.send_reset_password_success_email = (function backend$mailtrap$emails$send_reset_password_success_email(email){
var recipient = [({"email": email})];
return backend.mailtrap.core.mailtrap_client.send(({"from": backend.mailtrap.core.sender, "to": recipient, "subject": "Password Reset Successful", "html": backend.mailtrap.email_templates.password_reset_success_template(), "category": "Password Reset"})).then((function (res){
return console.log("Password reset success email sent successfully",res);
})).catch((function (err){
return console.log("Error sending password reset success email",err);
}));
});

//# sourceMappingURL=backend.mailtrap.emails.js.map

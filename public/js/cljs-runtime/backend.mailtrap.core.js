goog.provide('backend.mailtrap.core');
shadow.js.shim.module$dotenv.config();
backend.mailtrap.core.TOKEN = process.env.MAILTRAP_TOKEN;
backend.mailtrap.core.sender = ({"email": "hello@demomailtrap.com", "name": "JMN"});
backend.mailtrap.core.mailtrap_client = (new shadow.js.shim.module$mailtrap.MailtrapClient(({"token": backend.mailtrap.core.TOKEN})));

//# sourceMappingURL=backend.mailtrap.core.js.map

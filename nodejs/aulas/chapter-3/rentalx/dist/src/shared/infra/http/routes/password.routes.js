"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRoutes = void 0;
var express_1 = require("express");
var ResetPasswordUserController_1 = require("@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController");
var SendForgotPasswordMailController_1 = require("@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController");
var passwordRoutes = express_1.Router();
exports.passwordRoutes = passwordRoutes;
var sendForgotPasswordMailController = new SendForgotPasswordMailController_1.SendForgotPasswordMailController();
var resetPasswordUserController = new ResetPasswordUserController_1.ResetPasswordUserController();
passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordUserController.handle);

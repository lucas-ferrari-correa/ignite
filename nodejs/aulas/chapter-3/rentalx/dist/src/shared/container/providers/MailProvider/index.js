"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
var EtherealMailProvider_1 = require("./implementations/EtherealMailProvider");
var SESMailProvider_1 = require("./implementations/SESMailProvider");
var mailProvider = {
    ethereal: tsyringe_1.container.resolve(EtherealMailProvider_1.EtherealMailProvider),
    ses: tsyringe_1.container.resolve(SESMailProvider_1.SESMailProvider),
};
tsyringe_1.container.registerInstance("MailProvider", mailProvider[process.env.MAIL_PROVIDER]);

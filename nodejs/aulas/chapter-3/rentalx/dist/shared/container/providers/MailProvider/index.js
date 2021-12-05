"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "container", {
  enumerable: true,
  get: function () {
    return _tsyringe.container;
  }
});

var _tsyringe = require("tsyringe");

var _EtherealMailProvider = require("./implementations/EtherealMailProvider");

var _SESMailProvider = require("./implementations/SESMailProvider");

const mailProvider = {
  ethereal: _tsyringe.container.resolve(_EtherealMailProvider.EtherealMailProvider),
  ses: _tsyringe.container.resolve(_SESMailProvider.SESMailProvider)
};

_tsyringe.container.registerInstance("MailProvider", mailProvider[process.env.MAIL_PROVIDER]);
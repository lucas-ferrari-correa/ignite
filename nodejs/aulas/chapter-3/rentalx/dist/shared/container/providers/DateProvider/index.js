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

var _DayjsDateProvider = require("./implementations/DayjsDateProvider");

_tsyringe.container.registerSingleton("DayjsDateProvider", _DayjsDateProvider.DayjsDateProvider);
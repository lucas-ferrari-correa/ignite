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

var _LocalStorageProvider = require("./implementations/LocalStorageProvider");

var _S3StorageProvider = require("./implementations/S3StorageProvider");

const diskStorage = {
  local: _LocalStorageProvider.LocalStorageProvider,
  s3: _S3StorageProvider.S3StorageProvider
};

_tsyringe.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);
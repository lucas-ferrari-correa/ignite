"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
var LocalStorageProvider_1 = require("./implementations/LocalStorageProvider");
var S3StorageProvider_1 = require("./implementations/S3StorageProvider");
var diskStorage = {
    local: LocalStorageProvider_1.LocalStorageProvider,
    s3: S3StorageProvider_1.S3StorageProvider,
};
tsyringe_1.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);

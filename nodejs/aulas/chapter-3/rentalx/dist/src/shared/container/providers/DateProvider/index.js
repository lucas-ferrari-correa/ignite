"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
var DayjsDateProvider_1 = require("./implementations/DayjsDateProvider");
tsyringe_1.container.registerSingleton("DayjsDateProvider", DayjsDateProvider_1.DayjsDateProvider);

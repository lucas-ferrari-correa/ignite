"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carsRoutes = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("@config/upload"));

var _CreateCarController = require("@modules/cars/useCases/createCar/CreateCarController");

var _CreateSpecificationController = require("@modules/cars/useCases/createCarSpecification/CreateSpecificationController");

var _ListAvailableCarsController = require("@modules/cars/useCases/listAvailableCars/ListAvailableCarsController");

var _UploadCarImagesController = require("@modules/cars/useCases/uploadImage/UploadCarImagesController");

var _ensureAdmin = require("../middlewares/ensureAdmin");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const carsRoutes = (0, _express.Router)();
exports.carsRoutes = carsRoutes;
const createCarController = new _CreateCarController.CreateCarController();
const listAvailableCarsController = new _ListAvailableCarsController.ListAvailableCarsController();
const createCarSpecificationController = new _CreateSpecificationController.CreateCarSpecificationController();
const uploadCarImagesController = new _UploadCarImagesController.UplaodCarImagesController();
const upload = (0, _multer.default)(_upload.default);
carsRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createCarSpecificationController.handle);
carsRoutes.post("/images/:id", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, upload.array("images"), uploadCarImagesController.handle);
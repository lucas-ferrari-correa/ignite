"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRentalUseCase = void 0;
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("@shared/errors/AppError");
var CreateRentalUseCase = /** @class */ (function () {
    function CreateRentalUseCase(rentalsRepository, dateProvider, carsRepository) {
        this.rentalsRepository = rentalsRepository;
        this.dateProvider = dateProvider;
        this.carsRepository = carsRepository;
    }
    CreateRentalUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id, car_id = _a.car_id, expected_return_date = _a.expected_return_date;
        return __awaiter(this, void 0, void 0, function () {
            var minimumHours, carUnavailable, rentalOpenToUser, dateNow, compare, rental;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        minimumHours = 24;
                        return [4 /*yield*/, this.rentalsRepository.findOpenRentalByCar(car_id)];
                    case 1:
                        carUnavailable = _b.sent();
                        if (carUnavailable) {
                            throw new AppError_1.AppError("Car is unavailable");
                        }
                        return [4 /*yield*/, this.rentalsRepository.findOpenRentalByUser(user_id)];
                    case 2:
                        rentalOpenToUser = _b.sent();
                        if (rentalOpenToUser) {
                            throw new AppError_1.AppError("There is a rental in progress for user!");
                        }
                        dateNow = this.dateProvider.dateNow();
                        compare = this.dateProvider.compareInHours(dateNow, expected_return_date);
                        if (compare < minimumHours) {
                            throw new AppError_1.AppError("Invalid return time!");
                        }
                        return [4 /*yield*/, this.rentalsRepository.create({
                                user_id: user_id,
                                car_id: car_id,
                                expected_return_date: expected_return_date,
                            })];
                    case 3:
                        rental = _b.sent();
                        return [4 /*yield*/, this.carsRepository.updateAvailable(car_id, false)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, rental];
                }
            });
        });
    };
    CreateRentalUseCase = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject("RentalsRepository")),
        __param(1, tsyringe_1.inject("DayjsDateProvider")),
        __param(2, tsyringe_1.inject("CarsRepository")),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], CreateRentalUseCase);
    return CreateRentalUseCase;
}());
exports.CreateRentalUseCase = CreateRentalUseCase;

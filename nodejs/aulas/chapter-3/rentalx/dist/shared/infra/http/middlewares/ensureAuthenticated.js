"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("@config/auth"));

var _UsersTokensRepository = require("@modules/accounts/infra/typeorm/repositories/UsersTokensRepository");

var _AppError = require("@shared/errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;
  const usersTokensRepository = new _UsersTokensRepository.UsersTokensRepository();

  if (!authHeader) {
    throw new _AppError.AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const {
      sub: userId
    } = (0, _jsonwebtoken.verify)(token, _auth.default.secret_token);
    request.user = {
      id: userId
    };
    next();
  } catch {
    throw new _AppError.AppError("Invalid token!", 401);
  }
}
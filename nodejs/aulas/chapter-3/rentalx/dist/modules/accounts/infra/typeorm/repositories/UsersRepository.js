"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;

var _typeorm = require("typeorm");

var _User = require("@modules/accounts/infra/typeorm/entities/User");

class UsersRepository {
  constructor() {
    this.repostitory = void 0;
    this.repostitory = (0, _typeorm.getRepository)(_User.User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    avatar,
    id
  }) {
    const user = this.repostitory.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id
    });
    await this.repostitory.save(user);
  }

  async findByEmail(email) {
    const user = await this.repostitory.findOne({
      email
    });
    return user;
  }

  async findById(id) {
    const user = await this.repostitory.findOne(id);
    return user;
  }

}

exports.UsersRepository = UsersRepository;
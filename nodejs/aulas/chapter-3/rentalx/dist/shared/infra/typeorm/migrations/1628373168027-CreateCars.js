"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCars1628373168027 = void 0;

var _typeorm = require("typeorm");

class CreateCars1628373168027 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "cars",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "description",
        type: "varchar"
      }, {
        name: "daily_rate",
        type: "numeric"
      }, {
        name: "available",
        type: "boolean",
        default: true
      }, {
        name: "license_plate",
        type: "varchar"
      }, {
        name: "fine_amount",
        type: "numeric"
      }, {
        name: "brand",
        type: "varchar"
      }, {
        name: "category_id",
        type: "uuid",
        isNullable: false
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }],
      foreignKeys: [{
        name: "FKCategoryCar",
        referencedTableName: "categories",
        referencedColumnNames: ["id"],
        columnNames: ["category_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("cars");
  }

}

exports.CreateCars1628373168027 = CreateCars1628373168027;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var sequelize = new _sequelize.Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  dialect: 'postgres',
  logging: false
});
var _default = sequelize;
exports["default"] = _default;
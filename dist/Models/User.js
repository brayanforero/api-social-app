"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../Config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _database["default"].define('User', {
  id: {
    type: _sequelize.DataTypes.BIGINT,
    primaryKey: true
  },
  fullname: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: _sequelize.DataTypes.STRING(300),
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false
});

var _default = User;
exports["default"] = _default;
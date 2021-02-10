"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validHash = exports.hashing = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hashing = function hashing(str) {
  var salt = _bcryptjs["default"].genSaltSync(10);

  var hash = _bcryptjs["default"].hashSync(str, salt);

  return hash;
};

exports.hashing = hashing;

var validHash = function validHash(str, hash) {
  if (!_bcryptjs["default"].compareSync(str, hash)) return false;
  return true;
};

exports.validHash = validHash;
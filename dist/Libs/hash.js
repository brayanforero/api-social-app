"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hashing = function hashing(str) {
  var salt = _bcryptjs["default"].genSaltSync(10);

  var hash = _bcryptjs["default"].hashSync(str, salt);

  return hash;
};

var validHash = function validHash(str, hash) {
  if (!_bcryptjs["default"].compareSync(str, hash)) return false;
  return true;
};

module.exports = {
  hashing: hashing,
  validHash: validHash
};
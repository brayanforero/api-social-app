"use strict";

var bcrypt = require('bcryptjs');

var hashing = function hashing(str) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(str, salt);
  return hash;
};

var validHash = function validHash(str, hash) {
  if (!bcrypt.compareSync(str, hash)) return false;
  return true;
};

module.exports = {
  hashing: hashing,
  validHash: validHash
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UserController = require("../Controllers/UserController");

var router = (0, _express.Router)();
router.get('/', _UserController.index);
router.get('/:id', _UserController.show);
router.post('/', _UserController.store);
router.put('/:id', _UserController.update);
router["delete"]('/:id', _UserController.destroy);
router.post('/auth', _UserController.auth);
var _default = router;
exports["default"] = _default;
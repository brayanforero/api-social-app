"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.store = store;

var _User = _interopRequireDefault(require("../Models/User"));

var _hash = require("../Libs/hash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function index(_x, _x2) {
  return _index.apply(this, arguments);
}

function _index() {
  _index = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findAll();

          case 2:
            users = _context.sent;
            res.status(200).json({
              status: 200,
              users: users
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _index.apply(this, arguments);
}

function store(_x3, _x4) {
  return _store.apply(this, arguments);
}

function _store() {
  _store = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, fullname, username, password, hash, user;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, fullname = _req$body.fullname, username = _req$body.username, password = _req$body.password;
            hash = (0, _hash.hashing)(password);
            _context2.next = 5;
            return _User["default"].create({
              fullname: fullname,
              username: username,
              password: hash
            }, {
              fields: ['fullname', 'username', 'password']
            });

          case 5:
            user = _context2.sent;
            res.status(201).json({
              status: 201,
              user: user
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              errors: 'Server Internal Error'
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _store.apply(this, arguments);
}
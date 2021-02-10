"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.show = show;
exports.store = store;
exports.update = update;
exports.destroy = destroy;
exports.auth = auth;

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

function show(_x3, _x4) {
  return _show.apply(this, arguments);
}

function _show() {
  _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _User["default"].findByPk(id);

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              status: 404,
              errors: 'Resource Not Found'
            }));

          case 6:
            res.json({
              status: 200,
              user: user
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _show.apply(this, arguments);
}

function store(_x5, _x6) {
  return _store.apply(this, arguments);
}

function _store() {
  _store = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, fullname, username, password, hash, user;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, fullname = _req$body.fullname, username = _req$body.username, password = _req$body.password;
            hash = (0, _hash.hashing)(password);
            _context3.next = 5;
            return _User["default"].create({
              fullname: fullname,
              username: username,
              password: hash
            }, {
              fields: ['fullname', 'username', 'password']
            });

          case 5:
            user = _context3.sent;
            res.status(201).json({
              status: 201,
              user: user
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              errors: 'Server Internal Error'
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _store.apply(this, arguments);
}

function update(_x7, _x8) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, fullname, username, password, hash, user;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, fullname = _req$body2.fullname, username = _req$body2.username, password = _req$body2.password;
            hash = (0, _hash.hashing)(password);
            _context4.next = 6;
            return _User["default"].findByPk(id);

          case 6:
            user = _context4.sent;

            if (user) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              status: 404,
              errors: 'Resource Not Found'
            }));

          case 9:
            _context4.next = 11;
            return _User["default"].update({
              fullname: fullname,
              username: username,
              password: hash
            }, {
              where: {
                id: user.id
              }
            });

          case 11:
            res.json({
              status: 200,
              message: 'User udpated'
            });
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            res.status(500).json({
              status: 500,
              error: 'Server Internal Error'
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return _update.apply(this, arguments);
}

function destroy(_x9, _x10) {
  return _destroy.apply(this, arguments);
}

function _destroy() {
  _destroy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _User["default"].findByPk(id);

          case 4:
            user = _context5.sent;

            if (user) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              status: 404,
              errors: 'Resource Not Found'
            }));

          case 7:
            _context5.next = 9;
            return _User["default"].destroy({
              where: {
                id: user.id
              }
            });

          case 9:
            res.json({
              status: 200,
              message: 'User deleted'
            });
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            res.status(500).json({
              status: 500,
              error: 'Server Internal error'
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return _destroy.apply(this, arguments);
}

function auth(_x11, _x12) {
  return _auth.apply(this, arguments);
}

function _auth() {
  _auth = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body3, username, password, user;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body3 = req.body, username = _req$body3.username, password = _req$body3.password;
            _context6.next = 4;
            return _User["default"].findOne({
              where: {
                username: username
              }
            });

          case 4:
            user = _context6.sent;

            if (!(!user || !(0, _hash.validHash)(password, user.password))) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.json({
              status: 404,
              message: 'Bad credential'
            }));

          case 7:
            res.json({
              status: 200,
              _token: 'dsfsdfsdfsdfsdf',
              _isAuth: 'true'
            });
            _context6.next = 13;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log('Error ' + _context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _auth.apply(this, arguments);
}
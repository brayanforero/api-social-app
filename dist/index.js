"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function main() {
  _app["default"].listen(_app["default"].get('port'), function () {
    console.log('Servidor funcionando en el puerto' + _app["default"].get('port'));
  });
}

main();
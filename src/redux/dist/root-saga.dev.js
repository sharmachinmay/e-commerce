"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _shop = require("./shop/shop.saga");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.call)(_shop.fetchCollectionStart)]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
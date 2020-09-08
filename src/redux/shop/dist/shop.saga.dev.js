"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCollectionsAsync = fetchCollectionsAsync;
exports.fetchCollectionStart = fetchCollectionStart;

var _effects = require("redux-saga/effects");

var _firebase = require("../../firebase/firebase.utils");

var _shop = require("./shop.actions");

var _shop2 = _interopRequireDefault(require("./shop.types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchCollectionsAsync),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchCollectionStart);

function fetchCollectionsAsync() {
  var collectionRef, snapshot, collectionMap;
  return regeneratorRuntime.wrap(function fetchCollectionsAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          collectionRef = _firebase.firestore.collection('collections');
          _context.next = 4;
          return collectionRef.get();

        case 4:
          snapshot = _context.sent;
          _context.next = 7;
          return (0, _effects.call)(_firebase.convertCollectionsSnapshotToMap, snapshot);

        case 7:
          collectionMap = _context.sent;
          _context.next = 10;
          return (0, _effects.put)((0, _shop.fetchCollectionSucess)(collectionMap));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          _context.next = 16;
          return (0, _effects.put)((0, _shop.fetchCollectionFailure)(_context.t0.message));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 12]]);
}

function fetchCollectionStart() {
  return regeneratorRuntime.wrap(function fetchCollectionStart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_shop2["default"].fetchCollectionsStart, fetchCollectionsAsync);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
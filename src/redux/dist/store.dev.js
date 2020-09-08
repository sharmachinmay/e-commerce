"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _rootSaga = _interopRequireDefault(require("./root-saga"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _rootReducer = _interopRequireDefault(require("./root-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();
var middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(_reduxLogger["default"]);
}

var store = (0, _redux.createStore)(_rootReducer["default"], _redux.applyMiddleware.apply(void 0, middleWares));
exports.store = store;
sagaMiddleware.run(_rootSaga["default"]);
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _default = {
  store: store,
  persistor: persistor
};
exports["default"] = _default;
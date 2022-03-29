"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("@cfworker/uuid");

var _utils = require("./utils");

var defaults = {
  title: 'Untitled event',
  productId: 'adamgibbons/ics',
  method: 'PUBLISH',
  uid: (0, _uuid.uuid)(),
  timestamp: (0, _utils.formatDate)(null, 'utc'),
  start: (0, _utils.formatDate)(null, 'utc')
};
var _default = defaults;
exports["default"] = _default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonssrapp = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _facts = require('./src/facts');

var _facts2 = _interopRequireDefault(_facts);

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = (0, _express2.default)();

var index = _fs2.default.readFileSync(__dirname + '/index.html', 'utf8');

app.get('**', function (req, res) {
  res.send(index);
});

var nonssrapp = exports.nonssrapp = functions.https.onRequest(app);
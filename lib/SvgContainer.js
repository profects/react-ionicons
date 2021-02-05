'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function SvgContainer(_ref) {
  var children = _ref.children,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ['children', 'color']);

  return _react2.default.cloneElement(children, _extends({}, rest, { fill: color }));
}

exports.default = SvgContainer;
module.exports = exports['default'];
//# sourceMappingURL=SvgContainer.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpeedometerSharp = function SpeedometerSharp(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === undefined ? 22 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 22 : _ref$width,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#000' : _ref$color,
      _ref$cssClasses = _ref.cssClasses,
      cssClasses = _ref$cssClasses === undefined ? '' : _ref$cssClasses,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {
    return null;
  } : _ref$onClick;

  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: height,
      width: width,
      color: color,
      onClick: onClick,
      className: className
    },
    _react2.default.createElement(
      'svg',
      { style: style, className: cssClasses, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
      _react2.default.createElement(
        'title',
        null,
        'Speedometer'
      ),
      _react2.default.createElement('path', { d: 'M256 48C123.46 48 16 156.55 16 290.56a243.3 243.3 0 0060.32 160.87c1.18 1.3 2.25 2.6 3.43 3.79C89.2 464 92.07 464 99.57 464s12.43 0 19.93-8.88C152 416.64 202 400 256 400s104.07 16.71 136.5 55.12C400 464 404.82 464 412.43 464s11.3 0 19.82-8.78c1.22-1.25 2.25-2.49 3.43-3.79A243.3 243.3 0 00496 290.56C496 156.55 388.54 48 256 48zm-16 64h32v64h-32zm-96 192H80v-32h64zm21.49-83.88l-45.25-45.26 22.62-22.62 45.26 45.25zM278.6 307.4a31 31 0 01-7 7 30.11 30.11 0 01-35-49L320 224zm45.28-109.91l45.26-45.25 22.62 22.62-45.25 45.26zM432 304h-64v-32h64z' })
    )
  );
};

exports.default = SpeedometerSharp;
module.exports = exports['default'];
//# sourceMappingURL=SpeedometerSharp.js.map
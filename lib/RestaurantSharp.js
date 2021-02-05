'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RestaurantSharp = function RestaurantSharp(_ref) {
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
      className = _ref$className === undefined ? '' : _ref$className;

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
        'Restaurant'
      ),
      _react2.default.createElement('path', { d: 'M342.7 223.94h14.87a79.48 79.48 0 0056.58-23.44L496 118l-22.22-22.4-83.58 83.58-17.37-17.37 83.58-83.59-23-22.31-83.27 83.26-17.32-17.37 83.58-83.59L394 16l-82.5 81.85a79.49 79.49 0 00-23.44 56.59v14.86l-43.13 43.13L48 16C3.72 70.87 29.87 171.71 79.72 221.57l85.5 85.5c26.55 26.55 31.82 28.92 61.94 16.8 6.49-2.61 8.85-2.32 14.9 3.72l13 12.13c2.93 3 3 3.88 3 9.62v5.54c0 21.08 13.48 33.2 22.36 42.24L384 496l72-72-156.43-156.93z' }),
      _react2.default.createElement('path', { d: 'M227.37 354.59c-29.82 6.11-48.11 11.74-83.08-23.23-.56-.56-1.14-1.1-1.7-1.66l-19.5-19.5L16 416l80 80 144-144z' })
    )
  );
};

exports.default = RestaurantSharp;
module.exports = exports['default'];
//# sourceMappingURL=RestaurantSharp.js.map
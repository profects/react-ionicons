'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ribbon = function Ribbon(_ref) {
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
        'Ribbon'
      ),
      _react2.default.createElement('path', { d: 'M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 01-127.67-72.94 4 4 0 00-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0048.22 416h78a15.28 15.28 0 0113.62 7.33L178.5 488a16.26 16.26 0 0013.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 00-3.92-5.64zM477.64 391.88l-71.53-129.17a4 4 0 00-6.74-.36 176.5 176.5 0 01-78.31 61.42 16.09 16.09 0 00-8.72 8.25l-36.86 81.1a7.92 7.92 0 000 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0013.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 00-1.41-14.12z' }),
      _react2.default.createElement('ellipse', { cx: '256.26', cy: '160', rx: '48.01', ry: '48' }),
      _react2.default.createElement('path', { d: 'M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144 144-64.6 144-144-64.59-144-144-144zm0 224a80 80 0 1180-80 80.1 80.1 0 01-80 80z' })
    )
  );
};

exports.default = Ribbon;
module.exports = exports['default'];
//# sourceMappingURL=Ribbon.js.map
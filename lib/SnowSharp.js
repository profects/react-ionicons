'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SnowSharp = function SnowSharp(_ref) {
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
        'Snow'
      ),
      _react2.default.createElement('path', { d: 'M447.88 313.27l19.25-10.64-21.28-38.51-19.25 10.64a133.42 133.42 0 00-38.54 32.1L300 256l88.07-50.86a133.42 133.42 0 0038.54 32.1l19.25 10.64 21.28-38.51-19.25-10.64a89.27 89.27 0 01-20.93-16L480 152.05 458 114l-53 30.58a89.07 89.07 0 01-3.42-26.15l.41-22-44-.82-.41 22a133.62 133.62 0 008.49 49.39L278 217.89V116.18a133.52 133.52 0 0047.06-17.33L343.9 87.5l-22.71-37.69-18.84 11.35A89.5 89.5 0 01278 71.27V16h-44v55.27a89.5 89.5 0 01-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.52 133.52 0 00234 116.18v101.71L145.93 167a133.62 133.62 0 008.53-49.43l-.41-22-44 .82.41 22a89.07 89.07 0 01-3.42 26.15L54 114l-22 38.1 53.05 30.64a89.27 89.27 0 01-20.93 16l-19.25 10.63 21.28 38.51 19.25-10.64a133.42 133.42 0 0038.54-32.1L212 256l-88.07 50.86a133.42 133.42 0 00-38.54-32.1l-19.24-10.64-21.28 38.51 19.25 10.64a89.27 89.27 0 0120.93 16L32 360l22 38.1 53.05-30.63a89.07 89.07 0 013.42 26.15l-.41 22 44 .82.41-22a133.62 133.62 0 00-8.54-49.44L234 294.11v101.71a133.52 133.52 0 00-47.06 17.33L168.1 424.5l22.71 37.69 18.84-11.35A89.5 89.5 0 01234 440.73V496h44v-55.27a89.5 89.5 0 0124.35 10.11l18.84 11.35 22.71-37.69-18.84-11.35A133.52 133.52 0 00278 395.82V294.11L366.07 345a133.62 133.62 0 00-8.53 49.43l.41 22 44-.82-.41-22a89.07 89.07 0 013.46-26.19l53 30.63L480 360l-53-30.69a89.27 89.27 0 0120.88-16.04z' })
    )
  );
};

exports.default = SnowSharp;
module.exports = exports['default'];
//# sourceMappingURL=SnowSharp.js.map
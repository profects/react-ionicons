'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pint = function Pint(_ref) {
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
        'Pint'
      ),
      _react2.default.createElement('path', { d: 'M399 99.29c-.15-2.13-.3-4.35-.44-6.68L395.69 46a32 32 0 00-31.91-30H148.21a32 32 0 00-31.91 30l-2.91 46.63c-.14 2.31-.29 4.51-.43 6.62-1.29 19.24-2.23 33.14 3.73 65.66 1.67 9.11 5.22 22.66 9.73 39.82 12.61 48 33.71 128.36 33.71 195.63V472a24 24 0 0024 24h143.74a24 24 0 0024-24v-71.62c0-77.09 21.31-153.29 34-198.81 4.38-15.63 7.83-28 9.41-36.62 5.99-32.51 5.05-46.42 3.72-65.66zm-35-47.54l1.5 24a4 4 0 01-4 4.25h-211a4 4 0 01-4-4.25l1.48-24A4 4 0 01152 48h208a4 4 0 014 3.75z' })
    )
  );
};

exports.default = Pint;
module.exports = exports['default'];
//# sourceMappingURL=Pint.js.map
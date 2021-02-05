'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CafeSharp = function CafeSharp(_ref) {
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
        'Cafe'
      ),
      _react2.default.createElement('path', { d: 'M448 64H80v254.34a19.83 19.83 0 005.86 14.14l29.65 29.66a19.87 19.87 0 0014.15 5.86h204.68a19.87 19.87 0 0014.15-5.86l29.65-29.66a19.83 19.83 0 005.86-14.14V192h32a16 16 0 0011.31-4.69l32-32A16 16 0 00464 144V80a16 16 0 00-16-16zm-16 73.37L409.37 160H384V96h48zM48 400h368v32H48z' })
    )
  );
};

exports.default = CafeSharp;
module.exports = exports['default'];
//# sourceMappingURL=CafeSharp.js.map
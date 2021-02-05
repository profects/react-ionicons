'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShirtSharp = function ShirtSharp(_ref) {
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
        'Shirt'
      ),
      _react2.default.createElement('path', { d: 'M256 42c-33.88 0-64-10-64-10v2a64 64 0 00128 0v-2s-30.12 10-64 10z' }),
      _react2.default.createElement('path', { d: 'M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114 61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114z' })
    )
  );
};

exports.default = ShirtSharp;
module.exports = exports['default'];
//# sourceMappingURL=ShirtSharp.js.map
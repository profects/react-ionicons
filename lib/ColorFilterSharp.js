'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorFilterSharp = function ColorFilterSharp(_ref) {
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
      onClick = _ref.onClick;

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
        'Color Filter'
      ),
      _react2.default.createElement('path', { d: 'M256 185a167.85 167.85 0 01134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 01256 185zM336 331.73a167.51 167.51 0 01-52.37 118.08A135 135 0 00344 464c75 0 136-61 136-136a136 136 0 00-59.06-112.08A168.53 168.53 0 01336 331.73zM283.58 206.19a167.87 167.87 0 0149.36 89.89 136.14 136.14 0 0058.06-95.7 135.87 135.87 0 00-107.43 5.81zM176.05 331.73a168.53 168.53 0 01-85-115.81A136 136 0 0032 328c0 75 61 136 136 136a135 135 0 0060.42-14.19 167.51 167.51 0 01-52.37-118.08zM179.06 296.08a167.87 167.87 0 0149.36-89.89A135.87 135.87 0 00121 200.38a136.14 136.14 0 0058.06 95.7zM302.9 345.33a168.22 168.22 0 01-93.8 0A135.9 135.9 0 00256 431.6a135.9 135.9 0 0046.9-86.27zM209 311.62a136 136 0 0094 0 135.93 135.93 0 00-47-87.22 135.93 135.93 0 00-47 87.22z' })
    )
  );
};

exports.default = ColorFilterSharp;
module.exports = exports['default'];
//# sourceMappingURL=ColorFilterSharp.js.map
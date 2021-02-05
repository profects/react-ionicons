'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IceCreamSharp = function IceCreamSharp(_ref) {
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
        'Ice Cream'
      ),
      _react2.default.createElement('path', { d: 'M359.72 112.37a104 104 0 00-207.44 0A80.12 80.12 0 0080 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 011.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0041-40v-47.84a2 2 0 012.72-1.86A83.47 83.47 0 00256 268a63.18 63.18 0 0042.24-16.59 2 2 0 012.74 0A74.63 74.63 0 00352 272a80 80 0 007.72-159.63z' }),
      _react2.default.createElement('path', { d: 'M256 300v12a72.1 72.1 0 01-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 01-49.18-14.36A93.75 93.75 0 01256 300z' })
    )
  );
};

exports.default = IceCreamSharp;
module.exports = exports['default'];
//# sourceMappingURL=IceCreamSharp.js.map
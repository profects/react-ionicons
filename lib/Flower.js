'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flower = function Flower(_ref) {
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
        'Flower'
      ),
      _react2.default.createElement('circle', { cx: '256', cy: '256', r: '48' }),
      _react2.default.createElement('path', { d: 'M475.93 303.91a67.49 67.49 0 00-44.34-115.53 5.2 5.2 0 01-4.58-3.21 5.21 5.21 0 011-5.51A67.83 67.83 0 00378 66.33h-.25A67.13 67.13 0 00332.35 84a5.21 5.21 0 01-5.52 1 5.23 5.23 0 01-3.22-4.58 67.68 67.68 0 00-135.23 0 5.2 5.2 0 01-3.21 4.58 5.21 5.21 0 01-5.52-1 67.11 67.11 0 00-45.44-17.69H134a67.91 67.91 0 00-50 113.34 5.21 5.21 0 011 5.51 5.2 5.2 0 01-4.58 3.21 67.71 67.71 0 000 135.23 5.23 5.23 0 014.58 3.23 5.22 5.22 0 01-1 5.52 67.54 67.54 0 0050.08 113h.25A67.38 67.38 0 00179.65 428a5.21 5.21 0 015.51-1 5.2 5.2 0 013.21 4.58 67.71 67.71 0 00135.23 0 5.23 5.23 0 013.22-4.58 5.21 5.21 0 015.51 1 67.38 67.38 0 0045.29 17.42h.25a67.48 67.48 0 0050.08-113 5.22 5.22 0 01-1-5.52 5.23 5.23 0 014.58-3.22 67.31 67.31 0 0044.4-19.77zM256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80z' })
    )
  );
};

exports.default = Flower;
module.exports = exports['default'];
//# sourceMappingURL=Flower.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PizzaSharp = function PizzaSharp(_ref) {
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
        'Pizza'
      ),
      _react2.default.createElement('path', { d: 'M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44 37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18z' }),
      _react2.default.createElement('ellipse', { cx: '320.48', cy: '207.99', rx: '31.97', ry: '32.03', transform: 'rotate(-44.98 320.503 207.996)', fill: 'none' }),
      _react2.default.createElement('ellipse', { cx: '192.48', cy: '191.99', rx: '31.97', ry: '32.03', transform: 'rotate(-44.98 192.49 191.992)', fill: 'none' }),
      _react2.default.createElement('ellipse', { cx: '256.48', cy: '319.99', rx: '31.97', ry: '32.03', transform: 'rotate(-44.98 256.505 320)', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 00-153.7 28.9c-.25.1-9.24 4.23-19 8.71 7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84-19.92-8.24zm-185.25 53.22a32 32 0 11-34-34 32.12 32.12 0 0134 34zm64 128a32 32 0 11-34-34 32.12 32.12 0 0134 34zm64-112a32 32 0 11-34-34 32.12 32.12 0 0134 34z' })
    )
  );
};

exports.default = PizzaSharp;
module.exports = exports['default'];
//# sourceMappingURL=PizzaSharp.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FishOutline = function FishOutline(_ref) {
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
        'Fish'
      ),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeWidth: '32', strokeLinejoin: 'round', d: 'M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z' }),
      _react2.default.createElement('circle', { cx: '416', cy: '239.99', r: '16' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeWidth: '32', strokeLinecap: 'round', strokeMiterlimit: '20', d: 'M378.37 356a199.22 199.22 0 010-200' })
    )
  );
};

exports.default = FishOutline;
module.exports = exports['default'];
//# sourceMappingURL=FishOutline.js.map
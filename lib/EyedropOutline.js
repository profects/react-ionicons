'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EyedropOutline = function EyedropOutline(_ref) {
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
        'Eyedrop'
      ),
      _react2.default.createElement('path', { d: 'M262.51 204.22L70 396.69C57.56 409.15 48 464 48 464s54.38-9.09 67.31-22L307.8 249.51', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '211.72', y: '172.19', width: '192.15', height: '64.05', rx: '32.03', ry: '32.03', transform: 'rotate(45 307.788 204.2)', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M289.91 141s20.57 8.57 37.22-8.08l54.67-70.63c18.5-19.41 49.26-18.69 67.94 0h0c18.68 18.68 19.34 48.81 0 67.93l-70.68 54.67c-15.65 15.65-8.08 37.22-8.08 37.22M115.31 442s-26.48 17.34-44.56-.73-.75-44.58-.75-44.58', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' })
    )
  );
};

exports.default = EyedropOutline;
module.exports = exports['default'];
//# sourceMappingURL=EyedropOutline.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DiceOutline = function DiceOutline(_ref) {
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
        'Dice'
      ),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32', d: 'M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32', d: 'M69 153.99l187 110 187-110M256 463.99v-200' }),
      _react2.default.createElement('ellipse', { cx: '256', cy: '152', rx: '24', ry: '16' }),
      _react2.default.createElement('ellipse', { cx: '208', cy: '296', rx: '16', ry: '24' }),
      _react2.default.createElement('ellipse', { cx: '112', cy: '328', rx: '16', ry: '24' }),
      _react2.default.createElement('ellipse', { cx: '304', cy: '296', rx: '16', ry: '24' }),
      _react2.default.createElement('ellipse', { cx: '400', cy: '240', rx: '16', ry: '24' }),
      _react2.default.createElement('ellipse', { cx: '304', cy: '384', rx: '16', ry: '24' }),
      _react2.default.createElement('ellipse', { cx: '400', cy: '328', rx: '16', ry: '24' })
    )
  );
};

exports.default = DiceOutline;
module.exports = exports['default'];
//# sourceMappingURL=DiceOutline.js.map
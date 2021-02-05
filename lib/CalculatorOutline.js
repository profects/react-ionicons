'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalculatorOutline = function CalculatorOutline(_ref) {
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
        'Calculator'
      ),
      _react2.default.createElement('rect', { x: '112', y: '48', width: '288', height: '416', rx: '32', ry: '32', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32', d: 'M160.01 112H352v64H160.01z' }),
      _react2.default.createElement('circle', { cx: '168', cy: '248', r: '24' }),
      _react2.default.createElement('circle', { cx: '256', cy: '248', r: '24' }),
      _react2.default.createElement('circle', { cx: '344', cy: '248', r: '24' }),
      _react2.default.createElement('circle', { cx: '168', cy: '328', r: '24' }),
      _react2.default.createElement('circle', { cx: '256', cy: '328', r: '24' }),
      _react2.default.createElement('circle', { cx: '168', cy: '408', r: '24' }),
      _react2.default.createElement('circle', { cx: '256', cy: '408', r: '24' }),
      _react2.default.createElement('rect', { x: '320', y: '304', width: '48', height: '128', rx: '24', ry: '24' })
    )
  );
};

exports.default = CalculatorOutline;
module.exports = exports['default'];
//# sourceMappingURL=CalculatorOutline.js.map
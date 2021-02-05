'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrintOutline = function PrintOutline(_ref) {
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
        'Print'
      ),
      _react2.default.createElement('path', { d: 'M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24', fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '128', y: '240', width: '256', height: '208', rx: '24.32', ry: '24.32', fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24', fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('circle', { cx: '392', cy: '184', r: '24' })
    )
  );
};

exports.default = PrintOutline;
module.exports = exports['default'];
//# sourceMappingURL=PrintOutline.js.map
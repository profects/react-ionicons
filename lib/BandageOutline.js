'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BandageOutline = function BandageOutline(_ref) {
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
        'Bandage'
      ),
      _react2.default.createElement('rect', { x: '-24.43', y: '167.88', width: '560.87', height: '176.25', rx: '88.12', ry: '88.12', transform: 'rotate(-45 256 256.002)', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '169.41', y: '156.59', width: '176', height: '196', rx: '32', ry: '32', transform: 'rotate(45 257.409 254.582)', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('circle', { cx: '256', cy: '208', r: '16' }),
      _react2.default.createElement('circle', { cx: '304', cy: '256', r: '16' }),
      _react2.default.createElement('circle', { cx: '208', cy: '256', r: '16' }),
      _react2.default.createElement('circle', { cx: '256', cy: '304', r: '16' })
    )
  );
};

exports.default = BandageOutline;
module.exports = exports['default'];
//# sourceMappingURL=BandageOutline.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Walk = function Walk(_ref) {
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
        'Walk'
      ),
      _react2.default.createElement('path', { d: 'M312.55 479.9l-56.42-114-44.62-57a72.37 72.37 0 01-10.06-36.9V143.64H217a40 40 0 0140 40v182.21', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M127.38 291.78v-74.07s37-74.07 74.07-74.07', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M368.09 291.78a18.49 18.49 0 01-10.26-3.11L297.7 250a21.18 21.18 0 01-9.7-17.79v-23.7a5.65 5.65 0 018.69-4.77l81.65 54.11a18.52 18.52 0 01-10.29 33.93zM171.91 493.47a18.5 18.5 0 01-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0110.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09 5.24 9.95 6 16.11-1.68 25.7-8 10-52 67.44-52 67.44-2.62 2.98-7.23 3.7-11.09 3.7z' }),
      _react2.default.createElement('circle', { cx: '257', cy: '69.56', r: '37.04', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '16' })
    )
  );
};

exports.default = Walk;
module.exports = exports['default'];
//# sourceMappingURL=Walk.js.map
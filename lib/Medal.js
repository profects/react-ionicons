'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Medal = function Medal(_ref) {
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
        'Medal'
      ),
      _react2.default.createElement('circle', { cx: '256', cy: '352', r: '32' }),
      _react2.default.createElement('path', { d: 'M99.78 32a48 48 0 00-42.94 26.53l-31 62A48.26 48.26 0 0024.28 160h278.2a4 4 0 003.39-1.87l75.5-120A4 4 0 00378 32z' }),
      _react2.default.createElement('path', { d: 'M486.17 120.56l-31-62a47.7 47.7 0 00-32.79-25.46L342.5 160 298 231.08a128 128 0 00-84 0l-23.32-37.2a4 4 0 00-3.39-1.88H51.14a4 4 0 00-3.36 6.16l82.7 128.73a128 128 0 10251 0L483.62 168a48.22 48.22 0 002.55-47.44zm-226 295.31a64 64 0 1159.69-59.69 64.08 64.08 0 01-59.68 59.69z' })
    )
  );
};

exports.default = Medal;
module.exports = exports['default'];
//# sourceMappingURL=Medal.js.map
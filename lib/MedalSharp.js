'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MedalSharp = function MedalSharp(_ref) {
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
        'Medal'
      ),
      _react2.default.createElement('path', { d: 'M80 32L16 160h289.11l80.22-128H80z' }),
      _react2.default.createElement('path', { d: 'M496 144L424 32 298 231.08a128 128 0 00-84 0L189.53 192H43.82l86.66 134.89a128 128 0 10251 0zM256 422a70 70 0 1170-70 70.08 70.08 0 01-70 70z' }),
      _react2.default.createElement('circle', { cx: '256', cy: '352', r: '32' })
    )
  );
};

exports.default = MedalSharp;
module.exports = exports['default'];
//# sourceMappingURL=MedalSharp.js.map
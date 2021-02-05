'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationsOffCircleSharp = function NotificationsOffCircleSharp(_ref) {
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
        'Notifications Off Circle'
      ),
      _react2.default.createElement('path', { d: 'M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zM144 308l28-36v-32.3a131.83 131.83 0 012.34-25.42L285.92 336H144zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32zm93.48-3.74l-211-227 23.68-21.52 211 227zM368 330.85l-.32-.38-155.5-169.63a73.4 73.4 0 0115.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z' })
    )
  );
};

exports.default = NotificationsOffCircleSharp;
module.exports = exports['default'];
//# sourceMappingURL=NotificationsOffCircleSharp.js.map
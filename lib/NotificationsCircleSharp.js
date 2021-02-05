'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationsCircleSharp = function NotificationsCircleSharp(_ref) {
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
        'Notifications Circle'
      ),
      _react2.default.createElement('path', { d: 'M295.68 351.43v.57h.32z' }),
      _react2.default.createElement('path', { d: 'M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32zM295.67 352h.33l-.32-.57c0 .19-.01.38-.01.57z', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32zm112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z' })
    )
  );
};

exports.default = NotificationsCircleSharp;
module.exports = exports['default'];
//# sourceMappingURL=NotificationsCircleSharp.js.map
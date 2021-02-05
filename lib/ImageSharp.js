'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSharp = function ImageSharp(_ref) {
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
        'Image'
      ),
      _react2.default.createElement('path', { d: 'M456 64H56a24 24 0 00-24 24v336a24 24 0 0024 24h400a24 24 0 0024-24V88a24 24 0 00-24-24zm-124.38 64.2a48 48 0 11-43.42 43.42 48 48 0 0143.42-43.42zM76 416a12 12 0 01-12-12v-87.63L192.64 202l96.95 96.75L172.37 416zm372-12a12 12 0 01-12 12H217.63l149.53-149.53L448 333.84z' })
    )
  );
};

exports.default = ImageSharp;
module.exports = exports['default'];
//# sourceMappingURL=ImageSharp.js.map
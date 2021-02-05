'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SyncCircleSharp = function SyncCircleSharp(_ref) {
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
        'Sync Circle'
      ),
      _react2.default.createElement('path', { d: 'M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm0 320a112.19 112.19 0 01-111.27-98.23l-8.86 8.86L113.24 256l46-46 47.55 45.48-22.12 23.12-7.2-6.88a80.26 80.26 0 00138.48 37.5l23.77 21.41A112.82 112.82 0 01256 368zm96.79-66l-47.55-45.5 22.12-23.12 6.86 6.55A80.2 80.2 0 00196 202.64l-23.82-21.37A112.18 112.18 0 01367 242.49l9.11-9.12L398.76 256z' })
    )
  );
};

exports.default = SyncCircleSharp;
module.exports = exports['default'];
//# sourceMappingURL=SyncCircleSharp.js.map
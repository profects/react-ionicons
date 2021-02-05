'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PulseSharp = function PulseSharp(_ref) {
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
        'Pulse'
      ),
      _react2.default.createElement('path', { d: 'M426 266a54.07 54.07 0 00-49.3 32h-24.84l-27-81a22 22 0 00-42 .92l-37.2 130.2-48-281.74a22 22 0 00-43-1.72L94.82 298H32v44h80a22 22 0 0021.34-16.66L171.69 172l46.61 273.62A22 22 0 00238.76 464H240a22 22 0 0021.15-16l44.47-149.62 9.51 28.62A22 22 0 00336 342h40.7a54 54 0 1049.3-76z' })
    )
  );
};

exports.default = PulseSharp;
module.exports = exports['default'];
//# sourceMappingURL=PulseSharp.js.map
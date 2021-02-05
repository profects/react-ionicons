'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HandRightSharp = function HandRightSharp(_ref) {
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
        'Hand Right'
      ),
      _react2.default.createElement('path', { d: 'M82.42 209.08c15.06-6.62 32.38 1.31 38.5 17.62L156 312h11.27V80c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v151.75l14.78.25V32c0-17.6 13.3-32 29.55-32 16.3 0 29.55 14.4 29.55 32v199.75L315 232V64c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v183.75l14.78.25V128c0-17.6 13.3-32 29.55-32C434.7 96 448 110.4 448 128v216c0 75.8-37.13 168-169 168-40.8 0-79.42-7-100.66-21a121.41 121.41 0 01-33.72-33.31 138 138 0 01-16-31.78L66.16 250.77c-6.11-16.31 1.2-35.06 16.26-41.69z' })
    )
  );
};

exports.default = HandRightSharp;
module.exports = exports['default'];
//# sourceMappingURL=HandRightSharp.js.map
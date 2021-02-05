'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WifiSharp = function WifiSharp(_ref) {
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
        'Wifi'
      ),
      _react2.default.createElement('path', { d: 'M332.69 320a115 115 0 00-152.8 0M393.74 259a201.26 201.26 0 00-274.92 0M448 191.52a288 288 0 00-383.44 0', fill: 'none', stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: '42' }),
      _react2.default.createElement('path', { d: 'M300.67 384L256 433l-44.34-49a56.73 56.73 0 0188.92 0z' })
    )
  );
};

exports.default = WifiSharp;
module.exports = exports['default'];
//# sourceMappingURL=WifiSharp.js.map
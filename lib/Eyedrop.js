'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Eyedrop = function Eyedrop(_ref) {
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
        'Eyedrop'
      ),
      _react2.default.createElement('path', { d: 'M461.05 51a65 65 0 00-45.71-19h-.76a61.81 61.81 0 00-44.36 19.25 12.81 12.81 0 00-1.07 1.25l-54 69.76c-5.62 7.1-12.74 8.68-16.78 4.64l-1.9-1.9a48 48 0 00-67.92 67.92l9.91 9.91a2 2 0 010 2.83L58.7 385.38C54 390.05 46.9 399.85 38.85 431c-4.06 15.71-6.51 29.66-6.61 30.24A16 16 0 0048 480a15.68 15.68 0 002.64-.22c.58-.1 14.44-2.43 30.13-6.44 31.07-7.94 41.05-15.24 45.85-20l179.77-179.79a2 2 0 012.82 0l9.92 9.92a48 48 0 0067.92-67.93l-1.59-1.54c-5-5-2.52-12.11 4.32-17.14l69.75-53.94a17.82 17.82 0 001.47-1.32 63.2 63.2 0 0019-45A63.88 63.88 0 00461.05 51zM250.78 283.9c-2.92 2.92-16.18 7.92-23.39.71s-2.24-20.42.69-23.35l33-33a2 2 0 012.83 0l19.84 19.83a2 2 0 010 2.83z' })
    )
  );
};

exports.default = Eyedrop;
module.exports = exports['default'];
//# sourceMappingURL=Eyedrop.js.map
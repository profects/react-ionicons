'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateSharp = function CreateSharp(_ref) {
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
        'Create'
      ),
      _react2.default.createElement('path', { d: 'M464.37 49.2a22.07 22.07 0 00-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 001.01-30.68zM252.76 336H176V259.24l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6l-9.38 9.4zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400v31.16z' }),
      _react2.default.createElement('path', { d: 'M208 304h31.49L400 143.16V112h-31.15L208 272.51V304z' })
    )
  );
};

exports.default = CreateSharp;
module.exports = exports['default'];
//# sourceMappingURL=CreateSharp.js.map
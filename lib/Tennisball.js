'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tennisball = function Tennisball(_ref) {
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
        'Tennisball'
      ),
      _react2.default.createElement('path', { d: 'M448 256a192.55 192.55 0 0032-2.68A224 224 0 00258.68 32 192.55 192.55 0 00256 64c0 105.87 86.13 192 192 192zM253.35 480c.94-5.67 1.65-11.4 2.09-17.18.37-4.88.56-9.86.56-14.79 0-105.87-86.13-192-192-192a192.55 192.55 0 00-32 2.68A224 224 0 00253.35 480z' }),
      _react2.default.createElement('path', { d: 'M289.61 222.39A222.53 222.53 0 01224 64a226.07 226.07 0 012-30A224.1 224.1 0 0034 226a226.07 226.07 0 0130-2 222.53 222.53 0 01158.39 65.61A222.53 222.53 0 01288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 00478 286a226.07 226.07 0 01-30 2 222.53 222.53 0 01-158.39-65.61z' })
    )
  );
};

exports.default = Tennisball;
module.exports = exports['default'];
//# sourceMappingURL=Tennisball.js.map
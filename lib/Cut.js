'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cut = function Cut(_ref) {
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
        'Cut'
      ),
      _react2.default.createElement('path', { d: 'M103.48 224a71.64 71.64 0 0044.76-15.66l41.5 16.89 6.82-12.63a39.15 39.15 0 014.32-6.37l14.22-14.42-41.17-24.94A72 72 0 10103.48 224zm0-112a40 40 0 11-40 40 40 40 0 0140-40z' }),
      _react2.default.createElement('path', { d: 'M480 169l-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85-10.12-1-26.95-1.24-49.69 3.81-20 4.45-122.14 28.2-164.95 58.62-20.25 14.39-24.06 33.67-27.06 49.16-2.78 14.14-5 25.31-18 35-15 11.14-27.27 16.38-33.58 18.6a71.74 71.74 0 1024.79 38zm-224.52 87a16 16 0 1116-16 16 16 0 01-16 16zm-152 144a40 40 0 1140-40 40 40 0 01-40 40z' }),
      _react2.default.createElement('path', { d: 'M343.79 259.87l-83.74 48.18 27.63 13.08 3.62 1.74C310 331.92 359.74 356 410.53 359c3.89.23 7.47.34 10.78.34C442 359.31 453 354 459.75 350L480 336z' })
    )
  );
};

exports.default = Cut;
module.exports = exports['default'];
//# sourceMappingURL=Cut.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Beer = function Beer(_ref) {
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
        'Beer'
      ),
      _react2.default.createElement('path', { d: 'M392 208h-24v-5.74A63.93 63.93 0 00321.65 96a111 111 0 00-27.59-47.29A108.62 108.62 0 00216 16c-29.91 0-57.78 12.28-79 34.68a56 56 0 00-67.51 77.54A63.91 63.91 0 0080 231.39V440a56.06 56.06 0 0056 56h176a56.06 56.06 0 0056-56v-8h24a72.08 72.08 0 0072-72v-80a72.08 72.08 0 00-72-72zM176 416a16 16 0 01-32 0V256a16 16 0 0132 0zm64 0a16 16 0 01-32 0V256a16 16 0 0132 0zm64 0a16 16 0 01-32 0V256a16 16 0 0132 0zm16-224c-8.33 0-20.55-5.18-26.69-11.31A16 16 0 00282 176H160a16 16 0 00-15 10.53c-6.83 18.68-23.6 21.47-33 21.47a32 32 0 010-64c.09 0 9.12.34 16.4 5.8a16 16 0 1019.2-25.6A63.69 63.69 0 00112 112a63.55 63.55 0 00-14 1.57A24 24 0 01120 80a23.78 23.78 0 0119.38 9.84 51.35 51.35 0 014.71 7.9A16 16 0 00176 96c0-6.77-3.61-15.17-10.76-25-.46-.63-1-1.25-1.45-1.86C178.39 55.44 196.64 48 216 48a76.86 76.86 0 0155.23 23.18A80.2 80.2 0 01292.61 142a16 16 0 0012.73 18.71 16.29 16.29 0 003 .28 16 16 0 0015.7-13 111.78 111.78 0 001.96-19.42 32 32 0 01-6 63.43zm112 168a40 40 0 01-40 40h-24V240h24a40 40 0 0140 40z' })
    )
  );
};

exports.default = Beer;
module.exports = exports['default'];
//# sourceMappingURL=Beer.js.map
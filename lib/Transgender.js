'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transgender = function Transgender(_ref) {
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
        'Transgender'
      ),
      _react2.default.createElement('path', { d: 'M458 32h-68a22 22 0 000 44h14.89l-59.57 59.57a149.69 149.69 0 00-178.64 0l-7.57-7.57 26.45-26.44a22 22 0 00-31.12-31.12L128 96.89 107.11 76H122a22 22 0 000-44H54a22 22 0 00-22 22v68a22 22 0 0044 0v-14.89L96.89 128l-26.42 26.42a22 22 0 1031.11 31.11L128 159.11l7.57 7.57A149.19 149.19 0 00106 256c0 82.71 67.29 150 150 150a149.2 149.2 0 0089.46-29.67L369 399.9l-26.54 26.54a22 22 0 0031.12 31.12l26.49-26.5 42.37 42.48a22 22 0 0031.16-31.08L431.17 400l26.39-26.39a22 22 0 00-31.12-31.12l-26.35 26.35-23.55-23.62a149.68 149.68 0 00-.11-178.49L436 107.11V122a22 22 0 0044 0V54a22 22 0 00-22-22zM150 256a106 106 0 11106 106 106.12 106.12 0 01-106-106z' })
    )
  );
};

exports.default = Transgender;
module.exports = exports['default'];
//# sourceMappingURL=Transgender.js.map
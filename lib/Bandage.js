'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bandage = function Bandage(_ref) {
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
        'Bandage'
      ),
      _react2.default.createElement('path', { d: 'M275.8 157a16 16 0 00-22.63 0l-93.34 93.34a16 16 0 000 22.63l79.2 79.2a16 16 0 0022.63 0L355 258.83a16 16 0 000-22.63zM137.21 295.6a47.81 47.81 0 01-9.43-13.38L69 341a72.2 72.2 0 000 102 72.37 72.37 0 00102 0l58.77-58.76a47.81 47.81 0 01-13.38-9.43zM392 48a71.55 71.55 0 00-51 21l-55.92 55.91a48.05 48.05 0 0113.36 9.45l79.19 79.19a48.05 48.05 0 019.45 13.36L443 171a72 72 0 00-51-123z', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M275.8 157a16 16 0 00-22.63 0l-93.34 93.34a16 16 0 000 22.63l79.2 79.2a16 16 0 0022.63 0L355 258.83a16 16 0 000-22.63zm-56.49 110.31a16 16 0 110-22.62 16 16 0 010 22.62zm48 48a16 16 0 110-22.62 16 16 0 010 22.62zm0-96a16 16 0 110-22.62 16 16 0 010 22.62zm48 48a16 16 0 110-22.62 16 16 0 010 22.62zM465.61 46.39a104.38 104.38 0 00-147.25 0l-69.76 69.89a4 4 0 004.2 6.58 35.74 35.74 0 0111.69-2.54 47.7 47.7 0 0133.94 14.06l79.19 79.19a47.7 47.7 0 0114.06 33.94 35.68 35.68 0 01-2.54 11.69 4 4 0 006.58 4.2l69.89-69.76a104.38 104.38 0 000-147.25z' }),
      _react2.default.createElement('path', { d: 'M254.34 386.83a47.91 47.91 0 01-33.94-14l-79.19-79.23a47.81 47.81 0 01-9.43-13.38c-4.59-9.7-1.39-25 2.48-36.9a4 4 0 00-6.64-4l-77.23 77.04a104.12 104.12 0 00147.25 147.25l72.75-72.88a4 4 0 00-4.21-6.58c-4.18 1.58-8.4 2.68-11.84 2.68z' })
    )
  );
};

exports.default = Bandage;
module.exports = exports['default'];
//# sourceMappingURL=Bandage.js.map
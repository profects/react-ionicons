'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skull = function Skull(_ref) {
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
        'Skull'
      ),
      _react2.default.createElement('path', { d: 'M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0048 224v100.67A79.62 79.62 0 0098.29 399l23.71 9.42a15.92 15.92 0 019.75 11.72l10 50.13A32.09 32.09 0 00173.12 496H184a8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01224 448v40a8 8 0 008 8 8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 448v40a8 8 0 008 8 8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01320 448v40a8 8 0 008 8h10.88a32.09 32.09 0 0031.38-25.72l10-50.14a16 16 0 019.74-11.72l23.71-9.42A79.62 79.62 0 00464 324.67v-99c0-56-22-108.81-62-148.73zM171.66 335.88a56 56 0 1152.22-52.22 56 56 0 01-52.22 52.22zM281 397.25a16.37 16.37 0 01-9.3 2.75h-31.4a16.37 16.37 0 01-9.28-2.75 16 16 0 01-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 01-6.61 16.9zm66.68-61.37a56 56 0 1152.22-52.22 56 56 0 01-52.24 52.22z' })
    )
  );
};

exports.default = Skull;
module.exports = exports['default'];
//# sourceMappingURL=Skull.js.map
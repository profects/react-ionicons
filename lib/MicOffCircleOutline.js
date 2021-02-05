'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MicOffCircleOutline = function MicOffCircleOutline(_ref) {
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
        'Mic Off Circle'
      ),
      _react2.default.createElement('path', { d: 'M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z' }),
      _react2.default.createElement('path', { d: 'M352 369a15.93 15.93 0 01-11.84-5.24l-192-210a16 16 0 0123.68-21.52l192 210A16 16 0 01352 369zM352 248.22v-23.8a16.3 16.3 0 00-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.35 43.35 0 01-3.07 15.91 4 4 0 00.76 4.16l19.19 21.1a2 2 0 003.19-.3A77.12 77.12 0 00352 248.22zM304 240v-64a48.14 48.14 0 00-48-48 48.08 48.08 0 00-41 23.1 4 4 0 00.47 4.77l84.42 92.86a2 2 0 003.46-1A47.84 47.84 0 00304 240zM246.57 285.2l-36.46-40.11a1 1 0 00-1.74.8 48.26 48.26 0 0037.25 41 1 1 0 00.95-1.69z' }),
      _react2.default.createElement('path', { d: 'M287.55 352H272v-17.74a100.33 100.33 0 0012.53-3.06 2 2 0 00.89-3.26l-21.07-23.19a3.94 3.94 0 00-3.29-1.29c-1.69.15-3.39.24-5.06.24-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 00-15.61-16.4A15.91 15.91 0 00160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.71 103.71 0 00240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00224 384h64a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z' })
    )
  );
};

exports.default = MicOffCircleOutline;
module.exports = exports['default'];
//# sourceMappingURL=MicOffCircleOutline.js.map
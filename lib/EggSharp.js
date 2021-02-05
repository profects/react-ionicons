'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EggSharp = function EggSharp(_ref) {
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
        'Egg'
      ),
      _react2.default.createElement('path', { d: 'M418.39 381.05c-8.08 21.68-19.76 40.1-34.72 54.75-14.38 14.07-32.1 24.95-52.67 32.34C309.08 476 283.85 480 256 480s-53.08-4-75-11.86c-20.57-7.39-38.29-18.27-52.67-32.34-15-14.65-26.64-33.07-34.72-54.75C84.58 356.82 80 328.53 80 296.94c0-30.28 6.68-62.57 19.86-96A371 371 0 01151 111.42C195.78 53.56 241 32 256 32s62.67 22.4 105 79.42c18.33 24.71 38.87 58.34 51.17 89.54 13.18 33.41 19.86 65.7 19.86 96-.03 31.57-4.61 59.86-13.64 84.09z' })
    )
  );
};

exports.default = EggSharp;
module.exports = exports['default'];
//# sourceMappingURL=EggSharp.js.map
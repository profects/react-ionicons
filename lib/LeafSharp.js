'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeafSharp = function LeafSharp(_ref) {
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
        'Leaf'
      ),
      _react2.default.createElement('path', { d: 'M150.38 253.68l21.94-23.3 11.65 11c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15 32 63.33c-.1 2.56-2.42 63.57 14.22 147.77 17.58 89 50.24 155.85 97.07 198.63 38 34.69 87.62 53.9 136.93 53.9a185.88 185.88 0 0027.78-2.07c41.72-6.32 76.43-27.27 96-57.75-89.5-23.28-165.95-67.55-242-139.16z' }),
      _react2.default.createElement('path', { d: 'M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.49 158.49 0 01-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583.43 583.43 0 0058.55 12l15.82 2.44 4.86-31.63z' })
    )
  );
};

exports.default = LeafSharp;
module.exports = exports['default'];
//# sourceMappingURL=LeafSharp.js.map
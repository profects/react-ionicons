'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rainy = function Rainy(_ref) {
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
      onClick = _ref.onClick;

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
        'Rainy'
      ),
      _react2.default.createElement('path', { d: 'M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 01-11.19-9 142.24 142.24 0 00-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 00-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 01-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28 23.84-21.65 37-51.67 37-84.52 0-31.49-11-59.09-31.74-79.83zM112 448a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01112 448zM160 496a16 16 0 01-13.29-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01160 496zM272 448a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01272 448zM320 496a16 16 0 01-13.3-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01320 496z' })
    )
  );
};

exports.default = Rainy;
module.exports = exports['default'];
//# sourceMappingURL=Rainy.js.map
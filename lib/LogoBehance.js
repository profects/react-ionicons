'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoBehance = function LogoBehance(_ref) {
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
        'Logo Behance'
      ),
      _react2.default.createElement('path', { d: 'M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8zM204.8 262.4h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3 0-26-19.7-25.7-19.7-25.7z' }),
      _react2.default.createElement('path', { d: 'M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm47.2 137.6h77.1v23h-77.1v-23zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4zm144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5 31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2z' }),
      _react2.default.createElement('path', { d: 'M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3z' })
    )
  );
};

exports.default = LogoBehance;
module.exports = exports['default'];
//# sourceMappingURL=LogoBehance.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Thermometer = function Thermometer(_ref) {
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
        'Thermometer'
      ),
      _react2.default.createElement('path', { d: 'M320 287.18V81c0-35.12-27.89-64.42-63-64.95a64.08 64.08 0 00-65 64v207.13a8 8 0 01-3.18 6.37A113.48 113.48 0 00144 384a112 112 0 00224 0 113.48 113.48 0 00-44.82-90.45 8 8 0 01-3.18-6.37zM254.07 432a48 48 0 01-22-89.54 16 16 0 008-13.84V112.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 112v216.58a16.18 16.18 0 008.15 13.94A48 48 0 01254.07 432z' })
    )
  );
};

exports.default = Thermometer;
module.exports = exports['default'];
//# sourceMappingURL=Thermometer.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BatteryChargingSharp = function BatteryChargingSharp(_ref) {
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
        'Battery Charging'
      ),
      _react2.default.createElement('path', { d: 'M306.68 237.62h-66.5l15.33-54.7 6.43-22.92 3.94-14 4.29-15.33a3.56 3.56 0 00.06-.44v-.19a1.85 1.85 0 000-.23 2 2 0 000-.24v-.14c0-.1-.07-.19-.11-.29v-.05a2.33 2.33 0 00-2-1.35h-.1a2.25 2.25 0 00-1.8 1l-12.5 17.15-18.82 25.55-8.36 11.48-35.41 48.6L160 274.26h66.44l-30 107a3.93 3.93 0 00-.06.48v.1a1.94 1.94 0 000 .34.29.29 0 000 .09 3 3 0 00.07.32v.06a1.83 1.83 0 00.14.32 2.38 2.38 0 001.52 1.16H198.68a2.1 2.1 0 001.31-.5l.06-.05a2.6 2.6 0 00.42-.45L223.3 352l13-17.82z' }),
      _react2.default.createElement('path', { d: 'M289.78 134.55l-.14.74-.21.73-6.72 24H417V352H248.05l-23.33 32H449V128H290.13a22.62 22.62 0 01-.35 6.55zM49 160h169.49l23.31-32H17v256h159.49a22.73 22.73 0 01.34-6.67l.15-.75.2-.73 6.69-23.85H49z' }),
      _react2.default.createElement('path', { d: 'M264.76 329.08h130.55V182.92H276.28l-9.73 34.7H346l-23.16 31.78-58.08 79.68zM160 294.26h-39.31l23.15-31.78 57.95-79.56H70.69v146.16h119.6l9.77-34.82H160zM465 202.67h32v106.67h-32z' })
    )
  );
};

exports.default = BatteryChargingSharp;
module.exports = exports['default'];
//# sourceMappingURL=BatteryChargingSharp.js.map
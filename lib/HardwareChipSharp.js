'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HardwareChipSharp = function HardwareChipSharp(_ref) {
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
        'Hardware Chip'
      ),
      _react2.default.createElement('path', { d: 'M160 160h192v192H160z' }),
      _react2.default.createElement('path', { d: 'M480 198v-44h-32V88a24 24 0 00-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 00-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0024 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0024-24v-66h32v-44h-32v-36h32v-44h-32v-36zm-352-70h256v256H128z' })
    )
  );
};

exports.default = HardwareChipSharp;
module.exports = exports['default'];
//# sourceMappingURL=HardwareChipSharp.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransgenderSharp = function TransgenderSharp(_ref) {
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
        'Transgender'
      ),
      _react2.default.createElement('path', { d: 'M480 448.94l-48.94-49.08L464 366.92l-31.1-31.11-32.9 32.9-23.55-23.61a149.64 149.64 0 00-.1-178.45l59.55-59.56V144h44V32h-112v44h36.87l-59.55 59.55a149.65 149.65 0 00-178.59 0l-7.55-7.55 33-33L161 63.88l-33 33L107.09 76H144V32H32v112h44v-36.91L96.87 128l-33 33L95 192.05l33-33 7.56 7.57A149.18 149.18 0 00106 255.94c0 82.69 67.27 150 150 150a149.12 149.12 0 0089.44-29.67l23.51 23.58-33.14 33.05 31.11 31.1 33-33 48.9 49zm-330-193a106 106 0 11106 106 106.09 106.09 0 01-106-106z' })
    )
  );
};

exports.default = TransgenderSharp;
module.exports = exports['default'];
//# sourceMappingURL=TransgenderSharp.js.map
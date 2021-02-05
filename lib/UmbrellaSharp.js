'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UmbrellaSharp = function UmbrellaSharp(_ref) {
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
        'Umbrella'
      ),
      _react2.default.createElement('path', { d: 'M128.93 280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1zM383.08 280l2.62-2.12c-.79.58-1.57 1.17-2.34 1.79z' }),
      _react2.default.createElement('path', { d: 'M463.14 186.44A224.55 224.55 0 00272 48.57V32h-32v16.57A223.58 223.58 0 0032 272v22.52l12.25-11.21a62.63 62.63 0 0181.43-5.88l.22.17c.94.67 1.87 1.36 2.77 2.1q2.09 1.69 4 3.61L144 294.63l11.31-11.32a62.59 62.59 0 0181.4-5.78L240 280v152a16 16 0 01-32 0v-16h-32v16a48 48 0 0096 0V280l3.29-2.47a62.59 62.59 0 0181.4 5.78L368 294.63l11.31-11.32q1.95-1.94 4.05-3.64c.77-.62 1.55-1.21 2.34-1.79l.26-.21c24.63-18.47 60-16.13 81.81 5.64l12.23 11.2V272a223.62 223.62 0 00-16.86-85.56z' })
    )
  );
};

exports.default = UmbrellaSharp;
module.exports = exports['default'];
//# sourceMappingURL=UmbrellaSharp.js.map
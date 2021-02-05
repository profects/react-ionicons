'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlowerSharp = function FlowerSharp(_ref) {
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
        'Flower'
      ),
      _react2.default.createElement('circle', { cx: '256', cy: '256', r: '43' }),
      _react2.default.createElement('path', { d: 'M475.93 303.91a67.49 67.49 0 00-47.62-115.6c-2.88 0-6.2.14-9.93.43 2.75-2.36 5.23-4.62 7.33-6.71A67.83 67.83 0 00378 66.33h-.25a67.27 67.27 0 00-47.82 20c-2.11 2.11-4.37 4.59-6.72 7.33.29-3.75.44-7.07.44-9.93a67.69 67.69 0 10-135.38 0c0 2.87.15 6.19.44 9.93-2.36-2.74-4.62-5.22-6.72-7.33a67.27 67.27 0 00-47.82-20H134A67.9 67.9 0 0086.29 182c2.1 2.09 4.58 4.35 7.34 6.72-3.74-.29-7.06-.44-9.94-.44a67.69 67.69 0 000 135.38c2.86 0 6.18-.15 9.93-.44-2.74 2.35-5.22 4.61-7.33 6.72a67.55 67.55 0 0047.82 115.42h.25A67.32 67.32 0 00182 425.71c2.09-2.1 4.35-4.58 6.71-7.33-.28 3.73-.43 7.05-.43 9.93a67.69 67.69 0 00135.38 0c0-2.87-.15-6.19-.44-9.94 2.36 2.75 4.62 5.24 6.72 7.34a67.32 67.32 0 0047.67 19.68h.25A67.5 67.5 0 00425.71 330c-2.11-2.11-4.59-4.37-7.33-6.72 3.75.29 7.07.44 9.93.44a67.27 67.27 0 0047.62-19.81zM256 341a85 85 0 1185-85 85.1 85.1 0 01-85 85z' })
    )
  );
};

exports.default = FlowerSharp;
module.exports = exports['default'];
//# sourceMappingURL=FlowerSharp.js.map
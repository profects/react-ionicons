'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentsSharp = function DocumentsSharp(_ref) {
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
        'Documents'
      ),
      _react2.default.createElement('path', { d: 'M307.94 248L216 154.52V242a6 6 0 006 6z' }),
      _react2.default.createElement('path', { d: 'M184 268V144H60a12 12 0 00-12 12v328a12 12 0 0012 12h248a12 12 0 0012-12V280H196a12 12 0 01-12-12zM366 120h85.94L360 26.52V114a6 6 0 006 6z' }),
      _react2.default.createElement('path', { d: 'M340 152a12 12 0 01-12-12V16H172a12 12 0 00-12 12v84h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400H452a12 12 0 0012-12V152z' })
    )
  );
};

exports.default = DocumentsSharp;
module.exports = exports['default'];
//# sourceMappingURL=DocumentsSharp.js.map
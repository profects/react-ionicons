'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LibrarySharp = function LibrarySharp(_ref) {
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
        'Library'
      ),
      _react2.default.createElement('path', { d: 'M84 480H28a12 12 0 01-12-12V92a12 12 0 0112-12h56a12 12 0 0112 12v376a12 12 0 01-12 12zM240 208v-52a12 12 0 00-12-12H124a12 12 0 00-12 12v52zM112 416v52a12 12 0 0012 12h104a12 12 0 0012-12v-52zM112 240h128v144H112zM340 480h-72a12 12 0 01-12-12V44a12 12 0 0112-12h72a12 12 0 0112 12v424a12 12 0 01-12 12zM369 100.7l30 367.83a12 12 0 0013.45 10.92l72.16-9a12 12 0 0010.47-12.9L465 91.21a12 12 0 00-13.2-10.94l-72.13 7.51A12 12 0 00369 100.7z' })
    )
  );
};

exports.default = LibrarySharp;
module.exports = exports['default'];
//# sourceMappingURL=LibrarySharp.js.map
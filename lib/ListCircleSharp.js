'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListCircleSharp = function ListCircleSharp(_ref) {
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
        'List Circle'
      ),
      _react2.default.createElement('path', { d: 'M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-64 287.5a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-71a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm176 151H212.67v-32H368zm0-71H212.67v-32H368zm0-72H212.67v-32H368z' })
    )
  );
};

exports.default = ListCircleSharp;
module.exports = exports['default'];
//# sourceMappingURL=ListCircleSharp.js.map
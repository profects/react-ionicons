'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Power = function Power(_ref) {
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
        'Power'
      ),
      _react2.default.createElement('path', { d: 'M256 464c-114.69 0-208-93.47-208-208.35 0-62.45 27.25-121 74.76-160.55a22 22 0 1128.17 33.8C113.48 160.1 92 206.3 92 255.65 92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 00360.17 129a22 22 0 1128-33.92A207.88 207.88 0 01464 255.65C464 370.53 370.69 464 256 464z' }),
      _react2.default.createElement('path', { d: 'M256 272a22 22 0 01-22-22V70a22 22 0 0144 0v180a22 22 0 01-22 22z' })
    )
  );
};

exports.default = Power;
module.exports = exports['default'];
//# sourceMappingURL=Power.js.map
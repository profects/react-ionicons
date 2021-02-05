'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayForwardOutline = function PlayForwardOutline(_ref) {
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
        'Play Forward'
      ),
      _react2.default.createElement('path', { d: 'M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52zM260.57 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25z', fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32' })
    )
  );
};

exports.default = PlayForwardOutline;
module.exports = exports['default'];
//# sourceMappingURL=PlayForwardOutline.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CutSharp = function CutSharp(_ref) {
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
        'Cut'
      ),
      _react2.default.createElement('path', { d: 'M480 128h-48l-198.94 70.46-59.13-31.59a72.16 72.16 0 10-25.69 41.47l52.2 31.72L192 277l-43.64 26.76a71.74 71.74 0 1024.79 38L480 160zm-376.52 64a40 40 0 1140-40 40 40 0 01-40 40zm0 208a40 40 0 1140-40 40 40 0 01-40 40zm152-144a16 16 0 1116-16 16 16 0 01-16 16z' }),
      _react2.default.createElement('path', { d: 'M343.79 259.87l-83.74 48.18L432 368h47.99l.01-32-136.21-76.13z' })
    )
  );
};

exports.default = CutSharp;
module.exports = exports['default'];
//# sourceMappingURL=CutSharp.js.map
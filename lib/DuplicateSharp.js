'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DuplicateSharp = function DuplicateSharp(_ref) {
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
        'Duplicate'
      ),
      _react2.default.createElement('path', { d: 'M112 80h288V56a24 24 0 00-24-24H66a34 34 0 00-34 34v310a24 24 0 0024 24h24V112a32 32 0 0132-32z' }),
      _react2.default.createElement('path', { d: 'M456 112H136a24 24 0 00-24 24v320a24 24 0 0024 24h320a24 24 0 0024-24V136a24 24 0 00-24-24zm-64 200h-80v80h-32v-80h-80v-32h80v-80h32v80h80z' })
    )
  );
};

exports.default = DuplicateSharp;
module.exports = exports['default'];
//# sourceMappingURL=DuplicateSharp.js.map
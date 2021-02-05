'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabletPortrait = function TabletPortrait(_ref) {
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
      onClick = _ref.onClick;

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
        'Tablet Portrait'
      ),
      _react2.default.createElement('path', { d: 'M384 512H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64zM128 32a32 32 0 00-32 32v384a32 32 0 0032 32h256a32 32 0 0032-32V64a32 32 0 00-32-32z' }),
      _react2.default.createElement('path', { d: 'M384 0a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256M128 480h256a32 32 0 0032-32V64a32 32 0 00-32-32H128a32 32 0 00-32 32v384a32 32 0 0032 32m0-16a16 16 0 01-16-16V64a16 16 0 0116-16h256a16 16 0 0116 16v384a16 16 0 01-16 16z' })
    )
  );
};

exports.default = TabletPortrait;
module.exports = exports['default'];
//# sourceMappingURL=TabletPortrait.js.map
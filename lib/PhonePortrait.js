'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhonePortrait = function PhonePortrait(_ref) {
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
        'Phone Portrait'
      ),
      _react2.default.createElement('path', { d: 'M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z' }),
      _react2.default.createElement('path', { d: 'M336 48a11.88 11.88 0 00-9.53 4.69A48 48 0 01288 72h-64a48 48 0 01-38.47-19.31A11.88 11.88 0 00176 48a16 16 0 00-16 16v384a16 16 0 0016 16h160a16 16 0 0016-16V64a16 16 0 00-16-16z' }),
      _react2.default.createElement('path', { d: 'M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z' })
    )
  );
};

exports.default = PhonePortrait;
module.exports = exports['default'];
//# sourceMappingURL=PhonePortrait.js.map
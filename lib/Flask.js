'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flask = function Flask(_ref) {
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
        'Flask'
      ),
      _react2.default.createElement('path', { d: 'M452.32 365L327.4 167.12a48.07 48.07 0 01-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 64h16v77.48a47.92 47.92 0 01-7.41 25.63L59.68 365a74 74 0 00-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 00-2.5-75.79zM211.66 184.2A79.94 79.94 0 00224 141.48V68a4 4 0 014-4h56a4 4 0 014 4v73.48a79.94 79.94 0 0012.35 42.72l57.8 91.53a8 8 0 01-6.78 12.27H160.63a8 8 0 01-6.77-12.27z' })
    )
  );
};

exports.default = Flask;
module.exports = exports['default'];
//# sourceMappingURL=Flask.js.map
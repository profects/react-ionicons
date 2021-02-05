'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloudCircleOutline = function CloudCircleOutline(_ref) {
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
        'Cloud Circle'
      ),
      _react2.default.createElement('path', { d: 'M333.88 240.59a8 8 0 01-6.66-6.66C320.68 192.78 290.82 168 256 168c-32.37 0-53.93 21.22-62.48 43.58a7.92 7.92 0 01-6.16 5c-27.67 4.35-50.82 22.56-51.35 54.3-.52 31.53 25.51 57.11 57 57.11H326c27.5 0 50-13.72 50-44 0-27.22-22-40.41-42.12-43.4z' }),
      _react2.default.createElement('path', { d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z', fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32' })
    )
  );
};

exports.default = CloudCircleOutline;
module.exports = exports['default'];
//# sourceMappingURL=CloudCircleOutline.js.map
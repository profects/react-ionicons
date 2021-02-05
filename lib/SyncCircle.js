'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SyncCircle = function SyncCircle(_ref) {
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
        'Sync Circle'
      ),
      _react2.default.createElement('path', { d: 'M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm83.69 282.65a112.24 112.24 0 01-195-61.29 16 16 0 01-20.13-24.67l23.6-23.6a16 16 0 0122.37-.25l24.67 23.6a16 16 0 01-18 26 80.25 80.25 0 00138.72 38.83 16 16 0 0123.77 21.41zm47.76-63.34l-23.6 23.6a16 16 0 01-22.37.25l-24.67-23.6a16 16 0 0117.68-26.11A80.17 80.17 0 00196 202.64a16 16 0 11-23.82-21.37 112.17 112.17 0 01194.88 61.57 16 16 0 0120.39 24.47z' })
    )
  );
};

exports.default = SyncCircle;
module.exports = exports['default'];
//# sourceMappingURL=SyncCircle.js.map
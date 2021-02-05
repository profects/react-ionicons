'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeartDislikeCircle = function HeartDislikeCircle(_ref) {
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
        'Heart Dislike Circle'
      ),
      _react2.default.createElement('path', { d: 'M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm23.3 299.19c-4.41 3.2-9.16 6.55-14.31 10a15.93 15.93 0 01-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5v-.64a4 4 0 016.82-2.72l120.95 120.2a4 4 0 01-.46 6.07zm68 16.12a16 16 0 01-22.62 0l-176-176a16 16 0 0122.62-22.62l176 176a16 16 0 01.01 22.62zm-14.1-65.62a3.92 3.92 0 01-6 .37l-124-123.21A4 4 0 01206 168h1.55c20.4 0 35 10.64 44.11 20.42a5.93 5.93 0 008.7 0c9.11-9.78 23.71-20.42 44.11-20.42 30.31 0 55.22 25.27 55.53 56.33.26 25.93-8.52 49.97-26.8 73.36z' })
    )
  );
};

exports.default = HeartDislikeCircle;
module.exports = exports['default'];
//# sourceMappingURL=HeartDislikeCircle.js.map
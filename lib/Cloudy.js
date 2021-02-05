'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cloudy = function Cloudy(_ref) {
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
        'Cloudy'
      ),
      _react2.default.createElement('path', { d: 'M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-57.57 42-90.58 87.56-100.75a16 16 0 0012.12-12.39c7.68-36.68 24.45-68.15 49.18-92A153.57 153.57 0 01256 80c35.5 0 68.24 11.69 94.68 33.8a156.24 156.24 0 0142.05 56 16 16 0 0011.37 9.16c27 5.61 51.07 17.33 69.18 33.85C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432z' })
    )
  );
};

exports.default = Cloudy;
module.exports = exports['default'];
//# sourceMappingURL=Cloudy.js.map
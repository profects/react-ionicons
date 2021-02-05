'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FootballSharp = function FootballSharp(_ref) {
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
        'Football'
      ),
      _react2.default.createElement('path', { d: 'M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm140.64 296.08h-46.77l-16.89-29 15-60.44L377.79 242l42.65 36.71a164.87 164.87 0 01-23.8 65.37zM134.21 242L164 254.67l15 60.44-16.89 29h-46.75a164.87 164.87 0 01-23.8-65.34zm249.07-92.47l-18.41 52.33-31.12 13.18L277 167.46v-35l43.86-29.22a166.87 166.87 0 0162.42 46.32zM191.14 103.2L235 132.42v35l-56.75 47.61-31.12-13.18-18.41-52.33a166.87 166.87 0 0162.42-46.32zm26.44 314.3l-20.1-50.66 16-27.51h85l16.06 27.53-20 50.6a166.23 166.23 0 01-77 0z' })
    )
  );
};

exports.default = FootballSharp;
module.exports = exports['default'];
//# sourceMappingURL=FootballSharp.js.map
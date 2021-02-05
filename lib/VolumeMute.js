'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeMute = function VolumeMute(_ref) {
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
        'Volume Mute'
      ),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32', d: 'M416 432L64 80' }),
      _react2.default.createElement('path', { d: 'M243.33 98.86a23.89 23.89 0 00-25.55 1.82l-.66.51-28.52 23.35a8 8 0 00-.59 11.85l54.33 54.33a8 8 0 0013.66-5.66v-64.49a24.51 24.51 0 00-12.67-21.71zM251.33 335.29L96.69 180.69A16 16 0 0085.38 176H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l92 75.31a23.9 23.9 0 0025.87 1.69A24.51 24.51 0 00256 391.45v-44.86a16 16 0 00-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 10-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l14.36 14.36a8 8 0 0013.55-4.31A146 146 0 00352 256zM416 256c0-51.18-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26L389 337.4a8 8 0 0013.13-2.79C411 311.76 416 287.26 416 256z' }),
      _react2.default.createElement('path', { d: 'M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 001.59 9l11.92 11.92a8 8 0 0012.92-2.16C471.6 344.9 480 305 480 256z' })
    )
  );
};

exports.default = VolumeMute;
module.exports = exports['default'];
//# sourceMappingURL=VolumeMute.js.map
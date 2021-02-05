'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LibraryOutline = function LibraryOutline(_ref) {
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
        'Library'
      ),
      _react2.default.createElement('rect', { x: '32', y: '96', width: '64', height: '368', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32', d: 'M112 224h128M112 400h128' }),
      _react2.default.createElement('rect', { x: '112', y: '160', width: '128', height: '304', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '256', y: '48', width: '96', height: '416', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z', fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32' })
    )
  );
};

exports.default = LibraryOutline;
module.exports = exports['default'];
//# sourceMappingURL=LibraryOutline.js.map
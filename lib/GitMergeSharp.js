'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitMergeSharp = function GitMergeSharp(_ref) {
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
        'Git Merge'
      ),
      _react2.default.createElement('path', { d: 'M384 224a63.66 63.66 0 00-37.95 12.5L160 153.36v-2a64 64 0 10-64 0v209.25a64 64 0 1064 0V223.46l160.41 71.69A64 64 0 10384 224zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm256-128a32 32 0 1132-32 32 32 0 01-32 32z' })
    )
  );
};

exports.default = GitMergeSharp;
module.exports = exports['default'];
//# sourceMappingURL=GitMergeSharp.js.map
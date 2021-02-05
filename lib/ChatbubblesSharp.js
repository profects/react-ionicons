'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatbubblesSharp = function ChatbubblesSharp(_ref) {
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
        'Chatbubbles'
      ),
      _react2.default.createElement('path', { d: 'M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 00480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.81 172.81 0 00-4 36.83c0 99.4 80.56 182.11 184.16 182.11 16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94 8-2.41 11.89-1.29l77.42 22.38a4 4 0 005-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14z' }),
      _react2.default.createElement('path', { d: 'M312.54 415.38a165.32 165.32 0 01-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.09 184.09 0 01-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49 0-3.13.11-6.14.22-9.16a4.34 4.34 0 00-7.54-3.12 158.76 158.76 0 00-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 005.22 4.53l68-24.24a16.85 16.85 0 0112.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 00116.63-46 4.29 4.29 0 00-3.66-7.31z' })
    )
  );
};

exports.default = ChatbubblesSharp;
module.exports = exports['default'];
//# sourceMappingURL=ChatbubblesSharp.js.map
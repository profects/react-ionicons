'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloudOffline = function CloudOffline(_ref) {
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
        'Cloud Offline'
      ),
      _react2.default.createElement('path', { d: 'M448 464a15.92 15.92 0 01-11.31-4.69l-384-384a16 16 0 0122.62-22.62l384 384A16 16 0 01448 464zM38.72 196.78C13.39 219.88 0 251.42 0 288c0 36 14.38 68.88 40.49 92.59C65.64 403.43 99.56 416 136 416h192.8a8 8 0 005.66-13.66L100.88 168.76a8 8 0 00-8-2C72 173.15 53.4 183.38 38.72 196.78zM476.59 391.23C499.76 372.78 512 345.39 512 312c0-57.57-42-90.58-87.56-100.75a16 16 0 01-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 00256 64c-31.12 0-60.12 9-84.62 26.1a8 8 0 00-1.14 12.26L461.68 393.8a8 8 0 0010.2.93q2.43-1.68 4.71-3.5z' })
    )
  );
};

exports.default = CloudOffline;
module.exports = exports['default'];
//# sourceMappingURL=CloudOffline.js.map
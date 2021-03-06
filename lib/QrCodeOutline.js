'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QrCodeOutline = function QrCodeOutline(_ref) {
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
        'Qr Code'
      ),
      _react2.default.createElement('rect', { x: '336', y: '336', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '272', y: '272', width: '64', height: '64', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '416', y: '416', width: '64', height: '64', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '432', y: '272', width: '48', height: '48', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '272', y: '432', width: '48', height: '48', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '336', y: '96', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '288', y: '48', width: '176', height: '176', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '96', y: '96', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '48', y: '48', width: '176', height: '176', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '96', y: '336', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '48', y: '288', width: '176', height: '176', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' })
    )
  );
};

exports.default = QrCodeOutline;
module.exports = exports['default'];
//# sourceMappingURL=QrCodeOutline.js.map
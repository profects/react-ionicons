'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Snow = function Snow(_ref) {
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
        'Snow'
      ),
      _react2.default.createElement('path', { d: 'M461 349l-34-19.64a89.53 89.53 0 0120.94-16 22 22 0 00-21.28-38.51 133.62 133.62 0 00-38.55 32.1L300 256l88.09-50.86a133.46 133.46 0 0038.55 32.1 22 22 0 1021.28-38.51 89.74 89.74 0 01-20.94-16l34-19.64A22 22 0 10439 125l-34 19.63a89.74 89.74 0 01-3.42-26.15A22 22 0 00380 96h-.41a22 22 0 00-22 21.59 133.61 133.61 0 008.5 49.41L278 217.89V116.18a133.5 133.5 0 0047.07-17.33 22 22 0 00-22.71-37.69A89.56 89.56 0 01278 71.27V38a22 22 0 00-44 0v33.27a89.56 89.56 0 01-24.36-10.11 22 22 0 10-22.71 37.69A133.5 133.5 0 00234 116.18v101.71L145.91 167a133.61 133.61 0 008.52-49.43 22 22 0 00-22-21.59H132a22 22 0 00-21.59 22.41 89.74 89.74 0 01-3.41 26.19L73 125a22 22 0 10-22 38.1l34 19.64a89.74 89.74 0 01-20.94 16 22 22 0 1021.28 38.51 133.62 133.62 0 0038.55-32.1L212 256l-88.09 50.86a133.62 133.62 0 00-38.55-32.1 22 22 0 10-21.28 38.51 89.74 89.74 0 0120.94 16L51 349a22 22 0 1022 38.1l34-19.63a89.74 89.74 0 013.42 26.15A22 22 0 00132 416h.41a22 22 0 0022-21.59 133.61 133.61 0 00-8.5-49.41L234 294.11v101.71a133.5 133.5 0 00-47.07 17.33 22 22 0 1022.71 37.69A89.56 89.56 0 01234 440.73V474a22 22 0 0044 0v-33.27a89.56 89.56 0 0124.36 10.11 22 22 0 0022.71-37.69A133.5 133.5 0 00278 395.82V294.11L366.09 345a133.61 133.61 0 00-8.52 49.43 22 22 0 0022 21.59h.43a22 22 0 0021.59-22.41 89.74 89.74 0 013.41-26.19l34 19.63A22 22 0 10461 349z' })
    )
  );
};

exports.default = Snow;
module.exports = exports['default'];
//# sourceMappingURL=Snow.js.map
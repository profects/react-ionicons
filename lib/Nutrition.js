'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nutrition = function Nutrition(_ref) {
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
        'Nutrition'
      ),
      _react2.default.createElement('path', { d: 'M439 166.29c-18.67-32.57-47.46-50.81-85.57-54.23-20.18-1.8-39 3.37-57.23 8.38-14.15 3.89-27.52 7.56-40.2 7.56s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36-36.39 3.41-65.51 22.11-84.31 54.08C56.82 195.76 48 236.76 48 288c0 40.4 15 90.49 40 134 12.82 22.25 47 74 87.16 74 30.77 0 47.15-9.44 59.11-16.33 8.3-4.78 13.31-7.67 21.69-7.67s13.39 2.89 21.69 7.67c12 6.89 28.35 16.33 59.15 16.33 40.17 0 74.34-51.76 87.16-74 25.07-43.5 40-93.59 40-134 .04-52.57-8.14-92.38-24.96-121.71zM216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48zm80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48z' }),
      _react2.default.createElement('path', { d: 'M265.1 111.93c13.16-1.75 37.86-7.83 58.83-28.79a98 98 0 0028-58.2 8 8 0 00-8.55-8.94c-12.71.95-36.76 5.87-58.73 27.85A97.6 97.6 0 00256 103.2a8 8 0 009.1 8.73z' })
    )
  );
};

exports.default = Nutrition;
module.exports = exports['default'];
//# sourceMappingURL=Nutrition.js.map
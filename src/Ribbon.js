import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Ribbon = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Ribbon</title><path d="M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 01-127.67-72.94 4 4 0 00-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0048.22 416h78a15.28 15.28 0 0113.62 7.33L178.5 488a16.26 16.26 0 0013.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 00-3.92-5.64zM477.64 391.88l-71.53-129.17a4 4 0 00-6.74-.36 176.5 176.5 0 01-78.31 61.42 16.09 16.09 0 00-8.72 8.25l-36.86 81.1a7.92 7.92 0 000 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0013.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 00-1.41-14.12z"/><ellipse cx="256.26" cy="160" rx="48.01" ry="48"/><path d="M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144 144-64.6 144-144-64.59-144-144-144zm0 224a80 80 0 1180-80 80.1 80.1 0 01-80 80z"/></svg>'}} />
    </SvgContainer>
  )
}


Ribbon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


Ribbon.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default Ribbon
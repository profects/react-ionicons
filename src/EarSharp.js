import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const EarSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Ear</title><path d="M380.48 68.09C347.09 34.5 302.88 16 256 16 159 16 80 95 80 192v206.57a97.59 97.59 0 0028 68.49A94.49 94.49 0 00176 496c19.93 0 41.06-7.69 62.8-22.87a181.46 181.46 0 0025.88-21.86C327.37 390.16 432 288.06 432 192c0-46.49-18.29-90.49-51.52-123.91zM368 200h-32v-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.41c27.5-7.84 59.89-6.62 64.26-6.41a48 48 0 0138.62 75.9c-.3.41-.61.81-.95 1.2-16.55 19-36 45.49-38.46 55l-4.07 15.47-30.94-8.14 4.07-15.47c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 00239.82 240h-.88c-10.67-.58-42.66-.25-62.12 8l-.82.35V320h-32V184c0-57.35 50.24-104 112-104s112 46.65 112 104z"/></svg>
    </SvgContainer>
  )
}


EarSharp.defaultProps = {
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


EarSharp.propTypes = {
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


export default EarSharp
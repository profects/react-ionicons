import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Megaphone = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Megaphone</title><path d="M48 176v.66a17.38 17.38 0 01-4.2 11.23v.05C38.4 194.32 32 205.74 32 224c0 16.55 5.3 28.23 11.68 35.91A19 19 0 0148 272a32 32 0 0032 32h8a8 8 0 008-8V152a8 8 0 00-8-8h-8a32 32 0 00-32 32zM452.18 186.55l-.93-.17a4 4 0 01-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32-11.92-4.11-24.34-.76-31.68 8.53a431.18 431.18 0 01-51.31 51.69c-23.63 20-46.24 34.25-67 42.31a8 8 0 00-5.15 7.47V299a16 16 0 009.69 14.69c19.34 8.29 40.24 21.83 62 40.28a433.74 433.74 0 0151.68 52.16 26.22 26.22 0 0021.1 9.87 33.07 33.07 0 0010.44-1.74C439.71 410 448 399.05 448 386.4V265.53a4 4 0 013.33-3.94l.85-.14C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45zM240 320V152a8 8 0 00-8-8h-96a8 8 0 00-8 8v304a24 24 0 0024 24h52.45a32.66 32.66 0 0025.93-12.45 31.65 31.65 0 005.21-29.05c-1.62-5.18-3.63-11-5.77-17.19-7.91-22.9-18.34-37.07-21.12-69.32A32 32 0 00240 320z"/></svg>'}} />
    </SvgContainer>
  )
}


Megaphone.defaultProps = {
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


Megaphone.propTypes = {
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


export default Megaphone
import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const FishSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Fish</title><path d="M335.45 256a214.83 214.83 0 0129.08-108l7.62-13.26a280.69 280.69 0 00-48.64-7.15c-21.94-16.9-54.64-36.95-92.34-43.33L208 80l13.37 61.86c-41.67 14.14-78.43 42.86-102.76 62.62q-7.06-5.91-14.78-11.55c-39.71-29-82.6-31.8-84.4-31.9L0 160l2.67 19.31c.29 2 6.79 44.73 31.65 76.52C9.46 287.63 3 330.33 2.67 332.36L0 352l19.43-1.36c1.8-.1 44.69-2.89 84.4-31.9q7.58-5.53 14.56-11.37c24.37 19.83 61.14 48.6 102.86 62.74L208 432l23.17-4.22c37.49-6.34 70.08-26.4 92-43.32a284.27 284.27 0 0049.32-7.23l-7.91-13.18A214.92 214.92 0 01335.45 256z"/><path d="M499.59 221.75c-5.85-9.88-16.54-24.9-34.19-40.28a209.82 209.82 0 00-62-37L392.23 164a183.22 183.22 0 00-.09 183.87l11.75 19.57a209.26 209.26 0 0061.42-36.49C497.05 303.47 512 269 512 256c0-12.31-8-26.74-12.41-34.25zM416 256a16 16 0 1116-16 16 16 0 01-16 16z"/></svg>'}} />
    </SvgContainer>
  )
}


FishSharp.defaultProps = {
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


FishSharp.propTypes = {
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


export default FishSharp
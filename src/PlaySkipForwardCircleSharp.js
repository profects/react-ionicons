import React from 'react'
import SvgContainer from './SvgContainer'

const PlaySkipForwardCircleSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Skip Forward Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 288h-32v-69l-128 77.37V167.49L304 245v-69h32z"/></svg>
    </SvgContainer>
  )
}



export default PlaySkipForwardCircleSharp
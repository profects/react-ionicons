import React from 'react'
import SvgContainer from './SvgContainer'

const PaperPlaneSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Paper Plane</title><path d="M496 16L15.88 208 195 289 448 64 223 317l81 179L496 16z"/></svg>
    </SvgContainer>
  )
}



export default PaperPlaneSharp
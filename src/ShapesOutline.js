import React from 'react'
import SvgContainer from './SvgContainer'

const ShapesOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Shapes</title><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"/></svg>
    </SvgContainer>
  )
}



export default ShapesOutline
import React from 'react'
import SvgContainer from './SvgContainer'

const ColorFillSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Color Fill</title><path d="M416 320s-64 48-64 99.84c0 33.28 28.67 60.16 64 60.16s64-27 64-60.16C480 368 416 320 416 320zM144 32l-76 76 70 70L32 280l176 184 152.8-148.3L416 304zm24 116l-39.6-41 15.88-15.89L184 132z"/></svg>
    </SvgContainer>
  )
}



export default ColorFillSharp
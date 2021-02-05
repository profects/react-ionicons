import React from 'react'
import SvgContainer from './SvgContainer'

const PauseSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Pause</title><path d="M224 432h-80V80h80zM368 432h-80V80h80z"/></svg>
    </SvgContainer>
  )
}



export default PauseSharp
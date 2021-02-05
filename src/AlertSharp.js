import React from 'react'
import SvgContainer from './SvgContainer'

const AlertSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Alert</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M240 80l8 240h16l8-240h-32zM240 400h32v32h-32z"/></svg>
    </SvgContainer>
  )
}



export default AlertSharp
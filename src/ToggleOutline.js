import React from 'react'
import SvgContainer from './SvgContainer'

const ToggleOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Toggle</title><circle cx="368" cy="256" r="128" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="16" y="128" width="480" height="256" rx="128" ry="128" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default ToggleOutline
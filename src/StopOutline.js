import React from 'react'
import SvgContainer from './SvgContainer'

const StopOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Stop</title><rect x="96" y="96" width="320" height="320" rx="24" ry="24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default StopOutline
import React from 'react'
import SvgContainer from './SvgContainer'

const MaleFemaleOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Male Female</title><circle cx="216" cy="200" r="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72L432 32"/></svg>
    </SvgContainer>
  )
}



export default MaleFemaleOutline
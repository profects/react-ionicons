import React from 'react'
import SvgContainer from './SvgContainer'

const GitCompareSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Git Compare</title><path d="M209 384h-37a28 28 0 01-28-28V152a64 64 0 10-64-1.16V356a92.1 92.1 0 0092 92h37v55.21L294.39 416 209 328.79zM113 64a32 32 0 11-32 32 32 32 0 0132-32zM432 360.61V156a92.1 92.1 0 00-92-92h-35V9.93L217.14 96 305 182.07V128h35a28 28 0 0128 28v204.61a64 64 0 1064 0zM400 448a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
    </SvgContainer>
  )
}



export default GitCompareSharp
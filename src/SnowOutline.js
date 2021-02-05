import React from 'react'
import SvgContainer from './SvgContainer'

const SnowOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Snow</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 32v448M313.72 80A111.47 111.47 0 01256 96a111.47 111.47 0 01-57.72-16M198.28 432a112.11 112.11 0 01115.44 0M449.99 144L62.01 368M437.27 218a112.09 112.09 0 01-57.71-100M74.73 294a112.09 112.09 0 0157.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0057.71-100M437.27 294a112.09 112.09 0 00-57.71 100"/></svg>
    </SvgContainer>
  )
}



export default SnowOutline
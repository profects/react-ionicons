import React from 'react'
import SvgContainer from './SvgContainer'

const ColorFilterOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Color Filter</title><circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default ColorFilterOutline
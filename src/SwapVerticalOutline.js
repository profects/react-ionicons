import React from 'react'
import SvgContainer from './SvgContainer'

const SwapVerticalOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Swap Vertical</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96"/></svg>
    </SvgContainer>
  )
}



export default SwapVerticalOutline
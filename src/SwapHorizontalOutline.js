import React from 'react'
import SvgContainer from './SvgContainer'

const SwapHorizontalOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Swap Horizontal</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"/></svg>
    </SvgContainer>
  )
}



export default SwapHorizontalOutline
import React from 'react'
import SvgContainer from './SvgContainer'

const CalculatorOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Calculator</title><rect x="112" y="48" width="288" height="416" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160.01 112H352v64H160.01z"/><circle cx="168" cy="248" r="24"/><circle cx="256" cy="248" r="24"/><circle cx="344" cy="248" r="24"/><circle cx="168" cy="328" r="24"/><circle cx="256" cy="328" r="24"/><circle cx="168" cy="408" r="24"/><circle cx="256" cy="408" r="24"/><rect x="320" y="304" width="48" height="128" rx="24" ry="24"/></svg>
    </SvgContainer>
  )
}



export default CalculatorOutline
import React from 'react'
import SvgContainer from './SvgContainer'

const WalkSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Walk</title><path d="M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 01-10.16-37.17V142h15.73A40.36 40.36 0 01259 182.32v162.52" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M128.18 291.5v-74.77l64.95-65.1"/><path d="M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z"/><circle cx="259.02" cy="67.21" r="37.38" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="16"/></svg>
    </SvgContainer>
  )
}



export default WalkSharp
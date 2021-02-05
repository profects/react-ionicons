import React from 'react'
import SvgContainer from './SvgContainer'

const BarChartSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bar Chart</title><path d="M496 496H16V16h32v448h448v32z"/><path d="M192 432H80V208h112zM336 432H224V160h112zM479.64 432h-112V96h112z"/></svg>
    </SvgContainer>
  )
}



export default BarChartSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const BarChart = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bar Chart</title><path d="M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z"/><path d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"/></svg>
    </SvgContainer>
  )
}



export default BarChart
import React from 'react'
import SvgContainer from './SvgContainer'

const PieChart = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Pie Chart</title><path d="M66.1 357a16 16 0 01-14.61-9.46A224 224 0 01256 32a16 16 0 0116 16v208a16 16 0 01-9.47 14.61l-189.9 84.95A15.93 15.93 0 0166.1 357z"/><path d="M313.59 68.18A8 8 0 00304 76v180a48.07 48.07 0 01-28.4 43.82L103.13 377a8 8 0 00-3.35 11.81 208.42 208.42 0 0048.46 50.41A206.32 206.32 0 00272 480c114.69 0 208-93.31 208-208 0-100.45-71.58-184.5-166.41-203.82z"/></svg>
    </SvgContainer>
  )
}



export default PieChart
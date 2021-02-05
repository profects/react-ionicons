import React from 'react'
import SvgContainer from './SvgContainer'

const PieChartSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Pie Chart</title><path d="M58 362.09l-6.51-14.59A224 224 0 01256 32h16v234.37z"/><path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 00272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z"/></svg>
    </SvgContainer>
  )
}



export default PieChartSharp
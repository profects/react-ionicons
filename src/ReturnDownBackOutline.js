import React from 'react'
import SvgContainer from './SvgContainer'

const ReturnDownBackOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Return Down Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 352l-64-64 64-64"/><path d="M64 288h294c58.76 0 106-49.33 106-108v-20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default ReturnDownBackOutline
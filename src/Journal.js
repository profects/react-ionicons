import React from 'react'
import SvgContainer from './SvgContainer'

const Journal = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Journal</title><path d="M290 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h146zM368 32h-18v448h18a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64z"/></svg>
    </SvgContainer>
  )
}



export default Journal
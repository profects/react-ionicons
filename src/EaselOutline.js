import React from 'react'
import SvgContainer from './SvgContainer'

const EaselOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Easel</title><rect x="48" y="80" width="416" height="272" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112"/></svg>
    </SvgContainer>
  )
}



export default EaselOutline
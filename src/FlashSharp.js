import React from 'react'
import SvgContainer from './SvgContainer'

const FlashSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Flash</title><path d="M432 208H288l32-192L80 304h144l-32 192z"/></svg>
    </SvgContainer>
  )
}



export default FlashSharp
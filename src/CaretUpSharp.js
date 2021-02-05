import React from 'react'
import SvgContainer from './SvgContainer'

const CaretUpSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Caret Up</title><path d="M448 368L256 144 64 368h384z"/></svg>
    </SvgContainer>
  )
}



export default CaretUpSharp
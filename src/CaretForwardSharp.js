import React from 'react'
import SvgContainer from './SvgContainer'

const CaretForwardSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Caret Forward</title><path d="M144 448l224-192L144 64v384z"/></svg>
    </SvgContainer>
  )
}



export default CaretForwardSharp
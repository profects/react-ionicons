import React from 'react'
import SvgContainer from './SvgContainer'

const CaretBackSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Caret Back</title><path d="M368 64L144 256l224 192V64z"/></svg>
    </SvgContainer>
  )
}



export default CaretBackSharp
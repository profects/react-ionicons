import React from 'react'
import SvgContainer from './SvgContainer'

const CaretForwardCircleSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Caret Forward Circle</title><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zM212 147.73L342.09 256 212 364.27z"/></svg>
    </SvgContainer>
  )
}



export default CaretForwardCircleSharp
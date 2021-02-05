import React from 'react'
import SvgContainer from './SvgContainer'

const CaretDownSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Caret Down</title><path d="M64 144l192 224 192-224H64z"/></svg>
    </SvgContainer>
  )
}



export default CaretDownSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const CropSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Crop</title><path d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z"/><path d="M346 320h44V122H192v44h154v154z"/></svg>
    </SvgContainer>
  )
}



export default CropSharp
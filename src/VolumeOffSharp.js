import React from 'react'
import SvgContainer from './SvgContainer'

const VolumeOffSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Volume Off</title><path d="M237.65 176.1H144v159.8h93.65L368 440V72L237.65 176.1z"/></svg>
    </SvgContainer>
  )
}



export default VolumeOffSharp
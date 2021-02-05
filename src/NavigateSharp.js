import React from 'react'
import SvgContainer from './SvgContainer'

const NavigateSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Navigate</title><path d="M480 32L32 240h240v240L480 32z"/></svg>
    </SvgContainer>
  )
}



export default NavigateSharp
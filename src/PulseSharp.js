import React from 'react'
import SvgContainer from './SvgContainer'

const PulseSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Pulse</title><path d="M426 266a54.07 54.07 0 00-49.3 32h-24.84l-27-81a22 22 0 00-42 .92l-37.2 130.2-48-281.74a22 22 0 00-43-1.72L94.82 298H32v44h80a22 22 0 0021.34-16.66L171.69 172l46.61 273.62A22 22 0 00238.76 464H240a22 22 0 0021.15-16l44.47-149.62 9.51 28.62A22 22 0 00336 342h40.7a54 54 0 1049.3-76z"/></svg>
    </SvgContainer>
  )
}



export default PulseSharp
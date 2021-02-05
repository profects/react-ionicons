import React from 'react'
import SvgContainer from './SvgContainer'

const VolumeMediumSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Volume Medium</title><path d="M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z"/><path d="M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default VolumeMediumSharp
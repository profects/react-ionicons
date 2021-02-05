import React from 'react'
import SvgContainer from './SvgContainer'

const VolumeHighSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Volume High</title><path d="M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32"/><path d="M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z"/></svg>
    </SvgContainer>
  )
}



export default VolumeHighSharp
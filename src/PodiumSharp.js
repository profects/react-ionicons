import React from 'react'
import SvgContainer from './SvgContainer'

const PodiumSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Podium</title><path d="M160 32h192v448H160zM384 192h112v288H384zM16 128h112v352H16z"/></svg>
    </SvgContainer>
  )
}



export default PodiumSharp
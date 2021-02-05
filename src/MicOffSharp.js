import React from 'react'
import SvgContainer from './SvgContainer'

const MicOffSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Mic Off</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M432 400L96 64"/><path d="M368 192v48a111.74 111.74 0 01-2.93 25.45L390.65 291a143.07 143.07 0 009.35-51v-48zM272 432v-48.89a143.11 143.11 0 0056.65-18.83L305 340.65A112.13 112.13 0 01144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32zM336 236.37V128c0-44.86-35.14-80-80-80a79.68 79.68 0 00-69 39.34"/><path d="M176 211.63V239a80.89 80.89 0 0023.45 56.9 78.55 78.55 0 0081 20.21z"/></svg>
    </SvgContainer>
  )
}



export default MicOffSharp
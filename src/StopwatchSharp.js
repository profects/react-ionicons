import React from 'react'
import SvgContainer from './SvgContainer'

const StopwatchSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Stopwatch</title><path d="M280 81.5V48h-48v33.5a191 191 0 00-84.43 32.13L120 86l-34 34 25.59 25.59A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V136h32v90.75A48 48 0 01256 320z"/></svg>
    </SvgContainer>
  )
}



export default StopwatchSharp
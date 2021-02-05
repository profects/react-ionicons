import React from 'react'
import SvgContainer from './SvgContainer'

const MedalSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Medal</title><path d="M80 32L16 160h289.11l80.22-128H80z"/><path d="M496 144L424 32 298 231.08a128 128 0 00-84 0L189.53 192H43.82l86.66 134.89a128 128 0 10251 0zM256 422a70 70 0 1170-70 70.08 70.08 0 01-70 70z"/><circle cx="256" cy="352" r="32"/></svg>
    </SvgContainer>
  )
}



export default MedalSharp
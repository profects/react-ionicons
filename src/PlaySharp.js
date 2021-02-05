import React from 'react'
import SvgContainer from './SvgContainer'

const PlaySharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play</title><path d="M96 448l320-192L96 64v384z"/></svg>
    </SvgContainer>
  )
}



export default PlaySharp
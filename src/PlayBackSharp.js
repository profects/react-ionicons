import React from 'react'
import SvgContainer from './SvgContainer'

const PlayBackSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Back</title><path d="M496 400L256 256l240-144v288zM256 400L16 256l240-144v288z"/></svg>
    </SvgContainer>
  )
}



export default PlayBackSharp
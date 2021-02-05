import React from 'react'
import SvgContainer from './SvgContainer'

const PlayForwardSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Forward</title><path d="M16 400l240-144L16 112v288zM256 400l240-144-240-144v288z"/></svg>
    </SvgContainer>
  )
}



export default PlayForwardSharp
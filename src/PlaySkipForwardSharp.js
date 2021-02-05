import React from 'react'
import SvgContainer from './SvgContainer'

const PlaySkipForwardSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Skip Forward</title><path d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z"/></svg>
    </SvgContainer>
  )
}



export default PlaySkipForwardSharp
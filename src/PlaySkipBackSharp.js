import React from 'react'
import SvgContainer from './SvgContainer'

const PlaySkipBackSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Skip Back</title><path d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z"/></svg>
    </SvgContainer>
  )
}



export default PlaySkipBackSharp
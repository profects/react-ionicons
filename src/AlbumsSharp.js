import React from 'react'
import SvgContainer from './SvgContainer'

const AlbumsSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Albums</title><path d="M128 64h256v32H128zM96 112h320v32H96zM464 448H48V160h416z"/></svg>
    </SvgContainer>
  )
}



export default AlbumsSharp
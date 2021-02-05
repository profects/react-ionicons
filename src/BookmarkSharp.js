import React from 'react'
import SvgContainer from './SvgContainer'

const BookmarkSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bookmark</title><path d="M416 480L256 357.41 96 480V32h320z"/></svg>
    </SvgContainer>
  )
}



export default BookmarkSharp
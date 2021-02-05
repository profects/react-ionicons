import React from 'react'
import SvgContainer from './SvgContainer'

const BookmarksSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bookmarks</title><path d="M112 0v48h304v368l48 32V0H112z"/><path d="M48 80v432l168-124 168 124V80H48z"/></svg>
    </SvgContainer>
  )
}



export default BookmarksSharp
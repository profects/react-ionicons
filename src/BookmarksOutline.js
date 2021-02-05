import React from 'react'
import SvgContainer from './SvgContainer'

const BookmarksOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bookmarks</title><path d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default BookmarksOutline
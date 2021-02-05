import React from 'react'
import SvgContainer from './SvgContainer'

const Folder = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Folder</title><path d="M496 152a56 56 0 00-56-56H220.11a23.89 23.89 0 01-13.31-4L179 73.41A55.77 55.77 0 00147.89 64H72a56 56 0 00-56 56v48a8 8 0 008 8h464a8 8 0 008-8zM16 392a56 56 0 0056 56h368a56 56 0 0056-56V216a8 8 0 00-8-8H24a8 8 0 00-8 8z"/></svg>
    </SvgContainer>
  )
}



export default Folder
import React from 'react'
import SvgContainer from './SvgContainer'

const ArrowUndoCircleSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Arrow Undo Circle</title><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-9.17 241.14V344L146 248l100.83-96v54.86c96.5 0 119.17 69 119.17 137.14-27.85-35.57-52.48-54.86-119.17-54.86z"/></svg>
    </SvgContainer>
  )
}



export default ArrowUndoCircleSharp
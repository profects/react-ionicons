import React from 'react'
import SvgContainer from './SvgContainer'

const EllipsisHorizontalCircleOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Ellipsis Horizontal Circle</title><circle cx="256" cy="256" r="26"/><circle cx="346" cy="256" r="26"/><circle cx="166" cy="256" r="26"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default EllipsisHorizontalCircleOutline
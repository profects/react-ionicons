import React from 'react'
import SvgContainer from './SvgContainer'

const UnlinkOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Unlink</title><path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36"/></svg>
    </SvgContainer>
  )
}



export default UnlinkOutline
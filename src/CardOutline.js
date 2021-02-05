import React from 'react'
import SvgContainer from './SvgContainer'

const CardOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Card</title><rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="60" d="M48 192h416M128 300h48v20h-48z"/></svg>
    </SvgContainer>
  )
}



export default CardOutline
import React from 'react'
import SvgContainer from './SvgContainer'

const ShirtOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Shirt</title><path d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 00-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0121.29 24.58L112 464h288l-6.8-241.9a24 24 0 0121.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 00-10.57-1.8zM333.31 52.66a80 80 0 01-154.62 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default ShirtOutline
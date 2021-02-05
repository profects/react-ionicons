import React from 'react'
import SvgContainer from './SvgContainer'

const RefreshCircle = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Refresh Circle</title><path d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208 114.69 0 208-93.31 208-208 0-114.87-93.13-208-208-208zm0 313a94 94 0 010-188h4.21l-14.11-14.1a14 14 0 0119.8-19.8l40 40a14 14 0 010 19.8l-40 40a14 14 0 01-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1066 66 14 14 0 0128 0 94.11 94.11 0 01-94 94z"/></svg>
    </SvgContainer>
  )
}



export default RefreshCircle
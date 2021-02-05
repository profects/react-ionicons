import React from 'react'
import SvgContainer from './SvgContainer'

const IceCreamOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Ice Cream</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 256l-96 224-62-145"/><path d="M299.42 223.48C291.74 239.75 275.18 252 256 252c-13.1 0-27-5-33.63-9.76C216.27 237.87 208 240 208 250v62a24.07 24.07 0 01-24 24h0a24.07 24.07 0 01-24-24v-56h-2c-35.35 0-62-28.65-62-64a64 64 0 0164-64h8v-8a88 88 0 01176 0v8h8a64 64 0 010 128c-21.78 0-42-13-52.59-32.51z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default IceCreamOutline
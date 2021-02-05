import React from 'react'
import SvgContainer from './SvgContainer'

const ShirtSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Shirt</title><path d="M256 42c-33.88 0-64-10-64-10v2a64 64 0 00128 0v-2s-30.12 10-64 10z"/><path d="M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114 61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114z"/></svg>
    </SvgContainer>
  )
}



export default ShirtSharp
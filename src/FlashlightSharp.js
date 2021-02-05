import React from 'react'
import SvgContainer from './SvgContainer'

const FlashlightSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Flashlight</title><path d="M330 16l-42.68 42.7L453.3 224.68 496 182 330 16z"/><ellipse cx="224.68" cy="287.3" rx="20.03" ry="19.96" fill="none"/><path d="M429.21 243.85L268 82.59 249.65 168 16 402l94 94 234.23-233.8zm-189 56.07a20 20 0 110-25.25 20 20 0 01-.02 25.25z"/></svg>
    </SvgContainer>
  )
}



export default FlashlightSharp
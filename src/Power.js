import React from 'react'
import SvgContainer from './SvgContainer'

const Power = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Power</title><path d="M256 464c-114.69 0-208-93.47-208-208.35 0-62.45 27.25-121 74.76-160.55a22 22 0 1128.17 33.8C113.48 160.1 92 206.3 92 255.65 92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 00360.17 129a22 22 0 1128-33.92A207.88 207.88 0 01464 255.65C464 370.53 370.69 464 256 464z"/><path d="M256 272a22 22 0 01-22-22V70a22 22 0 0144 0v180a22 22 0 01-22 22z"/></svg>
    </SvgContainer>
  )
}



export default Power
import React from 'react'
import SvgContainer from './SvgContainer'

const PlayForwardCircle = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Forward Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm138.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31L264 240.19v-53.32a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z"/></svg>
    </SvgContainer>
  )
}



export default PlayForwardCircle
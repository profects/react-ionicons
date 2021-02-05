import React from 'react'
import SvgContainer from './SvgContainer'

const PricetagsSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Pricetags</title><path d="M288 16L0 304l176 176 288-288V16zm80 128a32 32 0 1132-32 32 32 0 01-32 32z"/><path d="M480 64v144L216.9 471.1 242 496l270-272V64h-32z"/></svg>
    </SvgContainer>
  )
}



export default PricetagsSharp
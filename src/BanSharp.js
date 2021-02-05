import React from 'react'
import SvgContainer from './SvgContainer'

const BanSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Ban</title><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM432 256a175.09 175.09 0 01-35.8 106.26L149.74 115.8A175.09 175.09 0 01256 80c97.05 0 176 79 176 176zm-352 0a175.09 175.09 0 0135.8-106.26L362.26 396.2A175.09 175.09 0 01256 432c-97 0-176-78.95-176-176z"/></svg>
    </SvgContainer>
  )
}



export default BanSharp
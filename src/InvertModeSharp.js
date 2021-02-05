import React from 'react'
import SvgContainer from './SvgContainer'

const InvertModeSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Invert Mode</title><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 432v-96a80 80 0 010-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z"/><path d="M336 256a80 80 0 00-80-80v160a80 80 0 0080-80z"/></svg>
    </SvgContainer>
  )
}



export default InvertModeSharp
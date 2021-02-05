import React from 'react'
import SvgContainer from './SvgContainer'

const PersonRemoveSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Person Remove</title><path d="M16 214h144v36H16z"/><circle cx="288" cy="144" r="112"/><path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"/></svg>
    </SvgContainer>
  )
}



export default PersonRemoveSharp
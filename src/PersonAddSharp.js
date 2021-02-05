import React from 'react'
import SvgContainer from './SvgContainer'

const PersonAddSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Person Add</title><path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z"/><circle cx="288" cy="144" r="112"/><path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"/></svg>
    </SvgContainer>
  )
}



export default PersonAddSharp
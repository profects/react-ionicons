import React from 'react'
import SvgContainer from './SvgContainer'

const GitMergeSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Git Merge</title><path d="M384 224a63.66 63.66 0 00-37.95 12.5L160 153.36v-2a64 64 0 10-64 0v209.25a64 64 0 1064 0V223.46l160.41 71.69A64 64 0 10384 224zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm256-128a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
    </SvgContainer>
  )
}



export default GitMergeSharp
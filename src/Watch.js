import React from 'react'
import SvgContainer from './SvgContainer'

const Watch = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Watch</title><rect x="136" y="136" width="240" height="240" rx="56" ry="56"/><path d="M336 96V32a16 16 0 00-16-16H192a16 16 0 00-16 16v64a80.09 80.09 0 00-80 80v160a80.09 80.09 0 0080 80v64a16 16 0 0016 16h128a16 16 0 0016-16v-64a80.09 80.09 0 0080-80V176a80.09 80.09 0 00-80-80zm56 224a72.08 72.08 0 01-72 72H192a72.08 72.08 0 01-72-72V192a72.08 72.08 0 0172-72h128a72.08 72.08 0 0172 72z"/></svg>
    </SvgContainer>
  )
}



export default Watch
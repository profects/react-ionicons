import React from 'react'
import SvgContainer from './SvgContainer'

const RecordingSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Recording</title><path d="M384 138a117.93 117.93 0 00-91.84 192h-72.32A118 118 0 10128 374h256a118 118 0 000-236zM54 256a74 74 0 1174 74 74.09 74.09 0 01-74-74zm330 74a74 74 0 1174-74 74.09 74.09 0 01-74 74z"/></svg>
    </SvgContainer>
  )
}



export default RecordingSharp
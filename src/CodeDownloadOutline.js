import React from 'react'
import SvgContainer from './SvgContainer'

const CodeDownloadOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Code Download</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 368L32 256l128-112M352 368l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03"/></svg>
    </SvgContainer>
  )
}



export default CodeDownloadOutline
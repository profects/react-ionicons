import React from 'react'
import SvgContainer from './SvgContainer'

const ArchiveOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Archive</title><path d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><rect x="48" y="64" width="416" height="80" rx="28" ry="28" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 304l-64 64-64-64M256 345.89V224"/></svg>
    </SvgContainer>
  )
}



export default ArchiveOutline
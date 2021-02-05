import React from 'react'
import SvgContainer from './SvgContainer'

const JournalOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Journal</title><rect x="96" y="48" width="320" height="416" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="60" d="M320 48v416"/></svg>
    </SvgContainer>
  )
}



export default JournalOutline
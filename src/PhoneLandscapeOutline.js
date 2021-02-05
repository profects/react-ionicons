import React from 'react'
import SvgContainer from './SvgContainer'

const PhoneLandscapeOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Phone Landscape</title><rect x="128" y="16" width="256" height="480" rx="48" ry="48" transform="rotate(-90 256 256)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M16 336v-24a8 8 0 018-8h0a16 16 0 0016-16v-64a16 16 0 00-16-16h0a8 8 0 01-8-8v-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default PhoneLandscapeOutline
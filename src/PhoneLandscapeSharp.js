import React from 'react'
import SvgContainer from './SvgContainer'

const PhoneLandscapeSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Phone Landscape</title><path d="M0 130v252a18 18 0 0018 18h476a18 18 0 0018-18V130a18 18 0 00-18-18H18a18 18 0 00-18 18zm448 234H64V148h384z"/></svg>
    </SvgContainer>
  )
}



export default PhoneLandscapeSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const WifiSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Wifi</title><path d="M332.69 320a115 115 0 00-152.8 0M393.74 259a201.26 201.26 0 00-274.92 0M448 191.52a288 288 0 00-383.44 0" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="42"/><path d="M300.67 384L256 433l-44.34-49a56.73 56.73 0 0188.92 0z"/></svg>
    </SvgContainer>
  )
}



export default WifiSharp
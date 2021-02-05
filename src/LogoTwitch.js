import React from 'react'
import SvgContainer from './SvgContainer'

const LogoTwitch = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Twitch</title><path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32zm336 256l-64 64h-96l-64 64v-64h-80V80h304z"/><path d="M320 143h48v129h-48zM208 143h48v129h-48z"/></svg>
    </SvgContainer>
  )
}



export default LogoTwitch
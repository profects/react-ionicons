import React from 'react'
import SvgContainer from './SvgContainer'

const Medal = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Medal</title><circle cx="256" cy="352" r="32"/><path d="M99.78 32a48 48 0 00-42.94 26.53l-31 62A48.26 48.26 0 0024.28 160h278.2a4 4 0 003.39-1.87l75.5-120A4 4 0 00378 32z"/><path d="M486.17 120.56l-31-62a47.7 47.7 0 00-32.79-25.46L342.5 160 298 231.08a128 128 0 00-84 0l-23.32-37.2a4 4 0 00-3.39-1.88H51.14a4 4 0 00-3.36 6.16l82.7 128.73a128 128 0 10251 0L483.62 168a48.22 48.22 0 002.55-47.44zm-226 295.31a64 64 0 1159.69-59.69 64.08 64.08 0 01-59.68 59.69z"/></svg>
    </SvgContainer>
  )
}



export default Medal
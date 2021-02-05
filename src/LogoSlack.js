import React from 'react'
import SvgContainer from './SvgContainer'

const LogoSlack = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Slack</title><path d="M126.12 315.1A47.06 47.06 0 1179.06 268h47.06zM149.84 315.1a47.06 47.06 0 0194.12 0v117.84a47.06 47.06 0 11-94.12 0zM196.9 126.12A47.06 47.06 0 11244 79.06v47.06zM196.9 149.84a47.06 47.06 0 010 94.12H79.06a47.06 47.06 0 010-94.12zM385.88 196.9a47.06 47.06 0 1147.06 47.1h-47.06zM362.16 196.9a47.06 47.06 0 01-94.12 0V79.06a47.06 47.06 0 1194.12 0zM315.1 385.88a47.06 47.06 0 11-47.1 47.06v-47.06zM315.1 362.16a47.06 47.06 0 010-94.12h117.84a47.06 47.06 0 110 94.12z"/></svg>
    </SvgContainer>
  )
}



export default LogoSlack
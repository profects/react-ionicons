import React from 'react'
import SvgContainer from './SvgContainer'

const ImageSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Image</title><path d="M456 64H56a24 24 0 00-24 24v336a24 24 0 0024 24h400a24 24 0 0024-24V88a24 24 0 00-24-24zm-124.38 64.2a48 48 0 11-43.42 43.42 48 48 0 0143.42-43.42zM76 416a12 12 0 01-12-12v-87.63L192.64 202l96.95 96.75L172.37 416zm372-12a12 12 0 01-12 12H217.63l149.53-149.53L448 333.84z"/></svg>
    </SvgContainer>
  )
}



export default ImageSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const ThumbsUpSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Thumbs Up</title><path d="M456 192l-156-12 23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 00-4.4 1.72l-129 202.34a8 8 0 01-6.81 3.81H16V448h117.61a48 48 0 0115.18 2.46l76.3 25.43a80 80 0 0025.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40z"/></svg>
    </SvgContainer>
  )
}



export default ThumbsUpSharp
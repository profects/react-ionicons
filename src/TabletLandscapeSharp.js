import React from 'react'
import SvgContainer from './SvgContainer'

const TabletLandscapeSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Tablet Landscape</title><path d="M0 82v348a18 18 0 0018 18h476a18 18 0 0018-18V82a18 18 0 00-18-18H18A18 18 0 000 82zm448 330H64V100h384z"/></svg>
    </SvgContainer>
  )
}



export default TabletLandscapeSharp
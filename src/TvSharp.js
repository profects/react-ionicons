import React from 'react'
import SvgContainer from './SvgContainer'

const TvSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Tv</title><path d="M488 384H24a8 8 0 01-8-8V88a8 8 0 018-8h464a8 8 0 018 8v288a8 8 0 01-8 8z"/><rect x="112" y="400" width="288" height="32" rx="4" ry="4"/></svg>
    </SvgContainer>
  )
}



export default TvSharp
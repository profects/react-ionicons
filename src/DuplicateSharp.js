import React from 'react'
import SvgContainer from './SvgContainer'

const DuplicateSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Duplicate</title><path d="M112 80h288V56a24 24 0 00-24-24H66a34 34 0 00-34 34v310a24 24 0 0024 24h24V112a32 32 0 0132-32z"/><path d="M456 112H136a24 24 0 00-24 24v320a24 24 0 0024 24h320a24 24 0 0024-24V136a24 24 0 00-24-24zm-64 200h-80v80h-32v-80h-80v-32h80v-80h32v80h80z"/></svg>
    </SvgContainer>
  )
}



export default DuplicateSharp
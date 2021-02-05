import React from 'react'
import SvgContainer from './SvgContainer'

const EllipsisVerticalSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Ellipsis Vertical</title><circle cx="256" cy="256" r="48"/><circle cx="256" cy="416" r="48"/><circle cx="256" cy="96" r="48"/></svg>
    </SvgContainer>
  )
}



export default EllipsisVerticalSharp
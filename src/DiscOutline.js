import React from 'react'
import SvgContainer from './SvgContainer'

const DiscOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Disc</title><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="256" r="96" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="256" r="32"/></svg>
    </SvgContainer>
  )
}



export default DiscOutline
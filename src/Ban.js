import React from 'react'
import SvgContainer from './SvgContainer'

const Ban = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Ban</title><circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="48" cx="256" cy="256" r="200"/><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="48" d="M114.58 114.58l282.84 282.84"/></svg>
    </SvgContainer>
  )
}



export default Ban
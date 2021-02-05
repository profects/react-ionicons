import React from 'react'
import SvgContainer from './SvgContainer'

const LaptopOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Laptop</title><rect x="48" y="96" width="416" height="304" rx="32.14" ry="32.14" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M16 416h480"/></svg>
    </SvgContainer>
  )
}



export default LaptopOutline
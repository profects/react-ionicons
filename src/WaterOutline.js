import React from 'react'
import SvgContainer from './SvgContainer'

const WaterOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Water</title><path d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M344 328a72 72 0 01-72 72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default WaterOutline
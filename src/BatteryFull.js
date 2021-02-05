import React from 'react'
import SvgContainer from './SvgContainer'

const BatteryFull = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Battery Full</title><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32"/><rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M480 218.67v74.66"/></svg>
    </SvgContainer>
  )
}



export default BatteryFull
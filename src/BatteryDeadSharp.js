import React from 'react'
import SvgContainer from './SvgContainer'

const BatteryDeadSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Battery Dead</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M32 144h400v224H32zM480 218.67v74.66"/></svg>
    </SvgContainer>
  )
}



export default BatteryDeadSharp
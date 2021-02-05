import React from 'react'
import SvgContainer from './SvgContainer'

const BatteryFullSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Battery Full</title><path d="M17 384h432V128H17zm32-224h368v192H49z"/><path d="M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z"/></svg>
    </SvgContainer>
  )
}



export default BatteryFullSharp
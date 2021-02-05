import React from 'react'
import SvgContainer from './SvgContainer'

const WineSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Wine</title><path d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288zm-336.65-3.67h281l-37.81 38H154.16z"/></svg>
    </SvgContainer>
  )
}



export default WineSharp
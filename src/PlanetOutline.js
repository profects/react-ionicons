import React from 'react'
import SvgContainer from './SvgContainer'

const PlanetOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Planet</title><path d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="256" r="160" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default PlanetOutline
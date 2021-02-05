import React from 'react'
import SvgContainer from './SvgContainer'

const CheckmarkDoneSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Checkmark Done</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="44" d="M465 127L241 384l-92-92M140 385l-93-93M363 127L236 273"/></svg>
    </SvgContainer>
  )
}



export default CheckmarkDoneSharp
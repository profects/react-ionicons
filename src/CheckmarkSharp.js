import React from 'react'
import SvgContainer from './SvgContainer'

const CheckmarkSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="44" d="M416 128L192 384l-96-96"/></svg>
    </SvgContainer>
  )
}



export default CheckmarkSharp
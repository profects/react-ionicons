import React from 'react'
import SvgContainer from './SvgContainer'

const ReorderFourSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Reorder Four</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44" d="M102 304h308M102 208h308M102 112h308M102 400h308"/></svg>
    </SvgContainer>
  )
}



export default ReorderFourSharp
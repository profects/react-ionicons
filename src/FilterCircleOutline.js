import React from 'react'
import SvgContainer from './SvgContainer'

const FilterCircleOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Filter Circle</title><path fill="none" stroke="currentColor" strokeWidth="32" strokeMiterlimit="10" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"/><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" d="M144 208h224M176 272h160M224 336h64"/></svg>
    </SvgContainer>
  )
}



export default FilterCircleOutline
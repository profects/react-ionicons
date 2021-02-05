import React from 'react'
import SvgContainer from './SvgContainer'

const ReorderThree = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Reorder Three</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44" d="M102 256h308M102 176h308M102 336h308"/></svg>
    </SvgContainer>
  )
}



export default ReorderThree
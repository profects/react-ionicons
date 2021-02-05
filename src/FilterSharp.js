import React from 'react'
import SvgContainer from './SvgContainer'

const FilterSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Filter</title><path d="M16 120h480v48H16zM96 232h320v48H96zM192 344h128v48H192z"/></svg>
    </SvgContainer>
  )
}



export default FilterSharp
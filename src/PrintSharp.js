import React from 'react'
import SvgContainer from './SvgContainer'

const PrintSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Print</title><path d="M400 96V56a8 8 0 00-8-8H120a8 8 0 00-8 8v40"/><rect x="152" y="264" width="208" height="160" rx="4" ry="4" fill="none"/><rect x="152" y="264" width="208" height="160" rx="4" ry="4" fill="none"/><path d="M408 112H104a56 56 0 00-56 56v208a8 8 0 008 8h56v72a8 8 0 008 8h272a8 8 0 008-8v-72h56a8 8 0 008-8V168a56 56 0 00-56-56zm-48 308a4 4 0 01-4 4H156a4 4 0 01-4-4V268a4 4 0 014-4h200a4 4 0 014 4zm34-212.08a24 24 0 1122-22 24 24 0 01-22 22z"/></svg>
    </SvgContainer>
  )
}



export default PrintSharp
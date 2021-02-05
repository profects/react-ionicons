import React from 'react'
import SvgContainer from './SvgContainer'

const InvertMode = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Invert Mode</title><circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" cx="256" cy="256" r="208"/><path d="M256 176v160a80 80 0 000-160zM256 48v128a80 80 0 000 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z"/></svg>
    </SvgContainer>
  )
}



export default InvertMode
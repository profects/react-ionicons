import React from 'react'
import SvgContainer from './SvgContainer'

const Scan = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Scan</title><path d="M342 444h46a56 56 0 0056-56v-46M444 170v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46M68 170v-46a56 56 0 0156-56h46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44"/></svg>
    </SvgContainer>
  )
}



export default Scan
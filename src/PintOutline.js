import React from 'react'
import SvgContainer from './SvgContainer'

const PintOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Pint</title><path d="M132.43 162c-6.24-34-4.49-45.55-3.07-68.39L132.27 47a16 16 0 0115.94-15h215.57a16 16 0 0115.94 15l2.91 46.61c1.43 22.86 3.19 34.39-3.06 68.45-5.93 32.29-43.71 133.27-43.71 238.32V472a8 8 0 01-8 8H184.12a8 8 0 01-8-8v-71.63c.01-92.47-37.46-204.3-43.69-238.37zM135.21 96h241.58" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default PintOutline
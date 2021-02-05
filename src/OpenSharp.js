import React from 'react'
import SvgContainer from './SvgContainer'

const OpenSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Open</title><path d="M201.37 288l176-176H48v352h352V134.63l-176 176L201.37 288z"/><path d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z"/></svg>
    </SvgContainer>
  )
}



export default OpenSharp
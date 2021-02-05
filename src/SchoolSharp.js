import React from 'react'
import SvgContainer from './SvgContainer'

const SchoolSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>School</title><path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z"/><path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z"/></svg>
    </SvgContainer>
  )
}



export default SchoolSharp
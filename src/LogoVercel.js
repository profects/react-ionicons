import React from 'react'
import SvgContainer from './SvgContainer'

const LogoVercel = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Vercel</title><path fill-rule="evenodd" d="M256 48l240 416H16z"/></svg>
    </SvgContainer>
  )
}



export default LogoVercel
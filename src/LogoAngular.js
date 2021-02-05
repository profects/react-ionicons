import React from 'react'
import SvgContainer from './SvgContainer'

const LogoAngular = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Angular</title><path d="M213.57 256h84.85l-42.43-89.36L213.57 256z"/><path d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z"/></svg>
    </SvgContainer>
  )
}



export default LogoAngular
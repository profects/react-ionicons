import React from 'react'
import SvgContainer from './SvgContainer'

const LogoDropbox = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Dropbox</title><path d="M256.32 126.24l-120.16 78.25 120.16 78.24L136.16 361 16 282.08l120.16-78.24L16 126.24 136.16 48zm-120.8 259.52l120.16-78.25 120.16 78.25L255.68 464zm120.8-103.68l120.16-78.24-120.16-77.6L375.84 48 496 126.24l-120.16 78.25L496 282.73 375.84 361z"/></svg>
    </SvgContainer>
  )
}



export default LogoDropbox
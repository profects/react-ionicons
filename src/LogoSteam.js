import React from 'react'
import SvgContainer from './SvgContainer'

const LogoSteam = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Steam</title><path d="M478.8 208.2a36 36 0 11-36-36 36 36 0 0136 36zM442.6 139a69.42 69.42 0 00-69.4 68.7l-43.2 62a48.86 48.86 0 00-5.4-.3 51.27 51.27 0 00-26.4 7.3L102.4 198a51.8 51.8 0 10-50.6 62.9 51.27 51.27 0 0026.4-7.3L274 332.2a51.76 51.76 0 00102.1-5.9l66.5-48.6a69.35 69.35 0 100-138.7zm0 22.9a46.45 46.45 0 11-46.5 46.5 46.54 46.54 0 0146.5-46.5zm-390.8 9a38.18 38.18 0 0133.7 20.2l-18.9-7.6v.1a30.21 30.21 0 00-22.6 56v.1l16.1 6.4a36.8 36.8 0 01-8.2.9 38.05 38.05 0 01-.1-76.1zm272.8 112.2a38.1 38.1 0 11-33.7 55.9c6.3 2.5 12.5 5 18.8 7.6a30.27 30.27 0 1022.5-56.2l-15.9-6.4a46.83 46.83 0 018.3-.9z"/></svg>
    </SvgContainer>
  )
}



export default LogoSteam
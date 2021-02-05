import React from 'react'
import SvgContainer from './SvgContainer'

const FlaskSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Flask</title><path d="M469.11 382.76L325 153.92V74h32V32H155v42h32v79.92L42.89 382.76c-13 20.64-14.78 43.73-3 65.1S71.59 480 96 480h320c24.41 0 44.32-10.76 56.1-32.14s10.04-44.46-2.99-65.1zM224.39 173.39a29.76 29.76 0 004.62-16V74h54v84.59a25.85 25.85 0 004 13.82L356.82 283H155.18z"/></svg>
    </SvgContainer>
  )
}



export default FlaskSharp
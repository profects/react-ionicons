import React from 'react'
import SvgContainer from './SvgContainer'

const GolfSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Golf</title><path d="M240 16v304.47q8-.47 16-.47t16 .47V202.3L448 112z"/><path d="M462.91 457.5c-8.54-42.85-35-78.74-76.62-103.8-32.43-19.55-72.53-31.3-114.29-33.7v95.79h-32V320c-41.79 2.4-81.89 14.15-114.32 33.7-41.59 25.06-68.08 60.95-76.62 103.8-2 9.81-.68 38.5-.68 38.5h415.21s1.28-28.69-.68-38.5z"/></svg>
    </SvgContainer>
  )
}



export default GolfSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const FlashOffSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Flash Off</title><path d="M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998zM80 304h144l-32 192 108.18-129.82-148.36-148.36L80 304zM432 208H288l32-192-108.18 129.82 148.36 148.36L432 208z"/></svg>
    </SvgContainer>
  )
}



export default FlashOffSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const CellularSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Cellular</title><path d="M496 432h-96V80h96zM368 432h-96V160h96zM240 432h-96V224h96zM112 432H16V288h96z"/></svg>
    </SvgContainer>
  )
}



export default CellularSharp
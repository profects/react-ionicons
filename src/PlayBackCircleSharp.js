import React from 'react'
import SvgContainer from './SvgContainer'

const PlayBackCircleSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Back Circle</title><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm63.47 0L248 168v72.16l120-72.48v176.45l-120-72.32v71.44z"/></svg>
    </SvgContainer>
  )
}



export default PlayBackCircleSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const PlaySkipBackCircleSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Skip Back Circle</title><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm128-80h32v69l128-77.53v176.9L208 267v69h-32z"/></svg>
    </SvgContainer>
  )
}



export default PlaySkipBackCircleSharp
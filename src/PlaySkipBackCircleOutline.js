import React from 'react'
import SvgContainer from './SvgContainer'

const PlaySkipBackCircleOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Skip Back Circle</title><path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M192 176a16 16 0 0116 16v53l111.68-67.46a10.78 10.78 0 0116.32 9.33v138.26a10.78 10.78 0 01-16.32 9.31L208 267v53a16 16 0 01-32 0V192a16 16 0 0116-16z"/></svg>
    </SvgContainer>
  )
}



export default PlaySkipBackCircleOutline
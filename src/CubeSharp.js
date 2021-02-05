import React from 'react'
import SvgContainer from './SvgContainer'

const CubeSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Cube</title><path d="M48 170v196.92L240 480V284L48 170zM272 480l192-113.08V170L272 284zm176-122.36zM448 144L256 32 64 144l192 112 192-112z"/></svg>
    </SvgContainer>
  )
}



export default CubeSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const GitNetworkSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Git Network</title><path d="M384 32a64 64 0 00-57.67 91.73l-70.83 80.82-70.19-80.1A64 64 0 10128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1064 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 000-128zM96 96a32 32 0 1132 32 32 32 0 01-32-32zm160 352a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
    </SvgContainer>
  )
}



export default GitNetworkSharp
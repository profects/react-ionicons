import React from 'react'
import SvgContainer from './SvgContainer'

const CellularOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Cellular</title><rect x="416" y="96" width="64" height="320" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="288" y="176" width="64" height="240" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="160" y="240" width="64" height="176" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="32" y="304" width="64" height="112" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default CellularOutline
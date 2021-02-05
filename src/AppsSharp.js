import React from 'react'
import SvgContainer from './SvgContainer'

const AppsSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Apps</title><rect x="48" y="48" width="112" height="112" rx="8" ry="8"/><rect x="200" y="48" width="112" height="112" rx="8" ry="8"/><rect x="352" y="48" width="112" height="112" rx="8" ry="8"/><rect x="48" y="200" width="112" height="112" rx="8" ry="8"/><rect x="200" y="200" width="112" height="112" rx="8" ry="8"/><rect x="352" y="200" width="112" height="112" rx="8" ry="8"/><rect x="48" y="352" width="112" height="112" rx="8" ry="8"/><rect x="200" y="352" width="112" height="112" rx="8" ry="8"/><rect x="352" y="352" width="112" height="112" rx="8" ry="8"/></svg>
    </SvgContainer>
  )
}



export default AppsSharp
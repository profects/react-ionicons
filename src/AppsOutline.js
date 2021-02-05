import React from 'react'
import SvgContainer from './SvgContainer'

const AppsOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Apps</title><rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default AppsOutline
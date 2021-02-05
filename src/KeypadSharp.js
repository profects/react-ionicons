import React from 'react'
import SvgContainer from './SvgContainer'

const KeypadSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Keypad</title><rect x="80" y="16" width="96" height="96" rx="8" ry="8"/><rect x="208" y="16" width="96" height="96" rx="8" ry="8"/><rect x="336" y="16" width="96" height="96" rx="8" ry="8"/><rect x="80" y="144" width="96" height="96" rx="8" ry="8"/><rect x="208" y="144" width="96" height="96" rx="8" ry="8"/><rect x="336" y="144" width="96" height="96" rx="8" ry="8"/><rect x="80" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="272" width="96" height="96" rx="8" ry="8"/><rect x="208" y="400" width="96" height="96" rx="8" ry="8"/><rect x="336" y="272" width="96" height="96" rx="8" ry="8"/></svg>
    </SvgContainer>
  )
}



export default KeypadSharp
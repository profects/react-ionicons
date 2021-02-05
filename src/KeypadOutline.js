import React from 'react'
import SvgContainer from './SvgContainer'

const KeypadOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Keypad</title><circle cx="256" cy="448" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="320" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M288 192a32 32 0 11-32-32 32 32 0 0132 32z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="256" cy="64" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="384" cy="320" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="384" cy="192" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="384" cy="64" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="128" cy="320" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="128" cy="192" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="128" cy="64" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default KeypadOutline
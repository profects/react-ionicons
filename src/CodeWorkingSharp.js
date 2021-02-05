import React from 'react'
import SvgContainer from './SvgContainer'

const CodeWorkingSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Code Working</title><circle cx="256" cy="256" r="26" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10"/><circle cx="346" cy="256" r="26" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10"/><circle cx="166" cy="256" r="26" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="10"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="42" d="M160 368L32 256l128-112M352 368l128-112-128-112"/></svg>
    </SvgContainer>
  )
}



export default CodeWorkingSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const SendSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Send</title><path d="M16 464l480-208L16 48v160l320 48-320 48z"/></svg>
    </SvgContainer>
  )
}



export default SendSharp
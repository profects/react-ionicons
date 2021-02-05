import React from 'react'
import SvgContainer from './SvgContainer'

const ReturnDownBackSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Return Down Back</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M112 352l-64-64 64-64"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M64 288h400V160"/></svg>
    </SvgContainer>
  )
}



export default ReturnDownBackSharp
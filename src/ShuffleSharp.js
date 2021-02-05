import React from 'react'
import SvgContainer from './SvgContainer'

const ShuffleSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Shuffle</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h128l60-92"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M64 160h128l128 192h96M416 160h-96l-32 48"/></svg>
    </SvgContainer>
  )
}



export default ShuffleSharp
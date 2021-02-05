import React from 'react'
import SvgContainer from './SvgContainer'

const Keypad = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Keypad</title><path d="M256 400a48 48 0 1048 48 48 48 0 00-48-48zM256 272a48 48 0 1048 48 48 48 0 00-48-48zM256 144a48 48 0 1048 48 48 48 0 00-48-48zM256 16a48 48 0 1048 48 48 48 0 00-48-48zM384 272a48 48 0 1048 48 48 48 0 00-48-48zM384 144a48 48 0 1048 48 48 48 0 00-48-48zM384 16a48 48 0 1048 48 48 48 0 00-48-48zM128 272a48 48 0 1048 48 48 48 0 00-48-48zM128 144a48 48 0 1048 48 48 48 0 00-48-48zM128 16a48 48 0 1048 48 48 48 0 00-48-48z"/></svg>
    </SvgContainer>
  )
}



export default Keypad
import React from 'react'
function SvgContainer({ 
  width,
  height,
  color,
  children,
  style,
  ...rest
}){
  const childStyle = {
    height,
    width,
    color,
  }
  return <span {...rest}>{React.cloneElement(children, { style: {  ...style, ...childStyle } })}</span>
} 

export default SvgContainer


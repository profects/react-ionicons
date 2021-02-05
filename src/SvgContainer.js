import React from 'react'
function SvgContainer({ 
  width,
  height,
  color,
  children,
  style,
  fill,
  ...rest
}){
  const childStyle = {
    height,
    width,
    color,
    fill,
  }
  return <span {...rest}>{React.cloneElement(children, { style: { ...childStyle, ...style }, fill })}</span>
} 

export default SvgContainer


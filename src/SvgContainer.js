import React from 'react'
function SvgContainer({ children, color, ...rest }){
  return React.cloneElement(children, { ...rest, fill: color, color })
} 

export default SvgContainer


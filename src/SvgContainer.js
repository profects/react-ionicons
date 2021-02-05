import React from 'react'
function SvgContainer({children,...rest}){
  return React.cloneElement(children, rest)
} 

export default SvgContainer


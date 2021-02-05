import React from 'react'
import SvgContainer from './SvgContainer'

const ListSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>List</title><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="48" d="M144 144h320M144 256h320M144 368h320"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z"/></svg>
    </SvgContainer>
  )
}



export default ListSharp
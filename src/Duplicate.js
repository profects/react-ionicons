import React from 'react'
import SvgContainer from './SvgContainer'

const Duplicate = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Duplicate</title><path d="M408 112H184a72 72 0 00-72 72v224a72 72 0 0072 72h224a72 72 0 0072-72V184a72 72 0 00-72-72zm-32.45 200H312v63.55c0 8.61-6.62 16-15.23 16.43A16 16 0 01280 376v-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01216 280h64v-63.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01312 216v64h64a16 16 0 0116 16.77c-.42 8.61-7.84 15.23-16.45 15.23z"/><path d="M395.88 80A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z"/></svg>
    </SvgContainer>
  )
}



export default Duplicate
import React from 'react'
import SvgContainer from './SvgContainer'

const BagSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bag</title><path d="M372 160v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-40 0H180v-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148z"/></svg>
    </SvgContainer>
  )
}



export default BagSharp
import React from 'react'
import SvgContainer from './SvgContainer'

const PlayForwardCircleSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Play Forward Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm8 295.25v-71.44l-120 72.32V167.71l120 72.48V168l136.53 88z"/></svg>
    </SvgContainer>
  )
}



export default PlayForwardCircleSharp
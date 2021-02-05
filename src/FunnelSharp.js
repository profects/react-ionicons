import React from 'react'
import SvgContainer from './SvgContainer'

const FunnelSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Funnel</title><path d="M0 48l192 240v128l128 48V288L512 48H0z"/></svg>
    </SvgContainer>
  )
}



export default FunnelSharp
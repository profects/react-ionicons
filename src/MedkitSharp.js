import React from 'react'
import SvgContainer from './SvgContainer'

const MedkitSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Medkit</title><path fill="none" d="M168 72h176v24H168z"/><path d="M484 96H384V40a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v360a12 12 0 0012 12h456a12 12 0 0012-12V108a12 12 0 00-12-12zM168 72h176v24H168zm184 238h-74v74h-44v-74h-74v-44h74v-74h44v74h74z"/></svg>
    </SvgContainer>
  )
}



export default MedkitSharp
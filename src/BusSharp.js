import React from 'react'
import SvgContainer from './SvgContainer'

const BusSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bus</title><path d="M400 64H112a16 16 0 000 32h288a16 16 0 000-32z" fill="none"/><path d="M424 32H88a24 24 0 00-24 24v360a32 32 0 0016 27.71V480h72v-32h208v32h72v-36.29A32 32 0 00448 416V56a24 24 0 00-24-24zM175.82 371.47a32 32 0 11-35.3-35.29 32.09 32.09 0 0135.3 35.29zM240 288H96V128h144zm16-192H96.46L96 64h320l-.46 32H256zm16 32h144v160H272zm64.18 236.53a32 32 0 1135.3 35.29 32.09 32.09 0 01-35.3-35.29z"/></svg>
    </SvgContainer>
  )
}



export default BusSharp
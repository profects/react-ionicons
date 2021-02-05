import React from 'react'
import SvgContainer from './SvgContainer'

const BarcodeSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Barcode</title><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128"/></svg>
    </SvgContainer>
  )
}



export default BarcodeSharp
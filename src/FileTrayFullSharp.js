import React from 'react'
import SvgContainer from './SvgContainer'

const FileTrayFullSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>File Tray Full</title><path d="M128 128h256v38H128zM112 192h288v38H112z"/><path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z"/></svg>
    </SvgContainer>
  )
}



export default FileTrayFullSharp
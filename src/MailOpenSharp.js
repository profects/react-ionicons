import React from 'react'
import SvgContainer from './SvgContainer'

const MailOpenSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Mail Open</title><path d="M471.05 168.36L263.24 65.69a16.37 16.37 0 00-14.48 0L41 168.36a16 16 0 00-9 14.31V432a16.09 16.09 0 0016.19 16h415.62A16.09 16.09 0 00480 432V182.67a16 16 0 00-8.95-14.31zM256 97.89l173 85.44-175.7 86.78-173-85.44z"/></svg>
    </SvgContainer>
  )
}



export default MailOpenSharp
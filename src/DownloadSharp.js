import React from 'react'
import SvgContainer from './SvgContainer'

const DownloadSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Download</title><path d="M272 160v147.37l64-64L358.63 266 256 368.63 153.37 266 176 243.37l64 64V160H92a12 12 0 00-12 12v296a12 12 0 0012 12h328a12 12 0 0012-12V172a12 12 0 00-12-12zM240 32h32v128h-32z"/></svg>
    </SvgContainer>
  )
}



export default DownloadSharp
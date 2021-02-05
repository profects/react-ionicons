import React from 'react'
import SvgContainer from './SvgContainer'

const Today = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Today</title><path d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4v-12a64 64 0 00-64-64zM477 176H35a3 3 0 00-3 3v237a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3zM224 307.43A28.57 28.57 0 01195.43 336h-70.86A28.57 28.57 0 0196 307.43v-70.86A28.57 28.57 0 01124.57 208h70.86A28.57 28.57 0 01224 236.57z"/></svg>
    </SvgContainer>
  )
}



export default Today
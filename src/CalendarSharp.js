import React from 'react'
import SvgContainer from './SvgContainer'

const CalendarSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Calendar</title><path d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm320-244a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z"/></svg>
    </SvgContainer>
  )
}



export default CalendarSharp
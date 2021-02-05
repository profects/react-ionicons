import React from 'react'
import SvgContainer from './SvgContainer'

const BoatSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Boat</title><path d="M477.77 246.42c-2.13-6-7.23-9.55-12.56-11.95L432 221.38V92a20 20 0 00-20-20h-76V40a16 16 0 00-16-16H192a16 16 0 00-16 16v32h-76a20 20 0 00-20 20v129.46l-33.08 13.06c-5.33 2.4-10.58 6-12.72 12s-3.16 11.81-1 19L84.25 415.7h1.06c34.12 0 64-17.41 85.31-43.82 21.32 26.41 51.18 42.12 85.3 42.12s64-15.76 85.31-42.17c21.32 26.41 51.18 43.87 85.3 43.87h1.06l51.25-150.17c2.16-6 1.07-13.1-1.07-19.11zM256 152l-144 56.83V108a4 4 0 014-4h280a4 4 0 014 4v100.76z"/><path d="M345.22 407c-52.25 36.26-126.35 36.25-178.6 0 0 0-45.64 63-94.64 63l13.33 1c29.86 0 58.65-11.73 85.31-25.59a185.33 185.33 0 00170.6 0c26.66 13.87 55.45 25.6 85.31 25.6l13.33-1C392.21 470 345.22 407 345.22 407z"/></svg>
    </SvgContainer>
  )
}



export default BoatSharp
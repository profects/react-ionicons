import React from 'react'
import SvgContainer from './SvgContainer'

const LibraryOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Library</title><rect x="32" y="96" width="64" height="368" rx="16" ry="16" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 224h128M112 400h128"/><rect x="112" y="160" width="128" height="304" rx="16" ry="16" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><rect x="256" y="48" width="96" height="416" rx="16" ry="16" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
    </SvgContainer>
  )
}



export default LibraryOutline
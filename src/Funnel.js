import React from 'react'
import SvgContainer from './SvgContainer'

const Funnel = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Funnel</title><path d="M296 464a23.88 23.88 0 01-7.55-1.23L208.3 436.1a23.92 23.92 0 01-16.3-22.78V294.11a.44.44 0 00-.09-.13L23.26 97.54A30 30 0 0146.05 48H466a30 30 0 0122.79 49.54L320.09 294a.77.77 0 00-.09.13V440a23.93 23.93 0 01-24 24z"/></svg>
    </SvgContainer>
  )
}



export default Funnel
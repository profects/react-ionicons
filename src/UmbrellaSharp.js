import React from 'react'
import SvgContainer from './SvgContainer'

const UmbrellaSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Umbrella</title><path d="M128.93 280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1zM383.08 280l2.62-2.12c-.79.58-1.57 1.17-2.34 1.79z"/><path d="M463.14 186.44A224.55 224.55 0 00272 48.57V32h-32v16.57A223.58 223.58 0 0032 272v22.52l12.25-11.21a62.63 62.63 0 0181.43-5.88l.22.17c.94.67 1.87 1.36 2.77 2.1q2.09 1.69 4 3.61L144 294.63l11.31-11.32a62.59 62.59 0 0181.4-5.78L240 280v152a16 16 0 01-32 0v-16h-32v16a48 48 0 0096 0V280l3.29-2.47a62.59 62.59 0 0181.4 5.78L368 294.63l11.31-11.32q1.95-1.94 4.05-3.64c.77-.62 1.55-1.21 2.34-1.79l.26-.21c24.63-18.47 60-16.13 81.81 5.64l12.23 11.2V272a223.62 223.62 0 00-16.86-85.56z"/></svg>
    </SvgContainer>
  )
}



export default UmbrellaSharp
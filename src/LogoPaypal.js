import React from 'react'
import SvgContainer from './SvgContainer'

const LogoPaypal = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Paypal</title><path d="M424.81 148.79c-.43 2.76-.93 5.58-1.49 8.48-19.17 98-84.76 131.8-168.54 131.8h-42.65a20.67 20.67 0 00-20.47 17.46l-21.84 137.84-6.18 39.07a10.86 10.86 0 009.07 12.42 10.72 10.72 0 001.7.13h75.65a18.18 18.18 0 0018-15.27l.74-3.83 14.24-90 .91-4.94a18.16 18.16 0 0118-15.3h11.31c73.3 0 130.67-29.62 147.44-115.32 7-35.8 3.38-65.69-15.16-86.72a72.27 72.27 0 00-20.73-15.82z"/><path d="M385.52 51.09C363.84 26.52 324.71 16 274.63 16H129.25a20.75 20.75 0 00-20.54 17.48l-60.55 382a12.43 12.43 0 0010.39 14.22 12.58 12.58 0 001.94.15h89.76l22.54-142.29-.7 4.46a20.67 20.67 0 0120.47-17.46h42.65c83.77 0 149.36-33.86 168.54-131.8.57-2.9 1.05-5.72 1.49-8.48 5.7-36.22-.05-60.87-19.72-83.19z"/></svg>
    </SvgContainer>
  )
}



export default LogoPaypal
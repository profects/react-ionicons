import React from 'react'
import SvgContainer from './SvgContainer'

const Cloudy = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Cloudy</title><path d="M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-57.57 42-90.58 87.56-100.75a16 16 0 0012.12-12.39c7.68-36.68 24.45-68.15 49.18-92A153.57 153.57 0 01256 80c35.5 0 68.24 11.69 94.68 33.8a156.24 156.24 0 0142.05 56 16 16 0 0011.37 9.16c27 5.61 51.07 17.33 69.18 33.85C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432z"/></svg>
    </SvgContainer>
  )
}



export default Cloudy
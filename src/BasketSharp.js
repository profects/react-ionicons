import React from 'react'
import SvgContainer from './SvgContainer'

const BasketSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '' }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Basket</title><path d="M339.2 217.6L256 106.67 172.8 217.6l-25.6-19.2 96-128a16 16 0 0125.6 0l96 128z"/><path d="M441.59 192H70.41a12 12 0 00-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 00441.59 192zM256 351.66A37.71 37.71 0 11293.89 314 37.88 37.88 0 01256 351.66z"/></svg>
    </SvgContainer>
  )
}



export default BasketSharp
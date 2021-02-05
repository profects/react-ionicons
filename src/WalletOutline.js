import React from 'react'
import SvgContainer from './SvgContainer'

const WalletOutline = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Wallet</title><rect x="48" y="144" width="416" height="288" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>
    </SvgContainer>
  )
}



export default WalletOutline
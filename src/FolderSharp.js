import React from 'react'
import SvgContainer from './SvgContainer'

const FolderSharp = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick = () => null }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Folder</title><path d="M16 420a28 28 0 0028 28h424a28 28 0 0028-28V208H16zM496 124a28 28 0 00-28-28H212.84l-48-32H44a28 28 0 00-28 28v84h480z"/></svg>
    </SvgContainer>
  )
}



export default FolderSharp
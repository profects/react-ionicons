import React from 'react'
import SvgContainer from './SvgContainer'

const LogoElectron = ({ height = 22, width = 22, style = {}, color = '#000', cssClasses = '', className = '', onClick }) => {
  return (
    <SvgContainer
      height={height}
      width={width}
      color={color}
      onClick={onClick}
      className={className}
    >
      <svg style={style} className={cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Electron</title><path d="M86.76 255a9.89 9.89 0 004.87-1.29 9.82 9.82 0 003.65-13.43c-16.46-28.56-17.81-52.12-7.45-70 14.26-24.57 53.61-33.65 105.27-24.29a9.86 9.86 0 0011.45-7.9 9.84 9.84 0 00-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3 5.71-39 17.28-48.45 33.48-14 24.19-12.7 54.73 7.42 89.62a9.85 9.85 0 008.56 4.95zM361.61 143.73c32.24.42 52.61 9.31 62.79 26.86 14.21 24.48 2.52 62.81-31.27 102.52a9.82 9.82 0 007.51 16.18 9.88 9.88 0 007.52-3.46c19.12-22.47 32.35-45.54 38.25-66.71 6.14-22 4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83 9.83 0 00-.12 19.66zM326.47 414.89a9.88 9.88 0 00-13.5 3.35c-16.41 27.15-36.57 42.1-56.77 42.1-28.49 0-56-29.31-73.73-78.42a9.87 9.87 0 00-12.59-5.92 9.83 9.83 0 00-6 12.58c10 27.77 23.47 50.75 39 66.46 16.11 16.34 34.55 25 53.32 25 27.38 0 53.54-18.33 73.65-51.61a9.81 9.81 0 00-3.38-13.5zM431.7 338.54a32.14 32.14 0 00-29.9 44.33c-41.8 19.5-119.8 4.79-191.87-36.62-32.91-18.9-62.16-41.86-84.6-66.39a9.9 9.9 0 00-13.91-.65 9.8 9.8 0 00-.65 13.9c23.79 26 54.68 50.28 89.33 70.18 40.28 23.13 82.27 38.63 121.43 44.81a225.54 225.54 0 0035 2.91c23.12 0 43-4.3 58.51-12.79a32.2 32.2 0 1016.7-59.68zm0 44.66a12.6 12.6 0 01-7.82-2.72 10 10 0 00-2.2-2.21 12.61 12.61 0 1110 4.93z"/><path d="M82.09 338.59c.57-21.26 12.41-47 33.68-73.16 23.19-28.45 56.69-56 94.34-77.65 33.25-19.1 65.2-31.9 98.07-38.91a9.83 9.83 0 10-4.12-19.22c-34.85 7.43-68.78 21-103.79 41.09C116.09 219.09 59.9 289.88 62.46 343.9a32.32 32.32 0 1019.63-5.31zM80.3 383.2a12.5 12.5 0 1112.59-12.5 12.56 12.56 0 01-12.59 12.5z"/><path d="M256.2 96.32a32.23 32.23 0 0026.53-13.81c17.89 11.69 34 35 45.81 66.12 13 34.39 19.84 75.38 19.84 118.54 0 37.18-5.19 72.35-15 103.6a9.72 9.72 0 00.66 7.49 9.82 9.82 0 005.8 4.84 9.89 9.89 0 0012.34-6.44c10.42-33.14 15.93-70.34 15.93-109.49 0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16a32.3 32.3 0 10-32.3 33.31zm0-44.66a12.5 12.5 0 11-12.59 12.5 12.56 12.56 0 0112.59-12.5zM251 243.36a24.35 24.35 0 005.16 48.16 24.68 24.68 0 005.16-.55A24.36 24.36 0 10251 243.36z"/></svg>
    </SvgContainer>
  )
}



export default LogoElectron
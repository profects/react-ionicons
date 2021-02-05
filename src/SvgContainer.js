function SvgContainer({ 
  width,
  height,
  color,
  children,
  style,
  ...rest
}){
  const childStyle = {
    height,
    width,
    color,
    fill,
  }
  return <span {...rest}>{React.cloneElement(children, { style: { ...childStyle, style } })}</span>
} 

export default React.memo(SvgContainer)


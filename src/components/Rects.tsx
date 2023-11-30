
const Rects = ({x,y,id,w,h,f}:IRect) => {
  
  return (
    <rect x={x} y={y} width={w} height={h} fill={f} id={id} onClick={e=>{console.log(id)}}/>
  )
}

interface IRect {
    x:string,
    y:string,
    w:string,
    h:string,
    f:string,
    id:string
}

export default Rects
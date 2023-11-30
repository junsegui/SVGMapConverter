import Rects from "./Rects"

const Svgmap = () => {
  return (
    <svg id="container" >
        <svg id="svg-id" xmlns="http://www.w3.org/2000/svg"
           version="1.1">
            <Rects x="0" y="0" w="50" h="50" f="#00f" id="room2" />
            <Rects x="80" y="0" w="50" h="50" f="#00f"  id="room1"/>
            <Rects x="200" y="0" w="50" h="50" f="purple" id="room3" />
            <Rects x="0" y="100" w="50" h="50" f="purple" id="target" />
            <Rects x="200" y="100" w="50" h="50" f="purple" id="room4" />
        </svg>
    </svg>
  )
}
export default Svgmap
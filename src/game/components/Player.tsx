import { Bounds } from "@react-three/drei"

function Player() {
  return (
    <Bounds fit clip observe margin={10}>
      <mesh position={[0, 0, 10]} castShadow receiveShadow>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0xffffff} flatShading />
      </mesh>
    </Bounds>
  )
}

export default Player

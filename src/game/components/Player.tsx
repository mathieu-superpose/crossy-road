import { useRef } from "react"
import * as THREE from "three"
import { Bounds } from "@react-three/drei"

import { usePlayerAnimation } from "../../hooks/usePlayerAnimation.ts"

function Player() {
  const playerRef = useRef<THREE.Group>(null)
  usePlayerAnimation(playerRef)

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={playerRef}>
        <mesh position={[0, 0, 10]} castShadow receiveShadow>
          <boxGeometry args={[15, 15, 20]} />
          <meshLambertMaterial color={0xffffff} flatShading />
        </mesh>
        <mesh position={[0, 0, 21]} castShadow receiveShadow>
          <boxGeometry args={[2, 4, 2]} />
          <meshLambertMaterial color={0xf0619a} flatShading />
        </mesh>
      </group>
    </Bounds>
  )
}

export default Player

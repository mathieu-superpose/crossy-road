import { Bounds } from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"

import { usePlayerAnimation } from "../../hooks/usePlayerAnimation.ts"

import DirectionalLight from "./DriectionalLight.tsx"

import { setRef } from "../../stores/player.ts"

import useGameStore from "../../stores/game.ts"

function Player() {
  const zoom = useGameStore((state) => state.boundMargin)
  const playerRef = useRef<THREE.Group>(null)
  const lightRef = useRef<THREE.DirectionalLight>(null)

  const camera = useThree((state) => state.camera)

  usePlayerAnimation(playerRef)

  useEffect(() => {
    if (!playerRef.current || !lightRef.current) {
      return
    }

    playerRef.current.add(camera)
    lightRef.current.target = playerRef.current

    setRef(playerRef.current)
  }, [])

  useEffect(() => {
    camera.zoom = zoom
    camera.updateProjectionMatrix()
  }, [zoom, camera])

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={playerRef}>
        <group>
          <mesh position={[0, 0, 10]} castShadow receiveShadow>
            <boxGeometry args={[15, 15, 20]} />
            <meshLambertMaterial color={0xffffff} flatShading />
          </mesh>
          <mesh position={[0, 0, 21]} castShadow receiveShadow>
            <boxGeometry args={[2, 4, 2]} />
            <meshLambertMaterial color={0xf0619a} flatShading />
          </mesh>
        </group>

        <DirectionalLight ref={lightRef} />
      </group>
    </Bounds>
  )
}

export default Player

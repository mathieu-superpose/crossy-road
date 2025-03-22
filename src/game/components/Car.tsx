import { use, useRef } from "react"
import * as THREE from "three"

import { tileSize } from "../../data/constants"

import { useVehiculeAnimation } from "../../hooks/useVehiculeAnimation"

function Car({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}: {
  rowIndex: number
  initialTileIndex: number
  direction: boolean
  speed: number
  color: number
}) {
  const carRef = useRef<THREE.Group>(null)

  useVehiculeAnimation(carRef, direction, speed)

  return (
    <group
      ref={carRef}
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
    >
      {/* body */}
      <mesh castShadow receiveShadow position={[0, 0, 10]}>
        <boxGeometry args={[40, 20, 10]} />
        <meshLambertMaterial color={color} />
      </mesh>

      {/* ROOF GROUP */}
      <group position={[-2, 0, 0]}>
        {/* roof */}
        <mesh castShadow receiveShadow position={[0, 0, 20]}>
          <boxGeometry args={[25, 15, 10]} />
          <meshLambertMaterial color={color} />
        </mesh>

        {/* windows */}
        <mesh castShadow receiveShadow position={[0, 0, 20]}>
          <boxGeometry args={[27, 13, 8]} />
          <meshLambertMaterial color={0xbbbbff} />
        </mesh>

        <mesh castShadow receiveShadow position={[5, 0, 20]}>
          <boxGeometry args={[10, 17, 8]} />
          <meshLambertMaterial color={0xbbbbff} />
        </mesh>
      </group>

      <mesh castShadow receiveShadow position={[-7, 0, 20]}>
        <boxGeometry args={[5, 17, 8]} />
        <meshLambertMaterial color={0xbbbbff} />
      </mesh>

      {/* wheels */}
      <mesh castShadow receiveShadow position={[-10, 0, 5]}>
        <cylinderGeometry args={[5, 5, 25]} />
        <meshLambertMaterial color={0x000000} />
      </mesh>

      <mesh castShadow receiveShadow position={[12, 0, 5]}>
        <cylinderGeometry args={[5, 5, 25]} />
        <meshLambertMaterial color={0x000000} />
      </mesh>

      {/* front lights */}
      <mesh
        castShadow
        receiveShadow
        position={[19, 5, 10]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[2, 2, 5]} />
        <meshLambertMaterial
          color={0xffee00}
          emissive={0xffee00}
          emissiveIntensity={5}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[19, -5, 10]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[2, 2, 5]} />
        <meshLambertMaterial
          color={0xffee00}
          emissive={0xffee00}
          emissiveIntensity={5}
        />
      </mesh>

      {/* back lights */}
      <mesh
        castShadow
        receiveShadow
        position={[-18, 5, 10]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[1, 1, 5]} />
        <meshLambertMaterial
          color={0xff5555}
          emissive={0xff0000}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[-18, -5, 10]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[1, 1, 5]} />
        <meshLambertMaterial
          color={0xff5555}
          emissive={0xff0000}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

export default Car

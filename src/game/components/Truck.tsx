import { useRef } from "react"
import * as THREE from "three"

import { tileSize } from "../../data/constants"

import { useVehicleAnimation } from "../../hooks/useVehicleAnimation"
import { complementaryColor } from "../../utils/color"

function Truck({
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
  const truckRef = useRef<THREE.Group>(null)

  useVehicleAnimation(truckRef, direction, speed)

  return (
    <group
      ref={truckRef}
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
    >
      {/* body */}
      <mesh castShadow receiveShadow position={[0, 0, 20]}>
        <boxGeometry args={[20, 20, 22]} />
        <meshLambertMaterial color={color} />
      </mesh>

      {/* front lights */}
      <mesh castShadow receiveShadow position={[10, 7, 15]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshLambertMaterial
          color={0xffff00}
          emissive={0xffff00}
          emissiveIntensity={5}
        />
      </mesh>
      <mesh castShadow receiveShadow position={[10, -7, 15]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshLambertMaterial
          color={0xffff00}
          emissive={0xffff00}
          emissiveIntensity={5}
        />
      </mesh>

      {/* windows */}
      <mesh castShadow receiveShadow position={[3, 0, 25]}>
        <boxGeometry args={[12, 22, 9]} />
        <meshLambertMaterial color={0xbbbbff} />
      </mesh>
      <mesh castShadow receiveShadow position={[5, 0, 25]}>
        <boxGeometry args={[12, 18, 9]} />
        <meshLambertMaterial color={0xbbbbff} />
      </mesh>

      {/* cargo */}
      <mesh castShadow receiveShadow position={[-36, 0, 12]}>
        <boxGeometry args={[50, 20, 5]} />
        <meshLambertMaterial color={0x777777} />
      </mesh>

      {/* container */}
      <mesh castShadow receiveShadow position={[-36, 0, 24]}>
        <boxGeometry args={[50, 20, 18]} />
        <meshLambertMaterial color={complementaryColor(color)} />
      </mesh>

      {/* wheels */}
      <mesh castShadow receiveShadow position={[0, 0, 7]}>
        <cylinderGeometry args={[6, 6, 25]} />
        <meshLambertMaterial color={0x000000} />
      </mesh>

      <mesh castShadow receiveShadow position={[-45, 0, 7]}>
        <cylinderGeometry args={[6, 6, 25]} />
        <meshLambertMaterial color={0x000000} />
      </mesh>
    </group>
  )
}

export default Truck

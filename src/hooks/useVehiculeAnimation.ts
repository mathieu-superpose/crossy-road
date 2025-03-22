import { RefObject } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

const ROAD_WIDTH = 450

export function useVehiculeAnimation(
  vehiculeRef: RefObject<THREE.Group | null>,
  direction: boolean,
  speed: number
) {
  useFrame((_, dt) => {
    if (!vehiculeRef.current) return null

    direction
      ? (vehiculeRef.current.position.x += speed * dt)
      : (vehiculeRef.current.position.x -= speed * dt)

    if (vehiculeRef.current.position.x < -ROAD_WIDTH) {
      vehiculeRef.current.position.x = ROAD_WIDTH
    }
    if (vehiculeRef.current.position.x > ROAD_WIDTH) {
      vehiculeRef.current.position.x = -ROAD_WIDTH
    }
  })
}

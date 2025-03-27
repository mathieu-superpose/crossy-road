import { RefObject } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { tileSize, minTileIndex, maxTileIndex } from "../data/constants.ts"

import useGameStore from "../stores/game.ts"

export function useVehicleAnimation(
  ref: RefObject<THREE.Group | null>,
  direction: boolean,
  speed: number
) {
  const state = useGameStore((state) => state)

  useFrame((_state, delta) => {
    if (!ref.current) return
    const vehicle = ref.current

    if (state.status === "paused") {
      return
    }

    const beginningOfRow = (minTileIndex - 2) * tileSize
    const endOfRow = (maxTileIndex + 2) * tileSize

    if (direction) {
      vehicle.position.x =
        vehicle.position.x > endOfRow
          ? beginningOfRow
          : vehicle.position.x + speed * delta
    } else {
      vehicle.position.x =
        vehicle.position.x < beginningOfRow
          ? endOfRow
          : vehicle.position.x - speed * delta
    }
  })
}

import * as THREE from "three"

export type TDirection = "forward" | "backward" | "left" | "right"

export type TPlayerState = {
  currentRow: number
  currentTile: number
  movesQueue: TDirection[]
  ref: TPlayerRef
}

export interface IPosition {
  rowIndex: number
  tileIndex: number
}

export type TPlayerRef = THREE.Group<THREE.Object3DEventMap> | null

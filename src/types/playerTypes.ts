export type TDirection = "forward" | "backward" | "left" | "right"

export type TPlayerState = {
  currentRow: number
  currentTile: number
  movesQueue: TDirection[]
}

export interface IPosition {
  rowIndex: number
  tileIndex: number
}
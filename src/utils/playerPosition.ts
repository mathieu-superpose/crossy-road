import { minTileIndex, maxTileIndex } from "../data/constants.ts"

import useMapStore from "../stores/map.ts"

import { IPosition, TDirection } from "../types/playerTypes"

import useGameStore from "../stores/game.ts"

export function calculateFinalPosition(
  currentPosition: IPosition,
  moves: TDirection[]
) {
  return moves.reduce((position: IPosition, direction: TDirection) => {
    if (direction === "forward")
      return {
        rowIndex: position.rowIndex + 1,
        tileIndex: position.tileIndex,
      }
    if (direction === "backward")
      return {
        rowIndex: position.rowIndex - 1,
        tileIndex: position.tileIndex,
      }
    if (direction === "left")
      return {
        rowIndex: position.rowIndex,
        tileIndex: position.tileIndex - 1,
      }
    if (direction === "right")
      return {
        rowIndex: position.rowIndex,
        tileIndex: position.tileIndex + 1,
      }
    return position
  }, currentPosition)
}

export function endsUpInValidPosition(
  currentPosition: IPosition,
  moves: TDirection[]
) {
  // Calculate where the player would end up after the move
  const finalPosition = calculateFinalPosition(currentPosition, moves)

  const currentRow = useGameStore.getState().score

  // Detect if we hit the edge of the board
  if (
    finalPosition.rowIndex < currentRow - 10 ||
    finalPosition.rowIndex === -1 ||
    finalPosition.tileIndex === minTileIndex - 1 ||
    finalPosition.tileIndex === maxTileIndex + 1
  ) {
    // Invalid move, ignore move command
    return false
  }

  // Detect if we hit a tree
  const finalRow = useMapStore.getState().rows[finalPosition.rowIndex - 1]
  if (
    finalRow &&
    finalRow.type === "forest" &&
    finalRow.trees?.some((tree) => tree.tileIndex === finalPosition.tileIndex)
  ) {
    // Invalid move, ignore move command
    return false
  }

  return true
}

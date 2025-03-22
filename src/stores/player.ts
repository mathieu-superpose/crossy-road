import { TDirection, TPlayerState } from "../types/playerTypes"

export const state: TPlayerState = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
}

export function queueMove(direction: TDirection) {
  state.movesQueue.push(direction)
}

export function stepCompleted() {
  const direction = state.movesQueue.shift()

  if (direction === "forward") state.currentRow += 1
  if (direction === "backward") state.currentRow -= 1
  if (direction === "left") state.currentTile -= 1
  if (direction === "right") state.currentTile += 1
}

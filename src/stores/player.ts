import { endsUpInValidPosition } from "../utils/playerPosition"

import useMapStore from "./map"
import useGameStore from "./game"

import { TDirection, TPlayerState, TPlayerRef } from "../types/playerTypes"

export let state: TPlayerState = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
  ref: null,
}

export function queueMove(direction: TDirection) {
  const gameStatus = useGameStore.getState().status
  if (gameStatus !== "running") {
    return
  }

  const isValidMove = endsUpInValidPosition(
    { rowIndex: state.currentRow, tileIndex: state.currentTile },
    [...state.movesQueue, direction]
  )

  if (!isValidMove) {
    return
  }

  state.movesQueue.push(direction)
}

export function stepCompleted() {
  const direction = state.movesQueue.shift()

  if (direction === "forward") state.currentRow += 1
  if (direction === "backward") state.currentRow -= 1
  if (direction === "left") state.currentTile -= 1
  if (direction === "right") state.currentTile += 1

  // Add new rows if the player is running out of them
  if (state.currentRow === useMapStore.getState().rows.length - 10) {
    useMapStore.getState().addRows()
  }

  // Update the score
  useGameStore.getState().updateScore(state.currentRow)
}

export function setRef(ref: TPlayerRef) {
  state.ref = ref
}

export function reset() {
  state.currentRow = 0
  state.currentTile = 0
  state.movesQueue = []

  if (!state.ref) return
  state.ref.position.x = 0
  state.ref.position.y = 0
  state.ref.children[0].rotation.z = 0
}

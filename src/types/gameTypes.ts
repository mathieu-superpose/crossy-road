export interface IGameStore {
  status: "running" | "paused" | "gameover"
  score: number
  boundMargin: number
  setBoundMargin: (margin: number) => void
  updateScore: (rowIndex: number) => void
  endGame: () => void
  reset: () => void
  playPause: () => void
}

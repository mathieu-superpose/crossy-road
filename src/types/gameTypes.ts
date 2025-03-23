export interface IGameStore {
  status: "running" | "paused" | "gameover"
  score: number
  updateScore: (rowIndex: number) => void
  endGame: () => void
  reset: () => void
}

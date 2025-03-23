export interface IGameStore {
  score: number
  updateScore: (rowIndex: number) => void
}

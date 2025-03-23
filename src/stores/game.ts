import { create } from "zustand"

import { IGameStore } from "../types/gameTypes"

const useGameStore = create<IGameStore>((set) => ({
  status: "running",
  score: 0,
  updateScore: (rowIndex) => {
    set((state) => ({ score: Math.max(rowIndex, state.score) }))
  },
  endGame: () => {
    set({ status: "gameover" })
  },
  reset: () => {
    set({ status: "running" })
  },
}))

export default useGameStore

import { create } from "zustand"

import { IGameStore } from "../types/gameTypes"

const useGameStore = create<IGameStore>((set) => ({
  score: 0,
  updateScore: (rowIndex) => {
    set((state) => ({ score: Math.max(rowIndex, state.score) }))
  },
}))

export default useGameStore

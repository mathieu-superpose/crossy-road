import { create } from "zustand"

import useMapStore from "./map"
import { reset as resetPlayerStore } from "./player"

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
    useMapStore.getState().reset()
    resetPlayerStore()
    set({ status: "running", score: 0 })
  },
}))

export default useGameStore

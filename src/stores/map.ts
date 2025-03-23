import { create } from "zustand"
import { generateRows } from "../utils/map.ts"

import { IMapState } from "../types/mapTypes.ts"

const useMapStore = create<IMapState>((set) => ({
  rows: generateRows(20),
  addRows: () => {
    const newRows = generateRows(20)
    set((state) => ({ rows: [...state.rows, ...newRows] }))
  },
}))

export default useMapStore

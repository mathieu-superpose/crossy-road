import { IVehicle } from "./vehicleTypes.ts"

export interface IMapState {
  rows: TRow[]
  addRows: () => void
}

type TRow = ICarLane | ITruckLane | IForest

export interface ICarLane {
  type: "car"
  direction: boolean
  speed: number
  vehicles: IVehicle[]
}

export interface ITruckLane {
  type: "truck"
  direction: boolean
  speed: number
  vehicles: IVehicle[]
}

export interface IForest {
  type: "forest"
  trees: ITree[]
}

export interface ITree {
  tileIndex: number
  height: number
}

import Road from "./Road"
import Car from "./Car"

import { IVehicle } from "../../types/vehiculeTypes.ts"

function CarLane({ rowIndex, rowData }: { rowIndex: number; rowData: any }) {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle: IVehicle, index: number) => (
        <Car
          key={index}
          rowIndex={rowIndex}
          initialTileIndex={vehicle.initialTileIndex}
          direction={rowData.direction}
          speed={rowData.speed}
          color={vehicle.color}
        />
      ))}
    </Road>
  )
}

export default CarLane

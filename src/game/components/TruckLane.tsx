import Road from "./Road.tsx"
import Truck from "./Truck.tsx"

import { IVehicle } from "../../types/vehiculeTypes.ts"

function TruckLane({ rowIndex, rowData }: { rowIndex: number; rowData: any }) {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle: IVehicle, index: number) => (
        <Truck
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

export default TruckLane

import Forest from "./Forest.tsx"
import CarLane from "./CarLane.tsx"
import TruckLane from "./TruckLane.tsx"

function Row({ rowIndex, rowData }: { rowIndex: number; rowData: any }) {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowIndex={rowIndex} rowData={rowData} />
    }
    case "car": {
      return <CarLane rowIndex={rowIndex} rowData={rowData} />
    }
    case "truck": {
      return <TruckLane rowIndex={rowIndex} rowData={rowData} />
    }
  }
}

export default Row

import Forest from "./Forest.tsx"
import CarLane from "./CarLane.tsx"
import TruckLane from "./TruckLane.tsx"
import GatedLane from "./GatedLane.tsx"

function Row({
  rowIndex,
  rowData,
  currentRow,
}: {
  rowIndex: number
  rowData: any
  currentRow: number
}) {
  if (currentRow > rowIndex + 10) {
    return null
  }

  if (currentRow === rowIndex + 10) {
    return <GatedLane rowIndex={rowIndex} />
  }

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

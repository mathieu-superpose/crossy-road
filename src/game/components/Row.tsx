import Forest from "./Forest"

function Row({ rowIndex, rowData }: { rowIndex: number; rowData: any }) {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowIndex={rowIndex} rowData={rowData} />
    }
  }
}

export default Row

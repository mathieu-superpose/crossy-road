import Grass from "./Grass"
import Row from "./Row"

import { rows } from "../../data/metadata"

function Map() {
  return (
    <>
      {/* first rows */}
      {[-3, -2, -1, 0].map((tileIndex) => (
        <Grass key={tileIndex} rowIndex={tileIndex} />
      ))}

      {/* other rows */}
      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  )
}

export default Map

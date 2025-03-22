import Grass from "./Grass"
import Row from "./Row"

import { rows } from "../../data/metadata"

function Map() {
  return (
    <>
      {/* first row */}
      <Grass rowIndex={0} />

      {/* other rows */}
      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  )
}

export default Map

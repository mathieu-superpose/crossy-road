import Grass from "./Grass"
import Row from "./Row"

import useMapStore from "../../stores/map.ts"
import useGameStore from "../../stores/game.ts"

import { IMapState } from "../../types/mapTypes"

function Map() {
  const rows = useMapStore((state: IMapState) => state.rows)
  const currentRow = useGameStore((state) => state.score)

  return (
    <>
      {/* first rows */}
      {[-3, -2, -1, 0].map((tileIndex) => (
        <Grass key={tileIndex} rowIndex={tileIndex} />
      ))}

      {/* other rows */}
      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData} currentRow={currentRow} />
      ))}
    </>
  )
}

export default Map

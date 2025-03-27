import { useMemo } from "react"
import { tilesPerRow, tileSize } from "../../data/constants"

import Road from "./Road"

function Gate({ tileIndex }: { tileIndex: number }) {
  const tube = useMemo(() => {
    const diameter = tileSize / 10
    const width = (8 * tileSize) / 10
    const height = (5 * tileSize) / 10

    return {
      diameter,
      width,
      height,
    }
  }, [])

  return (
    <group
      position-x={tileIndex * tileSize - (tilesPerRow * tileSize) / 2}
      position-y={-tileSize / 4}
    >
      <group position-x={tileSize / 2}>
        {/* bar top */}
        <mesh position-z={tube.height + tube.diameter / 2}>
          <boxGeometry args={[tube.width, tube.diameter, tube.diameter]} />
          <meshLambertMaterial color={0x999999} flatShading />
        </mesh>
        {/* bar bottom */}
        <mesh position-z={2 * tube.diameter}>
          <boxGeometry args={[tube.width, tube.diameter, tube.diameter]} />
          <meshLambertMaterial color={0x999999} flatShading />
        </mesh>

        {/* bar left */}
        <mesh
          position-z={tube.height - 2 * tube.diameter}
          position-x={(2 * tube.diameter - tileSize) / 2}
        >
          <boxGeometry
            args={[tube.diameter, tube.diameter, tube.height + tube.diameter]}
          />
          <meshLambertMaterial color={0x999999} flatShading />
        </mesh>

        {/* bar right */}
        <mesh
          position-z={tube.height - 2 * tube.diameter}
          position-x={tileSize / 2 - tube.diameter}
        >
          <boxGeometry
            args={[tube.diameter, tube.diameter, tube.height + tube.diameter]}
          />
          <meshLambertMaterial color={0x999999} flatShading />
        </mesh>

        {/* bar center left */}
        <mesh
          position-z={tube.height / 2 + tube.diameter}
          position-x={tube.diameter - tileSize / 4}
        >
          <boxGeometry
            args={[tube.diameter, tube.diameter, tube.height - tube.diameter]}
          />
          <meshLambertMaterial color={0x999999} flatShading />
        </mesh>

        {/* bar center right */}
        <mesh
          position-z={tube.height / 2 + tube.diameter}
          position-x={-tube.diameter + tileSize / 4}
        >
          <boxGeometry
            args={[tube.diameter, tube.diameter, tube.height - tube.diameter]}
          />
          <meshLambertMaterial color={0x999999} flatShading />
        </mesh>
      </group>
    </group>
  )
}

function GatedLane({ rowIndex }: { rowIndex: number }) {
  const gateIndexes = useMemo(() => {
    return new Array(tilesPerRow).fill(0).map((_, index) => index)
  }, [tilesPerRow])
  return (
    <Road rowIndex={rowIndex}>
      <group position-z={0}>
        {gateIndexes.map((tileIndex) => (
          <Gate key={tileIndex} tileIndex={tileIndex} />
        ))}
      </group>
    </Road>
  )
}

export default GatedLane

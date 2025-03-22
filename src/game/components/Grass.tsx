import { tilesPerRow, tileSize } from "../../data/constants"

function Grass({
  rowIndex,
  children,
}: {
  rowIndex: number
  children?: React.ReactNode
}) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={0xbaf455} flatShading />
      </mesh>
      {children}
    </group>
  )
}

export default Grass

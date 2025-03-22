import { tilesPerRow, tileSize } from "../../data/constants"

function Road({
  rowIndex,
  children,
}: {
  rowIndex: number
  children?: React.ReactNode
}) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh receiveShadow>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={0x333333} flatShading />
      </mesh>
      {children}
    </group>
  )
}

export default Road

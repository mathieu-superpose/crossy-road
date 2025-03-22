import Grass from "./Grass.tsx"
import Tree from "./Tree.tsx"

export function Forest({
  rowIndex,
  rowData,
}: {
  rowIndex: number
  rowData: any
}) {
  return (
    <Grass rowIndex={rowIndex}>
      {rowData.trees.map(
        (tree: { tileIndex: number; height: number }, index: number) => (
          <Tree key={index} tileIndex={tree.tileIndex} height={tree.height} />
        )
      )}
    </Grass>
  )
}

export default Forest

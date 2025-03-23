import { useMemo } from "react"
import * as THREE from "three"

function Environment() {
  const bgColor = useMemo(() => new THREE.Color(0x282c34), [])

  return (
    <>
      <ambientLight />

      <color attach="background" args={[bgColor]} />
    </>
  )
}

export default Environment

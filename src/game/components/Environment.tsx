import { useMemo } from "react"
import * as THREE from "three"

function Environment() {
  const bgColor = useMemo(() => new THREE.Color(0x282c34), [])

  return (
    <>
      <ambientLight />
      <directionalLight
        position={[-100, -100, 200]}
        up={[0, 0, 1]}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-400}
        shadow-camera-right={400}
        shadow-camera-top={400}
        shadow-camera-bottom={-400}
        shadow-camera-near={50}
        shadow-camera-far={400}
      />

      <color attach="background" args={[bgColor]} />
    </>
  )
}

export default Environment

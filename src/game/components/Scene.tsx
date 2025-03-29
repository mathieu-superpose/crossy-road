import { Canvas } from "@react-three/fiber"

import Environment from "./Environment"

function Scene({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      shadows={true}
      orthographic={true}
      camera={{
        up: [0, 0, 1],
        position: [300, -300, 300],
        zoom: 5,
      }}
    >
      <Environment />

      {children}
    </Canvas>
  )
}

export default Scene

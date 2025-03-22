import { queueMove } from "../stores/player"
import { useEventListeners } from "../hooks/useEventListeners.ts"

import "./Controls.css"

function Controls() {
  useEventListeners()

  return (
    <div id="controls">
      <div>
        <button onClick={() => queueMove("forward")}>▲</button>
        <button onClick={() => queueMove("left")}>◀</button>
        <button onClick={() => queueMove("backward")}>▼</button>
        <button onClick={() => queueMove("right")}>▶</button>
      </div>
    </div>
  )
}

export default Controls

import { useEventListeners } from "../hooks/useEventListeners.ts"
import { playPauseGame } from "../stores/player.ts"
import useGameStore from "../stores/game.ts"

import "./MenuButton.css"

function MenuButton() {
  useEventListeners()
  const gameStatus = useGameStore((state) => state.status)

  return (
    <div className="MenuButton">
      <div>
        <button
          onClick={() => playPauseGame()}
          className={gameStatus === "running" ? "" : "open"}
        >
          <div className="barTop" />
          <div className="barBot" />
        </button>
      </div>
    </div>
  )
}

export default MenuButton

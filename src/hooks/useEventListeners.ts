import { useEffect } from "react"
import { playPauseGame, queueMove } from "../stores/player"

import useGameStore from "../stores/game"

export function useEventListeners() {
  const gameStatus = useGameStore((state) => state.status)
  const reset = useGameStore((state) => state.reset)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault()
        queueMove("forward")
      } else if (event.key === "ArrowDown") {
        event.preventDefault()
        queueMove("backward")
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        queueMove("left")
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        queueMove("right")
        // Pause the game when P key is pressed
      } else if (event.key === "p") {
        event.preventDefault()
        playPauseGame()
        // Restart the game when Enter key is pressed
      } else if (event.key === "Enter") {
        event.preventDefault()

        console.log("Enter key pressed, status: ", gameStatus)
        if (gameStatus === "gameover") {
          reset()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
}

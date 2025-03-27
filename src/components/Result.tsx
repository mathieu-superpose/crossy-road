import useGameStore from "../stores/game"

import "./Result.css"

function Result() {
  const status = useGameStore((state) => state.status)
  const score = useGameStore((state) => state.score)
  const reset = useGameStore((state) => state.reset)

  if (status !== "gameover") return null

  return (
    <div id="result-container">
      <div id="result">
        <h1>Game Over</h1>
        <p>Your score: {score}</p>
        <button onClick={reset}>Retry</button>
      </div>
    </div>
  )
}

export default Result

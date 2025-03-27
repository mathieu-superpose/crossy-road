import useGameStore from "../stores/game"
import "./Score.css"

function Score() {
  const score = useGameStore((state) => state.score)

  return <div id="score">{score}</div>
}

export default Score

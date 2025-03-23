import useStore from "../stores/game"
import "./Score.css"

function Score() {
  const score = useStore((state) => state.score)

  return <div id="score">{score}</div>
}

export default Score

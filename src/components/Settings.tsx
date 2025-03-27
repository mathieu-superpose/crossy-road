import useGameStore from "../stores/game"

import "./Settings.css"

function Settings() {
  const status = useGameStore((state) => state.status)

  if (status !== "paused") return null

  return (
    <div id="settings-container">
      <div id="settings">
        <h1>Paused</h1>
      </div>
    </div>
  )
}

export default Settings

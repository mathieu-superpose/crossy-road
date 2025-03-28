import useGameStore from "../stores/game"

import "./Settings.css"

function Settings() {
  const status = useGameStore((state) => state.status)
  const zoom = useGameStore((state) => state.boundMargin)
  const setZoom = useGameStore((state) => state.setBoundMargin)
  if (status !== "paused") return null

  const handleZoomOut = () => {
    zoom > 2.5 ? setZoom(zoom / 2) : null
  }

  const handleZoomIn = () => {
    zoom < 10 ? setZoom(zoom * 2) : null
  }

  return (
    <div id="settings-container">
      <div id="settings">
        <h1>Paused</h1>

        <div className="zoom">
          <button onClick={handleZoomOut}>-</button>
          <h2>Zoom</h2>
          <button onClick={handleZoomIn}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Settings

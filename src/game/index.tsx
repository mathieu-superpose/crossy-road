import Scene from "./components/Scene"
import Player from "./components/Player"
import Map from "./components/Map"

import Controls from "../components/Controls"
import Score from "../components/Score"
import Result from "../components/Result"
import Settings from "../components/Settings"
import MenuButton from "../components/MenuButton"

import "./Game.css"

function Game() {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Controls />
      <Score />
      <Result />
      <Settings />
      <MenuButton />
    </div>
  )
}

export default Game

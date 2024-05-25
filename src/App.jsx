import GameBoeard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
function App() {
  return (
    <main>
      
      <div id="game-container">
        <ol id="players">
          <Player name={"Player 1"} symbole={"X"}/>
          <Player name={"Player 2"} symbole={"O"}/>
        </ol>
      <GameBoeard/>
      </div>

    </main>
  )
}

export default App

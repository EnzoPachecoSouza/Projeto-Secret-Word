//CSS
import './App.css'

//REACT HOOKS
import { useState, useCallback , useEffect } from 'react'

//DATA
import { wordsList } from './data/words'

//COMPONENTS
import StartScreen from './components/StartScreen/StartScreen'
import Game from './components/Game/Game'
import GameOver from './components/GameOver/GameOver'


const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  return (
    <div className='app'>
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App

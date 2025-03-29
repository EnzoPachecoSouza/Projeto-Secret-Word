//CSS
import './App.css'

//REACT HOOKS
import { useState, useEffect } from 'react'

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

  const [pickedWord, setPickedWord] = useState("")
  const [pikedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

  //PEGAR CATEGORIA E PALAVRA ALEATÓRIA
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category)

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return { word, category }
  }

  //START GAME
  const startGame = () => {
    const { word, category } = pickWordAndCategory()

    //SEPARANDO AS LETRAS POR ESPAÇO
    let wordLetters = word.split('')

    //TORNANDO AS LETRAS MINUSCULAS
    wordLetters = wordLetters.map((l) => l.toUpperCase())


    //SETAR OS ESTADOS
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  //VERIFICAR LETRAS DO INPUT
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toUpperCase()

    //CHECAR SE A LETRA JA FOI USADA
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    }else{
      setWrongLetters(actualGuessedLetters => [
        ...actualGuessedLetters, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates();

      setGameStage(stages[2].name)
    }
  }, [guesses])

  //END GAME
  const endGame = () => {
    setScore(0)
    setGuesses(5)
    setGameStage(stages[0].name)
  }
  return (
    <div className='app'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pikedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
      />}
      {gameStage === 'end' && <GameOver endGame={endGame} score={score}/>}
    </div>
  )
}

export default App

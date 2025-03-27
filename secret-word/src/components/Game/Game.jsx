import './Game.css'

function Game({verifyLetter}) {
    return (
        <div className='game'>
            <h1>Game</h1>
            
            <button onClick={verifyLetter}>Fim de jogo</button>
        </div>
    )
}

export default Game
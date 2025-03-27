import './GameOver.css'

function GameOver({endGame}) {
    return (
        <div className='game-over'>
            <h1>Fim de jogo</h1>

            <button onClick={endGame}>Reiniciar jogo</button>
        </div>
    )
}

export default GameOver
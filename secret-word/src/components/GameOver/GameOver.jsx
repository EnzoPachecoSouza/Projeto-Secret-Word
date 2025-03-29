import './GameOver.css'

function GameOver({endGame, score}) {
    return (
        <div className='game-over'>
            <h1>Fim de jogo</h1>
            <h2>
                A sua pontuação foi: <span>{score}</span>
            </h2>
            <button onClick={endGame}>Reiniciar jogo</button>
        </div>
    )
}

export default GameOver
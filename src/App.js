import React, { useState } from "react"

export default function App()
{
    /*const [player, setPlayer] = useState({
        name: "Diogo",
        score: 0
    })*/

    const [playerName, setPlayerName] = useState(() =>
    {
        return "Diogo"
    })

    const [playerScore, setPlayerScore] = useState(() =>
    {
        return 0
    })

    function alterar()
    {
        /*setPlayer(a => {
            return {
                ...a,
                score: a.score + 1
            }
        })*/

        setPlayerScore(scoreAnterior => {
            return scoreAnterior + 1
        })
    }

    return (
        <>
            <h1>React Hooks - useState</h1>

            <hr />

            <h3>Nome: {playerName}</h3>
            <h3>Pontos: {playerScore}</h3>

            <button onClick={alterar}>Alterar pontuacao</button>
        </>
    )
}
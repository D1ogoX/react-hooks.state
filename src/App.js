import React, { useState } from "react"

export default function App()
{
    //Não pode ser criado sob condições (If)
    const [valor, setValor] = useState(100)

    function diminuir ()
    {
        setValor(valorAntigo => valorAntigo - 1)
    }

    function aumentar ()
    {
        setValor(valorAntigo => valorAntigo + 1)
    }

    return (
        <>
            <h1>React Hooks - useState</h1>

            <button onClick={diminuir}>Diminuir</button>
            <span>{valor}</span>
            <button onClick={aumentar}>Incremento</button>
        </>
    )
}
import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuário!')
    }

    const [name, setName] = useState('Poliana')

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => {setName(e.target.value)}}></input>
                </div>
                <p>Nome Digitado: {name}</p>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )

}

export default Form
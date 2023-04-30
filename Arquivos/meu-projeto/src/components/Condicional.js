import {useState} from 'react'

function Condicional() {
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }


    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type='email' placeholder= 'Digite seu email...' onChange={(e) => {setEmail(e.target.value)}}></input>
                <button type="submit" onClick={enviarEmail} >Enviar email</button>
                
                {
                //a linha abaixo é uma renderizacao condicional, e a div será retornada se tiver algum valor na variável (estado) userEmail, ou seja quando as duas expressões (antes do && e depois do && forem true, nesse caso, ser true é as duas existirem)
                userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional
import { useState } from "react"; //para usar estados em React, eu preciso fazer essa importação
//sintaxe da criação de um estado: const [nomeDoEstado, funcaoQueAtualizaOEstado] = useState() (o use state recebe a mensagem que inicializa o estado)

function Titulo({cor}){

    const [texto, setTexto] = useState("Título do estado inicial")
    const [inputText, setInputText] = useState("")
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";

    //essa funcao atualiza o estado de nome "texto" que é o estado que está na tag h1. O estado é atualizado com o valor de outro estado (inputText)
    function clicou(){
        setTexto(inputText);
    }

    //na arrow function definida na tag input, defini um parâmetro pra ela. Esse parâmetro é o valor que será digitado no input. A variavel e é padronizada, e ela recebe o valor do eveto em questão.

    return (
        <div>
            <h1 style={{color:cor}}> {texto} </h1>
            <img src={urlImg} alt="Logo React" width="100px"/>
            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={clicou}>Mudar</button>
            
        </div>
    )
}

export default Titulo
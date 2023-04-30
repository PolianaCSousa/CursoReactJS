
//é possível passar métodos pelo props tambem. Ou seja, eu posso passar um método que foi definido no componente pai, para o filho executá-la 

import Button from './evento/Button'

function Eventos (){

    function meuEvento(){
        console.log(`Ativando o Primeiro Evento!`)
    }

    function segundoEvento(){
        console.log(`Ativando o Segundo Evento!`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Eventos
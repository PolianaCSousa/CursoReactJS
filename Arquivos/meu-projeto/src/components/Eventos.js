function Eventos ({numero}){

    function meuEvento(){
        console.log(`Opa, fui ativado! ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um eveto:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos
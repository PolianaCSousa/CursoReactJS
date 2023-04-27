function Pessoa(props){ //tambem posso colocar cada props separadamente igual eu fiz no curso do canal Programação Web
    return(
        <div>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    )
}

export default Pessoa
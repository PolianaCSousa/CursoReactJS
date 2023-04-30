function Saudacao({nome}) {

    function gerarSaudacao(algumNome){
        return `Olá ${algumNome}, tudo bem?`
    }

    return(
        //se o estado tive algum valor, será gerado o parágrafo, se não, não será gerado nada
        <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
    )
    

}

export default Saudacao

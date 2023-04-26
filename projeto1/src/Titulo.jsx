//para retornar mais de uma tag, é preciso colocá-las dentro de uma div que deve estar dentro de ()
//PROPS: Os props ficam dentro de chaves. Eu posso manipular um componente de acordo com o props que ele recebe. Posso usar um if por exemplo e determinar se um props vai ser aplicado ao componente
//Se eu nao passar nada no props do componente, ele simplesmente ignora
function Titulo({nome, cor, paragrafo}){

    //JSX: para incorporar JavaScript no JSX, deve-se usar chaves. As 3 variaveis que incorporei no componente, foi preciso usar chaves
    //let nome = "Poli";
    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";

    return (
        <div>
            <h1 style={{color:cor}}> Oi, eu sou a { nome ? nome : "Fulano" }</h1> 
            {paragrafo ? 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero, dicta soluta officiis ab itaque velit hic eum impedit tempore necessitatibus excepturi quaerat praesentium! Molestiae cumque laboriosam nostrum esse veritatis.</p>
                :
                <p></p>
            }
            <p>O valor da soma é {soma}</p>
            <img src={urlImg} alt="Logo React" width="100px"/>
            
        </div>
    )
}

export default Titulo
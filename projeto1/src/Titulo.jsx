//para retornar mais de uma tag, é preciso colocá-las dentro de uma div que deve estar dentro de ()
function Titulo(){

    //para incorporar JavaScript no JSX, deve-se usar chaves
    let nome = "Poli";
    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";

    //as 3 variaveis que incorporei no componente, foi preciso usar chaves

    return (
        <div>
            <h1>Oi, eu sou a {nome}</h1>
            <p>O valor da soma é {soma}</p>
            <img src={urlImg} alt="Logo React" width="100px"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero, dicta soluta officiis ab itaque velit hic eum impedit tempore necessitatibus excepturi quaerat praesentium! Molestiae cumque laboriosam nostrum esse veritatis.</p>
        </div>
    )
}

export default Titulo
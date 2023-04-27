import Item from "./Item"
function List() {
    return(
        //o React exige que os elementos (tags) de um componente estejam dentro de outra, por isso em todos os exericicios todos os componente estavam dentro de uma div
        //O fragment serve pra quando eu nao quero nenhuma outra tag além das que compõem meu componente. Para isso, basta usar tags sem nome, para retornar o componente. Essa tag sem nome é o fragment
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item carro="Fusca" ano_lancamento={1998}></Item>
                <Item carro="Uno" ano_lancamento={2009}></Item>
                <Item/>
            </ul>
        </>
    )
}

export default List
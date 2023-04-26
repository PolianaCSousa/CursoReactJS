//o nome do componente deve ser o mesmo que o nome do arquivo
//outra convenção é colocar o nome do componente com a primeira letra maiúscula, para nomes compostos deixamos em CamelCase

import Titulo from "./Titulo" //um componente pode usar outro, para isso é preciso importá-lo

//para retornar mais de 1 componente, é preciso usar parênteses e colocá-los dentro de uma div
function App() {
  return (
    <div>
      <Titulo/>
      <Titulo/>
      <Titulo/>
    </div>
  )
}

//eu preciso exportar meu componente para que ele seja renderizado
export default App //essa é a exportação padrão (olhar a outra depois)


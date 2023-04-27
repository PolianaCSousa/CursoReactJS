
import Titulo from "./Titulo"  


function App() {
  return (
    <div>
      <Titulo cor="pink"/>
      <Titulo cor="grey"/>
      <Titulo/>
    </div>
  )
}

//eu preciso exportar meu componente para que ele seja renderizado
export default App //essa é a exportação padrão (olhar a outra depois)


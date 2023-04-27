import { BrowserRouter, Routes, Route } from "react-router-dom"; //é preciso importar esses componetes pra fazer o sistema de roteamento.
//Para criar as rotas usamos os tres componentes acima

import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

//eu preciso exportar meu componente para que ele seja renderizado
export default App //essa é a exportação padrão (olhar a outra depois)


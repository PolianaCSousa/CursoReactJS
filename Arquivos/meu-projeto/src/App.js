import './App.css';
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {

  //posso interpolar variáveis no código
  const name = 'Poliana'

  //posso interpolar funções também
  function somar(a, b){
    return(a+b)
  }

  return (
    <div className="App">     
        <Frase/>
        <h1>Aprendendo React!</h1>
        <p>Bem vindo(a) {name}!</p>
        <p>Somando sem função - Soma: {1+1}</p>
        <p>Somando com função - Soma: {somar(1,1)}</p>
        <HelloWorld/>
    </div>
  );
}

export default App;

import './App.css';
import './components/HelloWorld';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">   
        <Frase/>
        <HelloWorld/>
        <Pessoa nome="Poliana" idade="23" profissao="Estudante"/>
        <List/>
    </div>
  );
}

export default App;

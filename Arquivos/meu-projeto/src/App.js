import './App.css';
import './components/HelloWorld';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './Pessoa';

function App() {

  return (
    <div className="App">     
        <HelloWorld/>
        <SayMyName nome="Poli" idade="23"/>
        <SayMyName nome="Lele" idade="24"/>
        <Pessoa nome="Poliana" idade="23" profissao="Estudante"/>
    </div>
  );
}

export default App;
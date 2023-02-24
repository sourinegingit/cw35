import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Todos from './component/todos';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Todos/>
    </div>
  );
}

export default App;

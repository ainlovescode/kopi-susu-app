import logo from '../logo.png';
import './App.css';
import Form from '../Form/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Controller from './components/Controller.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HangMan
        </a>
      </header>


      <Controller 
        //where property {options} will go in 'label={javascriptVariable}'
      />

    </div>
  );
}

export default App;

// UI Components
import Nav from './components/Nav';

// Page Components
import About from './pages/About';
import IStock from './pages/IStock';
import Stocks from './pages/Stocks';

// Data Component
import stocks from './data';

// Library Components
import logo from './logo.svg';

// Style Components
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

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

// Route
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <IStock/>
      </Route>
      <Route  path="/about">
        <About />
      </Route>
      <Route  path="/stocks">
        <Stocks/>
      </Route>
      {/* <Route  path="/stocks/:symbol">
        <Stocks/>
      </Route> */}
    </div>
  );
}

export default App;

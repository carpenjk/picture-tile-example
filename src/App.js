import logo from './logo.svg';
import './App.css';
import PopupModal from '../base/PopupModal';
import { useRef } from 'react';


function App() {
  const scrollRef = useRef();
  return (
    <div className="App">
      <header ref={scrollRef} className="App-header">
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
          <PopupModal isOpen={true} scrollNode={scrollRef} lockScroll />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

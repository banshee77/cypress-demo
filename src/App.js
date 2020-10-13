import React from 'react';
import logo from './logo.svg';
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
        <body>
          <main>
            <form>
              <div>
                <label for="name">Name</label>
                <input type="name" required name="name" id="name" />
              </div>
              <div>
                <label for="email">Email</label>
                <input type="email" required name="email" id="email" />
              </div>
              <div>
                <label for="message">Your message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div>
                <button type="submit">SEND</button>
              </div>
            </form>
          </main>
        </body>
      </header>
      <script src="form.js"></script>
    </div>
    
  );
}

export default App;

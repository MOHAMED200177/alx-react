import logo from './logo.ico';
import './App.css';
import React from 'react';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>email:</label>
          <input type='email' id='email' name='email' required />
          <label htmlFor='password'>password:</label>
          <input type='password' id='password' name='password' required />
          <button type='submit'>OK</button>
        </form>
      </div>
      <footer className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div >
  );
}
console.log(logo);
export default App;

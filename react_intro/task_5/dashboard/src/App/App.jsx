import React from 'react';
import '../App/App.css';
import logo from '../assets/holberton-logo.jpg';
import Notifications from '../Notifications/Notifications';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="holberton logo" />
          <h1>School dashboard</h1>
        </header>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
        <footer className="App-footer">
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    </>
  );
}

export default App;

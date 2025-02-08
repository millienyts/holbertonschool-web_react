import React from 'react';
import AppContext from '../Context/context';
import './Header.css';

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header className="App-header">
        <img src="logo.svg" alt="Holberton School logo" />
        <h1>Welcome to Holberton School</h1>
        {user.isLoggedIn && (
          <div id="logoutSection">
            <p>
              Welcome {user.email} 
              <a href="#" onClick={logOut}> (logout) </a>
            </p>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
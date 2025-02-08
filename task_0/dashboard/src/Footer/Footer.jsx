import React from 'react';
import './Footer.css';

function getFooterCopy(isIndex) {
  return isIndex
    ? `Copyright ${new Date().getFullYear()} - Holberton School`
    : 'Holberton School';
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>{getFooterCopy(true)}</p>
    </footer>
  );
}

export default Footer;
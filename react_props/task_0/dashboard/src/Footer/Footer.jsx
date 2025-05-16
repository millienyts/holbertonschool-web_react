import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} - Holberton School</p>
    </footer>
  );
}

export default Footer;

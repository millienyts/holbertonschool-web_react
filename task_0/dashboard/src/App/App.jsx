import React, { Fragment } from 'react';
import Notifications from '../Notifications/Notifications'; // Asegúrate de tener este componente (puede ser vacío en Task 0)
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
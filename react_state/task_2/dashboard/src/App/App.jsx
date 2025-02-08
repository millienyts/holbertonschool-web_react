import React, { Component, Fragment } from 'react';
import AppContext from '../Context/context';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => this.logOut(),
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  }

  logOut() {
    this.setState({
      user: { email: '', password: '', isLoggedIn: false },
    });
  }

  render() {
    const { user } = this.state;
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <Fragment>
          <Notifications 
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          {user.isLoggedIn ? (
            <div>CourseList</div>
          ) : (
            <Login logIn={this.logIn} email={user.email} password={user.password} />
          )}
          <Footer />
        </Fragment>
      </AppContext.Provider>
    );
  }
}

export default App;
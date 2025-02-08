import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends Component {
  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <div className="Notifications-container">
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button 
              style={{ float: 'right' }} 
              aria-label="Close" 
              onClick={handleHideDrawer}
            >
              X
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <li data-notification-type="default">New course available</li>
              <li data-notification-type="urgent">New resume available</li>
              <li data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: '<strong>Urgent requirement</strong>' }}></li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
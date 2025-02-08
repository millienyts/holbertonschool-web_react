import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ notifications }) {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.length === 0 ? (
          <NotificationItem value="No course available yet" />
        ) : (
          notifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              type={notif.type}
              value={notif.value}
              html={notif.html}
            />
          ))
        )}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;
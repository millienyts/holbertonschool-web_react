import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead }) {
  return (
    <li
      data-notification-type={type}
      style={{ color: type === 'urgent' ? 'red' : 'blue' }}
      onClick={markAsRead}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {!html && value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
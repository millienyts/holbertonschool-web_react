import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notification: {
    padding: '10px 8px',
    fontSize: '20px',
    borderBottom: '1px solid #ccc',
  },
  urgent: {
    backgroundColor: '#ff0000',
  },
  default: {
    backgroundColor: '#ffffff',
  },
});

function NotificationItem({ type, value }) {
  return (
    <li className={css(styles.notification, type === 'urgent' ? styles.urgent : styles.default)}>
      {value}
    </li>
  );
}

export default NotificationItem;
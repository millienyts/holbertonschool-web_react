import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('siempre debe mostrar "Your notifications"', () => {
    render(<Notifications />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
  });

  test('no muestra los detalles de notificaciones cuando displayDrawer es false', () => {
    render(<Notifications displayDrawer={false} notifications={[]} />);
    expect(screen.queryByText(/Here is the list of notifications/i)).toBeNull();
    expect(screen.queryByRole('button', { name: /Close/i })).toBeNull();
  });

  test('muestra los detalles cuando displayDrawer es true y hay notificaciones', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notificación 1' },
      { id: 2, type: 'urgent', value: 'Notificación 2' },
    ];
    render(<Notifications displayDrawer={true} notifications={notifications} />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();
    expect(screen.getByText(/Notificación 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Notificación 2/i)).toBeInTheDocument();
  });

  test('muestra "No new notification for now" cuando displayDrawer es true y no hay notificaciones', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
  });
});
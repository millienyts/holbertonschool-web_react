import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('debe renderizar las notificaciones cuando se le proporcionan', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notificación 1' },
      { id: 2, type: 'urgent', value: 'Notificación 2' },
      { id: 3, type: 'default', html: { __html: '<strong>Notificación 3</strong>' } },
    ];
    render(<Notifications notifications={notifications} />);
    expect(screen.getByText('Notificación 1')).toBeInTheDocument();
    expect(screen.getByText('Notificación 2')).toBeInTheDocument();
    expect(screen.getByText('Notificación 3')).toBeInTheDocument();
  });

  test('debe renderizar "No course available yet" cuando no hay notificaciones', () => {
    render(<Notifications notifications={[]} />);
    expect(screen.getByText(/No course available yet/i)).toBeInTheDocument();
  });
});
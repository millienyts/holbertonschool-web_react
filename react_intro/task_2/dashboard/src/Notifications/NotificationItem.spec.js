import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  test('debe renderizar con color azul y tipo "default" si no se especifica otro', () => {
    const { container } = render(<NotificationItem value="Notificación de prueba" />);
    const li = container.querySelector('li');
    expect(li).toHaveStyle('color: blue');
    expect(li.getAttribute('data-notification-type')).toBe('default');
    expect(li.textContent).toBe('Notificación de prueba');
  });

  test('debe renderizar con color rojo y tipo "urgent" cuando se indique', () => {
    const { container } = render(<NotificationItem type="urgent" value="Notificación urgente" />);
    const li = container.querySelector('li');
    expect(li).toHaveStyle('color: red');
    expect(li.getAttribute('data-notification-type')).toBe('urgent');
  });
});
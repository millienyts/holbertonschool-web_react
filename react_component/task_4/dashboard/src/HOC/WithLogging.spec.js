import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

afterEach(cleanup);

test('HOC logs when a component is mounted and unmounted', () => {
  const MockComponent = () => <div>Hello from Mock Component</div>;

  // Espiar el console.log
  console.log = jest.fn();

  const WrappedComponent = WithLogging(MockComponent);

  // Renderizamos el componente envuelto en el HOC
  const { unmount } = render(<WrappedComponent />);

  // Comprobamos que los logs han sido llamados
  expect(console.log).toHaveBeenCalledWith('Component MockComponent is mounted');

  // Desmontamos el componente
  unmount();

  // Verificamos que el componente también ha sido desmontado
  expect(console.log).toHaveBeenCalledWith('Component MockComponent is going to unmount');
});

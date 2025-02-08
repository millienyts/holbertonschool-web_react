import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the header component', () => {
  const { getByAltText, getByText } = render(<Header />);
  
  // Verificar si el logo de Holberton se muestra
  expect(getByAltText(/holberton logo/i)).toBeInTheDocument();
  
  // Verificar si el encabezado h1 contiene el texto correcto
  expect(getByText(/Welcome to Holberton/i)).toBeInTheDocument();
});
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('debe renderizar el logo de Holberton', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText(/Holberton School logo/i)).toBeInTheDocument();
  });

  test('debe renderizar el h1 con el texto correcto', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('heading', { level: 1 })).toHaveTextContent(/Welcome to Holberton School/i);
  });
});
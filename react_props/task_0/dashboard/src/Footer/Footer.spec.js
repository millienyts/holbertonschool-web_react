import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders the footer with the correct text', () => {
  const { getByText } = render(<Footer />);
  
  // Verificar que el texto de Copyright esté en el pie de página
  expect(getByText(/Copyright 2025 - Holberton School/i)).toBeInTheDocument();
});
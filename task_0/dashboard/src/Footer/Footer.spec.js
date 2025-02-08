import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('debe renderizar el texto de Copyright con el año actual', () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(getByText(`Copyright ${currentYear} - Holberton School`)).toBeInTheDocument();
  });
});
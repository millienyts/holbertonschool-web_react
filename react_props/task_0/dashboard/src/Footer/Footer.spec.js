import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('Footer renders correctly', () => {
  const year = new Date().getFullYear();
  const { getByText } = render(<Footer />);
  expect(getByText(`© ${year} - Holberton School`)).toBeInTheDocument();
});

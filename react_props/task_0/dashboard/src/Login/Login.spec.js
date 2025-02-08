import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders the login form', () => {
  const { getByLabelText, getByText } = render(<Login />);
  
  // Verificar que el formulario tenga los elementos correctos
  expect(getByLabelText(/Email:/i)).toBeInTheDocument();
  expect(getByLabelText(/Password:/i)).toBeInTheDocument();
  expect(getByText(/Login/i)).toBeInTheDocument();
});
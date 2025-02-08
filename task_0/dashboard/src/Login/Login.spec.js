import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('debe tener 2 etiquetas, 2 inputs y 1 botón', () => {
    const { getByLabelText, getByRole } = render(<Login />);
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
    // Aunque el input de tipo password no tenga role "textbox", se pueden verificar con los labels
    expect(getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  test('los inputs deben recibir foco cuando se hace clic en la etiqueta', () => {
    const { getByLabelText } = render(<Login />);
    const emailLabel = getByLabelText(/Email/i);
    // Simulamos clic en la etiqueta (esto debería enfocar el input asociado en el navegador real)
    emailLabel.click();
    expect(document.activeElement.id).toBe('email');
  });
});
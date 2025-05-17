import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders School dashboard heading', () => {
    render(<App />);
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  });

  test('renders Login section text', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test('renders footer text with current year', () => {
    render(<App />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`Copyright ${year} - Holberton School`)).toBeInTheDocument();
  });

  test('renders the holberton logo image', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThanOrEqual(1); // email is textbox
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders labels for email and password', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders OK button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});

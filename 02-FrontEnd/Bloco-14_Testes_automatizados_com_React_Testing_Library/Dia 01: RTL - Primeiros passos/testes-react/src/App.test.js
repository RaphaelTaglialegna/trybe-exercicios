import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('1-Verify email label', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});
// This test we use when we want to get one element, in this case button, but don't work when we have two elements. 
// test('2-Verify if exist a button', () => {
//   render(<App />);
//   const button = screen.getByRole('button');
//   expect(button).toBeInTheDocument();
// });

test('2-Verify if exist two buttons', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('3-Verify if exist a button send', () => {
  render(<App />);
  const buttonSend = screen.getByTestId('id-send');
  expect(buttonSend).toBeInTheDocument();
  expect(buttonSend).toHaveProperty('type', 'button');
  expect(buttonSend).toHaveValue('Enviar');
});

test('4-Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});
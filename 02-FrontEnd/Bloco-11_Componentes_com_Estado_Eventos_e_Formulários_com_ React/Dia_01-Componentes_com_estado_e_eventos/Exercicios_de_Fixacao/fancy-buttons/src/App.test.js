import { render, screen } from '@testing-library/react';
import App from './App';
import ButtonOne from './componets/ButtonOne';
import ButtonTwo from './componets/ButtonTwo';
import ButtonThree from './componets/ButtonThree';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

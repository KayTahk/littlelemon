import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from './components/Reservations';

test('Renders the Reservations heading', () => {
  render(<Reservations availableTimes={[]} />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns expected value', () => {
});

test('updateTimes function returns the same value that is provided in the state', () => {
});

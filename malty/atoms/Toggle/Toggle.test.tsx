import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Toggle } from './Toggle';

describe('toggle', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Toggle label="Label text" checked={false} onValueChange={() => null} />);
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    const mockFn = jest.fn();
    render(<Toggle label="Label text" error="Error text" checked onValueChange={mockFn} />);
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const mockFn = jest.fn();
    render(<Toggle label="Label text" error="Error text" checked onValueChange={mockFn} />);
    const toggle = screen.getByLabelText('Label text');
    fireEvent.click(toggle);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

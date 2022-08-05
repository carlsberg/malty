import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Checkbox } from './Checkbox';

describe('checkbox', () => {
  it('renders elements', () => {
    const mockFn = jest.fn();
    render(<Checkbox labelText="Label text" error="Error text" value="Test value" onValueChange={mockFn} checked />);
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const mockFn = jest.fn();
    render(<Checkbox labelText="Label text" error="Error text" value="Test value" onValueChange={mockFn} checked />);
    const checkbox = screen.getByDisplayValue('Test value');
    fireEvent.click(checkbox);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

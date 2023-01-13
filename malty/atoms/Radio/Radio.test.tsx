import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Radio } from './Radio';

describe('radio', () => {
  it('renders elements', () => {
    const mockFn = jest.fn();
    render(
      <Radio name="radio" label="Label text" error="Error text" value="Test value" onValueChange={mockFn} selected />
    );
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const mockFn = jest.fn();
    render(<Radio label="Label text" error="Error text" value="Test value" onValueChange={mockFn} name="radio" />);
    const radio = screen.getByDisplayValue('Test value');
    fireEvent.click(radio);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

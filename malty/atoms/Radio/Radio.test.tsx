import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Radio } from './Radio';

describe('radio', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <Radio name="radio" labelText="Label text" value="test" onValueChange={() => null} selected />
    );
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    const mockFn = jest.fn();
    render(
      <Radio
        name="radio"
        labelText="Label text"
        error="Error text"
        value="Test value"
        onValueChange={mockFn}
        selected
      />
    );
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const mockFn = jest.fn();
    render(<Radio labelText="Label text" error="Error text" value="Test value" onValueChange={mockFn} name="radio" />);
    const radio = screen.getByDisplayValue('Test value');
    fireEvent.click(radio);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

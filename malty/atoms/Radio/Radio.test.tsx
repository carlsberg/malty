import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Radio } from './Radio';

describe('radio', () => {
  it('should render elements', () => {
    const mockFn = jest.fn();
    render(
      <Radio name="radio" label="Label text" error="Error text" value="Test value" onValueChange={mockFn} selected />
    );
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
  });

  it('should call function on click', () => {
    const mockFn = jest.fn();
    render(<Radio label="Label text" error="Error text" value="Test value" onValueChange={mockFn} name="radio" />);
    const radio = screen.getByDisplayValue('Test value');
    userEvent.click(radio);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    const mockFn = jest.fn();

    render(
      <Radio label="Label text" error="Error text" value="Test value" onValueChange={mockFn} name="radio" disabled />
    );
    const radio = screen.getByDisplayValue('Test value');

    userEvent.click(radio, undefined, { skipPointerEventsCheck: true });

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(radio).toBeDisabled();
  });

  it('should have the correct data test id', () => {
    const mockFn = jest.fn();

    render(
      <Radio dataTestId="radio" label="Label text" value="Test value" onValueChange={mockFn} name="radio" disabled />
    );

    expect(screen.getByTestId('radio')).toBeInTheDocument();
  });
});

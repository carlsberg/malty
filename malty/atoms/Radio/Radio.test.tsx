import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Radio } from './Radio';
import { RadioProps } from './Radio.types';

describe('radio', () => {
  const mockFn = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  const props: RadioProps = {
    label: 'Label text',
    value: 'Test value',
    onValueChange: mockFn,
    name: 'radio'
  };

  it('should render elements', () => {
    render(<Radio {...props} error="Error text" selected />);

    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
  });

  it('should call function on click', () => {
    render(<Radio {...props} error="Error text" />);

    const radio = screen.getByDisplayValue('Test value');
    userEvent.click(radio);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(<Radio {...props} error="Error text" disabled />);
    const radio = screen.getByDisplayValue('Test value');

    userEvent.click(radio, undefined, { skipPointerEventsCheck: true });

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(radio).toBeDisabled();
  });

  it('should have the correct data test id', () => {
    render(<Radio {...props} dataTestId="radio" />);

    expect(screen.getByTestId('radio')).toBeInTheDocument();
  });
});

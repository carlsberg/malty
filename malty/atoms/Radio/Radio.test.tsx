import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Radio } from './Radio';
import { RadioProps } from './Radio.types';

const props: RadioProps = {
  label: 'Label text',
  value: 'Test value',
  onValueChange: jest.fn(),
  name: 'radio',
  dataTestId: 'radio',
  error: 'Error text'
};

describe('radio', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render elements', () => {
    render(<Radio {...props} selected />);

    expect(screen.getByLabelText(props.label)).toBeInTheDocument();
    expect(screen.getByText(props.error as string)).toBeInTheDocument();
    expect(screen.getByDisplayValue(props.value)).toBeInTheDocument();
  });

  it('should call function on click', () => {
    render(<Radio {...props} />);

    const radio = screen.getByDisplayValue(props.value);
    userEvent.click(radio);

    expect(props.onValueChange).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(<Radio {...props} disabled />);

    const radio = screen.getByDisplayValue(props.value);
    userEvent.click(radio, undefined, { skipPointerEventsCheck: true });

    expect(props.onValueChange).toHaveBeenCalledTimes(0);
    expect(radio).toBeDisabled();
  });

  it('should be readOnly', () => {
    render(<Radio {...props} readOnly />);

    const radio = screen.getByDisplayValue(props.value);
    userEvent.click(radio);

    expect(props.onValueChange).toHaveBeenCalledTimes(0);
    expect(radio).toHaveAttribute('readonly');
  });

  it('should have the correct data test id', () => {
    render(<Radio {...props} />);

    expect(screen.getByTestId(props.dataTestId as string)).toBeInTheDocument();
  });
});

import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

describe('Checkbox', () => {
  const handleValueChange = jest.fn();
  const props: CheckboxProps = {
    id: 'checkbox',
    labelText: 'Checkbox label',
    value: 'Checkbox value',
    onValueChange: handleValueChange,
    dataTestId: 'checkbox'
  };

  test('renders correctly', () => {
    render(<Checkbox {...props} />);

    expect(screen.getByText('Checkbox label')).toBeVisible();
    expect(screen.getByLabelText('Checkbox label')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox')).not.toBeChecked();
    expect(screen.getByDisplayValue('Checkbox value')).toBeInTheDocument();
  });

  test('handles onValueChange correctly', () => {
    render(<Checkbox {...props} />);

    const checkboxInput = screen.getByTestId('checkbox');

    fireEvent.click(checkboxInput);

    expect(handleValueChange).toHaveBeenCalledTimes(1);
  });

  test('displays error message when error prop is provided', () => {
    render(<Checkbox {...props} error="Error message" />);

    expect(screen.getByText('Error message')).toBeVisible();
  });

  test('renders as disabled when disabled prop is true', () => {
    render(<Checkbox {...props} disabled />);

    expect(screen.getByLabelText('Checkbox label')).toBeDisabled();
  });

  test('renders as readonly and disables input when readOnly prop is true', () => {
    render(<Checkbox {...props} readOnly />);

    expect(screen.getByLabelText('Checkbox label')).toBeDisabled();
  });

  test('only displays checkbox when labelText prop is not passed', () => {
    render(<Checkbox {...props} labelText={undefined} />);

    expect(screen.queryByText('Checkbox label')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Checkbox label')).not.toBeInTheDocument();
  });
});

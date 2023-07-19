import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
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

  it('renders correctly', () => {
    render(<Checkbox {...props} />);

    expect(screen.getByText('Checkbox label')).toBeVisible();
    expect(screen.getByLabelText('Checkbox label')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox')).not.toBeChecked();
    expect(screen.getByDisplayValue('Checkbox value')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
  });

  it('handles onValueChange correctly', () => {
    render(<Checkbox {...props} />);

    const checkboxInput = screen.getByRole('checkbox', { hidden: true });

    userEvent.click(checkboxInput);

    expect(handleValueChange).toHaveBeenCalledTimes(1);
  });

  it('displays error message when error prop is provided', () => {
    render(<Checkbox {...props} error="Error message" />);

    expect(screen.getByText('Error message')).toBeVisible();
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Checkbox {...props} disabled />);

    expect(screen.getByLabelText('Checkbox label')).toBeDisabled();
  });

  it('renders as readonly and disables input when readOnly prop is true', () => {
    render(<Checkbox {...props} readOnly />);

    expect(screen.getByLabelText('Checkbox label')).toBeDisabled();
  });

  it('only displays checkbox when labelText prop is not passed', () => {
    render(<Checkbox {...props} labelText={undefined} />);

    expect(screen.queryByText('Checkbox label')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Checkbox label')).not.toBeInTheDocument();
  });

  it('renders checkbox unchecked by default and evaluates if it checks after being clicked', () => {
    const CheckBoxComponent = () => {
      const [isChecked, setIsChecked] = useState(false);

      return <Checkbox {...props} onValueChange={() => setIsChecked(!isChecked)} checked={isChecked} />;
    };

    render(<CheckBoxComponent />);
    const checkboxInput = screen.getByRole('checkbox', { hidden: true });

    expect(screen.getByTestId('icon-CheckboxEmpty')).toBeVisible();
    expect(checkboxInput).not.toBeChecked();

    userEvent.click(checkboxInput);

    expect(checkboxInput).toBeChecked();
    expect(screen.getByTestId('icon-CheckboxCheck')).toBeVisible();
  });
});

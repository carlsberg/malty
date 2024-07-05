import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

const props: CheckboxProps = {
  id: 'checkbox',
  labelText: 'Checkbox label',
  value: 'Checkbox value',
  onValueChange: jest.fn(),
  dataTestId: 'checkbox'
};

describe('Checkbox', () => {
  it('should render correctly', () => {
    render(<Checkbox {...props} />);

    expect(screen.getByText('Checkbox label')).toBeVisible();
    expect(screen.getByLabelText('Checkbox label')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox')).not.toBeChecked();
    expect(screen.getByDisplayValue('Checkbox value')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
  });

  it('should handle onValueChange correctly', () => {
    render(<Checkbox {...props} />);

    const checkboxInput = screen.getByRole('checkbox', { hidden: true });

    userEvent.click(checkboxInput);

    expect(props.onValueChange).toHaveBeenCalledTimes(1);
  });

  it('should display error message when error prop is provided', () => {
    render(<Checkbox {...props} error="Error message" />);

    expect(screen.getByText('Error message')).toBeVisible();
  });

  it('should render as disabled when disabled prop is true', () => {
    render(<Checkbox {...props} disabled />);

    expect(screen.getByLabelText('Checkbox label')).toBeDisabled();
  });

  it('should render as readonly and disables input when readOnly prop is true', () => {
    render(<Checkbox {...props} readOnly />);

    expect(screen.getByLabelText('Checkbox label')).toBeDisabled();
  });

  it('should only display checkbox when labelText prop is not passed', () => {
    render(<Checkbox {...props} labelText={undefined} />);

    expect(screen.queryByText('Checkbox label')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Checkbox label')).not.toBeInTheDocument();
  });

  it('should render checkbox unchecked by default and evaluates if it checks after being clicked', () => {
    const CheckBoxComponent = () => {
      const [isChecked, setIsChecked] = useState(false);

      return <Checkbox {...props} onValueChange={() => setIsChecked(!isChecked)} checked={isChecked} />;
    };

    render(<CheckBoxComponent />);
    const checkboxInput = screen.getByRole('checkbox', { hidden: true });

    expect(screen.getByTestId('checkbox-empty-icon')).toBeVisible();
    expect(checkboxInput).not.toBeChecked();

    userEvent.click(checkboxInput);

    expect(checkboxInput).toBeChecked();
    expect(screen.getByTestId('checkbox-check-icon')).toBeVisible();
  });

  it('should render indeterminate checkbox icon', () => {
    render(<Checkbox {...props} isIndeterminate />);

    expect(screen.getByTestId('checkbox-check-alternate-icon')).toBeVisible();
  });
});

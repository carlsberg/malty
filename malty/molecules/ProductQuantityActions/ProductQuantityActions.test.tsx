import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ProductQuantityActions } from './ProductQuantityActions';

const initialQuantityValue = 2;
const stock = { label: 'In Stock', stockColor: TextColor.Success };
const action = {
  color: ButtonColor.DigitalBlack,
  label: 'Add to cart',
  onClick: () => null,
  variant: ButtonStyle.Primary
};

describe('ProductQuantityActions', () => {
  test('renders with correct content', () => {
    render(<ProductQuantityActions initialQuantityValue={initialQuantityValue} stock={stock} action={action} />);
    expect(screen.getByTestId('default-quantity-minus')).toBeInTheDocument();
    expect(screen.getByTestId('default-quantity-plus')).toBeInTheDocument();
    expect(screen.getByDisplayValue(initialQuantityValue)).toBeInTheDocument();
    expect(screen.getByText('In Stock')).toBeInTheDocument();
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  test('renders correctly if no optional prop is passed', () => {
    render(<ProductQuantityActions />);
    expect(screen.getByTestId('default-quantity-minus')).toBeInTheDocument();
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    expect(screen.getByTestId('default-quantity-plus')).toBeInTheDocument();
    expect(screen.queryByText('In Stock')).not.toBeInTheDocument();
    expect(screen.getByTestId('icon-Cart')).toBeInTheDocument();
  });

  test('renders with correct content when hideQuantityInput is true', () => {
    render(<ProductQuantityActions hideQuantityInput />);
    expect(screen.queryByTestId('default-quantity-minus')).not.toBeInTheDocument();
    expect(screen.queryByTestId('default-quantity-plus')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('0')).not.toBeInTheDocument();
  });

  test('renders correctly when maxQuantity is set', () => {
    render(<ProductQuantityActions maxQuantity={1} />);
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    const increaseButton = screen.getByTestId('default-quantity-plus');
    expect(increaseButton).toBeEnabled();
    userEvent.click(increaseButton);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(increaseButton).toBeDisabled();
    userEvent.click(increaseButton);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });
});

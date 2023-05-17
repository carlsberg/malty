import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ProductQuantityActions } from './ProductQuantityActions';

const initialQuantityValue = 2;

describe('ProductQuantityActions', () => {
  test('renders with correct content', () => {
    render(<ProductQuantityActions initialQuantityValue={initialQuantityValue} />);
    expect(screen.getByTestId('default-quantity-minus')).toBeInTheDocument();
    expect(screen.getByTestId('default-quantity-plus')).toBeInTheDocument();
    expect(screen.getByDisplayValue(initialQuantityValue)).toBeInTheDocument();
    //
  });

  test('renders with correct content when hideQuantityInput is true', () => {
    render(<ProductQuantityActions initialQuantityValue={initialQuantityValue} hideQuantityInput />);
    expect(screen.queryByTestId('default-quantity-minus')).not.toBeInTheDocument();
    expect(screen.queryByTestId('default-quantity-plus')).not.toBeInTheDocument();
    expect(screen.queryByText(initialQuantityValue)).not.toBeInTheDocument();
  });

  test('renders correctly when maxQuantity is set', () => {
    render(<ProductQuantityActions maxQuantity={1} />);
    const increaseButton = screen.getByTestId('default-quantity-plus');
    expect(increaseButton).toBeEnabled();
    userEvent.click(increaseButton);
    expect(increaseButton).toBeDisabled();
  });
});

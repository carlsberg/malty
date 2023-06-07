import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ProductQuantityActions } from './ProductQuantityActions';

const defaultValue = 2;
const stock = { label: 'In Stock', stockColor: TextColor.Success };
const action = {
  color: ButtonColor.DigitalBlack,
  label: 'Add to cart',
  onClick: () => null,
  variant: ButtonStyle.Primary
};
const onInputQuantityChange = jest.fn();

describe('ProductQuantityActions', () => {
  test('renders with correct content', () => {
    render(<ProductQuantityActions value={defaultValue} stock={stock} action={action} />);

    expect(screen.getByTestId('default-quantity-minus')).toBeInTheDocument();
    expect(screen.getByTestId('default-quantity-plus')).toBeInTheDocument();
    expect(screen.getByDisplayValue(defaultValue)).toBeInTheDocument();
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

  test('calls onInputQuantityChange correctly', () => {
    render(<ProductQuantityActions onInputQuantityChange={onInputQuantityChange} />);

    const increaseButton = screen.getByTestId('default-quantity-plus');
    userEvent.click(increaseButton);
    expect(onInputQuantityChange).toHaveBeenCalledTimes(1);
  });

  test('renders with correct content when hideQuantityInput is true', () => {
    render(<ProductQuantityActions shouldHide />);

    expect(screen.queryByTestId('default-quantity-minus')).not.toBeInTheDocument();
    expect(screen.queryByTestId('default-quantity-plus')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('0')).not.toBeInTheDocument();
  });

  test('renders correctly when maxQuantity is set', () => {
    const ProductQuantityActionsControlled = () => {
      const [value, setValue] = React.useState(0);
      return <ProductQuantityActions value={value} maxQuantity={1} onInputQuantityChange={setValue} />;
    };

    render(<ProductQuantityActionsControlled />);

    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    const increaseButton = screen.getByTestId('default-quantity-plus');
    expect(increaseButton).toBeEnabled();
    userEvent.click(increaseButton);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(increaseButton).toBeDisabled();
    userEvent.click(increaseButton);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });

  test('renders correctly when value is changed after initial render', () => {
    const { rerender } = render(<ProductQuantityActions value={defaultValue} />);

    expect(screen.getByDisplayValue(defaultValue)).toBeInTheDocument();

    rerender(<ProductQuantityActions value={10} />);

    expect(screen.queryByDisplayValue(defaultValue)).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });
});

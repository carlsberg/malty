import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { ProductQuantityActions } from './ProductQuantityActions';
import { ActionButton, ActionQuantityInput } from './ProductQuantityActions.types';

const stock = { label: 'In Stock', stockColor: TextColor.Success };
const actionButton: ActionButton = {
  color: ButtonColor.DigitalBlack,
  text: 'Add to cart',
  onClick: jest.fn(),
  style: ButtonStyle.Primary
};
const actionQuantityInput: ActionQuantityInput = {
  value: '2',
  onValueChange: jest.fn()
};

describe('ProductQuantityActions', () => {
  test('renders with correct content', () => {
    render(
      <ProductQuantityActions actionButton={actionButton} actionQuantityInput={actionQuantityInput} stock={stock} />
    );

    expect(screen.getByTestId('default-quantity-minus')).toBeInTheDocument();
    expect(screen.getByTestId('default-quantity-plus')).toBeInTheDocument();
    expect(screen.getByDisplayValue(actionQuantityInput.value)).toBeInTheDocument();
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
    render(<ProductQuantityActions actionQuantityInput={actionQuantityInput} />);

    const increaseButton = screen.getByTestId('default-quantity-plus');
    userEvent.click(increaseButton);
    expect(actionQuantityInput.onValueChange).toHaveBeenCalledTimes(1);
  });

  test('renders with correct content when hideQuantityInput is true', () => {
    render(<ProductQuantityActions hideQuantityInput />);

    expect(screen.queryByTestId('default-quantity-minus')).not.toBeInTheDocument();
    expect(screen.queryByTestId('default-quantity-plus')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('0')).not.toBeInTheDocument();
  });

  test('renders correctly when input quantity max is set', () => {
    const ProductQuantityActionsControlled = () => {
      const [value, setValue] = React.useState('0');
      return (
        <ProductQuantityActions
          actionButton={actionButton}
          actionQuantityInput={{ value, onValueChange: setValue, max: 1 }}
        />
      );
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
    const { rerender } = render(<ProductQuantityActions actionQuantityInput={actionQuantityInput} />);

    expect(screen.getByDisplayValue(actionQuantityInput.value)).toBeInTheDocument();

    rerender(<ProductQuantityActions actionQuantityInput={{ ...actionQuantityInput, value: '10' }} />);

    expect(screen.queryByDisplayValue(actionQuantityInput.value)).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });
});

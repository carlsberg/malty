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
    render(<ProductQuantityActions actionButton={actionButton} />);

    expect(screen.queryByText('In Stock')).not.toBeInTheDocument();

    // TODO: check if we can get rid of this fallback
    expect(screen.getByText(actionButton.text ?? '')).toBeInTheDocument();
  });

  test('calls onInputQuantityChange correctly', () => {
    render(<ProductQuantityActions actionButton={actionButton} actionQuantityInput={actionQuantityInput} />);

    const increaseButton = screen.getByTestId('default-quantity-plus');
    userEvent.click(increaseButton);
    expect(actionQuantityInput.onValueChange).toHaveBeenCalledTimes(1);
  });

  test('renders with correct content when button is disabled', () => {
    render(<ProductQuantityActions actionButton={{ ...actionButton, disabled: true }} />);
    expect(screen.getByTestId('default-button')).toBeDisabled();
  });

  test('renders with correct content when button is loading', () => {
    render(<ProductQuantityActions actionButton={{ ...actionButton, loading: true }} />);
    expect(screen.getByTestId('default-button-loading')).toBeInTheDocument();
  });

  test('renders with correct content when input quantity is readonly', () => {
    render(
      <ProductQuantityActions
        actionButton={actionButton}
        actionQuantityInput={{ ...actionQuantityInput, readOnly: true }}
      />
    );
    expect(screen.getByTestId('default')).toHaveAttribute('readonly');
  });

  test('renders correctly when input quantity min and max is set', () => {
    const ProductQuantityActionsControlled = () => {
      const [value, setValue] = React.useState('0');
      return (
        <ProductQuantityActions
          actionButton={actionButton}
          actionQuantityInput={{ value, onValueChange: setValue, min: 0, max: 1 }}
        />
      );
    };

    render(<ProductQuantityActionsControlled />);

    const increaseButton = screen.getByTestId('default-quantity-plus');
    const decreaseButton = screen.getByTestId('default-quantity-minus');

    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    expect(increaseButton).toBeEnabled();
    expect(decreaseButton).toBeDisabled();
    userEvent.click(decreaseButton);
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    userEvent.click(increaseButton);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(increaseButton).toBeDisabled();
    expect(decreaseButton).toBeEnabled();
    userEvent.click(increaseButton);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    userEvent.click(decreaseButton);
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });

  test('renders correctly when value is changed after initial render', () => {
    const { rerender } = render(
      <ProductQuantityActions actionButton={actionButton} actionQuantityInput={actionQuantityInput} />
    );

    expect(screen.getByDisplayValue(actionQuantityInput.value)).toBeInTheDocument();

    rerender(
      <ProductQuantityActions
        actionButton={actionButton}
        actionQuantityInput={{ ...actionQuantityInput, value: '10' }}
      />
    );

    expect(screen.queryByDisplayValue(actionQuantityInput.value)).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });
});

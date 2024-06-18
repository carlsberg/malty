import { ButtonColor, ButtonStyle } from '@carlsberggbs/malty.atoms.button';
import { TextColor } from '@carlsberggbs/malty.atoms.text';
import { render } from '@carlsberggbs/malty.utils.test';
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
const dataTestId = 'product-quantity-input';

describe('ProductQuantityActions', () => {
  it('should render with correct content', () => {
    render(
      <ProductQuantityActions actionButton={actionButton} actionQuantityInput={actionQuantityInput} stock={stock} />
    );

    expect(screen.getByTestId('default-quantity-minus')).toBeInTheDocument();
    expect(screen.getByTestId('default-quantity-plus')).toBeInTheDocument();
    expect(screen.getByDisplayValue(actionQuantityInput.value)).toBeInTheDocument();
    expect(screen.getByText('In Stock')).toBeInTheDocument();
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  it('should render correctly if no optional prop is passed', () => {
    render(<ProductQuantityActions actionButton={actionButton} />);

    expect(screen.queryByText('In Stock')).not.toBeInTheDocument();
    // TODO: check if we can get rid of this fallback
    expect(screen.getByText(actionButton.text ?? '')).toBeInTheDocument();
  });

  it('should call onInputQuantityChange correctly', () => {
    render(<ProductQuantityActions actionButton={actionButton} actionQuantityInput={actionQuantityInput} />);

    const increaseButton = screen.getByTestId('default-quantity-plus');

    userEvent.click(increaseButton);

    expect(actionQuantityInput.onValueChange).toHaveBeenCalledTimes(1);
  });

  it('should render with correct content when button is disabled', () => {
    render(<ProductQuantityActions actionButton={{ ...actionButton, disabled: true }} />);

    expect(screen.getByTestId('default-button')).toBeDisabled();
  });

  it('should render with correct content when button is loading', () => {
    render(<ProductQuantityActions actionButton={{ ...actionButton, loading: true }} />);

    expect(screen.getByTestId('default-button-loading')).toBeInTheDocument();
  });

  it('should render correctly when input quantity min and max is set', () => {
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

  it('should render correctly when value is changed after initial render', () => {
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

  it('should not display signs when readOnly', () => {
    render(
      <ProductQuantityActions
        actionQuantityInput={{ ...actionQuantityInput, readOnly: true }}
        dataTestId={dataTestId}
      />
    );

    expect(screen.queryByTestId(`${dataTestId}-quantity-plus`)).not.toBeInTheDocument();
    expect(screen.getByDisplayValue(actionQuantityInput.value)).toBeVisible();
    expect(screen.getByDisplayValue(actionQuantityInput.value)).toHaveAttribute('readonly');
    expect(screen.queryByTestId(`${dataTestId}-quantity-minus`)).not.toBeInTheDocument();
  });

  describe('Stock', () => {
    it('should render content correctly', () => {
      render(
        <ProductQuantityActions actionQuantityInput={actionQuantityInput} stock={stock} dataTestId={dataTestId} />
      );

      expect(screen.getByText(stock.label)).toBeVisible();
      expect(screen.getByTestId(`${dataTestId}-stock-info`)).toBeVisible();
      expect(screen.queryByTestId(`${dataTestId}-availability`)).not.toBeInTheDocument();
    });

    it('should not render info dot status', () => {
      render(
        <ProductQuantityActions
          actionQuantityInput={actionQuantityInput}
          stock={{ label: stock.label }}
          dataTestId={dataTestId}
        />
      );

      expect(screen.queryByTestId(`${dataTestId}-stock-info`)).not.toBeInTheDocument();
    });

    it('should render available text correctly', () => {
      const availability = 'Available: 12/03/2021';

      render(
        <ProductQuantityActions
          actionQuantityInput={actionQuantityInput}
          stock={{ ...stock, availability }}
          dataTestId={dataTestId}
        />
      );

      expect(screen.getByText(availability)).toBeVisible();
    });
  });
});

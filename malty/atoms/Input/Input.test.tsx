import { Cart } from '@carlsberggroup/malty.icons.cart';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Input } from './Input';
import { InputProps, InputType } from './Input.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('Input', () => {
  const onValueChange = jest.fn();
  const ControlledInput = ({ value: initialValue, ...props }: InputProps) => {
    const [value, setValue] = useState(initialValue);

    const handleValueChange = (newValue: string) => {
      setValue(newValue);
      onValueChange(newValue);
    };

    return <Input {...props} dataTestId="input" value={value} label="Input label" onValueChange={handleValueChange} />;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render elements', () => {
    render(
      <Input
        value="Value text"
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={InputType.Text}
        error="Error text"
      />
    );

    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Value text')).toBeInTheDocument();
  });

  it('should render cart icon', () => {
    render(
      <Input
        value="Value text"
        icon={<Cart />}
        onValueChange={mockFn}
        type={InputType.Text}
        error="Error text"
        dataTestId="input-cart"
      />
    );

    expect(screen.getByDisplayValue('Value text')).toBeInTheDocument();
    expect(screen.getByTestId('input-cart-icon')).toBeVisible();
  });

  it('should call onValueChange when typing', () => {
    const { rerender } = render(
      <Input value="Initial value" label="Input label" onValueChange={onValueChange} type={InputType.Text} />
    );
    const input = screen.getByDisplayValue('Initial value');
    fireEvent.input(input, { target: { value: 'Test Input' } });
    expect(onValueChange).toHaveBeenCalledTimes(1);

    rerender(<Input value="Test" label="Input label" onValueChange={onValueChange} type={InputType.Text} />);
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
  });

  it('should not change display value after a given input with readOnly option on', () => {
    render(<ControlledInput readOnly type={InputType.Text} value="Initial value" onValueChange={onValueChange} />);

    const input = screen.getByDisplayValue('Initial value');
    userEvent.type(input, 'Test Input');

    expect(onValueChange).not.toHaveBeenCalled();

    expect(screen.queryByDisplayValue('Test Input')).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('Initial value')).toBeInTheDocument();
  });

  it('should not allow to input value with disabled option active', () => {
    render(<ControlledInput value="Initial value" disabled type={InputType.Text} onValueChange={onValueChange} />);

    const input = screen.getByDisplayValue('Initial value');
    userEvent.type(input, 'Test Input');

    expect(onValueChange).not.toHaveBeenCalled();

    expect(screen.queryByDisplayValue('Test Input')).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('Initial value')).toBeInTheDocument();
  });

  it('should have an hint message showing', () => {
    render(
      <Input
        value="Initial value"
        label="Input label"
        dataTestId="Input"
        onValueChange={onValueChange}
        type={InputType.Text}
        hint="Type here!"
      />
    );

    expect(screen.getByTestId('Input-hint')).toHaveTextContent('Type here!');
  });

  it('should call onInputBlur when lose focus', () => {
    const onInputBlur = jest.fn();
    render(
      <Input
        value="Initial value"
        label="Input label"
        onValueChange={onValueChange}
        onInputBlur={onInputBlur}
        type={InputType.Text}
      />
    );
    const input = screen.getByDisplayValue('Initial value');
    fireEvent.blur(input, { target: { value: 'Test Input' } });
    expect(onInputBlur).toHaveBeenCalledTimes(1);
  });

  it('should render input number', () => {
    render(<Input value="1" label="Quantity" onValueChange={onValueChange} type={InputType.Number} />);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });

  it('should render input search', () => {
    render(<Input value="test search" label="Search" onValueChange={onValueChange} type={InputType.Search} />);
    expect(screen.getByDisplayValue('test search')).toBeInTheDocument();
  });

  it('should call clear function when clear icon is clicked', () => {
    const onClearButtonClick = jest.fn();
    render(
      <Input
        value="test search"
        label="Search"
        onValueChange={onValueChange}
        type={InputType.Search}
        dataTestId="input"
        onClearButtonClick={onClearButtonClick}
      />
    );

    const clearButton = screen.getByTestId(`input-clearable-icon`);
    fireEvent.click(clearButton);
    expect(onClearButtonClick).toHaveBeenCalledTimes(1);
  });

  describe(`Input type: ${InputType.Quantity}`, () => {
    it('should disable minus and plus buttons when value is equal to min and max', () => {
      const handleValueChange = jest.fn();

      render(
        <Input
          dataTestId="input"
          value="0"
          type={InputType.Quantity}
          onValueChange={handleValueChange}
          min={0}
          max={0}
        />
      );

      const minusButton = screen.getByTestId('input-quantity-minus');
      const plusButton = screen.getByTestId('input-quantity-plus');

      expect(minusButton).toBeDisabled();
      expect(plusButton).toBeDisabled();

      userEvent.click(minusButton);
      userEvent.click(plusButton);

      expect(handleValueChange).not.toHaveBeenCalled();
    });

    it('should disable minus button when value is lower than min', () => {
      const handleValueChange = jest.fn();

      render(
        <Input dataTestId="input" value="2" type={InputType.Quantity} onValueChange={handleValueChange} min={6} />
      );

      const minusButton = screen.getByTestId('input-quantity-minus');
      expect(minusButton).toBeDisabled();

      userEvent.click(minusButton);
      expect(handleValueChange).not.toHaveBeenCalled();
    });

    it('should disable plus button when value is greater than max', () => {
      const handleValueChange = jest.fn();

      render(
        <Input dataTestId="input" value="12" type={InputType.Quantity} onValueChange={handleValueChange} max={10} />
      );

      const plusButton = screen.getByTestId('input-quantity-plus');
      expect(plusButton).toBeDisabled();

      userEvent.click(plusButton);
      expect(handleValueChange).not.toHaveBeenCalled();
    });

    it('should modify the value to the min value passed if value is lower than min', () => {
      const minValue = 6;
      const handleOnChange = jest.fn();

      const InputComponent = () => {
        const [value, setValue] = useState('8');
        const handleValueChange = (newValue: string) => {
          setValue(newValue);
          handleOnChange(newValue);
        };

        return (
          <Input
            dataTestId="input"
            value={value}
            type={InputType.Quantity}
            onValueChange={handleValueChange}
            min={minValue}
          />
        );
      };

      render(<InputComponent />);

      const input = screen.getByTestId('input');

      userEvent.clear(input);
      userEvent.type(input, '4');

      expect(handleOnChange).toHaveBeenCalledTimes(2);
      expect(input).toHaveValue(minValue);
    });

    it('should modify the value to the max value passed if value is higher than max', () => {
      const maxValue = 12;
      const handleOnChange = jest.fn();

      const InputComponent = () => {
        const [value, setValue] = useState('10');
        const handleValueChange = (newValue: string) => {
          setValue(newValue);
          handleOnChange(newValue);
        };

        return (
          <Input
            dataTestId="input"
            value={value}
            type={InputType.Quantity}
            onValueChange={handleValueChange}
            max={maxValue}
          />
        );
      };

      render(<InputComponent />);

      const input = screen.getByTestId('input');

      userEvent.clear(input);
      userEvent.type(input, '16');

      expect(handleOnChange).toHaveBeenCalledTimes(3);
      expect(input).toHaveValue(maxValue);
    });

    it('should have the left input button disabled', () => {
      const onClickLeftInputButton = jest.fn();

      render(
        <Input
          dataTestId="input"
          value="value"
          onValueChange={onValueChange}
          onClickLeftInputButton={onClickLeftInputButton}
          type={InputType.Quantity}
          disableLeftButton
        />
      );

      const minusButton = screen.getByTestId('input-quantity-minus');
      userEvent.click(minusButton);
      expect(onClickLeftInputButton).toHaveBeenCalledTimes(0);
    });

    it('should have the right input button disabled', () => {
      const onClickRightInputButton = jest.fn();

      render(
        <Input
          dataTestId="input"
          value="value"
          onValueChange={onValueChange}
          onClickRightInputButton={onClickRightInputButton}
          type={InputType.Quantity}
          disableRightButton
        />
      );

      const plusButton = screen.getByTestId('input-quantity-plus');
      userEvent.click(plusButton);
      expect(onClickRightInputButton).toHaveBeenCalledTimes(0);
    });

    it('should have the quantity input button disabled', () => {
      render(<ControlledInput disableQuantityInput type={InputType.Quantity} value="" onValueChange={onValueChange} />);

      const input = screen.getByTestId('input');

      userEvent.type(input, '16', { skipClick: true });

      expect(onValueChange).not.toHaveBeenCalled();
      expect(input).toHaveValue(null);
    });
  });

  describe(`Input type: ${InputType.Text}`, () => {
    it('should update character counter when typing', () => {
      render(<ControlledInput value="" type={InputType.Text} showCharacterCounter />);

      expect(screen.getByTestId('input-character-counter')).toHaveTextContent('0');

      const input = screen.getByLabelText('Input label');
      const text = 'long text';

      userEvent.type(input, text);

      expect(screen.getByTestId('input-character-counter')).toHaveTextContent(text.length.toString());
    });

    it('should update counter if component receives initial value', () => {
      const initialValue = 'some long text';
      render(<ControlledInput value={initialValue} type={InputType.Text} showCharacterCounter />);

      expect(screen.getByTestId('input-character-counter')).toHaveTextContent(initialValue.length.toString());

      const input = screen.getByLabelText('Input label');
      const text = 'more text';
      const totalCount = initialValue.length + text.length;

      userEvent.type(input, text);

      expect(screen.getByTestId('input-character-counter')).toHaveTextContent(totalCount.toString());
    });

    it('should not allow typing more than the maxLength when provided', () => {
      const maxLength = 10;

      render(<ControlledInput value="" type={InputType.Text} maxLength={maxLength} showCharacterCounter />);

      const input = screen.getByLabelText('Input label');
      const expectedText = 'A'.repeat(maxLength);
      const largerText = expectedText + expectedText;

      userEvent.type(input, largerText);

      expect(input).toHaveValue(expectedText);
      expect(screen.getByTestId('input-character-counter')).toHaveTextContent('0');
    });
  });
});

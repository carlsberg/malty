import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Input } from './Input';
import { InputType } from './Input.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('input', () => {
  it('renders elements', () => {
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

  it('calls onValueChange when typing', () => {
    const onValueChange = jest.fn();
    const { rerender } = render(
      <Input value="Initial value" label="Input label" onValueChange={onValueChange} type={InputType.Text} />
    );
    const input = screen.getByDisplayValue('Initial value');
    fireEvent.input(input, { target: { value: 'Test Input' } });
    expect(onValueChange).toHaveBeenCalledTimes(1);

    rerender(<Input value="Test" label="Input label" onValueChange={onValueChange} type={InputType.Text} />);
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
  });

  it('calls onInputBlur when lose focus', () => {
    const onValueChange = jest.fn();
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

  it('renders input number', () => {
    const onValueChange = jest.fn();
    render(<Input value="1" label="Quantity" onValueChange={onValueChange} type={InputType.Number} />);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });

  it('renders input search', () => {
    const onValueChange = jest.fn();
    render(<Input value="test search" label="Search" onValueChange={onValueChange} type={InputType.Search} />);
    expect(screen.getByDisplayValue('test search')).toBeInTheDocument();
  });

  it('calls clear function when clear icon is clicked', () => {
    const onValueChange = jest.fn();
    const onClearButtonClick = jest.fn();
    render(
      <Input
        value="test search"
        label="Search"
        onValueChange={onValueChange}
        type={InputType.Search}
        onClearButtonClick={onClearButtonClick}
      />
    );

    const clearButton = screen.getByTestId(`icon-ItemClose`);
    fireEvent.click(clearButton);
    expect(onClearButtonClick).toHaveBeenCalledTimes(1);
  });

  describe(`Input type: ${InputType.Quantity}`, () => {
    it('disables minus and plus buttons when value is equal to min and max', () => {
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
      const plusButton = screen.getByTestId('input-quantity-minus');

      expect(minusButton).toBeDisabled();
      expect(plusButton).toBeDisabled();

      userEvent.click(minusButton);
      userEvent.click(plusButton);

      expect(handleValueChange).not.toHaveBeenCalled();
    });

    it('disables minus button when value is lower than min', () => {
      const handleValueChange = jest.fn();

      render(
        <Input dataTestId="input" value="2" type={InputType.Quantity} onValueChange={handleValueChange} min={6} />
      );

      const minusButton = screen.getByTestId('input-quantity-minus');
      expect(minusButton).toBeDisabled();

      userEvent.click(minusButton);
      expect(handleValueChange).not.toHaveBeenCalled();
    });

    it('disables plus button when value is greater than max', () => {
      const handleValueChange = jest.fn();

      render(
        <Input dataTestId="input" value="12" type={InputType.Quantity} onValueChange={handleValueChange} max={10} />
      );

      const plusButton = screen.getByTestId('input-quantity-plus');
      expect(plusButton).toBeDisabled();

      userEvent.click(plusButton);
      expect(handleValueChange).not.toHaveBeenCalled();
    });

    it('modifies the value to the min value passed if value is lower than min', () => {
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

    it('modifies the value to the max value passed if value is higher than max', () => {
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
  });
});

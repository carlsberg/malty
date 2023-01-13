import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
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
      <Input
        value="Initial value"
        label="Input label"
        onValueChange={onValueChange}
        type={InputType.Text}
      />
    );
    const input = screen.getByDisplayValue('Initial value');
    fireEvent.input(input, { target: { value: 'Test Input' } });
    expect(onValueChange).toHaveBeenCalledTimes(1);

    rerender(
      <Input value="Test" label="Input label" onValueChange={onValueChange} type={InputType.Text} />
    );
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
    render(
      <Input value="1" label="Quantity" onValueChange={onValueChange} type={InputType.Number} />
    );
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });

  it('renders input search', () => {
    const onValueChange = jest.fn();
    render(
      <Input
        value="test search"
        label="Search"
        onValueChange={onValueChange}
        type={InputType.Search}
      />
    );
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
});

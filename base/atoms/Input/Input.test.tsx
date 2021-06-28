import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from './Input';
import { InputType } from './Input.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('input', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Input value="Value" onValueChange={mockFn} type={InputType.Text} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

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
    userEvent.type(input, 'Test');
    expect(onValueChange).toHaveBeenCalledTimes(4);

    rerender(<Input value="Test" label="Input label" onValueChange={onValueChange} type={InputType.Text} />);
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
  });
});

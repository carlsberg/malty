import { jsonRenderer, render, screen } from '@carlsberg/malty.utils.test';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { CodeInput } from './CodeInput';
import { CodeInputType } from './CodeInput.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('input', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<CodeInput value="Value" onValueChange={mockFn} type={CodeInputType.Text} />);
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(
      <CodeInput
        value="Value text"
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={CodeInputType.Text}
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
      <CodeInput
        value="Initial value"
        label="CodeInput label"
        onValueChange={onValueChange}
        type={CodeInputType.Text}
      />
    );
    const input = screen.getByDisplayValue('Initial value');
    userEvent.type(input, 'Test');
    expect(onValueChange).toHaveBeenCalledTimes(4);

    rerender(
      <CodeInput value="Test" label="CodeInput label" onValueChange={onValueChange} type={CodeInputType.Text} />
    );
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
  });
});

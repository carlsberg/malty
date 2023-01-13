import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { TextArea } from './TextArea';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('textarea', () => {
  it('renders elements', () => {
    render(
      <TextArea
        value="Value text"
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
      />
    );
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Value text')).toBeInTheDocument();
  });

  it('calls onValueChange when typing', () => {
    const onValueChange = jest.fn();
    const { rerender } = render(
      <TextArea value="Initial value" label="textarea label" onValueChange={onValueChange} />
    );
    const textarea = screen.getByDisplayValue('Initial value');
    fireEvent.input(textarea, { target: { value: 'Test' } });
    expect(onValueChange).toHaveBeenCalledTimes(1);

    rerender(<TextArea value="Test" label="textarea label" onValueChange={onValueChange} />);
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
  });
});

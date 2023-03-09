import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { TextArea } from './TextArea';
import { TextAreaProps } from './TextArea.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('textarea', () => {
  it('renders elements', () => {
    render(<TextArea value="Value text" label="Label text" placeholder="Placeholder text" onValueChange={mockFn} />);
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
    const text = 'Test';
    userEvent.type(textarea, text);
    expect(onValueChange).toHaveBeenCalledTimes(text.length);

    rerender(<TextArea value="Test" label="textarea label" onValueChange={onValueChange} />);
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
  });

  it('updates counter when typing', () => {
    const ControlledTextArea = ({ value }: TextAreaProps) => {
      const [stateValue, setStateValue] = useState(value);

      return <TextArea label="Label" value={stateValue} onValueChange={setStateValue} dataTestId="textarea" />;
    };

    render(<TextArea label="Label" onValueChange={mockFn} dataTestId="textarea" />);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent('0');

    const textarea = screen.getByLabelText('Label');
    const text = 'long text';

    userEvent.type(textarea, text);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent(text.length.toString());
  });

  it('updates counter if component receives initial value', async () => {
    const initialValue = 'some long text';

    const ControlledTextArea = () => {
      const [stateValue, setStateValue] = useState(initialValue);

      return <TextArea label="Label" value={stateValue} onValueChange={setStateValue} dataTestId="textarea" />;
    };

    render(<ControlledTextArea />);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent(initialValue.length.toString());

    const textarea = screen.getByLabelText('Label');
    const text = 'more text';
    const totalCount = initialValue.length + text.length;

    userEvent.type(textarea, text);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent(totalCount.toString());
  });
});

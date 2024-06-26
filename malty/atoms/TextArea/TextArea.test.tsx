import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { TextArea } from './TextArea';
import { TextAreaProps } from './TextArea.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const onValueChange = jest.fn();

const ControlledTextArea = ({ value: initialValue, ...props }: Omit<TextAreaProps, 'onValueChange'>) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    onValueChange(newValue);
  };

  return <TextArea {...props} label="Label" value={value} onValueChange={handleValueChange} dataTestId="textarea" />;
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('textarea', () => {
  it('should render elements', () => {
    render(
      <TextArea value="Value text" label="Label text" placeholder="Placeholder text" onValueChange={onValueChange} />
    );

    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Placeholder text')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Value text')).toBeInTheDocument();
  });

  it('should have an error message', () => {
    render(
      <TextArea
        value="Value text"
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={onValueChange}
        dataTestId="Textarea"
        error="Error text"
      />
    );

    expect(screen.getByText('Error text')).toBeVisible();
  });

  it('should have an hint message', () => {
    render(
      <TextArea
        value="Value text"
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={onValueChange}
        dataTestId="Textarea"
        hint="Hint text"
      />
    );

    expect(screen.getByText('Hint text')).toBeVisible();
  });

  it('should be disabled', () => {
    render(
      <TextArea
        value="Value text"
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={onValueChange}
        dataTestId="Textarea"
        disabled
      />
    );

    const textarea = screen.getByTestId('Textarea-input');

    expect(textarea).toBeDisabled();
  });

  it('should be readonly', () => {
    render(
      <TextArea
        value="Value text"
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={onValueChange}
        dataTestId="Textarea"
        readOnly
      />
    );

    const textarea = screen.getByTestId('Textarea');
    const text = 'Test';

    userEvent.type(textarea, text);

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('should call onValueChange when typing', () => {
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

  it('should update counter when typing', () => {
    render(<ControlledTextArea value="" />);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent('0');

    const textarea = screen.getByLabelText('Label');
    const text = 'long text';

    userEvent.type(textarea, text);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent(text.length.toString());
  });

  it('should update counter if component receives initial value', () => {
    const initialValue = 'some long text';

    render(<ControlledTextArea value={initialValue} />);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent(initialValue.length.toString());

    const textarea = screen.getByLabelText('Label');
    const text = 'more text';
    const totalCount = initialValue.length + text.length;

    userEvent.type(textarea, text);

    expect(screen.getByTestId('textarea-counter')).toHaveTextContent(totalCount.toString());
  });

  it('should not allow typing more than the maxLength', async () => {
    const maxLength = 10;

    render(<ControlledTextArea maxLength={maxLength} value="" />);

    const textarea = screen.getByLabelText('Label');
    const expectedText = 'A'.repeat(maxLength);
    const largerText = expectedText + expectedText;

    userEvent.type(textarea, largerText);

    expect(textarea).toHaveValue(expectedText);
    expect(screen.getByTestId('textarea-counter')).toHaveTextContent('0');
  });
});

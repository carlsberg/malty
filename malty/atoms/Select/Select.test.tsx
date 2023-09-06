import { render } from '@carlsberggroup/malty.utils.test';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Select } from './Select';
import { SelectProps, SelectSize, SelectType } from './Select.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();
const testOptions = [
  {
    value: 'value 1',
    name: 'name 1'
  },
  {
    value: 'value 2',
    name: 'name 2'
  },
  {
    value: 'value 3',
    name: 'name 3'
  },
  {
    value: 'value 4',
    name: 'name 4'
  },
  {
    value: 'value 5',
    name: 'name 5'
  }
];

describe('select', () => {
  it('should render elements', () => {
    render(
      <Select
        options={testOptions}
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={SelectType.Default}
        error="Error text"
        hint="Select something"
        size={SelectSize.Medium}
        dataTestId="select"
      />
    );

    const label = screen.getByText('Label text');

    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Placeholder text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(label).not.toHaveAttribute('required');
  });

  it('should render hint correctly', () => {
    render(
      <Select
        options={testOptions}
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={SelectType.Default}
        size={SelectSize.Medium}
        dataTestId="select"
        hint="Select something"
      />
    );
    const hintlabel = screen.getByTestId('select-hint');

    expect(hintlabel).toBeInTheDocument();
    expect(hintlabel).toHaveTextContent('Select something');
  });

  it('should not have options on the DOM when disabled', () => {
    render(
      <Select
        options={testOptions}
        label="select label"
        placeholder="select"
        onValueChange={mockFn}
        type={SelectType.Default}
        size={SelectSize.Medium}
        dataTestId="select"
        disabled
      />
    );

    const selectOption = screen.queryByTestId('select-option-1');

    expect(selectOption).not.toBeInTheDocument();
  });

  it('should not have options on the DOM when readOnly', () => {
    render(
      <Select
        options={testOptions}
        label="select label"
        placeholder="select"
        onValueChange={mockFn}
        type={SelectType.Default}
        size={SelectSize.Medium}
        dataTestId="select"
        readOnly
      />
    );

    const selectOption = screen.queryByTestId('select-option-1');

    expect(selectOption).not.toBeInTheDocument();
  });

  it('should call onValueChange on click', () => {
    render(
      <Select
        options={testOptions}
        label="select label"
        placeholder="select"
        onValueChange={mockFn}
        type={SelectType.Default}
        size={SelectSize.Medium}
        dataTestId="select"
      />
    );

    const select = screen.getByText('select');

    expect(select).toBeVisible();

    userEvent.click(select);

    const selectOption = screen.getByTestId('select-option-1');
    expect(selectOption).toBeVisible();

    userEvent.click(selectOption);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should render inline select', () => {
    render(<Select options={testOptions} label="inline" onValueChange={mockFn} type={SelectType.Inline} />);
    expect(screen.getByText('inline')).toBeInTheDocument();
  });

  it('should update selected option correctly if external value is passed', () => {
    const props: SelectProps = {
      options: testOptions,
      label: 'select label',
      onValueChange: mockFn,
      type: SelectType.Default
    };

    const { rerender } = render(<Select {...props} />);

    let selectedOptionsButtonQueries = within(screen.getByLabelText('select label'));

    expect(selectedOptionsButtonQueries.queryByText(testOptions[0].name)).not.toBeInTheDocument();

    rerender(<Select {...props} value={testOptions.slice(0, 1)} />);

    selectedOptionsButtonQueries = within(screen.getByLabelText('select label'));

    expect(selectedOptionsButtonQueries.getByText(testOptions[0].name)).toBeVisible();

    rerender(<Select {...props} value={[]} />);

    selectedOptionsButtonQueries = within(screen.getByLabelText('select label'));

    expect(selectedOptionsButtonQueries.queryByText(testOptions[0].name)).not.toBeInTheDocument();
  });

  it('should update selected options correctly if external value is passed with multiple enabled', () => {
    const props: SelectProps = {
      options: testOptions,
      label: 'select label',
      onValueChange: mockFn,
      type: SelectType.Default,
      multiple: true
    };

    const { rerender } = render(<Select {...props} />);

    let selectedOptionsButtonQueries = within(screen.getByLabelText('select label'));

    expect(selectedOptionsButtonQueries.queryByText(testOptions[0].name)).not.toBeInTheDocument();

    rerender(<Select {...props} value={testOptions.slice(0, 3)} />);

    selectedOptionsButtonQueries = within(screen.getByLabelText('select label'));

    expect(selectedOptionsButtonQueries.getByText('3 selected')).toBeVisible();

    rerender(
      <Select options={testOptions} label="select label" onValueChange={mockFn} type={SelectType.Default} value={[]} />
    );

    selectedOptionsButtonQueries = within(screen.getByLabelText('select label'));

    expect(selectedOptionsButtonQueries.queryByText(testOptions[0].name)).not.toBeInTheDocument();
  });

  it('should render with a required attribute', () => {
    render(
      <Select
        required
        options={testOptions}
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={SelectType.Default}
      />
    );

    const label = screen.getByText('Label text');

    expect(label).toHaveAttribute('required');
  });

  it('should not render a required attribute to the user when select is inline', () => {
    render(
      <Select
        required
        options={testOptions}
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={SelectType.Inline}
      />
    );

    const label = screen.getByText('Label text');

    expect(label).not.toHaveAttribute('required');
  });

  it('should render the default value if provided', () => {
    render(
      <Select
        options={testOptions}
        defaultValue={[testOptions[1]]}
        label="Input label"
        onValueChange={mockFn}
        type={SelectType.Default}
        size={SelectSize.Medium}
        dataTestId="select"
      />
    );
    const selectedValue = screen.getByTestId('select-selected-values');
    expect(selectedValue.innerHTML).toEqual(testOptions[1].name);
  });
});

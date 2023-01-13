/* eslint-disable react/jsx-props-no-spreading */

import { render } from '@carlsberggroup/malty.utils.test';
import { screen, within } from '@testing-library/react';
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
  it('renders elements', () => {
    render(
      <Select
        options={testOptions}
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={SelectType.Default}
        error="Error text"
        size={SelectSize.Medium}
      />
    );
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Placeholder text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('calls onValueChange on click', () => {
    const onValueChange = jest.fn();
    const { rerender } = render(
      <Select
        options={testOptions}
        label="select label"
        placeholder="select"
        onValueChange={onValueChange}
        type={SelectType.Default}
        size={SelectSize.Medium}
        dataTestId="select"
      />
    );
    const select = screen.getByText('select');
    expect(select).toBeVisible();
    // TODO: Replace with click event
    select.click();
    const selectOption = screen.getByTestId('select-option-1');
    expect(selectOption).toBeVisible();
    // TODO: Replace with click event
    selectOption.click();
    expect(onValueChange).toHaveBeenCalledTimes(1);
    rerender(
      <Select
        options={testOptions}
        defaultValue={[testOptions[1]]}
        label="Input label"
        onValueChange={onValueChange}
        type={SelectType.Default}
        size={SelectSize.Medium}
        dataTestId="select"
      />
    );
    const selectedValue = screen.getByTestId('select-selected-values');
    expect(selectedValue.innerHTML).toEqual(testOptions[1].name);
  });

  it('renders inline select', () => {
    const onValueChange = jest.fn();
    render(<Select options={testOptions} label="inline" onValueChange={onValueChange} type={SelectType.Inline} />);
    expect(screen.getByText('inline')).toBeInTheDocument();
  });

  it('updates selected option correctly if external value is passed', () => {
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

  it('updates selected options correctly if external value is passed with multiple enabled', () => {
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
});

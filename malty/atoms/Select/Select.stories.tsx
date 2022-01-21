import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Select } from './Select';
import { OptionsType, SelectProps, SelectType, SizeTypes } from './Select.types';

export default {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    importObject: 'Select',
    importPath: '@carlsberggroup/malty.atoms.select'
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    size: {
      options: Object.values(SizeTypes),
      control: {
        type: 'radio'
      }
    },
    type: {
      options: Object.values(SelectType),
      control: {
        type: 'select'
      }
    },
    disabled: { control: 'boolean' },
    value: {
      table: {
        disable: true
      }
    },
    onValueChange: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SelectProps> = ({
  options,
  initialValue,
  size,
  label,
  type,
  error,
  disabled,
  placeholder
}: SelectProps) => {
  const [stateValue, setStateValue] = useState(initialValue);
  return (
    <Select
      options={options}
      size={size}
      label={label}
      type={type}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      initialValue={stateValue}
      onChange={(newOption: OptionsType) => setStateValue(newOption)}
    />
  );
};

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

export const Main = Template.bind({});
Main.args = {
  options: testOptions,
  size: SizeTypes.Medium,
  label: 'Label',
  type: SelectType.Dropdown,
  error: 'Error text',
  disabled: false,
  placeholder: 'Placeholder'
};

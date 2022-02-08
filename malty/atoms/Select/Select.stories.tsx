import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Select } from './Select';
import { SelectProps, SelectType, SizeTypes } from './Select.types';

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
    success: { control: 'text' },
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
    multiple: { control: 'boolean' },
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
  placeholder,
  multiple,
  success
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
      onChange={(newOption: any) => setStateValue(newOption)}
      multiple={multiple}
      success={success}
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
const initialValues = [
  {
    value: 'value 1',
    name: 'name 1'
  }
];

export const Main = Template.bind({});
Main.args = {
  options: testOptions,
  size: SizeTypes.Medium,
  label: 'Label',
  type: SelectType.Country,
  error: 'Error text',
  success: 'Success text',

  disabled: false,
  placeholder: 'Placeholder',
  multiple: false,
  initialValue: [testOptions[0], testOptions[1]]
};

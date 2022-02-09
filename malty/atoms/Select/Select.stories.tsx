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
    label: {
      description: 'Label for the Select component',
      control: 'text'
    },
    placeholder: {
      description: 'Placeholder text to go inside the Select field, when empty.',
      control: 'text'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    success: {
      description: 'success message to be displayed',
      control: 'text'
    },
    size: {
      description: 'Select component size.',
      options: Object.values(SizeTypes),
      control: {
        type: 'radio'
      }
    },
    type: {
      description: 'Type of select component',
      options: Object.values(SelectType),
      control: {
        type: 'select'
      }
    },
    disabled: {
      description: 'Select state, when disabled it is read-only.',
      control: 'boolean'
    },
    defaultValue: {
      description: 'Initial selected option'
    },
    options: {
      description: 'Select options.'
    },
    multiple: {
      description: 'Select state, when active allows for multi selection',
      control: 'boolean'
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
  defaultValue,
  size,
  label,
  type,
  error,
  disabled,
  placeholder,
  multiple,
  success
}: SelectProps) => {
  const [stateValue, setStateValue] = useState(defaultValue);
  return (
    <Select
      options={options}
      size={size}
      label={label}
      type={type}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      defaultValue={stateValue}
      onValueChange={(newOption: any) => setStateValue(newOption)}
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

export const Main = Template.bind({});
Main.args = {
  options: testOptions,
  size: SizeTypes.Medium,
  label: 'Label',
  type: SelectType.Default,
  error: 'Error text',
  success: 'Success text',

  disabled: false,
  placeholder: 'Placeholder',
  multiple: false,
  defaultValue: [testOptions[0]]
};

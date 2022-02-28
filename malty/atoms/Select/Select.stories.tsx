import { Icon } from '@carlsberggroup/malty.atoms.icon';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { IconName } from '@carlsberggroup/malty.atoms.icon/Icon.types';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Select as SelectComponent } from './Select';
import { SelectOptionsType, SelectProps, SelectSize, SelectType } from './Select.types';

export default {
  title: 'Forms/Select',
  component: SelectComponent,
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
      options: Object.values(SelectSize),
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
    selectionText: {
      description: 'Text to display when multiple options are selected. Ex. 3 "options selected" ',
      control: 'text'
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
  success,
  selectionText
}: SelectProps) => (
  <SelectComponent
    options={options}
    size={size}
    label={label}
    type={type}
    error={error}
    disabled={disabled}
    placeholder={placeholder}
    defaultValue={defaultValue}
    onValueChange={() => null}
    multiple={multiple}
    success={success}
    selectionText={selectionText}
  />
);

const testOptions: SelectOptionsType[] = [
  {
    value: 'value 1',
    name: 'name 1',
    icon: <Icon color={IconColor.Primary} name={IconName.AddContent} onClick={() => null} size={IconSize.Medium} />
  },
  {
    value: 'value 2',
    name: 'name 2',
    icon: <Icon color={IconColor.Primary} name={IconName.AddContent} onClick={() => null} size={IconSize.Medium} />
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

export const Select = Template.bind({});
Select.args = {
  options: testOptions,
  size: SelectSize.Medium,
  label: 'Label',
  type: SelectType.Default,
  error: 'Error text',
  success: 'Success text',
  disabled: false,
  placeholder: 'Placeholder',
  multiple: false,
  defaultValue: [testOptions[0]],
  selectionText: 'options selected'
};

import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from './Input';
import { IconPosition, InputProps, InputType, MaskTypes, SizeTypes } from './Input.types';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    size: {
      options: Object.values(SizeTypes),
      control: {
        type: 'radio'
      }
    },
    type: {
      options: Object.values(InputType),
      control: {
        type: 'select'
      }
    },
    icon: {
      options: Object.values(IconNamesTypes),
      control: {
        type: 'select'
      }
    },
    disabled: { control: 'boolean' },
    iconPosition: {
      options: Object.values(IconPosition),
      control: {
        type: 'radio'
      }
    },
    clearable: { control: 'boolean' },
    mask: {
      options: Object.values(MaskTypes),
      control: {
        type: 'select'
      }
    },
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

const Template: Story<InputProps> = ({
  value,
  size,
  label,
  type,
  icon,
  placeholder,
  error,
  disabled,
  iconPosition,
  clearable,
  mask
}: InputProps) => {
  const [stateValue, setStateValue] = useState(value);
  return (
    <Input
      size={size}
      label={label}
      type={type}
      icon={icon}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
      value={stateValue}
      iconPosition={iconPosition}
      clearable={clearable}
      mask={mask}
      onValueChange={(newValue: string) => setStateValue(newValue)}
    />
  );
};

export const Main = Template.bind({});
Main.args = {
  size: SizeTypes.Medium,
  label: 'Label',
  type: InputType.Text,
  icon: IconNamesTypes.Search,
  placeholder: 'Placeholder',
  error: '',
  disabled: false,
  iconPosition: IconPosition.Left,
  clearable: false
};

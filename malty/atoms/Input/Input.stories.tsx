import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from './Input';
import { InputProps, InputType, SizeTypes } from './Input.types';

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
    isDisabled: { control: 'boolean' },
    isIconLeft: { control: 'boolean' },
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
  isDisabled,
  isIconLeft
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
      isDisabled={!!isDisabled}
      value={stateValue}
      isIconLeft={isIconLeft}
      onValueChange={(newValue: string) => setStateValue(newValue)}
    />
  );
};

export const Main = Template.bind({});
Main.args = {
  size: SizeTypes.Large,
  label: 'Label',
  type: InputType.Text,
  icon: IconNamesTypes.Search,
  placeholder: 'Placeholder',
  error: 'Error text',
  isDisabled: false,
  isIconLeft: false
};

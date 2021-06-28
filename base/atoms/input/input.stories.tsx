import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { NamesTypes } from '../icon/icon.types';
import { Input } from './input';
import { InputProps, InputType, SizeTypes } from './input.types';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    value: {
      control: {
        disable: true
      }
    },
    size: {
      options: SizeTypes,
      control: {
        type: 'radio'
      }
    },
    type: {
      options: InputType,
      control: {
        type: 'select'
      }
    },
    icon: {
      options: NamesTypes,
      control: {
        type: 'select'
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
  icon: NamesTypes.Search,
  placeholder: 'Placeholder',
  error: 'Error text',
  isDisabled: false,
  isIconLeft: false
};

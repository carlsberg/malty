import { IconNamesTypes } from '@carlsberg/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { CodeInput } from './CodeInput';
import { CodeInputProps, CodeInputType, SizeTypes } from './CodeInput.types';

export default {
  title: 'Molecules/CodeInput',
  component: CodeInput,
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
      options: Object.values(CodeInputType),
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

const Template: Story<CodeInputProps> = ({
  value,
  size,
  label,
  type,
  icon,
  placeholder,
  error,
  isDisabled,
  isIconLeft
}: CodeInputProps) => {
  const [stateValue, setStateValue] = useState(value);
  return (
    <CodeInput
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
  type: CodeInputType.Text,
  icon: IconNamesTypes.Search,
  placeholder: 'Placeholder',
  error: 'Error text',
  isDisabled: false,
  isIconLeft: false
};

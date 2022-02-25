import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea as TextAreaComponent } from './TextArea';
import { TextAreaProps } from './TextArea.types';

export default {
  title: 'Atoms/Text Area',
  component: TextAreaComponent,
  parameters: {
    importObject: 'TextArea',
    importPath: '@carlsberggroup/malty.atoms.text-area'
  },
  argTypes: {
    label: {
      description: 'Label for the input, goes above.',
      control: 'text'
    },
    placeholder: {
      description: 'Placeholder text to go inside the input field, when empty.',
      control: 'text'
    },
    resize: {
      control: 'boolean',
      description: 'Textarea state, resizable textarea'
    },
    disabled: {
      control: 'boolean',
      description: 'Textarea state, when disabled it is read-only.'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    maxLength: {
      description: 'Maxium characters of textarea ',
      control: 'number'
    },

    value: {
      description: 'Default value of textarea',
      control: 'text'
    },
    onValueChange: {
      description: 'Function to be executed when textarea state changes'
    }
  }
} as Meta;

const Template: Story<TextAreaProps> = ({
  label,
  placeholder,
  resize,
  disabled,
  value,
  error,
  maxLength
}: TextAreaProps) => {
  const [stateValue, setStateValue] = useState(value);
  return (
    <TextAreaComponent
      maxLength={maxLength}
      label={label}
      placeholder={placeholder}
      resize={resize}
      disabled={disabled}
      value={stateValue}
      onValueChange={(newValue: string) => setStateValue(newValue)}
      error={error}
    />
  );
};

export const TextArea = Template.bind({});
TextArea.args = {
  label: 'Label',
  maxLength: 20,
  resize: false,
  placeholder: 'Placeholder',
  disabled: false,
  error: 'Error text',
  value: ''
};

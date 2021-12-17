import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from './TextArea';
import { TextAreaProps } from './TextArea.types';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    importObject: 'TextArea',
    importPath: '@carlsberggroup/malty.atoms.TextArea'
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
      description: 'Textarea  state, resizable textarea'
    },
    disabled: {
      control: 'boolean',
      description: 'Input state, when disabled it is read-only.'
    }
  }
} as Meta;

const Template: Story<TextAreaProps> = ({ label, placeholder, resize, disabled, value }: TextAreaProps) => {
  const [stateValue, setStateValue] = useState(value);
  return (
    <TextArea
      label={label}
      placeholder={placeholder}
      resize={resize}
      disabled={disabled}
      value={stateValue}
      onValueChange={(newValue: string) => setStateValue(newValue)}
    />
  );
};

export const Main = Template.bind({});
Main.args = {
  label: 'Label',
  resize: false,
  placeholder: 'Placeholder',
  disabled: false
};

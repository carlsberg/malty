import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea as TextAreaComponent } from './TextArea';
import { TextAreaProps } from './TextArea.types';

export default {
  title: 'Forms/Text Area',
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
      description: 'Textarea state, disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Textarea state, readOnly'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    hint: {
      description: 'helper message to be displayed',
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
    },
    dataTestId: {
      control: 'text',
      description: 'select data-testid'
    },
    required: {
      control: 'boolean',
      description: 'Makes the textarea input required to fill'
    }
  }
} as Meta;

const Template: Story<TextAreaProps> = ({ value, onValueChange, ...args }) => {
  const [stateValue, setStateValue] = useState(value);
  return (
    <TextAreaComponent value={stateValue} onValueChange={(newValue: string) => setStateValue(newValue)} {...args} />
  );
};

export const TextArea = Template.bind({});

const params = new URLSearchParams(window.location.search);
const error = params.get('error');
const resizable = params.get('resizable');

TextArea.args = {
  label: 'Label',
  maxLength: 20,
  resize: !!resizable,
  placeholder: 'Placeholder',
  disabled: false,
  error: error ? 'Error text' : '',
  value: '',
  hint: 'hint text',
  readOnly: false,
  dataTestId: 'Textarea',
  required: false
};

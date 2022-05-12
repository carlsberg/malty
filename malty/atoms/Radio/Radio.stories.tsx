import { Story } from '@storybook/react';
import React from 'react';
import { RadioProps } from '.';
import { Radio as RadioComponent } from './Radio';

export default {
  title: 'Forms/Radio',
  component: RadioComponent,
  parameters: {
    importObject: 'Radio',
    importPath: '@carlsberggroup/malty.atoms.radio'
  },
  argTypes: {
    label: {
      description: 'label text radio',
      control: 'text'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    value: {
      description: 'Value of Radio component',
      control: 'text'
    },

    selected: {
      description: 'If Radio component is selected or not',
      control: 'boolean'
    },
    disabled: {
      control: 'boolean',
      description: 'Input state, when disabled it is read-only.'
    },
    name: {
      description: 'Name attribute of the radio element.'
    },
    onValueChange: {
      description: 'Function to be executed when radio state changes'
    }
  }
};
const Template: Story<RadioProps> = ({ value, label, selected, onValueChange, name, error, disabled }) => (
  <>
    <RadioComponent
      id={value.toString()}
      value={value}
      label={label}
      selected={selected}
      onValueChange={onValueChange}
      name={name}
      error={error}
      disabled={disabled}
    />
  </>
);
export const Radio = Template.bind({});
Radio.args = {
  label: 'Option 1',
  name: 'radioOptions',
  value: 'Option 1',
  selected: true,
  disabled: false
};

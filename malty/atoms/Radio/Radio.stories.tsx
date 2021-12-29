import { Story } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';
import { RadioProps } from './Radio.types';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    importObject: 'Radio',
    importPath: '@carlsberggroup/malty.atoms.Radio'
  },
  argTypes: {
    labelText: {
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
const Template: Story<RadioProps> = ({ value, labelText, selected, onValueChange, name, error, disabled }) => (
  <>
    <Radio
      id={value.toString()}
      value={value}
      labelText={labelText}
      selected={selected}
      onValueChange={onValueChange}
      name={name}
      error={error}
      disabled={disabled}
    />
  </>
);
export const Main = Template.bind({});
Main.args = {
  labelText: 'Option 1',
  name: 'radioOptions',
  value: 'Option 1',
  selected: true,
  disabled: false
};

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
    onValueChange: {
      table: {
        disable: true
      }
    }
  }
};
const Template: Story<RadioProps> = ({ value, labelText, selected, onValueChange, name, error }) => (
  <>
    <Radio
      value={value}
      labelText={labelText}
      selected={selected}
      onValueChange={onValueChange}
      name={name}
      error={error}
    />
  </>
);
export const Main = Template.bind({});
Main.args = {
  labelText: 'Option 1',
  name: 'radioOptions',
  value: 'Option 1',
  error: 'Error text',
  selected: true
};

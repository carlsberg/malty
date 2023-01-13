import { Story } from '@storybook/react';
import React from 'react';
import { RadioProps } from '.';
import { Radio as RadioComponent } from './Radio';

export default {
  title: 'Forms/Radio',
  component: RadioComponent,
  parameters: {
    importObject: 'Radio',
    importPath: '@carlsberggroup/malty.atoms.radio',
    variants: ['disabled'],
  },
  argTypes: {
    label: {
      description: 'label text radio',
      control: 'text',
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text',
    },
    value: {
      description: 'Value of Radio component',
      control: 'text',
    },

    selected: {
      description: 'If Radio component is selected or not',
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
      description: 'Input state, when disabled it is read-only.',
    },
    name: {
      description: 'Name attribute of the radio element.',
    },
    required: {
      control: 'boolean',
      description: 'Makes the radio input required to fill',
    },
    onValueChange: {
      description: 'Function to be executed when radio state changes',
    },
  },
};
const Template: Story<RadioProps> = ({
  value,
  label,
  selected,
  onValueChange,
  name,
  error,
  disabled,
  required,
}) => (
  <RadioComponent
    id={value.toString()}
    value={value}
    label={label}
    selected={selected}
    onValueChange={onValueChange}
    name={name}
    error={error}
    disabled={disabled}
    required={required}
  />
);
export const Radio = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'disabled':
    Radio.args = {
      label: 'Option 1',
      name: 'radioOptions',
      value: 'Option 1',
      selected: true,
      disabled: true,
      required: false,
    };
    break;
  default:
    Radio.args = {
      label: 'Option 1',
      name: 'radioOptions',
      value: 'Option 1',
      selected: true,
      disabled: false,
      required: false,
    };
    break;
}

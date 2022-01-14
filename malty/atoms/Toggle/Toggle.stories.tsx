import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Toggle as ToggleComponent } from './Toggle';
import { ToggleProps } from './Toggle.types';

export default {
  title: 'Atoms/Toggle',
  component: ToggleComponent,
  parameters: {
    importObject: 'Toggle',
    importPath: '@carlsberggroup/malty.atoms.toggle'
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Progress indeicating text'
    },
    checked: {
      control: 'boolean',
      description: 'If toggle is checked or not'
    },
    disabled: {
      control: 'boolean',
      description: 'Toggle state, when disabled it is read-only.'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    onValueChange: {
      description: 'Function to be executed when toggle state changes'
    }
  }
} as Meta;
const Template: Story<ToggleProps> = ({ label, checked, onValueChange, disabled, error }: ToggleProps) => (
  <ToggleComponent disabled={disabled} checked={checked} label={label} onValueChange={onValueChange} error={error} />
);

export const Toggle = Template.bind({});
Toggle.args = {
  label: 'toggle label',
  checked: false,
  disabled: false,
  error: ''
};

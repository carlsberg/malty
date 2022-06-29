import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Toggle as ToggleComponent } from './Toggle';
import { ToggleProps } from './Toggle.types';

export default {
  title: 'Forms/Toggle',
  component: ToggleComponent,
  parameters: {
    importObject: 'Toggle',
    importPath: '@carlsberggroup/malty.atoms.toggle',
    variants: ['disabled']
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Progress indicating text'
    },
    checked: {
      control: 'none',
      description: 'If toggle is on (checked) or off (unchecked)'
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
const Template: Story<ToggleProps> = ({ label, disabled, error }: ToggleProps) => {
  const [stateChecked, setStateChecked] = useState(true);
  return (
    <ToggleComponent
      disabled={disabled}
      checked={stateChecked}
      label={label}
      onValueChange={(value) => setStateChecked(value)}
      error={error}
    />
  );
};
export const Toggle = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'disabled':
    Toggle.args = {
      label: 'toggle label',
      disabled: true,
      error: ''
    };
    break;
  default:
    Toggle.args = {
      label: 'toggle label',
      disabled: false,
      error: ''
    };
    break;
}

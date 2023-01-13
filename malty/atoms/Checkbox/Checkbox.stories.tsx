/* eslint-disable react/destructuring-assignment */
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox as CheckboxComponent } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Forms/Checkbox',
  component: CheckboxComponent,
  parameters: {
    importObject: 'Checkbox',
    importPath: '@carlsberggroup/malty.atoms.checkbox',
    variants: ['undetermined', 'checked', 'unchecked'],
  },
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
      description: 'This is the value to be passed',
    },
    labelText: {
      control: {
        type: 'text',
      },
      description: 'This is the label for the checkbox',
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox required to fill',
    },
    isIndeterminate: {
      control: 'boolean',
      description: 'Makes the checkbox Indeterminate',
    },
    error: {
      control: {
        type: 'text',
      },
      description: 'Error message below',
    },
    checked: {
      control: 'boolean',
      description: 'Checked `true` or `false`.',
    },
    onValueChange: {
      description: 'Function to be executed when checkbox state changes',
    },
  },
};

const Template: Story<CheckboxProps> = (args) => {
  const [stateChecked, setStateChecked] = useState(args.checked);
  return (
    <CheckboxComponent
      {...args}
      onValueChange={() => setStateChecked(!stateChecked)}
      checked={stateChecked}
    />
  );
};

export const Checkbox = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'undetermined':
    Checkbox.args = {
      value: 'Undetermined',
      labelText: 'Undetermined label',
      error: '',
      required: false,
      isIndeterminate: true,
    };
    break;

  case 'unchecked':
    Checkbox.args = {
      value: 'Unchecked',
      labelText: 'Unchecked label',
      error: '',
      checked: false,
      required: false,
    };
    break;

  default:
    Checkbox.args = {
      value: 'Checked',
      labelText: 'Checked label',
      error: '',
      checked: true,
      required: false,
    };
    break;
}

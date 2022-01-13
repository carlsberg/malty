import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox as CheckboxComponent } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
  parameters: {
    importObject: 'Checkbox',
    importPath: '@carlsberggroup/malty.atoms.checkbox'
  },
  argTypes: {
    value: {
      control: {
        type: 'text'
      },
      description: 'This is the value to be passed'
    },
    labelText: {
      control: {
        type: 'text'
      },
      description: 'This is the label for the checkbox'
    },
    error: {
      control: {
        type: 'text'
      },
      description: 'Error message below'
    },
    checked: {
      control: 'select',
      options: [true, false, undefined],
      description: 'Checked `true` or `false`, when mixed nested checkboxed, value is `undefined`'
    },
    onValueChange: {
      description: 'Function to be executed when checkbox state changes'
    }
  }
};

const Template: Story<CheckboxProps> = (args) => {
  const [stateChecked, setStateChecked] = useState(true);
  return <CheckboxComponent {...args} onValueChange={() => setStateChecked(!stateChecked)} />;
};

export const Checkbox = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'undetermined':
    Checkbox.args = {
      value: 'Undetermined',
      labelText: 'Undetermined label',
      error: 'Error text'
    };
    break;

  case 'unchecked':
    Checkbox.args = {
      value: 'Unchecked',
      labelText: 'Unchecked label',
      error: 'Error text',
      checked: false
    };
    break;

  default:
    Checkbox.args = {
      value: 'Checked',
      labelText: 'Checked label',
      error: 'Error text',
      checked: true
    };
    break;
}

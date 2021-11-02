import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
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
  return <Checkbox {...args} onValueChange={() => setStateChecked(!stateChecked)} />;
};

export const Checked = Template.bind({});
Checked.args = {
  value: 'Checked',
  labelText: 'Checked label',
  error: 'Error text',
  checked: true
};

export const Undetermined = Template.bind({});
Undetermined.args = {
  value: 'Undetermined',
  labelText: 'Undetermined label',
  error: 'Error text'
};

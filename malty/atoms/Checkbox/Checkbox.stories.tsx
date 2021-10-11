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
      }
    },
    labelText: {
      control: {
        type: 'text'
      }
    },
    error: {
      control: {
        type: 'text'
      }
    },
    checked: {
      control: 'boolean'
    },
    onValueChange: {
      table: {
        disable: true
      }
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

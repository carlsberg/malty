import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
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
      table: {
        disable: true
      }
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
  return <Checkbox {...args} checked={stateChecked} onValueChange={() => setStateChecked(!stateChecked)} />;
};

export const Main = Template.bind({});
Main.args = {
  value: 'Test value',
  labelText: 'Label text',
  error: 'Error text'
};

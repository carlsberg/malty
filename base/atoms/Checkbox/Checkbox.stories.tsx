import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {}
};

const Template: Story<CheckboxProps> = ({ value }: CheckboxProps) => {
  const [stateChecked, setStateChecked] = useState(true);
  return (
    <Checkbox
      value={value}
      labelText="Label text"
      checked={stateChecked}
      error="Error text"
      onValueChange={() => setStateChecked(!stateChecked)}
    />
  );
};

export const Main = Template.bind({});
Main.args = {
  value: 'Test value'
};

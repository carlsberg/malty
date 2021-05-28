import { Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from './button';
import { Size, Type } from './button.types';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  buttonType: Type.Floater
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: Size.Large,
  text: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: Size.Small,
  text: 'Button'
};

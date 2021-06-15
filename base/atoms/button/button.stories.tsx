import { Story } from '@storybook/react';
import React from 'react';
import { NamesTypes } from '../icon/icon.types';
import { Button } from './button';
import { ButtonInterface, ButtonType, SizeTypes } from './button.types';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    inverseColor: { control: 'boolean' },
    // loading: { control: 'boolean' },
    // error: { control: 'boolean' },
    // success: { control: 'boolean' },
    buttonType: {
      options: ButtonType,
      control: {
        type: 'radio'
      }
    },
    size: {
      options: SizeTypes,
      description: 'Size options are',
      table: {
        defaultValue: {
          summary: 'Medium'
        }
      },
      control: {
        type: 'radio'
      }
    }
  }
};

const Template: Story<ButtonInterface> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
  buttonType: ButtonType.Primary,
  inverseColor: false,
  disabled: false,
  size: SizeTypes.Medium
  // loading: false,
  // error: false,
  // success: false
};

export const Secondary = Template.bind({});
Secondary.parameters = {
  backgrounds: { default: 'gray' }
};
Secondary.args = {
  buttonType: ButtonType.Secondary,
  inverseColor: false,
  disabled: false,
  text: 'Secondary',
  icon: NamesTypes.ArrowSmallUp,
  size: SizeTypes.Medium
  // loading: false,
  // error: false,
  // success: false
};

export const Floater = Template.bind({});
Floater.args = {
  buttonType: ButtonType.Floater,
  inverseColor: false,
  disabled: false,
  icon: NamesTypes.Close,
  size: SizeTypes.Medium
  // loading: false,
  // error: false,
  // success: false
};

export const Link = Template.bind({});
Link.parameters = {
  backgrounds: { default: 'gray' }
};
Link.args = {
  buttonType: ButtonType.Link,
  inverseColor: false,
  disabled: false,
  text: 'Link text',
  icon: NamesTypes.ArrowSmallUp,
  size: SizeTypes.Medium
  // loading: false,
  // error: false,
  // success: false
};

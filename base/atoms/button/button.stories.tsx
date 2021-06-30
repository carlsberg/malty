import { Story } from '@storybook/react';
import React from 'react';
import { NamesTypes } from '../Icon/Icon.types';
import { Button } from './Button';
import { ButtonInterface, ButtonType, SizeTypes } from './Button.types';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    buttonType: {
      options: Object.values(ButtonType),
      control: {
        type: 'radio'
      }
    },
    icon: {
      options: Object.values(NamesTypes),
      description: 'Name options listed below',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    size: {
      options: Object.values(SizeTypes),
      description: 'Size options are',
      table: {
        defaultValue: {
          summary: 'Medium'
        }
      },
      control: {
        type: 'radio'
      }
    },
    isWhite: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    },
    success: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
};

const Template: Story<ButtonInterface> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.Primary,
  isWhite: false,
  disabled: false,
  text: 'Primary',
  size: SizeTypes.Medium
  // loading: false,
  // error: false,
  // success: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonType.Secondary,
  isWhite: false,
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
  isWhite: false,
  disabled: false,
  icon: NamesTypes.Close,
  size: SizeTypes.Medium
  // loading: false,
  // error: false,
  // success: false
};

export const Link = Template.bind({});
Link.args = {
  buttonType: ButtonType.Link,
  isWhite: false,
  disabled: false,
  text: 'Link text',
  icon: NamesTypes.ArrowSmallUp,
  size: SizeTypes.Medium
  // loading: false,
  // error: false,
  // success: false
};

import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { ButtonProps, ButtonType, SizeTypes } from '.';
import { Button } from './Button';

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
      options: Object.values(IconNamesTypes),
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
    isFullWidth: { control: 'boolean' },
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.Primary,
  text: 'Primary',
  size: SizeTypes.Medium,
  loading: false,
  error: false,
  success: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonType.Secondary,
  text: 'Secondary',
  size: SizeTypes.Medium,
  loading: false,
  error: false,
  success: false
};

export const Floater = Template.bind({});
Floater.args = {
  buttonType: ButtonType.Floater,
  icon: IconNamesTypes.ArrowSmallUp,
  size: SizeTypes.Medium,
  loading: false,
  error: false,
  success: false
};

export const Link = Template.bind({});
Link.args = {
  buttonType: ButtonType.Link,
  text: 'Link text',
  size: SizeTypes.Medium,
  loading: false,
  error: false,
  success: false
};
